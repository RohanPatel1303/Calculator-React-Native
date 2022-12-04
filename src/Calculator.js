import React,{Component} from "react";
import { Button,Text, SafeAreaView, TouchableOpacity,StyleSheet } from "react-native";
import ButtonCalc from "./ButtonCalc";
import Calc from "./Calc";
import { initialstate } from "./Calc";
import Row from "./RowComponent";
import { useState } from "react";

const Calculator=()=>{
    const [state,setState]=useState(initialstate)
    Handletap=(type,value)=>{
        setState(Calc(type,value,state))
    }
console.log(state)
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.value}>
                {parseFloat(state.currentvalue).toLocaleString()}
            </Text>
            <Row>
                <ButtonCalc text="C" Theme="secondary" onPress={()=>Handletap("clear")}>

                </ButtonCalc>

                <ButtonCalc text="+/-" Theme="secondary" onPress={()=>this.Handletap("posneg")}>

                </ButtonCalc>
                <ButtonCalc text="%" Theme="secondary" onPress={()=>this.Handletap("percentage")}>

                </ButtonCalc>
                <ButtonCalc text="/" Theme="accent" onPress={()=>Handletap("operator","/")}>

                </ButtonCalc>
                
            </Row>
            <Row>
                <ButtonCalc text="7" onPress={()=>Handletap("number",7)}></ButtonCalc>
                <ButtonCalc text="8" onPress={()=>Handletap("number",8)}></ButtonCalc>
                <ButtonCalc text="9" onPress={()=>Handletap("number",9)}></ButtonCalc>
                <ButtonCalc text="X" Theme="accent" onPress={()=>Handletap("operator","*")}></ButtonCalc>

            </Row>
            <Row>
                <ButtonCalc text="4" onPress={()=>Handletap("number",4)}></ButtonCalc>
                <ButtonCalc text="5" onPress={()=>Handletap("number",5)}></ButtonCalc>
                <ButtonCalc text="6" onPress={()=>Handletap("number",6)}></ButtonCalc>
                <ButtonCalc text="-" Theme="accent" onPress={()=>Handletap("operator","-")}></ButtonCalc>

            </Row>
            <Row>
                <ButtonCalc text="1" onPress={()=>Handletap("number",1)}></ButtonCalc>
                <ButtonCalc text="2" onPress={()=>Handletap("number",2)}></ButtonCalc>
                <ButtonCalc text="3" onPress={()=>Handletap("number",3)}></ButtonCalc>
                <ButtonCalc text="+" Theme="accent" onPress={()=>Handletap("operator","+")}></ButtonCalc>

            </Row>
            <Row>
                <ButtonCalc text="0" onPress={()=>Handletap("number",0)}></ButtonCalc>
                <ButtonCalc text="." onPress={()=>Handletap("number",".")}></ButtonCalc>
                <ButtonCalc
                text="="
                Theme="primary"
                onPress={()=>Handletap("equal","=")}>

                </ButtonCalc>

            </Row>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#202020",
        justifyContent:"center",
        
    },
    value:{
        color:"#fff",
        fontSize:42,
        textAlign:"right",
        marginRight:20,
        marginBottom:10,
    }
})
export default Calculator;