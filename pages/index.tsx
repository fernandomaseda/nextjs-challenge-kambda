import {
  Box,
  Text,
  Card,
  EmptyState,
  Loader,
  ListMenu,
  ItemMenu,
  Count,
  Search,
} from '@components';
import React, { useState, ChangeEvent, useMemo, useCallback, useEffect } from 'react';
import { GeneralLayout } from '@layout';
import { useArtworksQuery, useArtworkDetailsQuery } from '@services/artworks';
import Modal from '@components/Modal';
import Image from 'next/image';
import Theme from '@config/theme';

export type stateType = {
  search: string; // search input
  origin: string | null; // place_of_origin selected from category
  selectedId: string | null; // id selected from card list to view detail (open modal)
  limit: number;
  page: number;
};

const Home = () => {
  const initialState = {
    search: '',
    origin: null,
    selectedId: null,
    limit: 50,
    page: 1,
  };

  const [state, setState] = useState<stateType>(initialState);

  const { search, selectedId, origin, limit, page } = state;

  const fields = 'id,title,place_of_origin,description,thumbnail,artist_title';

  const {
    data: listData,
    isLoading: listLoading,
    isError: listError,
    refetch: listRefetch, //not using q param, I filter by my own.
  } = useArtworksQuery({ q: '', page: String(page), limit: String(limit), fields });
  const {
    data: detailData,
    isLoading: detailLoading,
    isError: detailError,
    refetch: detailRefetch,
  } = useArtworkDetailsQuery(selectedId);

  const filteredListData = useMemo(() => {
    return (
      listData?.data?.filter((item) => {
        let originFilter = item?.place_of_origin === origin;
        let searchFilter = item?.title?.toLowerCase().includes(search.toLowerCase());

        if (origin && search) {
          return originFilter && searchFilter;
        }
        if (origin) {
          return originFilter;
        }
        if (search) {
          return searchFilter;
        }
        return true;
      }) || []
    );
  }, [listData?.data, origin, search]);

  const handleOriginChange = useCallback(
    (id: string | null) => {
      if (id === origin) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setState((prevState) => ({
        ...prevState,
        origin: id,
      }));
    },
    [origin]
  );

  const artworksOriginTypes = useMemo(() => {
    return (
      listData?.data
        ?.sort((a, b) => (b.place_of_origin <= a.place_of_origin ? 1 : -1))
        .filter(
          (e, i, self) =>
            self[i]?.place_of_origin !== self[i + 1]?.place_of_origin && self[i]?.place_of_origin
        )
        .map((item) => ({
          id: item?.place_of_origin,
          text: item?.place_of_origin,
          onClick: () => handleOriginChange(item?.place_of_origin),
        })) || []
    );
  }, [listData?.data]);

  const ListMenuContent = useMemo(() => {
    return [
      {
        id: 'All',
        text: 'All',
        onClick: () => handleOriginChange(null),
      },
      ...artworksOriginTypes,
    ].map((item) => (
      <li key={`origin_${item?.text?.toString()}`}>
        <ItemMenu
          fontSize="1.125rem"
          mb={1}
          buttonProps={{
            px: 0,
            py: 3,
          }}
          action={{ ...item }}
          active={origin === item?.id}
        />
      </li>
    ));
  }, [artworksOriginTypes, origin]);

  useEffect(() => {
    if (selectedId) {
      detailRefetch();
    }
  }, [selectedId, detailRefetch]);

  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns="0.5fr 1fr"
        gridGap="7rem"
        justifyContent="space-between"
      >
        <Box>
          {listLoading ? (
            <Box width="100%" display="flex" justifyContent="center" mt="3.625rem">
              <Loader />
            </Box>
          ) : (
            <ListMenu width="100%" pt={3} title="Place of Origin" content={ListMenuContent} />
          )}
        </Box>

        <Box width="100%">
          <Box display="flex" justifyContent="space-between" alignItems="center" mb="1.25rem">
            <Box display="flex" alignItems="center">
              <Text fontSize="1.125rem" color="black" fontWeight="bold" loading={listLoading}>
                {origin || 'All'}
              </Text>
              <Count ml={3} number={filteredListData.length} loading={listLoading} />
              <Search
                id="search"
                name="search"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setState((prevState) => ({
                    ...prevState,
                    search: e.target.value,
                  }));
                }}
                value={search}
                placeholder="Search tags..."
                maxWidth="16rem"
                ml={3}
                loading={listLoading}
              />
            </Box>
            <Text
              fontSize="sm"
              color="mintyGreen"
              fontWeight="bold"
              cursor="pointer"
              onClick={() =>
                setState((prevState) => ({
                  ...prevState,
                  page: prevState.page + 1,
                  origin: null,
                }))
              }
              loading={listLoading}
            >
              View more
            </Text>
          </Box>

          {!listLoading && !filteredListData.length && (
            <EmptyState
              mb={4}
              text={
                origin || search
                  ? 'No artworks found for the selected filters'
                  : 'No artworks found on our database'
              }
              icon="artworks-empty"
            />
          )}

          {/* card list of artworks */}
          {filteredListData?.length > 0 && !listLoading && (
            <Box
              display="grid"
              gridTemplateColumns="repeat(auto-fill, minmax(20rem, 1fr))"
              gridGap="2rem"
              width="100%"
            >
              {filteredListData?.map((item) => (
                <Card
                  key={`artwork_${item?.id?.toString()}`}
                  title={item?.title}
                  description={item?.place_of_origin}
                  img={item?.thumbnail?.lqip}
                  onClick={() => setState((prevState) => ({ ...prevState, selectedId: item?.id }))}
                  size="medium"
                  cursor="pointer"
                />
              ))}
            </Box>
          )}

          {listLoading && (
            <Box width="100%" display="flex" justifyContent="center" mt="3.625rem">
              <Loader />
            </Box>
          )}
        </Box>
      </Box>

      {/* show details of the selected artwork */}
      {!!selectedId && (
        <Modal
          onClose={() => setState((prevState) => ({ ...prevState, selectedId: null }))}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            display="flex"
            flexDirection="column"
            width="75%"
            height="80%"
            p={40}
            backgroundColor="white"
            borderRadius="16px"
            overflowY="auto"
          >
            {detailLoading && (
              <Box
                width="100%"
                display="flex"
                height="100%"
                alignItems="center"
                justifyContent="center"
              >
                <Loader />
              </Box>
            )}
            {detailData && (
              <>
                <Text fontSize="lg" color="black" fontWeight="bold" pb={24}>
                  {detailData?.data?.title}
                </Text>
                <Box>
                  <Box display="flex" justifyContent="center" alignItems="center" pb={24}>
                    <Image
                      src={detailData?.data?.thumbnail?.lqip}
                      alt={detailData?.data?.title}
                      width="100"
                      height="100"
                    />
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <Text fontSize="rg" color="black" fontWeight="normal" pb={4}>
                      <b>Place of Origin</b>: {detailData?.data?.place_of_origin || 'N/A'}
                    </Text>
                    <Text fontSize="rg" color="black" fontWeight="normal" pb={4}>
                      <b>Artist</b>: {detailData?.data?.artist_display || 'N/A'}
                    </Text>
                    <Text fontSize="rg" color="black" fontWeight="normal" pb={4}>
                      <b>Date End</b>: {detailData?.data?.date_end || 'N/A'}
                    </Text>
                    <Text fontSize="rg" color="black" fontWeight="normal" pb={4}>
                      <b>Medium</b>: {detailData?.data?.medium_display || 'N/A'}
                    </Text>
                    <Text fontSize="rg" color="black" fontWeight="normal" pb={4}>
                      <b>Dimensions</b>: {detailData?.data?.dimensions || 'N/A'}
                    </Text>
                    <Text fontSize="rg" color="black" fontWeight="normal" pb={4}>
                      <b>Provenance</b>: {detailData?.data?.provenance_text || 'N/A'}
                    </Text>
                    <Text fontSize="rg" color="black" fontWeight="normal">
                      <b>Publication</b>: {detailData?.data?.publication_history || 'N/A'}
                    </Text>
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </Modal>
      )}
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <GeneralLayout>{page}</GeneralLayout>;
};

export default Home;
