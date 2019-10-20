import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOption = {
    Clouds: {
        iconName:"cloud",
        gradient:['#757F9A', '#D7DDE8'],
        title:"Clouds",
        subtitle:"I know, fucking boring"
    }
};

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient style={styles.container}
            colors={weatherOption[condition].gradient}>
                <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <Feather name={weatherOption[condition].iconName} size={96} color="white" />
                <Text style={styles.temp}>{temp}˚</Text>
            </View>
            <View style={{...styles.halfContainer ,...styles.textContainer}}>
                <Text style={styles.title}>{weatherOption[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOption[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textContainer: {
        alignItems: "flex-start"
    }, 
    title: {
        fontSize: 44,
        color: "white",
        fontWeight: "200",
        marginBottom: 10
    },
    subtitle: {
        fontSize: 24,
        color: "white",
        fontWeight: "600"
    }
})