import React from 'react'
import { Text, View } from 'react-native'

const People = ({ item }) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <Text style={{ marginLeft: 20 }}>{item}</Text>
        </View>
    )
}

export default People

