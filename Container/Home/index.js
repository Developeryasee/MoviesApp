import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../../Component/MovieCard";
import { getmovieItems, selectAllWaiting } from "../../Slices/getmovieSlices";
import { globalstyle } from "../../Themes/GlobalStyle";
import { Styles } from "./styles";
const ListFooterComponent = () => (
    <View style={Styles.BottomLoadView}>
        <ActivityIndicator
            size={'large'}
            color={'#2778f2'}
        />
    </View>

)
export default function Home() {
    const [Page, SetPage] = useState(0)
    const dispatch = useDispatch();
    const movieData = useSelector(selectAllWaiting)
    const {status}=useSelector((state)=>state.getmovie)
    const renderItem = ({ item, index }) => (
        <MovieCard item={item} index={index} />
    )
    useEffect(() => {
        // dispatch(getmovieItems({ page: Page }))
    }, [])
    const handleEnd = () => {
        var page = Page + 1
        SetPage(page)
        // dispatch(getmovieItems({ page: page }))
    }
    return (
        <View style={globalstyle.container}>
            {
                movieData.length===0&&status==="loading"?

                <ActivityIndicator
                size={"large"}
                color={"#2778f2"}
                />:<FlatList
                contentContainerStyle={{paddingBottom:movieData.length!=0&&status==="loading"?0:20}}
                data={movieData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                onEndReached={handleEnd}
                onEndReachedThreshold={0.5}
                ListFooterComponent={() =>status==="loading"?<ListFooterComponent />:null}
            />
            }
        </View>
    )
}