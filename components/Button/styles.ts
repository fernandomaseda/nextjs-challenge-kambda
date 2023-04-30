import styled, { keyframes } from 'styled-components';
import {
  background,
  flexbox,
  variant,
  typography,
  layout,
  space,
  border,
  system,
} from 'styled-system';
import { rgba } from 'polished';
import type { ButtonProps } from './Button';

export const StyledButton = styled.button<Partial<ButtonProps>>`
  position: relative;
  font-family: 'Overpass', sans-serif;
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.125rem;
  min-height: 2.5rem;
  cursor: pointer;
  border: 2px solid;
  text-align: center;
  border-radius: 0.25rem;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${system({
    transform: true,
  })}
  ${variant({
    prop: 'colorTheme',
    variants: {
      primary: {
        color: 'n_90',
        bg: 'p_50',
        borderColor: 'p_50',
        '&:hover': {
          bg: 'p_70',
          borderColor: 'p_70',
        },
        '&:active:hover': {
          bg: 'p_50',
          borderColor: 'p_50',
        },
        '&:disabled': {
          bg: 'n_20',
          borderColor: 'n_20',
          color: 'n_30',
        },
      },
      secondary: {
        color: 'n_90',
        bg: 'n_10',
        borderColor: 'n_90',
        '&:hover': {
          bg: 'p_70',
        },
        '&:active:hover': {
          bg: 'p_50',
          borderColor: 'p_50',
        },
        '&:disabled': {
          bg: 'n_10',
          borderColor: 'n_30',
          color: 'n_30',
        },
      },
      tertiary: {
        color: 'darkGrey',
        bg: 'lightMint',
        borderColor: 'lightMint',
        '&:hover': {
          bg: 'mintyGreen',
        },
        '&:disabled': {
          bg: 'white',
          borderColor: 'lightGrey',
          color: 'darkGrey',
        },
        '&:disabled:hover': {
          bg: 'white',
          borderColor: 'lightGrey',
        },
      },
      almostWhite: {
        color: 'black',
        bg: 'almostWhite',
        borderColor: 'almostWhite',
        '&:hover': {
          bg: 'lightGrey',
        },
        '&:disabled': {
          bg: 'white',
          borderColor: 'lightGrey',
          color: 'darkGrey',
        },
        '&:disabled:hover': {
          bg: 'white',
          borderColor: 'lightGrey',
        },
      },
      loading: {
        overflow: 'hidden',
        color: 'middleGrey',
        bg: 'lightGrey',
        borderColor: 'lightGrey',
        '&:hover': {
          bg: 'lightGrey',
          borderColor: 'lightGrey',
        },
        '&:disabled': {
          bg: 'white',
          borderColor: 'lightGrey',
          color: 'darkGrey',
        },
        '&:disabled:hover': {
          bg: 'white',
          borderColor: 'lightGrey',
        },
      },
      ghost: {
        color: 'darkGrey',
        bg: 'almostWhite',
        borderColor: 'almostWhite',
        borderRadius: '3.125rem',
        borderWidth: '4px',
        '&:focus': {
          bg: 'lightGrey',
          borderColor: 'mintyGreen',
          color: 'darkGrey',
        },
        '&:hover': {
          bg: 'mintyGreen',
          borderColor: 'mintyGreen',
          color: 'black',
        },
        '&:hover:active': {
          bg: 'darkGreen',
          borderColor: 'darkGreen',
          color: 'black',
        },
        '&:disabled': {
          bg: 'middleGrey',
          borderColor: 'middleGrey',
          color: 'darkGrey',
        },
      },
      page: {
        minHeight: '1rem',
        fontWeight: 'normal',
        borderRadius: 0,
        padding: '0.5rem',
        color: 'n_50',
        border: 'none',
        bg: 'white',
        '&:hover': {
          bg: 'white',
        },
        '&:disabled': {
          bg: 'white',
        },
        '&:disabled:hover': {
          bg: 'white',
        },
      },
      activePage: {
        minHeight: '1rem',
        borderRadius: 0,
        padding: '0.5rem',
        color: 'black',
        bg: 'white',
        border: 'none',
        borderBottom: '2px solid',
        borderColor: 's_50',
        '&:hover': {
          bg: 'white',
        },
        '&:disabled': {
          bg: 'white',
        },
        '&:disabled:hover': {
          bg: 'white',
        },
      },
      dark: {
        padding: '0.75rem 1rem',
        lineHeight: '17px',
        color: 'n_10',
        bg: 'n_80',
        borderColor: 'n_80',
        '&:hover': {
          color: 'n_90',
          bg: 'n_50',
          borderColor: 'n_50',
        },
        '&:active:hover:not(:disabled)': {
          color: 'n_10',
          bg: 'n_70',
          borderColor: 's_50',
        },
        '&:disabled': {
          bg: 'n_80',
          borderColor: 'n_80',
          color: 'n_60',
        },
      },
    },
  })}
  ${layout}
  ${typography}
  ${space}
  ${border}
  ${flexbox}
  ${background}
  &:disabled,
  &[disabled]{
    cursor: default;
  }
`;

export const Loading = styled.div<Pick<ButtonProps, 'width' | 'height'>>`
  ${layout}
  ${typography}
  ${space}
  ${border}
  padding: 0;
`;

export const PrefixContainer = styled.div`
  display: inline-block;
  margin-right: 1rem;
`;

export const SuffixContainer = styled.div`
  display: inline-block;
  margin-left: 1rem;
`;

const load8 = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div<Pick<ButtonProps, 'width' | 'height'>>`
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 3px solid ${({ theme: { colors } }) => rgba(colors.middleGrey, 0.3)};
  border-right: 3px solid ${({ theme: { colors } }) => rgba(colors.middleGrey, 0.3)};
  border-bottom: 3px solid ${({ theme: { colors } }) => rgba(colors.middleGrey, 0.3)};
  border-left: 3px solid ${({ theme: { colors } }) => colors.middleGrey};
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${load8} 1.1s infinite linear;
  animation: ${load8} 1.1s infinite linear;
  border-radius: 50%;
  width: ${({ height }) => `Calc(${height} - 28px)`};
  height: ${({ height }) => `Calc(${height} - 28px)`};
  &:after {
    border-radius: 50%;
    width: ${({ height }) => `Calc(${height} - 28px)`};
    height: ${({ height }) => `Calc(${height} - 28px)`};
  }
`;
