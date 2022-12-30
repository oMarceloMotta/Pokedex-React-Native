import { Text, Center, Flex, Image, VStack } from 'native-base';
import React from 'react';

export default function PokemonCard({ name, image, id }: any) {
  return (
    <Center
      width="full"
      bg="primary.800"
      borderColor="blue.500"
      minWidth="200"
      mb={1}
      pt={5}>
      <Flex direction="row" mb="2.5" mt="1.5" height={110}>
        <Center>
          <VStack minWidth={130} flexDirection="column">
            <Text
              isTruncated
              color="blueGray.100"
              textTransform="uppercase"
              fontSize="sm">
              {id}
            </Text>
            <Text
              isTruncated
              color="blueGray.100"
              textTransform="uppercase"
              fontSize="lg">
              {name}
            </Text>
          </VStack>
        </Center>
        <Image
          alt="Photo Pokemon"
          source={{
            uri: image,
          }}
          size={20}
        />
      </Flex>
    </Center>
  );
}
