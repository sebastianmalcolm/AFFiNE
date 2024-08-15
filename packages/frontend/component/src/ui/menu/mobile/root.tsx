import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { Fragment, useCallback, useContext, useEffect, useState } from 'react';

import { Modal, type ModalProps } from '../../modal';
import type { MenuProps } from '../menu.types';
import * as styles from '../styles.css';
import { MobileMenuContext } from './context';

export const MobileMenu = ({
  children,
  items,
  noPortal,
  contentOptions: {
    className = '',
    onPointerDownOutside,
    ...otherContentOptions
  } = {},
  rootOptions,
}: MenuProps) => {
  const { level = 0, setShow: setParentShow } = useContext(MobileMenuContext);

  const [open, setOpen] = useState(false);
  const finalOpen = rootOptions?.open ?? open;
  const [show, setShow] = useState(true);

  const onOpenChange = useCallback(
    (open: boolean) => {
      if (!open) {
        // a workaround to hack the onPointerDownOutside event
        onPointerDownOutside?.({} as any);
      }
      setOpen(open);
      rootOptions?.onOpenChange?.(open);
    },
    [onPointerDownOutside, rootOptions]
  );

  useEffect(() => {
    setParentShow(!finalOpen);
    return () => setParentShow(true);
  }, [finalOpen, setParentShow]);

  const Wrapper = noPortal ? Fragment : Modal;
  const wrapperProps = noPortal
    ? {}
    : ({
        open: finalOpen,
        onOpenChange,
        animation: 'slideBottom',
        withoutCloseButton: true,
        contentOptions: {
          className: clsx(styles.menuContent, 'mobile', className),
          ...otherContentOptions,
        },
        contentWrapperStyle: {
          alignItems: 'end',
          paddingBottom: 10,
          display: show ? undefined : 'none',
        },
        overlayOptions: {
          style: {
            display: show ? undefined : 'none',
          },
        },
      } satisfies ModalProps);

  const onItemClick = useCallback((e: any) => {
    e.preventDefault();
    setOpen(prev => !prev);
  }, []);

  return (
    <>
      <Slot onClick={onItemClick}>{children}</Slot>
      <MobileMenuContext.Provider
        value={{
          setOpen,
          level: level + 1,
          setShow,
        }}
      >
        <Wrapper {...wrapperProps}>{items}</Wrapper>
      </MobileMenuContext.Provider>
    </>
  );
};
