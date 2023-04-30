import { FC, ReactNode } from 'react';
import Text from '@components/Text';
import Button from '@components/Button';
import { Box, IconGrey } from './styles';
import { SpaceProps, DisplayProps, LayoutProps } from 'styled-system';

interface EmptyStateProps extends SpaceProps, DisplayProps, LayoutProps {
  text: string;
  icon: string;
  button?: {
    text: string;
    width?: string;
    onClick: () => void;
  };
}

const EmptyState: FC<EmptyStateProps> = ({ text, icon, button = null, ...rest }) => {
  return (
    <Box {...rest}>
      {icon && <IconGrey type={icon} color="middleGrey" />}
      <Text
        width="344px"
        fontSize="sm"
        fontWeight="normal"
        color="middleGrey"
        mt="16px"
        textAlign="center"
      >
        {text}
      </Text>
      {button && (
        <Button
          colorTheme="primary"
          width={button?.width || '180px'}
          height="48px"
          mt="24px"
          onClick={button?.onClick}
        >
          <Text fontWeight="bold" fontSize="sm">
            {button?.text}
          </Text>
        </Button>
      )}
    </Box>
  );
};

export default EmptyState;
