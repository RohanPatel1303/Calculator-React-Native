import React from "react";
import { StyleSheet,View } from "react-native";
const Row=({children,styles})=>{
    return (
        <View style={style.container}>
            {children}
        </View>
    )
}
const style=StyleSheet.create(
    {container:{
        flexDirection:"row",
        marginTop:8,

    }
    }
)
export default Row;