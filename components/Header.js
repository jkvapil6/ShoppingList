/* eslint-disable prettier/prettier */
import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>{ title }</Text>
    </View>
  )
}

Header.defaultProps = {
  title: "Place Title Here",
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue'
  },
  heading: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
})

export default Header