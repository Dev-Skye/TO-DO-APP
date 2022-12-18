import { StyleSheet, TextInput, TouchableOpacity, View, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from "react";
import {useDispatch} from "react-redux";
import {addItem} from "../redux/reducer";


function TextInputScreen({navigation}){
    const[value, setValue] = useState("")
    const dispatch = useDispatch()
    const onSaveNote = value => {
        dispatch(addItem(value))
        navigation.navigate("TextOutputScreen")
    }
    return(
        <View style={styles.container}>        
            <View style={styles.innerContainer}>
                <View style={styles.closeButtonContainer}>
                    <TouchableOpacity 
                        style={styles.closeButton}
                        onPress={() => navigation.goBack()}
                    >   
                        <AntDesign name="close" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.modalContainer}>
                    <Text style={{
                        color:"#444", 
                        fontSize: 20, 
                        fontFamily:"Raleway-Bold", 
                        }}>What do you want to do?</Text>
                    <TextInput 
                        style={{
                            height:50,
                            width: 300,
                            padding:5,
                            borderColor:"gray",
                            borderBottomWidth:1,
                            textAlign:"center",
                            fontSize: 18,
                            fontFamily:"Raleway-Bold"
                        }}
                        numberOfLines={1}
                        onChangeText={value=> setValue(value)}
                        value={value}
                        clearButtonMode="while-editing"
                    />
                    <TouchableOpacity
                        style={{
                            marginTop:10,
                            backgroundColor:"#030347",
                            width: 50,
                            height: 50,
                            alignItems:"center",
                            justifyContent:"center",
                            borderRadius: 5
                        }}
                        onPress={() => onSaveNote(value)}
                    >
                        <FontAwesome name="check" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#030347"
    },
   innerContainer:{
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent:"flex-end",
    flexDirection:"row",
    height:"30%",
    width:"100%",
    position:"absolute",
    bottom: 0,
    right: 0,
    backgroundColor:"white"
   },
   closeButtonContainer:{
    position:"absolute",
    alignItems:"flex-end",
    right:10
   },
   closeButton:{
    backgroundColor:"red",
    borderRadius: 20,
    width: 45,
    height:45,
    top:20,
    alignItems:"center",
    justifyContent:"center"
   },
   modalContainer:{
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
    margin:60,
    marginLeft:5,
    top:10,
    left:50
   }
})

export default TextInputScreen;