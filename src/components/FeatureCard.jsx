import * as React from 'react'
import { Text, Stack, Flex, Image } from "@chakra-ui/react";

export default function FeatureCard(props) {
  const { title, text, image } = props;

  return (
    <Stack bg="#3A6DCC" align="center" p={"2"} rounded={"30px"}>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        mt={5}
        mb={1}
      >
        <Image src={image} />
      </Flex>

      <Text color={"white"} fontWeight={600}>
        {title}
      </Text>
      <Text color={"white"}>{text}</Text>
    </Stack>
  );
}
