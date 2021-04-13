import { Flex, Image, Text } from "@chakra-ui/react";

interface CategoryProps {
  image: string;
  description: string;
}

export function Category({ image, description }: CategoryProps) {
  return (
    <Flex
      flexDir="column"
      flex="1"
      justify="center"
      align="center"
    >
      <Image src={image} alt={description} />
      <Text color="text-color-secondary" fontWeight="semibold" mt="4">{description}</Text>
    </Flex>
  )
}