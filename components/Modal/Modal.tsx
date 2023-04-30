import {
  memo,
  useRef,
  forwardRef,
  MutableRefObject,
  MouseEvent,
  ReactNode,
  useEffect,
} from 'react';
import { ModalContainer } from './styles';
import { LayoutProps, SpaceProps, DisplayProps, FlexboxProps } from 'styled-system';
interface ModalProps extends FlexboxProps, LayoutProps, SpaceProps, DisplayProps {
  children: ReactNode;
  onClose: (e: MouseEvent<HTMLDivElement>) => void;
}

const Modal = forwardRef<MutableRefObject<HTMLDivElement>, ModalProps>(
  ({ children, onClose, ...rest }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    if (typeof ref === 'function') ref(containerRef);

    useEffect(() => {
      setTimeout(() => {
        containerRef?.current?.classList.add('modal-show');
      }, 10);
    }, []);

    return (
      <ModalContainer
        onClick={(e) => {
          e.preventDefault();
          if (e.target === containerRef?.current) onClose(e);
        }}
        {...rest}
        ref={containerRef}
      >
        {children}
      </ModalContainer>
    );
  }
);

Modal.displayName = 'Modal';

export default memo(Modal);
