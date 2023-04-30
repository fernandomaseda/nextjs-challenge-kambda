import { useQuery } from '@tanstack/react-query'
import { API } from '@config/constants'


// QUERIES
//-------------------------------------------------------------------------------

const fetchArtworks = async (queryParamsString: string) => {
    try {
    const response = await fetch(`${API}/artworks?${queryParamsString}`);
    if (!response.ok) {
      throw new Error('Artworks response failed');
    }
    return response.json()
   } catch (error) {
    console.error(error);
    }
    return null;
  }


export const useArtworksQuery = (queryParams: {[key: string]: string}) => {
    const { q, fields, page, limit } = queryParams;
const queryParamsString = new URLSearchParams({
        q,
        fields,
        page,
        limit,
      }).toString();    
  return useQuery(['artworks', queryParams], () => fetchArtworks(queryParamsString));
}

//-------------------------------------------------------------------------------

const fetchArtworkDetail = async (id: string | null) => {
    if (!id) {
      return null;
    }
    try {
      const response = await fetch(`${API}/artworks/${id}`);
      if (!response.ok) {
        throw new Error('Artwork detail response failed');
      }
      return response.json()
     } catch (error) {
      console.error(error);
      }
      return null;
    }


export const useArtworkDetailsQuery = (id: string | null) => {
    return useQuery(['artwork-details', id], () => fetchArtworkDetail(id));
    }