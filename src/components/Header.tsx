import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex
      as="header"
      w="100vw"
      h={100}
      justify="center"
      align="center"
    >
      <Image src="/images/logo.svg" alt="Worldtrip Logo" h={46} />
    </Flex>
  )
}