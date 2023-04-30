import { FC, useState, useEffect, ComponentProps } from 'react';
import Text from '@components/Text';
import { Item, ItemButton } from './styles';
import { SpaceProps, LayoutProps } from 'styled-system';

export interface ItemMenuProps extends LayoutProps, SpaceProps {
  action: {
    onClick: () => void;
    text: string;
  };
  confirm?: {
    onClick: () => void;
    text: string;
  };
  reset?: boolean;
  fontSize?: string;
  active?: boolean;
  buttonProps?: LayoutProps & SpaceProps;
  textProps?: ComponentProps<typeof Text>;
}

const ItemMenu: FC<ItemMenuProps> = ({
  action,
  confirm = null,
  reset = false,
  fontSize = '14px',
  active = false,
  buttonProps = {},
  textProps = {},
  ...restProps
}) => {
  const [view, setView] = useState(false);
  useEffect(() => {
    if (reset) {
      setView(false);
    }
    return () => {
      setView(false);
    };
  }, [reset]);

  return (
    <Item {...restProps}>
      {!view && (
        <ItemButton
          type="button"
          active={active}
          view={view}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            if (action?.onClick && !confirm) {
              action.onClick();
            }
            if (confirm) {
              setView(true);
            }
          }}
          {...buttonProps}
        >
          <Text fontSize={fontSize || '0.875rem'} {...textProps}>
            {action?.text}
          </Text>
        </ItemButton>
      )}
      {view && confirm && (
        <ItemButton
          type="button"
          active={active}
          view={view}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setView(false);
            if (confirm?.onClick) {
              confirm.onClick();
            }
          }}
          {...buttonProps}
        >
          <Text fontSize={fontSize || '0.875rem'} {...textProps}>
            {confirm?.text || ''}
          </Text>
        </ItemButton>
      )}
    </Item>
  );
};

export default ItemMenu;
