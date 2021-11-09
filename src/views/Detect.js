import React from 'react';
import {Center, Text, Button, Box} from "native-base";


const Detect = (props) => {
  return (
    <Center flex={1} safeArea>
      <Box flex={1}>
        <Text mb={5}>Reimplement the interactive angle detection tool that succeeds when the phone is between 70-85&deg; for 3 seconds. The countdown animation thing is optional, but please provide some indicator that the user is doing the right thing.</Text>
        <Text mb={5}>A video of the angle detection widget is in /assets/accelerometer.mov. We just need the widget part, ignore the rest of the UI.</Text>
      </Box>
      <Button onPress={() => props.navigation.navigate("Explain")}>Go to the Exercise Explainer</Button>
    </Center>
  )
}

export default Detect;
