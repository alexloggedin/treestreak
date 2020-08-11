import React from 'react';
import {
    View, StyleSheet,
} from 'react-native';

import { Text } from 'react-native-elements';
import ProgressCircle from 'react-native-progress-circle';
import Flame from "../../assets/flame.svg"


interface StreakLogoProps {
    counter: number,
    totalScore: number,
    currentStreak: number,
}

class StreakCounter extends React.Component<StreakLogoProps, any>{

    render() {
        let { counter, totalScore, currentStreak } = this.props;
        return (
            <View style={styles.counter}>
                <Text style={styles.text}>
                    Total Score: {totalScore}
                </Text>
                <ProgressCircle
                    percent={counter}
                    radius={80}
                    borderWidth={8}
                    color="#3399FF"
                    shadowColor="#999"
                    bgColor="#fff"
                >
                    <Text style={{ fontSize: 18 }}>{`${counter}%`}</Text>
                </ProgressCircle>
                <Text  style={styles.text}>Streak: {currentStreak}</Text>
            </View>
        )
    }
}

export default StreakCounter;

const styles = StyleSheet.create({
    counter: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "auto",
        height: 150
    },
    text: {
        alignSelf: "baseline",
        marginTop: 100
    }
})