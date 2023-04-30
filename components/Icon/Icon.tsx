import { FC, memo, useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { IconContainer } from './styles';
import { SpaceProps, LayoutProps, BackgroundColorProps } from 'styled-system';

export interface IconProps extends SpaceProps, LayoutProps, BackgroundColorProps {
  loading?: boolean;
  type: string;
  color?: string;
  hoverColor?: string;
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
}

const Icon: FC<IconProps> = ({
  loading = false,
  width = '1.125rem',
  height = '1.125rem',
  color = 'inherit',
  hoverColor = null,
  type,
  onClick = () => {},
  ...rest
}) => {
  const [importedIconRef, setImportedIconRef] = useState({ current: null });
  const [downloading, setDownloading] = useState(false);
  useEffect(() => {
    setDownloading(true);
    const importIcon = async () => {
      try {
        const downloadedIcon = (await import(`@assets/icons/${type || 'loading'}.svg`)).default;
        setImportedIconRef({ current: downloadedIcon });
      } catch (err) {
        setImportedIconRef({ current: null });
        throw err;
      } finally {
        setDownloading(false);
      }
    };
    importIcon();
  }, [type]);

  if (!downloading && !loading && importedIconRef.current) {
    const { current: ImportedIcon } = importedIconRef;
    return (
      <IconContainer
        width={width}
        height={height}
        color={color}
        $hoverColor={hoverColor}
        onClick={onClick}
        {...rest}
      >
        <ImportedIcon width="100%" height="100%" style={{ color: 'inherit' }} />
      </IconContainer>
    );
  }

  return (
    <IconContainer width={width} height={height} color={color} $hoverColor={hoverColor} {...rest}>
      <Skeleton width="100%" height="100%" />
    </IconContainer>
  );
};

export default memo(Icon);
