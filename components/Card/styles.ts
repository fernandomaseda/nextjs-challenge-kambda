import styled from 'styled-components';
import Box from '@components/Box';

const cardSizes = {
  medium: '1rem',
  small: '0.5rem',
};

export const ImgContainer = styled(Box)`
  width: 3.5em;
  height: 3.5em;
`;

export const Image = styled.img.attrs(({ src }) => ({
  src: src || 'https://via.placeholder.com/150',
}))`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 50%;
`;


export const CardContainer = styled(Box)`
  font-size: ${({ size }) => cardSizes[size]};
  ${({ onClick, deleting }) => onClick && !deleting && `cursor: pointer;`}
  :hover {
    ${({ boxShadow }) => boxShadow && `box-shadow: 0 0.3125em 0.625em 0 rgba(0, 0, 0, 0.12);`}
    & ${ImgContainer} {
      ${({ hoverEffect, theme: { colors } }) =>
        hoverEffect &&
        `
          &>div{
            color: ${colors.white};
          }
          background-color: ${colors.mintyGreen};
      `}
    }
  }
`;