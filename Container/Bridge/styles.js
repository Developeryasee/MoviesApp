import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    CentreDisabled:{
        justifyContent:null,
        alignItems:null,
        backgroundColor:'#F8FCFF'
    },
    closeIcon:{
        paddingRight:10,
    },
    ListContainer:{
        flex:1,
        marginTop:20
    },
    SearchandSortContainer:{
        flexDirection:'row'
    },
    SendButton:{
        height: 50, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#DEE8FE', alignSelf: 'flex-end', marginTop: 20, borderRadius: 6
    }
})
export {styles}