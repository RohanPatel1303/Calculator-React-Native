import { View,Dimensions,Text,TouchableOpacity,StyleSheet } from "react-native";
const screen=Dimensions.get("window");
const buttonwidth=screen.width/4;
const ButtonCalc=({onPress,text,Size,Theme})=>{
    const buttonStyles=[styles.button];
    const textStyles=[styles.text];
    if(Size==="double"){
        buttonStyles.push(styles.buttonDouble);

    }
    if(Theme==="Secondary"){
        buttonStyles.push(styles.buttonSecondary);
        textStyles.push(styles.textsecondary);
    }else if(Theme==="accent"){
        buttonStyles.push(styles.buttonAccent);
    }
    return(
        <TouchableOpacity onPress={onPress} style={[buttonStyles]}>
            <Text>{text}</Text>
        </TouchableOpacity>
    
    )
}
const styles=StyleSheet.create({
    button:{
        backgroundColor:"#333333",
        flex:1,
        height:Math.floor(buttonwidth-10),
        alignItems:"center",
        justifyContent:"center",
        borderRadius:Math.floor(buttonwidth),
        margin:5,

    },
    text:{
        color:"#fff",
        fontSize:24,
    
    },
    textsecondary:{
        color:"#060606",

    },
    buttonDouble:{
        width:screen.width/2-10,
    },
    buttonSecondary:{
        backgroundColor:"#a6a6a6",

    },
    buttonAccent:{
        backgroundColor:"#ffc107",
    }

})
export default ButtonCalc;