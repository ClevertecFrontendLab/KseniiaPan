import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
    base: '0px',
    md: '768px',
    lg: '1440px',
    xl: '1920px',
};

const colors = {
    brand: {
        100: '#ffffd3',
    },
};

export const theme = extendTheme({ breakpoints, colors });
