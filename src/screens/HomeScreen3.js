import React, { useState, useEffect, Component } from 'react';
import {View, StyleSheet} from 'react-native';
import { Layout, Button, Text, Card } from '@ui-kitten/components';
import io from 'socket.io-client';

import Spacer from '../components/Spacer';

class HomeScreen extends Component {
    

    render() {
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
