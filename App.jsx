
import React, { useEffect, useState } from 'react';
import { Button, FlatList, ScrollView, SectionList, Text, TextInput, View } from 'react-native';
import CompanyData from './components/CompanyData';
import { styles } from './style';
import { people, users } from './constant';
import People from './People';



const App = () => {
  const [number, setNumber] = useState(0)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [age, setAge] = useState(0);
  const [details, setDetails] = useState(false);

  const ClearHandler = () => {
    setDetails(false);
    setName("");
    setEmail("");
    setPass("");
    setAge("");
  }

  return (
    <View>
      {/* <Text style={styles.heading}>Increment / Decrement Game</Text>
      <CompanyData number={number} />
      <View style={styles.rowAroundCenterFlex}>

        <View style={styles.buttonWrapper}>
          <Button color={"green"} title='Increment' onPress={() => setNumber(number + 1)} />
        </View>

        <View style={styles.buttonWrapper}>
          <Button color={"red"} title='Decrement' onPress={() => setNumber(number - 1)} />
        </View>

      </View> */}

      {/* Now Input */}
      {/* <Text style={styles.heading}>Input Box</Text>
      <Text style={styles.heading}>Name: {name}</Text>
      <View style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", rowGap: 10 }}>
        <TextInput placeholder='Enter Your Name' style={styles.input} onChangeText={(text) => setName(text)} value={name}  />
        <View style={{width:"97%"}}>
          <Button color={"black"} onPress={() => setName("")} title='Submit' />
        </View>
      </View> */}

      {/* Form In React Native */}
      {/* <Text style={styles.heading}>Login Form</Text>
      <View style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", rowGap: 15, marginTop:10 }}>
        {details ?
          <>
            <Text style={styles.heading}>Name: {name}</Text>
            <Text style={styles.heading}>Age: {age}</Text>
            <Text style={styles.heading}>Email: {email}</Text>
            <Text style={styles.heading}>Password: {pass}</Text>
          </> : <>
            <TextInput
              placeholder='Enter Your Name'
              style={styles.input}
              onChangeText={(text) => setName(text)}
              value={name}
            />
            <TextInput
              placeholder='Enter Your Age'
              style={styles.input}
              onChangeText={(text) => setAge(text)}
              value={age}
              keyboardType='numeric'
            />
            <TextInput
              placeholder='Enter Your Email'
              style={styles.input}
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <TextInput
              placeholder='Enter Your Password'
              style={styles.input}
              onChangeText={(text) => setPass(text)}
              value={pass}
              secureTextEntry
            />
          </>}
        <View style={{ width: "97%" }}>
          <Button color={"lightblue"} title='Print Details' onPress={() => setDetails(!details)} />
        </View>
        <View style={{ width: "97%" }}>
          <Button color={"black"} title='Clear Data' onPress={ClearHandler} />
        </View>
      </View> */}


      {/* Flat List */}
      {/* <FlatList
        data={users}
        renderItem={({ item }) => <View style={{ display: "flex", flexDirection: "column" }}>
          <View style={{ display: "flex", flexDirection: "row", columnGap: 15, backgroundColor:"lightblue", margin:10, paddingVertical:4, paddingHorizontal:8, borderRadius:4 }}>
            <Text style={{ fontSize: 22, color: "black" }}>{item?.name}</Text>
            <Text style={{ fontSize: 22, color: "black" }}>({item?.role})</Text>
          </View>

        </View>}
        keyExtractor={(item) => item?.id}
      /> */}

      {/* Using Map */}
      {/* <ScrollView style={{marginBottom:10}}>
        {users.map((item) => {
          return (
            <View key={item?.id} style={{ display: "flex", flexDirection: "row", columnGap: 15, backgroundColor: "lightblue", margin: 10, paddingVertical: 4, paddingHorizontal: 8, borderRadius: 4 }}>
              <Text style={{ fontSize: 22, color: "black" }}>{item?.name}</Text>
              <Text style={{ fontSize: 22, color: "black" }}>({item?.role})</Text>
            </View>
          )
        })}
      </ScrollView> */}


      {/* Dynamic Grid */}
      {/* <Text style={styles.heading}>Dynamic Grid</Text>
      <View style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", padding: 10, marginTop: 10, rowGap: 8, columnGap: 5 }}>
        <Text style={styles.grid}>
          Hello
        </Text>
        <Text style={styles.grid}>
          Hello
        </Text>
        <Text style={styles.grid}>
          Hello
        </Text>
        <Text style={styles.grid}>
          Hello
        </Text>
        <Text style={styles.grid}>
          Hello
        </Text>
        <Text style={styles.grid}>
          Hello
        </Text>
      </View> */}


      {/* Section List */}
      <Text style={styles.heading}>Section List</Text>
      <SectionList
        sections={people}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <People item={item} />}
        renderSectionHeader={({ section: { name, id } }) => (
          <Text style={{ fontSize: 22, color: "black" }}>{id}: {name}</Text>
        )}
      />


    </View>
  );
}


export default App;

