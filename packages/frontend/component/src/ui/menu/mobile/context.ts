import { createContext } from 'react';

export const MobileMenuContext = createContext<{
  level: number;
  setOpen: (open: boolean) => void;
  setShow: (show: boolean) => void;
}>({
  level: 0,
  setOpen: () => {},
  setShow: () => {},
});
