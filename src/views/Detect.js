import React, { useState, useEffect } from "react";
import { View, Animated, StyleSheet } from "react-native";
import { Text } from "native-base";
import { Accelerometer } from "expo-sensors";
import CountdownCircle from "../components/CountdownCircle";

const Detect = (props) => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [angle, setAngle] = useState(0);
  const [angleHeight] = useState(new Animated.Value(0));
  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    Accelerometer.setUpdateInterval(16);
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  useEffect(() => {
    const { y, z } = data;
    if (z === 0) return;
    const a = (Math.atan(Math.abs(y / z)) / Math.PI) * 180;
    setAngle(Math.floor(a));
    Animated.spring(angleHeight, {
      toValue: (a / 90) * 300,
      useNativeDriver: false,
      duration: 100,
    }).start(() => {});
  }, [data]);

  const onHoldSuccessed = () => {
    alert("Success!");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text fontSize={30}>Set Phone on Desk</Text>
        <Text fontSize={30}>Tilt 70-85°</Text>
      </View>
      <View style={styles.angleWrapper}>
        <View style={styles.angleContainer}>
          <View style={styles.angleTargetView} />
          <Animated.View style={[styles.angleView, { height: angleHeight }]}>
            <Text pt={1} textAlign="center" bold>
              {angle}°
            </Text>
          </Animated.View>
        </View>
        {angle >= 70 && angle <= 85 && (
          <CountdownCircle duration={3000} onCompleted={onHoldSuccessed} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 30,
  },
  angleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  angleContainer: {
    width: 40,
    height: 300,
    backgroundColor: "lightgray",
    borderRadius: 20,
    position: "relative",
    flexDirection: "column",
    justifyContent: "flex-end",
    borderWidth: 1,
    borderColor: "black",
    overflow: "hidden",
  },
  angleTargetView: {
    position: "absolute",
    top: 300 / 18,
    bottom: (300 * 70) / 90,
    left: 0,
    right: 0,
    width: 38,
    backgroundColor: "blue",
  },
  angleView: {
    backgroundColor: "#3399FF",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopColor: "blue",
    borderTopWidth: 1,
  },
});

export default Detect;
