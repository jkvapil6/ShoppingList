import React, {useState} from 'react'
import {View, Text, Image, StyleSheet, FlatList, Alert} from 'react-native'
// import {uuid} from 'uuidv4'

import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

const App = () => {

  const [cnt, setCnt] = useState(4)

  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Eggs'},
    {id: 3, text: 'Bread'},
    {id: 4, text: 'Juice'},
  ])

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id)
    })
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Enter some text..')
    } else {
      setCnt(cnt + 1)
      setItems((prevItems) => {
        return [{uid: cnt, text: text}, ...prevItems]
      })
    }
  }

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <Text>{cnt} Items</Text>
      <AddItem addItem={addItem} />
      <FlatList
        keyExtractor={(item, id) => String(id)}
        data={items}
        renderItem={({item}) => (
          <ListItem key={item.id} item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  heading: {
    color: 'darkslateblue',
    fontSize: 20,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
})

export default App
