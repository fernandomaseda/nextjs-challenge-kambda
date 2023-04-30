import styled from 'styled-components';
import {
  layout,
  position,
  flexbox,
  grid,
  space,
  border,
  color,
  typography,
  shadow,
  background,
  system,
} from 'styled-system';

export const StyledBox = styled.div<any>`
  ${layout}
  ${position}
  ${space}
  ${flexbox}
  ${grid}
  ${border}
  ${color}
  ${typography}
  ${shadow}
  ${background}
  ${system({
    cursor: true,
    transform: true,
    transformOrigin: true,
    overflow: true,
    pointerEvents: true,
    transition: true,
    boxSizing: true,
    lineBreak: true,
  })}
`;
