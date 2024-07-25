
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
// import CompanyData from './components/CompanyData';
import { styles } from './style';
// import { people, users } from './constant';
// import People from './People';



const App = () => {
  const [selected, setSelected] = useState(1);

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.radioWrapper} onPress={()=>setSelected(1)}>
        <View style={styles.radioOutBox}>
          {selected === 1 ? <View style={styles.radio}></View> : null}
        </View>
        <Text style={styles.radioText}>Text1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.radioWrapper} onPress={()=>setSelected(2)}>
        <View style={styles.radioOutBox}>
          {selected === 2 ? <View style={styles.radio}></View> : null}

        </View>
        <Text style={styles.radioText}>Text2</Text>
      </TouchableOpacity>
    </View>
  );
}


export default App;

