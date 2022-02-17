import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

export default function Input(props: {default: string, title: string}) {
  
    const [input, setInput] = useState('');
    const handleChange = (e: any) => {
        const value = e.target.value;
        setInput(value);
      }
    return (
        <View>
            <Text style={styles.textHeader}>{props.title}</Text>
            {/* <TextInput
                style={styles.inputStyle}
                defaultValue={input}
                onChange={handleChange}
            ></TextInput> */}
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
                height: 40,
                borderColor: 'gray',
                borderRadius: 10,
                borderWidth: 0.1,
                padding: 10,
                marginTop: 5,
                marginBottom: 15
            },
            textHeader: {
                fontSize: 12
            }
        });
