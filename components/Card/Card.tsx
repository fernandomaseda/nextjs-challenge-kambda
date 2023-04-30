import { FC, memo, forwardRef } from 'react';
import Skeleton from 'react-loading-skeleton';
import Icon from '@components/Icon';
import Box from '@components/Box';
import Text from '@components/Text';
import { CardContainer, ImgContainer, Image } from './styles';
import { SpaceProps, DisplayProps, LayoutProps } from 'styled-system';

interface CardProps extends SpaceProps, DisplayProps, LayoutProps {
  title?: string;
  description?: string;
  img: string;
  options?: {
    id: string;
    label: string;
  }[];
  onClick?: () => void;
  addMore?: boolean;
  size?: 'medium' | 'small';
  hoverEffect?: boolean;
  boxShadow?: boolean;
  loading?: boolean;
  selected?: boolean;
  width?: string | number;
  height?: string | number;
  cursor?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      title = '',
      description = '',
      img,
      options = [],
      addMore,
      size = 'medium',
      hoverEffect = false,
      boxShadow = true,
      loading = false,
      selected = false,
      onClick = () => {},
      ...rest
    },
    ref
  ) => {
    if (loading) return <Skeleton {...rest} />;
    return (
      <CardContainer
        ref={ref}
        bg={addMore ? 'almostWhite' : 'white'}
        border="1px solid"
        borderColor={selected ? 'mintyGreen' : 'lightGrey'}
        display="flex"
        alignItems="center"
        position="relative"
        padding="1.25em 4.125em 1.25em 1em"
        size={size}
        hoverEffect={hoverEffect}
        boxShadow={boxShadow}
        onClick={() => onClick()}
        {...rest}
      >
        <ImgContainer display="flex" justifyContent="center" alignItems="center" flexShrink="0">
          <Image src={img} alt={title || description} />
        </ImgContainer>
        {(title || description) && (
          <Box display="flex" flexDirection="column" width="100%" ml="1.5em">
            {title && (
              <Text
                fontSize="1em"
                fontWeight="bold"
                color={addMore ? 'middleGrey' : 'black'}
                truncate={{ lines: 1 }}
              >
                {title}
              </Text>
            )}
            {description && (
              <Text
                fontSize="0.75em"
                fontWeight="normal"
                color="darkGrey"
                mt="0.125rem"
                truncate={{ lines: 1 }}
              >
                {description}
              </Text>
            )}
          </Box>
        )}
      </CardContainer>
    );
  }
);

Card.displayName = 'Card';

export default memo(Card);
