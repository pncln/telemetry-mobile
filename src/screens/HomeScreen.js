import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native';
import { Layout, Button, Text, Card } from '@ui-kitten/components';
import io from 'socket.io-client';

import Spacer from '../components/Spacer';

const HomeScreen = () => {
    const socket = io('https://e191-188-72-191-15.eu.ngrok.io', {
        autoConnect: false
    });
    const [activated, setActivated] = useState(false);
    const [socketEnabled, setSocketEnabled] = useState(false);

    const connect = () => {
        console.log('Connected');
        socket.connect();
    }

    const disconnect = () => {
        try {
            socket.disconnect();
        } catch (error) {
            console.error(error);
        }
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
