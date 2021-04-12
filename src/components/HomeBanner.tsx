import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";

export function HomeBanner() {
  return (
    <Box
      w="100vw"
      maxHeight={335}
      bgImage="url(/images/background-banner-home.svg)"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex
        maxWidth={1160}
        mx="auto"
        justify="space-between"
        align="center"
        h={368}
        maxHeight={368}
        p="4"
      >
        <Stack flex="1">
          <Text fontSize="4xl" fontWeight="medium" maxWidth={426}>
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text fontWeight="normal" fontSize="xl" maxWidth={524}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Stack>

        <Image
          flex="1"
          src="/images/airplane.svg"
          alt="Airplane"
          maxWidth={418}
          position="relative"
          top="10"
          right="0"
        />
      </Flex>
    </Box>
  )
}