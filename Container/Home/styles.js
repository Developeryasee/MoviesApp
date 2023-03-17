import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    MovieCard: {
        width: "100%",
        backgroundColor: '#fff', flexDirection: 'row', padding: 15,marginTop:20
    },
    ContentView:{
        flex:1,flexDirection:'row',alignItems:'center'
    },
    ImageCard:{
        borderRadius:8,
        overflow:'hidden',
        marginLeft:-17
    },
    DotedView:{
        width:10,height:10,borderRadius:15,backgroundColor:"#DDDFE3"
    },
    MovieDetail:{
        flex:1,
        marginLeft:20,
    },
    CornerCurve: {
        height: 15,
        width: 15,
        position: 'absolute',
        backgroundColor: '#DDDFE3',

    },
    topLeft: {
        top: 0, left: 0,
        borderBottomRightRadius: 15,

    },
    topRight: {
        right: 0,
        borderBottomLeftRadius: 15,
    },
    bottomLeft: {
        bottom: 0, left: 0,
        borderTopRightRadius: 15,
    },
    bottomRight: {
        bottom: 0, right: 0,
        borderTopLeftRadius: 15,
    },
    Indicator:{
        alignSelf:'center'
    },
    BottomLoadView:{
        alignItems: 'center', justifyContent: 'center', marginBottom: 10, marginTop: 10 
    }
})

export { Styles };