import { Box } from '@chakra-ui/react';

import CulinaryBlogs from '../../components/culinary-blogs/culinary-blogs';
import Header from '../../components/header/header';
import NewRecepies from '../../components/new-recepies/new-recepies';
import SearchForm from '../../components/search-form/search-form';
import TastiestRecepies from '../../components/tasties-recepies/tasties-recepies';
import VeganRecipes from '../../components/vegan-recipes/vegan-recipes';

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
                <NewRecepies />
                <TastiestRecepies />
                <CulinaryBlogs />
                <VeganRecipes />
            </Box>
        </>
    );
}

export default HomePage;
