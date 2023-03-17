import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import Fonts from "../../Themes/Fonts";
import { globalstyle } from "../../Themes/GlobalStyle";
import { styles } from "./styles";
import Send from '../../assets/Svg/send.svg'
export default function Bridge() {
    const [Name, setName] = useState('')
    return (
        <View style={[globalstyle.container,styles.CentreDisabled]}>
            <View style={styles.SearchandSortContainer}>
                <View style={[globalstyle.TextInput, globalstyle.mt20,]}>
                    <TextInput
                        placeholder="Enter Name"
                        style={[Fonts.SIZES.h6, Fonts.COLORS.black, { flex: 1 }]}
                        value={Name}
                        onChangeText={(txt) => SearchName(txt)}
                    />
                </View>
                <TouchableOpacity style={styles.SendButton}
                    // onPress={Sort}
                >
                    <Send/>
                </TouchableOpacity>

            </View>
        </View>
    )
}