import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import ListView from "../component/ListView";


function TextOutputScreen({navigation}){

    return(
        <>
        <View style={styles.container}>
            <Text style={styles.textstyle}>What's Up, Joy!</Text>
                 <ListView/>
            <View style={styles.circle}> 
            <TouchableOpacity onPress={()=> navigation.navigate("TextInputScreen")}> 
                <AntDesign name="plus" size={35} color="white" />
                </TouchableOpacity>
                </View>
            </View>
    </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#030347",
      //  backgroundColor:"#215a88"
    },
    circle:{
        backgroundColor: "#030347",
        width: 70,
        height: 70,
        position:"absolute",
        shadowColor: "black",
        elevation: 10,
        shadowOpacity: 0.8,
        bottom: 50,
        right:40,
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center"
    },
    
    textstyle:{
        fontSize: 35,
        color:"white",
        paddingTop: 20,
        marginVertical: 5,
        padding: 5,
        paddingBottom: 15,
        paddingLeft: 25,
        fontFamily: "Raleway-Bold"
    },  
})
export default TextOutputScreen;