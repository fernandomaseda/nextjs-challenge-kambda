import { FC, memo, ReactNode } from 'react';
import Truncate from 'react-truncate';
import Skeleton from 'react-loading-skeleton';
import Theme from '@config/theme';
import { StyledText } from './styles';
import {
  SpaceProps,
  DisplayProps,
  LayoutProps,
  TextAlignProps,
  TypographyProps,
} from 'styled-system';

export interface TextProps
  extends SpaceProps,
    DisplayProps,
    LayoutProps,
    TextAlignProps,
    TypographyProps {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  color?: string;
  fontSize?: string | number;
  fontFamily?: string;
  lineHeight?: string;
  fontWeight?: string | number;
  loading?: boolean;
  truncate?: {
    lines?: number;
    ellipsis?: ReactNode | string;
  };
  onTruncate?: () => void;
  onClick?: () => void;
  hoverColor?: string;
  cursor?: string;
  whiteSpace?: string;
  textTransform?: string;
}

const Text: FC<TextProps> = ({
  children,
  as = 'p',
  loading = false,
  color = 'inherit',
  fontSize = 'rg',
  fontFamily = 'Overpass, sans-serif',
  lineHeight = '120%',
  fontWeight = 'regular',
  truncate = null,
  onTruncate = () => {},
  hoverColor = null,
  cursor = 'inherit',
  ...rest
}) => {
  if (loading) {
    return <Skeleton containerClassName="flex-1" height={Theme.space[fontSize] || fontSize} />;
  }
  return (
    <StyledText
      as={as}
      color={color}
      fontSize={fontSize}
      fontFamily={fontFamily}
      lineHeight={lineHeight}
      fontWeight={fontWeight}
      $hoverColor={hoverColor}
      cursor={cursor}
      {...rest}
    >
      {truncate ? (
        <Truncate
          lines={truncate?.lines || 3}
          ellipsis={truncate?.ellipsis || '...'}
          onTruncate={onTruncate}
        >
          {children}
        </Truncate>
      ) : (
        children
      )}
    </StyledText>
  );
};

export default memo(Text);
