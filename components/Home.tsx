import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Home(props: {imageUri: string}) {
    const rott = require('../assets/rott.jpeg');
    return (
        <View style={styles.viewStyle}>
          <Image
            // source={rott}
            source={{uri: props.imageUri}}
            style={styles.imgStyle}
        />
        <Text style={styles.textHeader}>...all about your animals!!!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
                imgStyle: { 
                    width: 150,
                    height: 150, 
                    borderRadius: 50
                        },
                textHeader: {
                    fontSize: 12
                },
                viewStyle: {
                    borderWidth: 0,
                }
            });
