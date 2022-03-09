import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, FlatList, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import Header from './components/Header';


export default function App() {

  const [name, setName] = useState('Spencer');
  const [times, setTime] = useState([
    { title: '20 min', id: '20' },
    { title: '15 min', id: '15' },
    { title: '10 min', id: '10' },
    { title: '5 min', id: '5' },

  ])

  const handleClick = () => {
    setName('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          keyExtractor={(item) => { item.id }}
          data={times}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.title}</Text>
          )}
        />
        {/* <ScrollView>
          {times.map((time) => {
            return (
              <View>
                <Text>{time.title}</Text>
                <Button title={time.title} onPress={handleClick}></Button>
              </View>
            )
          })}
        </ScrollView> */}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderColor: '#777',
    borderWidth: 1,
    width: 200,
    margin: 10,
    height: 40,
    padding: 8,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,

  },

});
