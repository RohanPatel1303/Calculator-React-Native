import React, { Component } from "react";
import { Button, Text, SafeAreaView,ScrollView, View, TouchableOpacity, StyleSheet } from "react-native";
import ButtonCalc from "./ButtonCalc";
import Calc from "./Calc";
import { initialstate } from "./Calc";
import Row from "./RowComponent";
import { useState } from "react";

const Calculator = () => {
    const [state, setState] = useState(initialstate)
    Handletap = (type, value) => {
        setState(Calc(type, value, state))
    }
    console.log(state)
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.value}>
                    {parseFloat(state.currentvalue).toLocaleString()}
                </Text>


            </View>
            <View>
                <Row>
                    <ButtonCalc text="C" Theme="red" onPress={() => Handletap("clear")}>

                    </ButtonCalc>

                    <ButtonCalc text="+/-" Theme="accent" onPress={() => this.Handletap("posneg")}>

                    </ButtonCalc>
                    <ButtonCalc text="%" Theme="accent" onPress={() => this.Handletap("percentage")}>

                    </ButtonCalc>
                    <ButtonCalc text="/" Theme="accent" onPress={() => Handletap("operator", "/")}>

                    </ButtonCalc>

                </Row>
                <Row>
                    <ButtonCalc text="7" onPress={() => Handletap("number", 7)}></ButtonCalc>
                    <ButtonCalc text="8" onPress={() => Handletap("number", 8)}></ButtonCalc>
                    <ButtonCalc text="9" onPress={() => Handletap("number", 9)}></ButtonCalc>
                    <ButtonCalc text="X" Theme="accent" onPress={() => Handletap("operator", "*")}></ButtonCalc>

                </Row>
                <Row>
                    <ButtonCalc text="4" onPress={() => Handletap("number", 4)}></ButtonCalc>
                    <ButtonCalc text="5" onPress={() => Handletap("number", 5)}></ButtonCalc>
                    <ButtonCalc text="6" onPress={() => Handletap("number", 6)}></ButtonCalc>
                    <ButtonCalc text="-" Theme="accent" onPress={() => Handletap("operator", "-")}></ButtonCalc>

                </Row>
                <Row>
                    <ButtonCalc text="1" onPress={() => Handletap("number", 1)}></ButtonCalc>
                    <ButtonCalc text="2" onPress={() => Handletap("number", 2)}></ButtonCalc>
                    <ButtonCalc text="3" onPress={() => Handletap("number", 3)}></ButtonCalc>
                    <ButtonCalc text="+" Theme="accent" onPress={() => Handletap("operator", "+")}></ButtonCalc>

                </Row>
                <Row>
                    <ButtonCalc text="0" onPress={() => Handletap("number", 0)}></ButtonCalc>
                    <ButtonCalc text="." onPress={() => Handletap("number", ".")}></ButtonCalc>
                    <ButtonCalc
                        text="="
                        Theme="accent"
                        onPress={() => Handletap("equal", "=")}>

                    </ButtonCalc>

                </Row>

            </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#202020",
        // justifyContent: "center",


    },
    value: {
        color: "#fff",
        fontSize: 42,
        textAlign: "right",
        marginRight: 20,
        marginTop: 110,
        marginBottom: 20,

    },
    border:{
        borderColor:"#fff",
        borderWidth:3,
    }


})
export default Calculator;