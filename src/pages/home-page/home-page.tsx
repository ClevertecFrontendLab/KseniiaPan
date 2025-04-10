import { Box } from '@chakra-ui/react';

import Header from '../../components/header/header';
import SearchForm from '../../components/search-form/search-form';

function HomePage() {
    return (
        <>
            <Header />
            <Box
                as='main'
                width={{ base: '328px', md: '728px', lg: '880px', xl: '1360px' }}
                marginX='auto'
            >
                <SearchForm />
            </Box>
        </>
    );
}

export default HomePage;
