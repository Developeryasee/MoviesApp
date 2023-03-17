
import { StyleSheet } from 'react-native';

const COLORS = {
    // colors
    white: {color:'#FFFFFF'},
    black: {color:'#122B30'},
    black1: {color:'#6C7A7D'},
    black2:{color:'#787C85'},
    black3:{color:'#111827'},
    dgreen: {color:'#25B2BC'},
    lgreen: {color:'#DBFDFF'},
    green:{color:'#1DB7B8'},
    bglight: {color:'#F8FCFF'},
    labelgreen: {color:'#29C47B'},
    lblue:{backgroundColor:'#E9F5FE'},
    dblue:{color:'#1C7DE7'},
    gray:{color:'#838997'},
    profilebg:{color:'#E1FDFF'},
    poweredBlack:{color:'#545454'}
};
const type = {
    black: 'Avenir-Black',
    light: 'Avenir-Light',
    heavy: 'Avenir-Heavy',
    book: 'Avenir-Book',
    medium: 'Avenir-Medium',
    roman: 'Avenir-Roman',
}
const SIZES = StyleSheet.create({
    h1: { fontFamily: type.black, fontSize: 26, lineHeight: 32 }, // fontsize - Metrics.calcSize(26) or 26,
    h2: { fontFamily: type.black, fontSize: 22, lineHeight: 27 }, // fontsize - Metrics.calcSize(22) or 22,
    h3: { fontFamily: type.black, fontSize: 19, lineHeight: 23 }, // fontsize - Metrics.calcSize(19) or 19,
    h4: { fontFamily: type.black, fontSize: 15, lineHeight: 19 }, // fontsize - Metrics.calcSize(15) or 15,
    h5: { fontFamily: type.black, fontSize: 14, lineHeight: 18 }, // fontsize - Metrics.calcSize(14) or 14,
    h6: { fontFamily: type.medium, fontSize: 15, lineHeight: 19 }, // fontsize - Metrics.calcSize(15) or 15,
    h7: { fontFamily: type.heavy, fontSize: 17, lineHeight: 21 }, // fontsize - Metrics.calcSize(17) or 17,
    h8: { fontFamily: type.heavy, fontSize: 15, lineHeight: 19 }, // fontsize - Metrics.calcSize(15) or 15,
    h9: { fontFamily: type.heavy, fontSize: 14, lineHeight: 18 }, // fontsize - Metrics.calcSize(14) or 14,
    h10: { fontFamily: type.heavy, fontSize: 13, lineHeight: 17 }, // fontsize - Metrics.calcSize(13) or 13,
    h11: { fontFamily: type.light, fontSize: 15, lineHeight: 17 }, // fontsize - Metrics.calcSize(15) or 15,
    h12: { fontFamily: type.light, fontSize: 13, lineHeight: 15 }, // fontsize - Metrics.calcSize(13) or 13,
    p: { fontFamily: type.light, fontSize: 15, lineHeight: 26 }, // fontsize - Metrics.calcSize(15) or 15,
});




export default {
    type,
    COLORS,
    SIZES
}
