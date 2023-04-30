import { FC, ReactNode } from 'react';
import { Layout } from './styles';
import { SpaceProps, DisplayProps, LayoutProps } from 'styled-system';

export interface GeneralLayoutProps extends SpaceProps, DisplayProps, LayoutProps {
  children: ReactNode;
  className?: string;
}

export const GeneralLayout: FC<GeneralLayoutProps> = ({ children, className, ...rest }) => {
  return (
    <Layout id="content" role="main" {...rest}>
      {children}
    </Layout>
  );
};
