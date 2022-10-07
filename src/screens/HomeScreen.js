import React, { useState, useEffect } from 'react';
import {View, StyleSheet} from 'react-native';
import { Layout, Button, Text, Card } from '@ui-kitten/components';
import io from 'socket.io-client';
import * as Location from 'expo-location';

import Spacer from '../components/Spacer';

const HomeScreen = () => {   
    const [activated, setActivated] = useState(false);
    const [intervalId, setIntervalId] = useState(0);
    const [socketEnabled, setSocketEnabled] = useState(false);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    async function getCurrentLocation() {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
        }

        let locco = await Location.getCurrentPositionAsync({});
        setLocation(locco);
    }

    // const locInterval = setInterval(() => {
    //     let loc = getCurrentLocation();
    //     socket.emit('send_location', loc);
    // }, 1000) }

    // useEffect(() => {
    //     (async () => {
          
    //       let { status } = await Location.requestForegroundPermissionsAsync();
    //       if (status !== 'granted') {
    //         setErrorMsg('Permission to access location was denied');
    //         return;
    //       }
    
    //       let location = await Location.getCurrentPositionAsync({});
    //       console.log(location);
    //       setLocation(location);
    //     })();
    //   }, []);

    const [socket, setSocket] = useState(() => {
        const socket = io('http://localhost:3000');
        return socket;
      });

    const connect = () => {
        socket.connect();
        console.log('Connected');

        const newIntervalId = setInterval(() => {
            socket.emit('send_location', location);
        }, 1000);
        setIntervalId(newIntervalId) };

    const disconnect = () => {
        clearInterval(intervalId);
        setIntervalId(0);
        console.log('discon func')
        socket.disconnect();
        
    }

    const handleOn = () => {
        setActivated(true);
        setSocketEnabled(true);

        connect();
    }

    const handleOff = () => {
        setActivated(false);
        setSocketEnabled(false);

        disconnect();
    }

    return (
        <Layout style={styles.layout}>
            <View style={styles.container}>
                <Text style={styles.header} category='h4'>
                    SERVER STATUS
                </Text>
                <Spacer />
                <Spacer />
                <View>
                    
                    {activated ? <Button onPress={handleOff}>
                        ON
                    </Button> : <Button status='danger' onPress={handleOn}>
                        OFF
                    </Button> }
                </View>
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '75%'
    },
    header: {
        textAlign: 'center'
    },
    saveMe: {
        alignSelf: 'center'
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
})

export default HomeScreen;
