import { ChevronRightIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
    Avatar,
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    IconButton,
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
                    mr={{ md: '341px', lg: '128px', xl: '128px' }}
                    hideBelow='md'
                />
                <Image
                    display={{ base: 'block', md: 'none', lg: 'none', xl: 'none' }}
                    align='center'
                    width='32px'
                    src='src/assets/logo/logo-1.svg'
                    alt='Логотип приложения "Yeedaa"'
                    ml='16px'
                    mr='61px'
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
                <Flex paddingX={{ base: '8px', md: '16px' }}>
                    <Box
                        width='56px'
                        paddingY='4px'
                        paddingX='8px'
                        gap='6px'
                        display='flex'
                        alignItems='center'
                        justifyContent='start'
                    >
                        <Image src='src/assets/icons/pages/bookmark.svg' width='12px' />
                        <Text color='brand.200' fontWeight='600' fontSize='12px' lineHeight='133%'>
                            185
                        </Text>
                    </Box>
                    <Box
                        width='56px'
                        paddingY='4px'
                        paddingX='8px'
                        gap='6px'
                        display='flex'
                        alignItems='center'
                        justifyContent='start'
                    >
                        <Image src='src/assets/icons/pages/people.svg' width='12px' />
                        <Text color='brand.200' fontWeight='600' fontSize='12px' lineHeight='133%'>
                            589
                        </Text>
                    </Box>
                    <Box
                        width='56px'
                        paddingY='4px'
                        paddingX='8px'
                        gap='6px'
                        display='flex'
                        alignItems='center'
                    >
                        <Image src='src/assets/icons/pages/emoji.svg' width='12px' />
                        <Text color='brand.200' fontWeight='600' fontSize='12px' lineHeight='133%'>
                            587
                        </Text>
                    </Box>
                </Flex>
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
                            bg='brand.200'
                            width='48px'
                            mr='12px'
                            textColor='white'
                        />
                    </Box>
                    <Box>
                        <Text>Екатерина Константинопольская</Text>
                        <Text>@bake_and_pie</Text>
                    </Box>
                </Flex>
                <IconButton
                    icon={<HamburgerIcon boxSize='24px' />}
                    aria-label='Hamburger menu'
                    display={{ base: 'flex', md: 'none', lg: 'none', xl: 'none' }}
                    background='none'
                    padding='12px'
                />
            </Flex>
        </Box>
    );
}

export default Header;
