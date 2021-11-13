import React, { useState, useEffect } from "react";
import { Text } from "native-base";
import ProgressCircle from "react-native-progress-circle";

const CountdownCircle = ({ duration, onCompleted }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((p) => Math.min(100, p + (100 / duration) * 16));
    }, 16);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (percent >= 100) onCompleted();
  }, [percent]);

  return (
    <ProgressCircle
      percent={percent}
      radius={50}
      borderWidth={8}
      color="#3399FF"
      shadowColor="#999"
      bgColor="#fff"
      style={{ margin: 0, padding: 0 }}
    >
      <Text fontSize={18}>Hold</Text>
    </ProgressCircle>
  );
};

export default CountdownCircle;
