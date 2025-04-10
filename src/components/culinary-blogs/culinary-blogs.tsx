import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
    Avatar,
    Box,
    Card,
    CardBody,
    CardHeader,
    Heading,
    HStack,
    Link,
    Text,
    VStack,
} from '@chakra-ui/react';

export function CulinaryBlogs() {
    return (
        <Box
            as='section'
            width='1360px'
            padding='24px'
            mb='40px'
            borderRadius='16px'
            bg='brand.500'
        >
            <HStack justify='space-between' align='center' mb='24px'>
                <Heading
                    as='h2'
                    font-weight='400'
                    fontSize='36px'
                    lineHeight='111%'
                    textAlign='left'
                >
                    Кулинарные блоги
                </Heading>
                <Link href='#' _hover={{ textDecoration: 'none' }}>
                    <HStack width='176px' paddingX='24px' gap='8px'>
                        <Text fontWeight='600' fontSize='18px' lineHeight='156%'>
                            Все авторы
                        </Text>
                        <ArrowForwardIcon boxSize='16px' />
                    </HStack>
                </Link>
            </HStack>
            <Box display='flex' gap='16px'>
                <Card
                    direction='column'
                    variant='solid'
                    bg='white'
                    borderRadius='8px'
                    width='426px'
                    height='184px'
                    paddingX='24px'
                    pt='24px'
                    pb='20px'
                >
                    <CardHeader display='flex' justifyContent='space-between' padding='0'>
                        <HStack mb='16px'>
                            <Avatar
                                name='Елена Высоцкая'
                                src='src/assets/avatars/avatar-vysotskaia.png'
                                bg='brand.200'
                                boxSize='48px'
                                mr='12px'
                                textColor='white'
                            />
                            <VStack align='start' gap='0'>
                                <Text fontSize='18px' fontWeight='500' lineHeight='156%'>
                                    Елена Высоцкая
                                </Text>
                                <Text fontSize='14px' fontWeight='400' lineHeight='143%'>
                                    @elenapovar
                                </Text>
                            </VStack>
                        </HStack>
                    </CardHeader>
                    <CardBody padding='0'>
                        <Text
                            fontWeight='400'
                            fontSize='14px'
                            lineHeight='143%'
                            noOfLines={3}
                            mb='0'
                            pt='12px'
                        >
                            Как раз после праздников, когда мясные продукты еще остались, но никто
                            их уже не хочет, время варить солянку.
                        </Text>
                    </CardBody>
                </Card>
                <Card
                    direction='column'
                    variant='solid'
                    bg='white'
                    borderRadius='8px'
                    width='426px'
                    height='184px'
                    paddingX='24px'
                    pt='24px'
                    pb='20px'
                >
                    <CardHeader display='flex' justifyContent='space-between' padding='0'>
                        <HStack mb='16px'>
                            <Avatar
                                name='Alex Cook'
                                src='src/assets/avatars/avatar-alex-cook.png'
                                bg='brand.200'
                                boxSize='48px'
                                mr='12px'
                                textColor='white'
                            />
                            <VStack align='start' gap='0'>
                                <Text fontSize='18px' fontWeight='500' lineHeight='156%'>
                                    Alex Cook
                                </Text>
                                <Text fontSize='14px' fontWeight='400' lineHeight='143%'>
                                    @funtasticooking
                                </Text>
                            </VStack>
                        </HStack>
                    </CardHeader>
                    <CardBody padding='0'>
                        <Text
                            fontWeight='400'
                            fontSize='14px'
                            lineHeight='143%'
                            noOfLines={3}
                            mb='0'
                            pt='12px'
                        >
                            Как раз после праздников, когда мясные продукты еще остались, но никто
                            их уже не хочет, время варить солянку.
                        </Text>
                    </CardBody>
                </Card>
                <Card
                    direction='column'
                    variant='solid'
                    bg='white'
                    borderRadius='8px'
                    width='426px'
                    height='184px'
                    paddingX='24px'
                    pt='24px'
                    pb='20px'
                >
                    <CardHeader display='flex' justifyContent='space-between' padding='0'>
                        <HStack mb='16px'>
                            <Avatar
                                name='Екатерина Константинопольская'
                                src='src/assets/avatars/avatar-konstantinopolskaia-1.png'
                                bg='brand.200'
                                boxSize='48px'
                                mr='12px'
                                textColor='white'
                            />
                            <VStack align='start' gap='0'>
                                <Text fontSize='18px' fontWeight='500' lineHeight='156%'>
                                    Екатерина Константинопольская
                                </Text>
                                <Text fontSize='14px' fontWeight='400' lineHeight='143%'>
                                    @bake_and_pie
                                </Text>
                            </VStack>
                        </HStack>
                    </CardHeader>
                    <CardBody padding='0'>
                        <Text
                            fontWeight='400'
                            fontSize='14px'
                            lineHeight='143%'
                            noOfLines={3}
                            mb='0'
                            pt='12px'
                        >
                            Как раз после праздников, когда мясные продукты еще остались, но никто
                            их уже не хочет, время варить солянку.
                        </Text>
                    </CardBody>
                </Card>
            </Box>
        </Box>
    );
}

export default CulinaryBlogs;
