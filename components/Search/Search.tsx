import { FC, useState, createRef, ChangeEvent } from 'react';
import Skeleton from 'react-loading-skeleton';
import Box from '@components/Box';
import Icon from '@components/Icon';
import Input from '@components/Input';
import { CloseContainer } from './styles';
import type { InputProps } from '@components/Input/Input';
import type { FormInputProps } from '@utils/formHelper';

interface SearchProps extends Omit<InputProps, 'formInputProps'>, FormInputProps {
  width?: string;
  height?: string;
  loading?: boolean;
}

const Search: FC<SearchProps> = ({
  id,
  name,
  width = '100%',
  height = '2.625rem',
  loading = false,
  type,
  value,
  onChange,
  disabled,
  placeholder,
  prefix,
  suffix,
  borderColor,
  autocomplete,
  ...rest
}) => {
  const [isOpen, setOpen] = useState(false);
  const [searchHasValue, setSearchHasValue] = useState<boolean | string>(false);
  const searchInputRef = createRef<HTMLInputElement>();

  const triggerOpen = (status = false) => {
    if (searchInputRef?.current) {
      if (status) {
        setOpen(true);
        searchInputRef.current.focus();
      } else if (!searchInputRef.current.value) {
        setOpen(false);
        searchInputRef.current.blur();
      }
    }
  };

  const handleOnSearchBlur = () => {
    triggerOpen(false);
  };

  if (loading) {
    return <Skeleton width={width} height={height} />;
  }

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      border="1px solid"
      borderColor={borderColor || 'n_30'}
      borderRadius="2px"
      width={!isOpen ? '2.75rem' : width}
      height={height || '2.625rem'}
      overflow="hidden"
      {...rest}
    >
      <Icon
        type="search-small"
        width="2.625rem"
        height="2.625rem"
        bg="white"
        color="n_70"
        p="0.8125rem"
        onClick={() => {
          triggerOpen(true);
        }}
      />
      <Input
        ref={searchInputRef}
        id={id}
        name={name}
        width={isOpen ? '100%' : '0%'}
        height="100%"
        loading={loading}
        type={type}
        value={value}
        onChange={(e) => {
          setSearchHasValue(e.target.value);
          onChange(e);
        }}
        disabled={disabled}
        placeholder={placeholder}
        prefix={prefix}
        suffix={suffix}
        borderColor="n_10"
        autocomplete={autocomplete}
        onBlur={handleOnSearchBlur}
      />
      {isOpen && searchHasValue && (
        <CloseContainer
          cursor="pointer"
          top="0"
          right="0"
          width="2.625rem"
          height="2.625rem"
          p="0.75rem"
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={() => {
            searchInputRef.current.value = '';
            setSearchHasValue(false);
            onChange({ target: { value: '' } } as ChangeEvent<HTMLInputElement>);
            searchInputRef.current.focus();
          }}
        >
          <Icon type="close" width="1rem" height="1rem" color="black" />
        </CloseContainer>
      )}
    </Box>
  );
};

export default Search;
