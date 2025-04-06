import { ChevronRightIcon } from '@chakra-ui/icons';
import {
    Avatar,
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    Image,
    Text,
} from '@chakra-ui/react';

export function Header() {
    return (
        <Box
            as='header'
            color='black'
            width={{ base: '360px', md: '768px', lg: '1440px', xl: '1920px' }}
            paddingY='16px'
            bg='brand.100'
            margin='auto'
        >
            <Flex justify='start' align='center'>
                <Image
                    width='135px'
                    src='src/assets/logo/logo.svg'
                    alt='Логотип приложения "Yeedaa"'
                    ml='16px'
                    mr='128px'
                />
                <Breadcrumb
                    width={{ lg: '672px', xl: '1152px' }}
                    height='24px'
                    spacing='8px'
                    separator={<ChevronRightIcon color='gray.800' />}
                    hideBelow='lg'
                >
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#' color='blackAlpha.700'>
                            Главная
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#' color='black'>
                            Самое сочное
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Flex
                    pr='24px'
                    pl='53px'
                    mr='24px'
                    width='432px'
                    height='48px'
                    textAlign='left'
                    justify='center'
                    hideBelow='lg'
                >
                    <Box>
                        <Avatar
                            name='Екатерина Константинопольская'
                            src='src/assets/avatars/avatar-konstantinopolskaia.png'
                            bg='gray.100'
                            width='48px'
                            mr='12px'
                        />
                    </Box>
                    <Box>
                        <Text>Екатерина Константинопольская</Text>
                        <Text>@bake_and_pie</Text>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Header;
