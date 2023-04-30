import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { typography, border, background } from 'styled-system';
import Box from '@components/Box';
import type { InputProps} from './Input';
import type { FormInputProps } from '@utils/formHelper';

export const StyledBox = styled(Box)`
  :hover > div {
    ${({ variant, isError, isValid }) =>
      !isError && !isValid && variant === 'title' && 'display: none;'}
  }
`;

export const StyledInput = styled.input<Partial<FormInputProps> & Partial<InputProps> & {hasPrefix: boolean, hasSuffix: boolean}>`
  width: 100%;
  line-height: 1.125rem;
  padding: 0.75rem 0.75rem;
  ${({ hasPrefix }) => hasPrefix && 'padding-left: 2.5rem;'}
  ${({ hasSuffix }) => hasSuffix && 'padding-right: 2.5rem;'}
  font-family:  'Overpass', sans-serif;
  font-size: 16px;
  font-weight: 400;
  display: inline-block;
  color: ${({ theme: { colors } }) => colors.n_90};
  background-color: ${({ theme: { colors } }) => colors.n_20};
  transition: all 0.2s;
  outline: none;
  border: 1px solid transparent;
  border-radius: 0.125rem;
  ${({ variant, borderColor, theme: { colors } }) =>
    variant !== 'title' &&
    `
      ::placeholder {
        font-weight: 500;
        color: #afafaf;
      }
      :hover:not(:disabled) {
        background-color: ${colors.n_20};
        color: ${colors.n_90};
        box-shadow: 0 0 6px 0
          ${rgba(colors[borderColor] || colors.n_20, 0.4)};
        border: 1px solid
          ${colors[borderColor] || colors.n_20};
        ${border}
      }
      :focus:not(:disabled) {
        background-color: ${colors.n_20};
        color: ${colors.n_90};
        box-shadow: 0 0 6px 0
          ${colors[borderColor] || rgba(colors.n_30, 0.4)};
        border: 1px solid
          ${colors[borderColor] || colors.s_50};
        ${border}
      }
      :disabled {
        color: ${colors.n_40};
      }
      :focus:active:not(:disabled) {
        border: 1px solid
          ${colors[borderColor] || colors.s_50};
      }
  `}

  ${({ variant, isError, isValid, borderColor, theme: { colors } }) =>
    variant === 'title' &&
    `
    line-height: 0rem;
    padding: 0.5rem 0.75rem;
    padding-left: 0px;
    border-radius: 0.125rem;
    font-size: 1.625em;
    background-color: ${colors.n_20};
    overflow: visible;
    border: 1px solid ${colors.s_50};
    ::placeholder {
      color: ${colors.n_30};
      opacity: 1;
    }
    :not(:focus) {
      border-color: ${colors.n_20};
      ${isValid ? `border-color: ${colors[borderColor]};` : ''};
      ${isError ? `border-color: ${colors[borderColor]};` : ''};
      color: ${colors.s_90};
      ${isValid || isError ? 'padding-left: 0.75rem;' : ''};
    }
    :hover:not(:disabled)::placeholder {
      color: ${colors.n_50};
      opacity: 1;
    }
    :hover:not(:disabled) {
      color: ${colors.n_50};
      border-color: ${colors.n_50};
      ${isValid ? `border-color: ${colors[borderColor]};` : ''};
      ${isError ? `border-color: ${colors[borderColor]};` : ''};
      padding-left: 0.75rem;
      ${border}
    }
    :focus:not(:disabled) {
      color: ${colors.n_90};
      padding-left: 0.75rem;
      border-color: ${colors.s_50};
      ${isValid ? `border-color: ${colors[borderColor]};` : ''};
      ${isError ? `border-color: ${colors[borderColor]};` : ''};
      ${border}
    }
    :disabled {
      color: ${colors.n_40};
      padding-left: 0.75rem;
      cursor: disabled;
      background-color: ${colors.n_20};
    }
  `}
  ${typography}
  ${border}
  ${background}
  @media (min-width: 711px) {
    font-size: 0.875rem;
  }
`;

export const floatingContainerStyles = css`
  position: absolute;
  top: 1rem;
  width: 2.125rem;
  height: 2.125rem;
  display: inline-block;
  @media (min-width: 711px) {
    top: 0.75rem;
  }
`;

export const PrefixContainer = styled.div`
  ${floatingContainerStyles}
  left: 1rem;
`;

export const SuffixContainer = styled.div`
  ${floatingContainerStyles}
  right: 0rem;
`;
