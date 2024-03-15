import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
 
const Color = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [lightMode, setLightMode] = useState(false);
 
    const toggleDarkMode = () => {
        setDarkMode(true);
        setLightMode(false);
    };
 
    const toggleLightMode = () => {
        setDarkMode(false);
        setLightMode(true);
    };
 
    return (
        <View style={styles.container}>
            <View style={{ padding: 20 }}>
                <TouchableOpacity style={styles.container_check} onPress={toggleDarkMode}>
                    <View style={styles.checkbox}>
                        {darkMode && <Ionicons name="checkmark-circle" size={19} color="green" />}
                    </View>
                    <Text style={styles.label}>Dark Mode</Text>
                </TouchableOpacity>
 
                <TouchableOpacity style={styles.container_check} onPress={toggleLightMode}>
                    <View style={styles.checkbox}>
                        {lightMode && <Ionicons name="checkmark-circle" size={19} color="green" />}
                    </View>
                    <Text style={styles.label}>Light Mode</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    container_check: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    label: {
        marginLeft: 8,
    },
});
 
export default Color;
 