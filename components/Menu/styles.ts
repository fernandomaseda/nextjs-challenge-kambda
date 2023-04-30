import styled from 'styled-components';
import { layout, space } from 'styled-system';
import type {ItemMenuProps} from './ItemMenu';

export const Item = styled.div`
  width: 100%;
  padding-bottom: 0.5rem;
  ${layout}
  ${space}
`;

export const ItemButton = styled.button<Partial<ItemMenuProps> & {view: boolean}>`
    width: 100%;
    border-radius: 0;
    background: ${({ theme: { colors } }) => colors.white};
    border: 1px solid transparent;
    justify-content: flex-start;
    padding: 0.75rem 0.75rem;
    cursor: pointer;
    &:hover {
      border: 1px solid transparent;
      background: ${({ view, theme: { colors } }) => (view ? colors.n_10 : colors.n_20)};
    }
    ${({ active, view, theme: { colors } }) =>
      active && `background: ${view ? colors.n_10 : colors.n_20};`}
  ${layout}
  ${space}
`;
