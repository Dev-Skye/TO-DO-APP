import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

function HomeScreen({navigation}){
    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/images/img3.png")}
                style={styles.image}
            />
            <Text style={styles.textstyle}>Smart Task</Text>
            <Text style={styles.textstyle1}>Management</Text>
            <Text style={styles.textstyle2}>This smart tool is designed to help you</Text>
            <Text style={styles.textstyle3}>better manage your daily tasks.</Text>
            
            <TouchableOpacity onPress={() => navigation.navigate("TextOutputScreen")}>
            <View style={styles.textContainer}>
                <Text style={styles.textInside}>Get Started</Text>
            </View>
            
            </TouchableOpacity>
            
            </View>
       
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#030347"
    },
    textstyle:{
        fontSize: 47,
        //fontWeight:"bold",
        color:"white",
        paddingTop: 20,
        marginVertical: -15,
        padding: 5,
        paddingLeft: 25,
        fontFamily: "Raleway-Black"
    },  
    textstyle1:{
        fontSize: 47,
      //  fontWeight:"bold",
        color:"white",
        paddingLeft: 25,
        marginBottom: 15,
        fontFamily: "Raleway-Black"
    },
    textstyle2:{
        fontSize: 17,
        color: "white",
        paddingLeft: 25,
        padding:5,
        color: "#c5c5c5",
        fontFamily: "Raleway-Regular"
    },
    textstyle3:{
        fontSize: 17,
        color: "white",
        paddingLeft: 25,
        marginVertical: -5,
        color: "#c5c5c5",
        fontFamily: "Raleway-Regular"
    },
    textContainer:{
        height: 50,
        width:"70%",
        borderRadius: 8,
        backgroundColor: "#eba40b",
        paddingLeft: 25,
        alignSelf:"center",
        marginTop: 35,
        justifyContent:"center"
    },
    textInside:{
        fontFamily:"Raleway-Bold",
        fontSize: 15,
        alignSelf:"center"
    },
    image:{
        height: "50%",
        justifyContent:"center",
        marginLeft: -40,
        marginTop: 70,
    },
})

export default HomeScreen;