import styled from 'styled-components';
import { layout, space } from 'styled-system';
import Icon from '@components/Icon';

export const Box = styled.div`
  border: dashed 2px ${({ theme: { colors } }) => colors.middleGrey};
  background-color: ${({ theme: { colors } }) => colors.white};
  min-height: 316px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${layout}
  ${space}
`;

export const IconGrey = styled(Icon)`
  width: 64px;
  height: 64px;
  margin-bottom: 1.5rem;
`;
