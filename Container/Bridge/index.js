import React, { useEffect, useState } from "react";
import { NativeModules, Platform, Text, TextInput, TouchableOpacity, View } from "react-native";
import Fonts from "../../Themes/Fonts";
import { globalstyle } from "../../Themes/GlobalStyle";
import { styles } from "./styles";
import SendLogo from '../../assets/Svg/send.svg'
const {CustomMethod} = NativeModules;
export default function Bridge() {
    const [Name, setName] = useState('')
    const [Message,setMessage]=useState("")
    const Send=()=>{
        CustomMethod.getMessage(Name)
        .then((res) => {
            setName("")
            setMessage(res)
        })
        .catch((err) => {
            console.error(err,"Erre");
          });
    }
    return (
        <View style={[globalstyle.container,styles.CentreDisabled]}>
            <View style={styles.SearchandSortContainer}>
                <View style={[globalstyle.TextInput, globalstyle.mt20,]}>
                    <TextInput
                        placeholder="Enter Name"
                        style={[Fonts.SIZES.h6, Fonts.COLORS.black, { flex: 1 }]}
                        value={Name}
                        onChangeText={(txt) => setName(txt)}
                    />
                </View>
                <TouchableOpacity style={styles.SendButton}
                    onPress={Send}
                >
                    <SendLogo/>
                </TouchableOpacity>

            </View>

            <Text style={[Fonts.COLORS.labelgreen,Fonts.SIZES.h1,globalstyle.mt30,{alignSelf:'center'}]}>From {Platform.OS==="ios"?"iOS":"Android"} :</Text>
            <Text style={[Message==="Please, Enter your name"?Fonts.COLORS.errorRed:Fonts.COLORS.labelgreen,Fonts.SIZES.h1,globalstyle.mt30,{alignSelf:'center'}]}>{Message}</Text>

        </View>
    )
}