import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    ImageCard:{
        width: 46, 
        height: 46, 
        borderRadius: 6, 
        marginRight: 10 ,
        justifyContent:'center',alignItems:'center'
    },
    actorImg:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        borderRadius: 6, 

    },
    ActorCard:{
        width: '100%', 
        backgroundColor: '#fff', 
        flexDirection: 'row', 
        padding: 10, 
        marginBottom: 10, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 6
    }
});