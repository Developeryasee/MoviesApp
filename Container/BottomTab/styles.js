import { StyleSheet } from "react-native";


const Styles=StyleSheet.create({
    TabBar:{
        flexDirection: 'row',
                width: "100%",
                height: 80,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'space-around',
                backgroundColor: '#fff',
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: -10,
                },
                shadowOpacity: 0.05,
                shadowRadius: 4.65,
                elevation: 30,
    },
    Tabs:{
        width: 48,
        height: 48,
        backgroundColor: '#DEE8FE',
        borderRadius: 10
    },
    Touch:{
        flex: 1, alignItems: 'center', width: '100%', height: '100%', justifyContent: 'center'
    },
    TabIconView:{
        width: 20, height: 20, justifyContent: 'center', alignItems: 'center',
    }
})

export {Styles};