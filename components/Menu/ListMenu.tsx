import { FC, ReactNode } from 'react';
import Text from '@components/Text';
import Box from '@components/Box';
import { SpaceProps, DisplayProps, LayoutProps } from 'styled-system';

interface ListMenuProps extends SpaceProps, DisplayProps, LayoutProps {
  title: string;
  content: ReactNode;
}

const ListMenu: FC<ListMenuProps> = ({ title, content, ...rest }) => {
  return (
    <Box {...rest}>
      <Box>
        <Text ml={0} mb={5} fontSize="1.125rem" color="black" fontWeight="bold">
          {title || ''}
        </Text>
      </Box>
      <ul>{content}</ul>
    </Box>
  );
};

export default ListMenu;
