import { FC, memo } from 'react';

import Box from '@components/Box';
import Text from '@components/Text';
import { SpaceProps } from 'styled-system';
import Skeleton from 'react-loading-skeleton';

interface CountProps extends SpaceProps {
  number: number;
  label?: string;
  color?: string;
  loading?: boolean;
  width?: string | number;
  height?: string | number;
}

const Count: FC<CountProps> = ({
  number,
  label = 'items',
  loading = false,
  width,
  height,
  ...rest
}) => {
  if (loading) {
    return <Skeleton width={width} height={height} />;
  }

  return (
    <Box
      width={width || 'fit-content'}
      height={height || 'auto'}
      minHeight="2.625rem"
      borderRadius="0.25rem"
      color="n_90"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p="0.75rem 1rem"
      bg="n_20"
      {...rest}
    >
      <Text fontSize="sm" color="currentColor" whiteSpace="nowrap">
        {(number === Infinity ? 0 : number) || 0} {label}
      </Text>
    </Box>
  );
};

export default memo(Count);
