import { FC, ReactNode } from 'react';
import Skeleton from 'react-loading-skeleton';
import {
  StyledButton as ButtonElt,
  Loading,
  PrefixContainer,
  SuffixContainer,
  LoadingSpinner,
} from './styles';
import { SpaceProps, DisplayProps, LayoutProps } from 'styled-system';

export interface ButtonProps extends SpaceProps, DisplayProps, LayoutProps {
  children: ReactNode;
  colorTheme:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'almostWhite'
    | 'loading'
    | 'ghost'
    | 'page'
    | 'activePage'
    | 'dark';
  loading?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  colorTheme,
  children,
  loading = false,
  prefix = null,
  suffix = null,
  width = '100%',
  height = '3rem',
  ...rest
}) => {
  if (loading) {
    return (
      <Loading width={width} height={height} {...rest}>
        <Skeleton width={width} height={height} />
      </Loading>
    );
  }
  return (
    <ButtonElt width={width} height={height} colorTheme={colorTheme} {...rest}>
      {prefix && <PrefixContainer>{prefix}</PrefixContainer>}
      {children && (
        <>
          {colorTheme === 'loading' ? (
            <LoadingSpinner height={height}>Loading...</LoadingSpinner>
          ) : (
            children
          )}
        </>
      )}
      {suffix && <SuffixContainer>{suffix}</SuffixContainer>}
    </ButtonElt>
  );
};

export default Button;
