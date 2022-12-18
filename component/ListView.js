import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Platform } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons } from '@expo/vector-icons';
import {removeItem} from "../redux/reducer";
import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react";



function ListView() {
    
    const listItems = useSelector(state => state.itemList)
    console.log({listItems})
    const dispatch = useDispatch()

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState("date");
    const [show, setShow] = useState(false);
    const [text, setText] = useState("Set Date");

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === "ios");
        setDate(currentDate)

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        //let fTime = "Hours:" + tempDate.getHours() + '| Minutes:' + tempDate.getMinutes();
        setText(fDate);
        
        //setText(fDate + "/n" + fTime);

        console.log(fDate )
        //console.log(fDate + "(" + fTime + ")" )
    }

    
    
    const showMode =  (currentMode) => {
        setShow(true)
        setMode(currentMode);
        
    }

     

    return(
        <View
            style={{
                backgroundColor: "white",
                flex: 1,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                paddingHorizontal: 20,
                paddingVertical: 20
            }}
        >
            {listItems.length !== 0 ?(
                        <FlatList
                            data={listItems}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({item}) =>(
                                <View style={styles.listItemContainer}>
                                    <View style={{flexDirection:"column"}}>
                                    <Text>{text}</Text>
                                        <Text style={styles.itemTitle} numberOfLines={2}>{item.name}</Text>
                                        </View>
                                        <View style={styles.twobut}>
                                        <TouchableOpacity
                                            style={styles.button1}
                                            onPress={() => showMode("date")}
                                        >
                                        <FontAwesome name="calendar-plus-o" size={24} color="#030347" />
                                        </TouchableOpacity>
                                        {show && (
                                        <DateTimePicker
                                            testID="dateTimePicker"
                                            value={date}
                                            mode={mode}
                                            is24Hour={true}
                                            display="default"
                                            onChange={onChange}
                                            />
                                        )}
                                        <TouchableOpacity
                                            onPress={() => dispatch(removeItem(item.id))}
                                            style={styles.button}
                                        >
                                        <MaterialIcons name="delete" size={24} color="red" />
                                        </TouchableOpacity>
                                        </View>
                                </View>
                            )}
            /> 
            ) : (
                <Image source={require("../assets/images/pic5.png")}
                    style={{height: 300, width:"100%", marginTop: 100, justifyContent:"center", alignSelf:"center", alignItems:"center"  }}
                />
                //<Text>Your list is empty</Text>
                
            )}
            
        </View>
    )
}

const styles = StyleSheet.create({
    listItemContainer:{
        flex: 1,
        flexDirection:"row",
        paddingTop:10,
        paddingBottom:10,
        paddingRight:5,
        justifyContent:"space-between",
        width:"100%",
        borderBottomWidth:1
    },
    itemTitle:{
        fontSize:20,
        fontWeight:"400",
        fontFamily:"Raleway-Bold"
    },
    button:{
        borderRadius:8,
        backgroundColor:"#eeeded",
        padding:5,
        height: 34
    },
    twobut:{
        justifyContent:"space-around",
        width:70,
        flexDirection:"row"
    },
    button1:{
        padding:5,
        marginRight: 20
    }
})

export default ListView;