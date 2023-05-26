import React from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

const List = ({data}) =>(
  <FlatList
        data={data}
        keyExtractor={(item,index)=>index.toString()}
        renderItem={({item})=><View style={styles.listContainer}><Text>Name: {item.name}, Place: {item.place}</Text></View>}
       />
)

const App=()=> {
  const [name,setName] = React.useState('')
  const [place,setPlace] = React.useState('')
  const [data,setData] = React.useState([])
 
  return (
    <View style={styles.container}>
      <Text>Enter name and place</Text>
      <TextInput style= {styles.input}  
        value={name}
        placeholder='Name' 
        onChangeText={setName}/>
      <TextInput style = {styles.input} 
        value={place} 
        placeholder='Place'
        onChangeText={setPlace}/>
      <Button title='Add'
      onPress={()=>{
        setData([...data,{name: name, place: place}])
        setPlace('')
        setName('')
        }}
        style={{marginVertical: 20}}/>
      <Button title='Clear list'
       onPress={()=>setData([])}
       style={{marginVertical: 20}}
      />
      <List data={data}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
    marginHorizontal: 10
    },
    input: {
      height: 40,
      marginVertical: 12,
      borderWidth: 1,
      padding: 10
    },
    listContainer:{
      height: 30,
      borderWidth: 1,
      margin: 10,
      alignItems: 'center'
    }
});

export default App;