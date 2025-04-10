import {
    Box,
    Card,
    CardBody,
    CardFooter,
    Heading,
    HStack,
    Image,
    Link,
    Text,
    VStack,
} from '@chakra-ui/react';

export function VeganRecipes() {
    return (
        <Box as='section' width='1360px' mb='40px'>
            <HStack justify='space-between' align='center' mb='24px'>
                <Heading
                    as='h2'
                    font-weight='500'
                    fontSize='48px'
                    lineHeight='100%'
                    textAlign='left'
                    mb='24px'
                >
                    Веганская кухня
                </Heading>

                <Text fontWeight='500' fontSize='16px' lineHeight='150%' width='668px'>
                    Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
                    вегетарианскую диету и готовить вкусные вегетарианские блюда.
                </Text>
            </HStack>
            <Box display='flex' gap='24px'>
                <Card
                    width='322px'
                    height='192px'
                    borderRadius='8px'
                    variant='outline'
                    paddingX='24px'
                    pt='24px'
                    pb='20px'
                >
                    <CardBody padding='0' mb='24px'>
                        <Heading as='h3' fontWeight='500' fontSize='20px' noOfLines={1}>
                            Картошка, тушенная с болгарским перцем и фасолью в томатном соусе
                        </Heading>
                        <Text noOfLines={3} fontWeight='400' fontSize='14px'>
                            Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -
                            вариант сытного блюда на каждый день. Фасоль в данном случае заменяет
                            мясо, делая рагу сытным и питательным. Чтобы сократить время
                            приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но
                            в полной мере наполнено ароматами и имеет выразительный вкус за счёт
                            добавления томатной пасты.
                        </Text>
                    </CardBody>
                    <CardFooter padding='0' display='flex' justify='space-between'>
                        <Box
                            borderRadius='4px'
                            paddingX='8px'
                            bg='brand.100'
                            display='flex'
                            alignItems='center'
                            justifyContent='start'
                        >
                            <Image
                                src='src/assets/icons/navigation/second-courses.svg'
                                width='16px'
                                mr='8px'
                            />
                            <Text fontSize='14px' fontWeight='400'>
                                Вторые блюда
                            </Text>
                        </Box>
                        <Box display='flex' flexDirection='row' gap='8px'>
                            <Box width='32px' padding='4px' display='flex'>
                                <Image
                                    src='src/assets/icons/pages/bookmark.svg'
                                    width='12px'
                                    mr='6px'
                                />
                                <Text
                                    color='brand.200'
                                    fontWeight='600'
                                    fontSize='12px'
                                    lineHeight='133%'
                                >
                                    1
                                </Text>
                            </Box>
                            <Box width='32px' padding='4px' display='flex'>
                                <Image
                                    src='src/assets/icons/pages/emoji.svg'
                                    width='12px'
                                    mr='6px'
                                />
                                <Text
                                    color='brand.200'
                                    fontWeight='600'
                                    fontSize='12px'
                                    lineHeight='133%'
                                >
                                    1
                                </Text>
                            </Box>
                        </Box>
                    </CardFooter>
                </Card>
                <Card
                    width='322px'
                    height='192px'
                    borderRadius='8px'
                    variant='outline'
                    paddingX='24px'
                    pt='24px'
                    pb='20px'
                >
                    <CardBody padding='0' mb='24px'>
                        <Heading as='h3' fontWeight='500' fontSize='20px' noOfLines={1}>
                            Капустные котлеты
                        </Heading>
                        <Text noOfLines={3} fontWeight='400' fontSize='14px'>
                            Капустные котлеты по этому рецепту получаются необычайно пышными и
                            невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут
                            сделать эти чудесные котлеты из капусты одним из ваших любимых овощных
                            блюд.
                        </Text>
                    </CardBody>
                    <CardFooter padding='0' display='flex' justify='space-between'>
                        <Box
                            borderRadius='4px'
                            paddingX='8px'
                            bg='brand.100'
                            display='flex'
                            alignItems='center'
                            justifyContent='start'
                        >
                            <Image
                                src='src/assets/icons/navigation/second-courses.svg'
                                width='16px'
                                mr='8px'
                            />
                            <Text fontSize='14px' fontWeight='400'>
                                Вторые блюда
                            </Text>
                        </Box>
                        <Box display='flex' flexDirection='row' gap='8px'>
                            <Box width='32px' padding='4px' display='flex'>
                                <Image
                                    src='src/assets/icons/pages/bookmark.svg'
                                    width='12px'
                                    mr='6px'
                                />
                                <Text
                                    color='brand.200'
                                    fontWeight='600'
                                    fontSize='12px'
                                    lineHeight='133%'
                                >
                                    2
                                </Text>
                            </Box>
                            <Box width='32px' padding='4px' display='flex'>
                                <Image
                                    src='src/assets/icons/pages/emoji.svg'
                                    width='12px'
                                    mr='6px'
                                />
                                <Text
                                    color='brand.200'
                                    fontWeight='600'
                                    fontSize='12px'
                                    lineHeight='133%'
                                >
                                    1
                                </Text>
                            </Box>
                        </Box>
                    </CardFooter>
                </Card>
                <VStack gap='12px'>
                    <Card
                        borderRadius='8px'
                        variant='outline'
                        width='668px'
                        height='56px'
                        paddingX='24px'
                        paddingY='12px'
                    >
                        <CardBody padding='0'>
                            <HStack align='center' height='32px'>
                                <Image
                                    src='src/assets/icons/navigation/second-courses.svg'
                                    width='24px'
                                    mr='12px'
                                />
                                <Heading
                                    as='h3'
                                    fontWeight='500'
                                    fontSize='20px'
                                    lineHeight='140%'
                                    noOfLines={1}
                                    width='485px'
                                    padding='0'
                                >
                                    Стейк для вегетарианцев
                                </Heading>
                                <Link
                                    href=''
                                    color='brand.200'
                                    fontWeight='600'
                                    fontSize='14px'
                                    lineHeight='143%'
                                    borderRadius='6px'
                                    height='32px'
                                    border='1px solid'
                                    borderColor='brand.200'
                                    paddingX='12px'
                                    paddingY='6px'
                                    _hover={{ textDecoration: 'none' }}
                                >
                                    Готовить
                                </Link>
                            </HStack>
                        </CardBody>
                    </Card>
                    <Card
                        borderRadius='8px'
                        variant='outline'
                        width='668px'
                        height='56px'
                        paddingX='24px'
                        paddingY='12px'
                    >
                        <CardBody padding='0'>
                            <HStack align='center' height='32px'>
                                <Image
                                    src='src/assets/icons/navigation/second-courses.svg'
                                    width='24px'
                                    mr='12px'
                                />
                                <Heading
                                    as='h3'
                                    fontWeight='500'
                                    fontSize='20px'
                                    lineHeight='140%'
                                    noOfLines={1}
                                    width='485px'
                                    padding='0'
                                >
                                    Котлеты из гречки и фасоли
                                </Heading>
                                <Link
                                    href=''
                                    color='brand.200'
                                    fontWeight='600'
                                    fontSize='14px'
                                    lineHeight='143%'
                                    borderRadius='6px'
                                    height='32px'
                                    border='1px solid'
                                    borderColor='brand.200'
                                    paddingX='12px'
                                    paddingY='6px'
                                    _hover={{ textDecoration: 'none' }}
                                >
                                    Готовить
                                </Link>
                            </HStack>
                        </CardBody>
                    </Card>
                    <Card
                        borderRadius='8px'
                        variant='outline'
                        width='668px'
                        height='56px'
                        paddingX='24px'
                        paddingY='12px'
                    >
                        <CardBody padding='0'>
                            <HStack align='center' height='32px'>
                                <Image
                                    src='src/assets/icons/navigation/first-courses.svg'
                                    width='24px'
                                    mr='12px'
                                />
                                <Heading
                                    as='h3'
                                    fontWeight='500'
                                    fontSize='20px'
                                    lineHeight='140%'
                                    noOfLines={1}
                                    width='485px'
                                    padding='0'
                                >
                                    Сырный суп с лапшой и брокколи
                                </Heading>
                                <Link
                                    href=''
                                    color='brand.200'
                                    fontWeight='600'
                                    fontSize='14px'
                                    lineHeight='143%'
                                    borderRadius='6px'
                                    height='32px'
                                    border='1px solid'
                                    borderColor='brand.200'
                                    paddingX='12px'
                                    paddingY='6px'
                                    _hover={{ textDecoration: 'none' }}
                                >
                                    Готовить
                                </Link>
                            </HStack>
                        </CardBody>
                    </Card>
                </VStack>
            </Box>
        </Box>
    );
}
export default VeganRecipes;
