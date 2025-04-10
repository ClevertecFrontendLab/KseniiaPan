import {
    Avatar,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Heading,
    HStack,
    Image,
    Link,
    SimpleGrid,
    Stack,
    Text,
} from '@chakra-ui/react';

export function TastiestRecepies() {
    return (
        <Box as='section' width='1360px' mb='40px'>
            <Heading as='h2' font-weight='500' fontSize='48px' textAlign='left' mb='24px'>
                Самое сочное
            </Heading>
            <SimpleGrid columns={2} gap='24px'>
                <Card
                    position='relative'
                    direction='row'
                    variant='outline'
                    borderRadius='8px'
                    width='668px'
                    height='244px'
                >
                    <Image
                        objectFit='cover'
                        width='346px'
                        src='src/assets/images/home-page/quenelles.jpg'
                        alt='Кнели со спагетти'
                        borderRadius='8px 0 0 8px'
                    />

                    <Stack paddingX='24px' paddingY='20px' width='322px' gap='24px'>
                        <CardHeader display='flex' justifyContent='space-between' padding='0'>
                            <Box
                                borderRadius='4px'
                                paddingX='8px'
                                bg='brand.100'
                                display='flex'
                                alignItems='center'
                                justifyContent='start'
                            >
                                <Image
                                    src='src/assets/icons/navigation/first-courses.svg'
                                    width='16px'
                                    mr='8px'
                                />
                                <Text fontSize='14px' fontWeight='400'>
                                    Первые блюда
                                </Text>
                            </Box>
                            <Box display='flex' flexDirection='row' gap='8px'>
                                <Box
                                    width='47px'
                                    padding='4px'
                                    gap='8px'
                                    display='flex'
                                    alignItems='center'
                                    justifyContent='start'
                                >
                                    <Image src='src/assets/icons/pages/bookmark.svg' width='12px' />
                                    <Text
                                        color='brand.200'
                                        fontWeight='600'
                                        fontSize='12px'
                                        lineHeight='133%'
                                    >
                                        85
                                    </Text>
                                </Box>
                                <Box
                                    width='47px'
                                    padding='4px'
                                    display='flex'
                                    alignItems='center'
                                    gap='6px'
                                >
                                    <Image src='src/assets/icons/pages/emoji.svg' width='12px' />
                                    <Text
                                        color='brand.200'
                                        fontWeight='600'
                                        fontSize='12px'
                                        lineHeight='133%'
                                    >
                                        152
                                    </Text>
                                </Box>
                            </Box>
                        </CardHeader>
                        <CardBody padding='0'>
                            <Heading
                                as='h3'
                                fontWeight='500'
                                fontSize='20px'
                                pb='8px'
                                noOfLines={1}
                            >
                                Кнели со спагетти
                            </Heading>
                            <Text fontWeight='400' fontSize='14px' noOfLines={3} mb='0' pb='0'>
                                Как раз после праздников, когда мясные продукты еще остались, но
                                никто их уже не хочет, время варить солянку.
                            </Text>
                        </CardBody>
                        <CardFooter padding='0'>
                            <HStack align='center' gap='8px' pl='57px'>
                                <Button
                                    variant='outline'
                                    bg='none'
                                    width='122px'
                                    height='32px'
                                    borderColor='blackAlpha.600'
                                    padding='0'
                                >
                                    <Flex align='center' justify='start' paddingX='12px'>
                                        <Image
                                            src='src/assets/icons/pages/bookmark.svg'
                                            width='14px'
                                            mr='6px'
                                        />
                                        <Text
                                            color='blackAlpha.800'
                                            fontWeight='600'
                                            fontSize='14px'
                                        >
                                            Сохранить
                                        </Text>
                                    </Flex>
                                </Button>
                                <Link
                                    bg='blackAlpha.900'
                                    paddingX='12px'
                                    paddingY='6px'
                                    margin='0'
                                    color='white'
                                    fontWeight='600'
                                    fontSize='14px'
                                    lineHeight='143%'
                                    borderRadius='6px'
                                    border='1px solid'
                                    _hover={{ textDecoration: 'none' }}
                                >
                                    Готовить
                                </Link>
                            </HStack>
                        </CardFooter>
                    </Stack>
                </Card>
                <Card
                    position='relative'
                    direction='row'
                    variant='outline'
                    borderRadius='8px'
                    width='668px'
                    height='244px'
                >
                    <Image
                        objectFit='cover'
                        width='346px'
                        src='src/assets/images/home-page/spicy-ham.jpg'
                        alt='Пряная ветчина по итальянски'
                        borderRadius='8px 0 0 8px'
                    />

                    <Stack paddingX='24px' paddingY='20px' width='322px' gap='24px'>
                        <CardHeader display='flex' justifyContent='space-between' padding='0'>
                            <Box
                                borderRadius='4px'
                                paddingX='8px'
                                bg='brand.100'
                                display='flex'
                                alignItems='center'
                                justifyContent='start'
                            >
                                <Image
                                    src='src/assets/icons/navigation/first-courses.svg'
                                    width='16px'
                                    mr='8px'
                                />
                                <Text fontSize='14px' fontWeight='400'>
                                    Первые блюда
                                </Text>
                            </Box>
                            <Box display='flex' flexDirection='row' gap='8px'>
                                <Box
                                    width='47px'
                                    padding='4px'
                                    gap='8px'
                                    display='flex'
                                    alignItems='center'
                                    justifyContent='start'
                                >
                                    <Image src='src/assets/icons/pages/bookmark.svg' width='12px' />
                                    <Text
                                        color='brand.200'
                                        fontWeight='600'
                                        fontSize='12px'
                                        lineHeight='133%'
                                    >
                                        159
                                    </Text>
                                </Box>
                                <Box
                                    width='47px'
                                    padding='4px'
                                    display='flex'
                                    alignItems='center'
                                    gap='6px'
                                >
                                    <Image src='src/assets/icons/pages/emoji.svg' width='12px' />
                                    <Text
                                        color='brand.200'
                                        fontWeight='600'
                                        fontSize='12px'
                                        lineHeight='133%'
                                    >
                                        257
                                    </Text>
                                </Box>
                            </Box>
                        </CardHeader>
                        <CardBody padding='0'>
                            <Heading
                                as='h3'
                                fontWeight='500'
                                fontSize='20px'
                                pb='8px'
                                noOfLines={1}
                            >
                                Пряная ветчина по итальянски
                            </Heading>
                            <Text fontWeight='400' fontSize='14px' noOfLines={3} mb='0' pb='0'>
                                Как раз после праздников, когда мясные продукты еще остались, но
                                никто их уже не хочет, время варить солянку.
                            </Text>
                        </CardBody>
                        <CardFooter padding='0'>
                            <HStack align='center' gap='8px' pl='57px'>
                                <Button
                                    variant='outline'
                                    bg='none'
                                    width='122px'
                                    height='32px'
                                    borderColor='blackAlpha.600'
                                    padding='0'
                                >
                                    <Flex align='center' justify='start' paddingX='12px'>
                                        <Image
                                            src='src/assets/icons/pages/bookmark.svg'
                                            width='14px'
                                            mr='6px'
                                        />
                                        <Text
                                            color='blackAlpha.800'
                                            fontWeight='600'
                                            fontSize='14px'
                                        >
                                            Сохранить
                                        </Text>
                                    </Flex>
                                </Button>
                                <Link
                                    bg='blackAlpha.900'
                                    paddingX='12px'
                                    paddingY='6px'
                                    margin='0'
                                    color='white'
                                    fontWeight='600'
                                    fontSize='14px'
                                    lineHeight='143%'
                                    borderRadius='6px'
                                    border='1px solid'
                                    _hover={{ textDecoration: 'none' }}
                                >
                                    Готовить
                                </Link>
                            </HStack>
                        </CardFooter>
                    </Stack>
                </Card>
                <Card
                    direction='row'
                    variant='outline'
                    borderRadius='8px'
                    width='668px'
                    height='244px'
                    position='relative'
                >
                    <Image
                        objectFit='cover'
                        width='346px'
                        src='src/assets/images/home-page/chicken-noodles.jpg'
                        alt='Лапша с курицей и шафраном'
                        borderRadius='8px 0 0 8px'
                    />

                    <Stack paddingX='24px' paddingY='20px' width='322px' gap='24px'>
                        <CardHeader display='flex' justifyContent='space-between' padding='0'>
                            <Box
                                borderRadius='4px'
                                paddingX='8px'
                                bg='brand.100'
                                display='flex'
                                alignItems='center'
                                justifyContent='start'
                            >
                                <Image
                                    src='src/assets/icons/navigation/first-courses.svg'
                                    width='16px'
                                    mr='8px'
                                />
                                <Text fontSize='14px' fontWeight='400'>
                                    Первые блюда
                                </Text>
                            </Box>
                            <Box display='flex' flexDirection='row' gap='8px'>
                                <Box
                                    width='47px'
                                    padding='4px'
                                    gap='8px'
                                    display='flex'
                                    alignItems='center'
                                    justifyContent='start'
                                >
                                    <Image src='src/assets/icons/pages/bookmark.svg' width='12px' />
                                    <Text
                                        color='brand.200'
                                        fontWeight='600'
                                        fontSize='12px'
                                        lineHeight='133%'
                                    >
                                        258
                                    </Text>
                                </Box>
                                <Box
                                    width='47px'
                                    padding='4px'
                                    display='flex'
                                    alignItems='center'
                                    gap='6px'
                                >
                                    <Image src='src/assets/icons/pages/emoji.svg' width='12px' />
                                    <Text
                                        color='brand.200'
                                        fontWeight='600'
                                        fontSize='12px'
                                        lineHeight='133%'
                                    >
                                        342
                                    </Text>
                                </Box>
                            </Box>
                        </CardHeader>
                        <CardBody padding='0'>
                            <Heading
                                as='h3'
                                fontWeight='500'
                                fontSize='20px'
                                pb='8px'
                                noOfLines={1}
                            >
                                Лапша с курицей и шафраном
                            </Heading>
                            <Text fontWeight='400' fontSize='14px' noOfLines={3} mb='0' pb='0'>
                                Как раз после праздников, когда мясные продукты еще остались, но
                                никто их уже не хочет, время варить солянку.
                            </Text>
                        </CardBody>
                        <CardFooter padding='0'>
                            <HStack align='center' gap='8px' pl='57px'>
                                <Button
                                    variant='outline'
                                    bg='none'
                                    width='122px'
                                    height='32px'
                                    borderColor='blackAlpha.600'
                                    padding='0'
                                >
                                    <Flex align='center' justify='start' paddingX='12px'>
                                        <Image
                                            src='src/assets/icons/pages/bookmark.svg'
                                            width='14px'
                                            mr='6px'
                                        />
                                        <Text
                                            color='blackAlpha.800'
                                            fontWeight='600'
                                            fontSize='14px'
                                        >
                                            Сохранить
                                        </Text>
                                    </Flex>
                                </Button>
                                <Link
                                    bg='blackAlpha.900'
                                    paddingX='12px'
                                    paddingY='6px'
                                    margin='0'
                                    color='white'
                                    fontWeight='600'
                                    fontSize='14px'
                                    lineHeight='143%'
                                    borderRadius='6px'
                                    border='1px solid'
                                    _hover={{ textDecoration: 'none' }}
                                >
                                    Готовить
                                </Link>
                            </HStack>
                        </CardFooter>
                    </Stack>
                    <HStack
                        borderRadius='4px'
                        paddingX='8px'
                        paddingY='4px'
                        bg='brand.400'
                        display='flex'
                        align='center'
                        justify='start'
                        position='absolute'
                        left='24px'
                        bottom='20px'
                        zIndex='1'
                    >
                        <Avatar
                            name='Alex Cook'
                            src='src/assets/avatars/avatar-konstantinopolskaia.png'
                            bg='brand.200'
                            boxSize='16px'
                            mr='8px'
                            textColor='white'
                        />
                        <Text fontSize='14px' fontWeight='400' lineHeight='143%'>
                            Alex Cook рекомендует
                        </Text>
                    </HStack>
                </Card>
                <Card
                    position='relative'
                    direction='row'
                    variant='outline'
                    borderRadius='8px'
                    width='668px'
                    height='244px'
                >
                    <Image
                        objectFit='cover'
                        width='346px'
                        src='src/assets/images/home-page/tom-yam.jpg'
                        alt='Том-ям с капустой кимчи'
                        borderRadius='8px 0 0 8px'
                    />

                    <Stack paddingX='24px' paddingY='20px' width='322px' gap='24px'>
                        <CardHeader display='flex' justifyContent='space-between' padding='0'>
                            <Box
                                borderRadius='4px'
                                paddingX='8px'
                                bg='brand.100'
                                display='flex'
                                alignItems='center'
                                justifyContent='start'
                            >
                                <Image
                                    src='src/assets/icons/navigation/international-dishes.svg'
                                    width='16px'
                                    mr='8px'
                                />
                                <Text fontSize='14px' fontWeight='400'>
                                    Национальные
                                </Text>
                            </Box>
                            <Box display='flex' flexDirection='row' gap='8px'>
                                <Box
                                    width='47px'
                                    padding='4px'
                                    gap='8px'
                                    display='flex'
                                    alignItems='center'
                                    justifyContent='start'
                                >
                                    <Image src='src/assets/icons/pages/bookmark.svg' width='12px' />
                                    <Text
                                        color='brand.200'
                                        fontWeight='600'
                                        fontSize='12px'
                                        lineHeight='133%'
                                    >
                                        124
                                    </Text>
                                </Box>
                                <Box
                                    width='47px'
                                    padding='4px'
                                    display='flex'
                                    alignItems='center'
                                    gap='6px'
                                >
                                    <Image src='src/assets/icons/pages/emoji.svg' width='12px' />
                                    <Text
                                        color='brand.200'
                                        fontWeight='600'
                                        fontSize='12px'
                                        lineHeight='133%'
                                    >
                                        324
                                    </Text>
                                </Box>
                            </Box>
                        </CardHeader>
                        <CardBody padding='0'>
                            <Heading
                                as='h3'
                                fontWeight='500'
                                fontSize='20px'
                                pb='8px'
                                noOfLines={1}
                            >
                                Том-ям с капустой кимчи
                            </Heading>
                            <Text fontWeight='400' fontSize='14px' noOfLines={3} mb='0' pb='0'>
                                Как раз после праздников, когда мясные продукты еще остались, но
                                никто их уже не хочет, время варить солянку.
                            </Text>
                        </CardBody>
                        <CardFooter padding='0'>
                            <HStack align='center' gap='8px' pl='57px'>
                                <Button
                                    variant='outline'
                                    bg='none'
                                    width='122px'
                                    height='32px'
                                    borderColor='blackAlpha.600'
                                    padding='0'
                                >
                                    <Flex align='center' justify='start' paddingX='12px'>
                                        <Image
                                            src='src/assets/icons/pages/bookmark.svg'
                                            width='14px'
                                            mr='6px'
                                        />
                                        <Text
                                            color='blackAlpha.800'
                                            fontWeight='600'
                                            fontSize='14px'
                                        >
                                            Сохранить
                                        </Text>
                                    </Flex>
                                </Button>
                                <Link
                                    bg='blackAlpha.900'
                                    paddingX='12px'
                                    paddingY='6px'
                                    margin='0'
                                    color='white'
                                    fontWeight='600'
                                    fontSize='14px'
                                    lineHeight='143%'
                                    borderRadius='6px'
                                    border='1px solid'
                                    _hover={{ textDecoration: 'none' }}
                                >
                                    Готовить
                                </Link>
                            </HStack>
                        </CardFooter>
                    </Stack>
                </Card>
            </SimpleGrid>
        </Box>
    );
}

export default TastiestRecepies;
