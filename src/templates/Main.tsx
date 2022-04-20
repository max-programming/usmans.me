import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IMainProps {
  meta: ReactNode;
  children: ReactNode;
}

const Main = (props: IMainProps) => (
  <Box mb="10">
    {props.meta}
    {props.children}
    {/*
     * PLEASE READ THIS SECTION
     * We'll really appreciate if you could have a link to our website
     * The link doesn't need to appear on every pages, one link on one page is enough.
     * Thank you for your support it'll mean a lot for us.
     */}
  </Box>
);

export { Main };
