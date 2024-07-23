import React from 'react'
import { StyleSheet, Text, View } from 'react-native'



const CompanyData = ({ number }) => {
  return (
    <View>
      <Text style={styles.heading}>Your Score: {number}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 13,
    color: "green"
  }
})

export default CompanyData
