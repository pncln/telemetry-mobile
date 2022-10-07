import React, { useState, useEffect } from 'react';
import {View, StyleSheet} from 'react-native';
import { Layout, Button, Text, Card } from '@ui-kitten/components';
import io from 'socket.io-client';

import Spacer from '../components/Spacer';

const HomeScreen = () => {   
    const [activated, setActivated] = useState(false);
    const [socketEnabled, setSocketEnabled] = useState(false);

    const socket = io('http://localhost:3000');

    const connect = () => {
        socket.connect();
    
        console.log('Connected');
    }

    const disconnect = () => {
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
