import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import {
    Box,
    Card,
    CardBody,
    CardFooter,
    Heading,
    IconButton,
    Image,
    Text,
} from '@chakra-ui/react';

export function NewRecepies() {
    return (
        <Box as='section' width='1360px' mb='40px'>
            <Heading as='h2' font-weight='500' fontSize='48px' textAlign='left' mb='24px'>
                Новые рецепты
            </Heading>
            <Box position='relative'>
                <IconButton
                    position='absolute'
                    top='147px'
                    left='-8px'
                    zIndex='1'
                    aria-label='New recepies'
                    icon={<ArrowBackIcon color='white' boxSize='22px' />}
                    width='48px'
                    bg='black'
                    _hover={{
                        background: 'gray.900',
                    }}
                />
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='start'
                    overflow='hidden'
                    gap='24px'
                >
                    <Card
                        width='322px'
                        height='414px'
                        borderRadius='8px'
                        variant='outline'
                        overflow='hidden'
                    >
                        <Image
                            src='src/assets/images/home-page/solianka.jpg'
                            alt='Солянка с грибами'
                            objectFit='fill'
                            width='322px'
                        />
                        <CardBody height='100px' paddingX='24px' pt='16px' pb='24px'>
                            <Heading as='h3' fontWeight='500' fontSize='20px' noOfLines={1}>
                                Солянка с грибами
                            </Heading>
                            <Text noOfLines={3} fontWeight='400' fontSize='14px'>
                                Как раз после праздников, когда мясные продукты еще остались, но
                                никто их уже не хочет, время варить солянку.
                            </Text>
                        </CardBody>
                        <CardFooter
                            paddingX='24px'
                            pt='0'
                            pb='20px'
                            display='flex'
                            justifyContent='space-between'
                        >
                            <Box
                                borderRadius='4px'
                                paddingX='8px'
                                bg='brand.400'
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
                                    width='32px'
                                    padding='4px'
                                    display='flex'
                                    alignItems='center'
                                    justifyContent='start'
                                >
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
                                <Box width='32px' padding='4px' display='none'>
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
                                        0
                                    </Text>
                                </Box>
                            </Box>
                        </CardFooter>
                    </Card>
                    <Card
                        width='322px'
                        height='414px'
                        borderRadius='8px'
                        variant='outline'
                        overflow='hidden'
                    >
                        <Image
                            src='src/assets/images/home-page/cabbage-stake.jpg '
                            alt='Капустные котлеты'
                            objectFit='fill'
                            width='322px'
                        />
                        <CardBody height='100px' paddingX='24px' pt='16px' pb='24px'>
                            <Heading as='h3' fontWeight='500' fontSize='20px' noOfLines={1}>
                                Капустные котлеты
                            </Heading>
                            <Text noOfLines={3} fontWeight='400' fontSize='14px'>
                                Капустные котлеты по этому рецепту получаются необычайно пышными и
                                невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка
                                помогут сделать эти чудесные котлеты из капусты одним из ваших
                                любимых овощных блюд.
                            </Text>
                        </CardBody>
                        <CardFooter
                            paddingX='24px'
                            pt='0'
                            pb='20px'
                            display='flex'
                            justify='space-between'
                        >
                            <Box
                                borderRadius='4px'
                                paddingX='8px'
                                bg='brand.400'
                                display='flex'
                                alignItems='center'
                                justifyContent='start'
                            >
                                <Image
                                    src='src/assets/icons/navigation/vegan-dishes.svg'
                                    width='16px'
                                    mr='8px'
                                />
                                <Text fontSize='14px' fontWeight='400'>
                                    Веганские блюда
                                </Text>
                            </Box>
                            <Box display='flex' flexDirection='row' gap='8px'>
                                <Box
                                    width='32px'
                                    padding='4px'
                                    display='flex'
                                    alignItems='center'
                                    justifyContent='start'
                                >
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
                                <Box
                                    width='32px'
                                    padding='4px'
                                    display='flex'
                                    alignItems='center'
                                    justifyContent='start'
                                >
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
                        height='414px'
                        borderRadius='8px'
                        variant='outline'
                        overflow='hidden'
                    >
                        <Image
                            src='src/assets/images/home-page/pacakes.jpg'
                            alt='Оладьи на кефире "Пышные"'
                            objectFit='fill'
                            width='322px'
                        />
                        <CardBody height='100px' paddingX='24px' pt='16px' pb='24px'>
                            <Heading as='h3' fontWeight='500' fontSize='20px' noOfLines={1}>
                                Оладьи на кефире "Пышные"
                            </Heading>
                            <Text noOfLines={3} fontWeight='400' fontSize='14px'>
                                Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую
                                пышные кефирные оладьи на завтрак.
                            </Text>
                        </CardBody>
                        <CardFooter
                            paddingX='24px'
                            pt='0'
                            pb='20px'
                            display='flex'
                            justify='space-between'
                        >
                            <Box
                                borderRadius='4px'
                                paddingX='8px'
                                bg='brand.400'
                                display='flex'
                                alignItems='center'
                                justifyContent='start'
                            >
                                <Image
                                    src='src/assets/icons/navigation/desserts.svg'
                                    width='16px'
                                    mr='8px'
                                />
                                <Text fontSize='14px' fontWeight='400'>
                                    Десерты, выпечка
                                </Text>
                            </Box>
                            <Box display='flex' flexDirection='row' gap='8px'>
                                <Box width='32px' padding='4px' display='none'>
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
                                        0
                                    </Text>
                                </Box>
                                <Box
                                    width='32px'
                                    padding='4px'
                                    display='flex'
                                    alignItems='center'
                                    justifyContent='start'
                                >
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
                        height='414px'
                        borderRadius='8px'
                        variant='outline'
                        overflow='hidden'
                    >
                        <Image
                            src='src/assets/images/home-page/health-salad.jpg'
                            alt='Салат "Здоровье"'
                            objectFit='fill'
                            width='322px'
                        />
                        <CardBody height='100px' paddingX='24px' pt='16px' pb='24px'>
                            <Heading as='h3' fontWeight='500' fontSize='20px' noOfLines={1}>
                                Салат "Здоровье"
                            </Heading>
                            <Text noOfLines={3} fontWeight='400' fontSize='14px'>
                                Сельдерей очень полезен для здоровья, пора набираться витаминов. Не
                                салат, а сплошное удовольствие:) Вкусный, необычный, а главное
                                быстрый.
                            </Text>
                        </CardBody>
                        <CardFooter
                            paddingX='24px'
                            pt='0'
                            pb='20px'
                            display='flex'
                            justify='space-between'
                        >
                            <Box
                                borderRadius='4px'
                                paddingX='8px'
                                bg='brand.400'
                                display='flex'
                                alignItems='center'
                                justifyContent='start'
                            >
                                <Image
                                    src='src/assets/icons/navigation/salads.svg'
                                    width='16px'
                                    mr='8px'
                                />
                                <Text fontSize='14px' fontWeight='400'>
                                    Салаты
                                </Text>
                            </Box>
                            <Box display='flex' flexDirection='row' gap='8px'>
                                <Box width='32px' padding='4px' display='none'>
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
                                        0
                                    </Text>
                                </Box>
                                <Box width='32px' padding='4px' display='none'>
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
                                        0
                                    </Text>
                                </Box>
                            </Box>
                        </CardFooter>
                    </Card>
                </Box>
                <IconButton
                    position='absolute'
                    top='147px'
                    right='-8px'
                    zIndex='1'
                    aria-label='New recepies'
                    icon={<ArrowForwardIcon color='white' boxSize='22px' />}
                    width='48px'
                    bg='black'
                    _hover={{
                        background: 'gray.900',
                    }}
                />
            </Box>
        </Box>
    );
}

export default NewRecepies;
