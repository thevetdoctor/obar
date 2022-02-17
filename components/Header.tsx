import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function Header() {
    return (
        <View 
            style={{
                flexDirection: 'row', 
                alignSelf: 'center'
            }}>
            <Tab text='Pickup'></Tab>
            <Tab text='Deivery'></Tab>
        </View>
    )
}

const Tab = (props: {text: string}) => (
    <TouchableOpacity 
        style={{
            backgroundColor: '#000', 
            borderRadius: 30, 
            paddingHorizontal: 15, 
            paddingVertical: 5
        }}>
        <Text style={{color: '#fff'}}>{props.text}</Text>
    </TouchableOpacity>
) 