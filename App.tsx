import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, SafeAreaView } from 'react-native';
// import Charts from './components/Chart';
import Header from './components/Header';
import Home from './components/Home';
import Input from './components/Input';
const rott = require('./assets/rott.jpeg');
const image = { uri: "https://images.unsplash.com/photo-1632231288605-b881ab02cb89?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" };

export default function App() {
  const count = [
    {c: 'https://images.unsplash.com/photo-1632231288605-b881ab02cb89?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
    {c: 'https://images.unsplash.com/photo-1632239649043-68773312630b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    c: 'https://images.unsplash.com/photo-1632238248877-a738016cdbcf?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
  ];
 
  return (
        <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Text style={styles.headerStyle}>Animalworld NG</Text>
            <View style={styles.titleStyle}>
              <Header />
            </View>
            {/* <Charts /> */}
            {count.map((item, idx) => (
              <View key={idx}>
                <Home imageUri={item.c} />
                <Input default='Enter  text' title={`Input ${idx + 1}`} />
              </View>
              )
              )}
              <Text style={styles.footerStyle}>...all about your animals!!!</Text>
              </ImageBackground>
          </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#eee'
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    headerStyle: { 
      fontSize: 25, 
      alignSelf: 'center', 
      marginTop: 20,
      paddingVertical: 15,
      marginBottom: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      backgroundColor: 'grey',
      color: '#fff',
      width: '100%',
      textAlign: 'center',
    },
    titleStyle: {
      backgroundColor: '#fff', 
      padding: 5, 
      borderRadius: 15, 
      marginBottom: 15
    },
    footerStyle: { 
      fontSize: 15, 
      alignSelf: 'center', 
      marginTop: 20,
      paddingVertical: 15,
      position: 'relative',
      bottom: 0,
      backgroundColor: 'gray',
      color: '#fff',
      width: '100%',
      textAlign: 'center'
    }
});
