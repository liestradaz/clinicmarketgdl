import * as React from 'react'
import { Text, Stack, Flex, Image, Heading } from "@chakra-ui/react";

export default function FeatureCard(props) {
  const { title, text, image } = props;

  return (
    <Stack bg="#3A6DCC" align="center" p={6} rounded={"30px"} h={"3xs"}>
      <Flex
        w={20}
        h={20}
        align={"center"}
        justify={"center"}
      >
        <Image src={image} />
      </Flex>

      <Heading size='md' color={"white"}  textAlign={"center"}>
        {title}
      </Heading>
      <Text color={"white"} textAlign={"center"}>{text}</Text>
    </Stack>
  );
}
