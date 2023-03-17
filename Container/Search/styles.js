import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    TextInput:{
        flex:1,
    height:50,
    borderRadius:6,
    borderWidth:1,
    borderColor:'gray',
    flexDirection:'row',paddingLeft:10,alignItems:'center',marginRight:20
    },
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
    SortButton:{
        height: 50, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#DEE8FE', alignSelf: 'flex-end', marginTop: 20, borderRadius: 6
    }
})
export {styles}