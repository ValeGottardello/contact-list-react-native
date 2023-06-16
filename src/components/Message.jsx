import React from 'react';
import { Alert } from 'react-native';

export default function Message(message, details) {
    Alert.alert(`${message}`, `${details}`, [
            { text: 'Close' }
    ])
}