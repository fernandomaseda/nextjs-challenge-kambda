import styled from 'styled-components';
import { layout, space, color, flexbox } from 'styled-system';
import { rgba } from 'polished';

export const ModalContainer = styled.div`
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { colors } }) => rgba(colors.black, 0.8)};
  ${layout}
  ${space}
  ${color}
  ${flexbox}
  position: fixed;
  transition: all 0.5s ease-in-out;
  opacity: 0;
  &.modal-show {
    opacity: 1;
    }
  & > div {
    transition: all 0.5s ease-in-out;
    opacity: 0;
  }
  &.modal-show > div {
    opacity: 1;
  }
`;
