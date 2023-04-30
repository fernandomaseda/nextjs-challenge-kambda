import { FC, memo } from 'react';
import Icon from '@components/Icon';
import Text from '@components/Text';
import Box from '@components/Box';
import { SpaceProps } from 'styled-system';

export type LoaderProps = SpaceProps & {
  width?: string;
  height?: string;
  text?: string;
  containerWidth?: string;
  containerHeight?: string;
};

const Loader: FC<LoaderProps> = ({
  width = '2.625rem',
  height = '2.625rem',
  text = 'Loading...',
  containerWidth = '',
  containerHeight = '',
  ...rest
}) => (
  <Box
    width={containerWidth || 'fit-content'}
    height={containerHeight}
    display="flex"
    flexDirection="column"
    alignItems="center"
    {...rest}
  >
    <Icon width={width} height={height} type="loading" />
    {text && (
      <Text fontSize="sm" fontWeight="semi_bold" color="darkGrey" mt={4}>
        {text}
      </Text>
    )}
  </Box>
);

export default memo(Loader);
