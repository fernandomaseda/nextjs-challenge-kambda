import styled from 'styled-components';
import { color, layout, space, position, flexbox, system, border } from 'styled-system';
import css from '@styled-system/css';
import type {IconProps} from './Icon';

export const IconContainer = styled.div<Partial<IconProps> & { $hoverColor?: string }>`
  flex-shrink: 0;
  ${({ onClick }) => onClick && `cursor: pointer;`}
  ${color}
  ${layout}
  ${space}
  ${position}
  ${flexbox}
  ${border}
  ${system({
    cursor: true,
    transform: true,
    transition: true,
  })}
  :hover{
    ${({ $hoverColor }) =>
      $hoverColor &&
      css({
        color: $hoverColor,
      })}
  }
  svg{
    display: block;
    pointer-events: bounding-box;
    :not([fill]) {
      fill: initial;
    }
  }
`;
