import { Flex } from "@chakra-ui/react";
import { Category } from "./TravelType";

export function TravelTypes() {
  return (
    <Flex
      maxWidth={1160}
      m="80px auto 0"
      align="center"
      justify="space-between"
    >
      <Category image="/images/icons/cocktail.svg" description="vida noturna" />
      <Category image="/images/icons/surf.svg" description="praia" />
      <Category image="/images/icons/building.svg" description="moderno" />
      <Category image="/images/icons/museum.svg" description="clássico" />
      <Category image="/images/icons/earth.svg" description="e mais..." />
    </Flex>
  )
}