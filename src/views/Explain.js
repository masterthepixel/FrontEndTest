import React, { useState, useRef } from "react";
import { StyleSheet, Image } from "react-native";
import { Box, Center, Text, Button, Flex, VStack, HStack } from "native-base";
import Swiper from "react-native-swiper";

const Explain = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const swiperRef = useRef(null);
  const FONT_SIZE = 16;

  const onChangeIndex = (offset) => {
    if (slideIndex === 2 && offset === 1) {
      props.navigation.navigate("Detect");
    } else if (swiperRef) {
      swiperRef.current.scrollTo(slideIndex + offset);
    }
  };

  return (
    <Center flex={1} safeArea backgroundColor="blue.200">
      <Swiper
        ref={swiperRef}
        style={styles.wrapper}
        loop={false}
        showsButtons={false}
        index={slideIndex}
        onIndexChanged={setSlideIndex}
        showsPagination={false}
      >
        <Box style={styles.slide}>
          <Image
            source={require("../../assets/images/squat-1.png")}
            style={styles.image}
          />
          <VStack px={5}>
            <HStack>
              <Text fontSize={FONT_SIZE} bold>
                A:{" "}
              </Text>
              <Text fontSize={FONT_SIZE}>
                Roll the shoulders back & down away from the ears
              </Text>
            </HStack>
            <HStack>
              <Text fontSize={FONT_SIZE} bold>
                B:{" "}
              </Text>
              <Text fontSize={FONT_SIZE}>Hips stacked over knees</Text>
            </HStack>
            <HStack>
              <Text fontSize={FONT_SIZE} bold>
                C:{" "}
              </Text>
              <Text fontSize={FONT_SIZE}>Kness over ankles</Text>
            </HStack>
            <HStack>
              <Text fontSize={FONT_SIZE} bold>
                D:{" "}
              </Text>
              <Text fontSize={FONT_SIZE}>
                Feet a little wider than shoulder-width apart
              </Text>
            </HStack>
          </VStack>
        </Box>
        <Box style={styles.slide}>
          <Image
            source={require("../../assets/images/squat-2.png")}
            style={styles.image}
          />
          <VStack px={5}>
            <HStack>
              <Text fontSize={FONT_SIZE} bold>
                E:{" "}
              </Text>
              <Text fontSize={FONT_SIZE}>Head facing forward</Text>
            </HStack>
            <HStack>
              <Text fontSize={FONT_SIZE} bold>
                F:{" "}
              </Text>
              <Text fontSize={FONT_SIZE}>
                Keep a neutral spline to avoid stress on the lower back
              </Text>
            </HStack>
            <HStack>
              <Text fontSize={FONT_SIZE} bold>
                G:{" "}
              </Text>
              <Text fontSize={FONT_SIZE}>
                Send hips backwards as the knees begin to bend
              </Text>
            </HStack>
          </VStack>
        </Box>
        <Box style={styles.slide}>
          <Image
            source={require("../../assets/images/squat-3.png")}
            style={styles.image}
          />
          <VStack px={5}>
            <HStack>
              <Text fontSize={FONT_SIZE} bold>
                H:{" "}
              </Text>
              <Text fontSize={FONT_SIZE}>keep body weight in the heels</Text>
            </HStack>
            <HStack>
              <Text fontSize={FONT_SIZE} bold>
                I:{" "}
              </Text>
              <Text fontSize={FONT_SIZE}>Chest & shoulders stay up right</Text>
            </HStack>
          </VStack>
        </Box>
      </Swiper>
      <Flex justify="space-between" direction="row" width="100%" px={5}>
        <Button
          onPress={() => onChangeIndex(-1)}
          isDisabled={slideIndex === 0}
          backgroundColor="gray.500"
        >
          {"< Prev"}
        </Button>
        <Button
          onPress={() => onChangeIndex(1)}
          backgroundColor={slideIndex === 2 ? "green.600" : "blue.500"}
        >
          {slideIndex === 2 ? "Go to Detection" : "Next >"}
        </Button>
      </Flex>
    </Center>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    resizeMode: "contain",
  },
});

export default Explain;
