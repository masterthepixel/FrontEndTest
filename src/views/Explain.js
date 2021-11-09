import React from 'react';
import {Box, Center, Text, Button} from 'native-base';

const Explain = (props) => {
  return (
    <Center flex={1} safeArea>
      <Box flex={1} mx={5}>
        <Text mb={5}>Pick any infographic at this search for "How to Do a Squat" and implement a 3-4 step explainer as a
          React Native screen.</Text>
        <Text mb={5}>Tell us what your source is in the comments.</Text>
        <Text>https://www.google.com/search?q=how+to+do+a+squat+infographic&tbm=isch</Text>

      </Box>
      <Button onPress={() => props.navigation.navigate("Detect")}>Go to Detection</Button>
    </Center>
  )
}


export default Explain;
