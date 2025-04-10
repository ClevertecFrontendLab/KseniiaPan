import { SearchIcon } from '@chakra-ui/icons';
import {
    Box,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    IconButton,
    Input,
    InputGroup,
    InputRightAddon,
    Select,
    Switch,
} from '@chakra-ui/react';

import { SortingIcon } from '../../components/icons/icons';

export function SearchForm() {
    return (
        <Box as='section' paddingY='32px' paddingX='190px' marginX='auto' width='898px'>
            <Heading as='h1' font-weight='700' fontSize='48px' textAlign='center' mb='32px'>
                Приятного аппетита!
            </Heading>
            <HStack marginX='auto' gap='12px' mb='16px'>
                <IconButton
                    aria-label='Sort recepies'
                    icon={<SortingIcon width='24px' height='24px' />}
                    height='48px'
                    width='48px'
                    padding='12px'
                    variant='outline'
                    borderColor='blackAlpha.600'
                    bg='none'
                    borderRadius='6px'
                ></IconButton>

                <FormControl>
                    <InputGroup width='458px' height='48px' borderColor='blackAlpha.600'>
                        <Input
                            type='text'
                            placeholder='Название или ингредиент...'
                            color='brand.300'
                            height='48px'
                            _placeholder={{
                                color: 'brand.300',
                                fontWeight: '400',
                                fontSize: '18px',
                            }}
                            borderRight='none'
                        />
                        <InputRightAddon bg='none' padding='15px' height='48px'>
                            <SearchIcon width='18px' />
                        </InputRightAddon>
                    </InputGroup>
                </FormControl>
            </HStack>
            <Box display='flex' alignItems='center' justifyContent='center' width='518px'>
                <FormControl width='268px' display='flex' alignItems='center'>
                    <FormLabel htmlFor='allergens' mb='0'>
                        Исключить мои аллергены
                    </FormLabel>
                    <Switch id='allergens' size='sm' />
                </FormControl>
                <Select placeholder='Выберите из списка...' color='blackAlpha.700' width='234px'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
            </Box>
        </Box>
    );
}

export default SearchForm;
