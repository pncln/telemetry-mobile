import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native';
import { Layout, Button, Text, Card } from '@ui-kitten/components';


const HomeScreen = () => {
    return (
        <Layout style={styles.layout}>
            <View style={styles.container}>
                <Text style={styles.header}>
                    Test
                </Text>
                <View style={{ display: 'flex', justifyContent: 'right' }}>
                    <Button>
                        ON
                    </Button>
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
