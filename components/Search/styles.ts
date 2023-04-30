import styled from 'styled-components';
import Box from '@components/Box';

export const CloseContainer = styled(Box)`
  :hover {
    background-color: ${({ theme: { colors } }) => colors.middleGrey};
  }
`;
