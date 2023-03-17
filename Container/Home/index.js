import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, RefreshControl } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../../Component/MovieCard";
import { getmovieItems, remove, selectAllWaiting } from "../../Slices/getmovieSlices";
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
    const [refreshing,setrefreshing]=useState(false)
    const [Page, SetPage] = useState(0)
    const dispatch = useDispatch();
    const movieData = useSelector(selectAllWaiting)
    const { status } = useSelector((state) => state.getmovie)
    const renderItem = ({ item, index }) => (
        <MovieCard item={item} index={index} />
    )
    const getMovie = (page) => {
        dispatch(getmovieItems({ page: page }))
        setTimeout(() => {
            setrefreshing(false)
        }, 2000);
    }
    useEffect(() => {
        // getMovie(Page)
    }, [])
    const handleEnd = () => {
        var page = Page + 1
        SetPage(page)
        getMovie(page)
    }
    const refreshMovie = () => {
      setrefreshing(true)
      getMovie("0")
    }
    return (
        <View style={globalstyle.container}>
            {
                movieData.length === 0 && status === "loading"?

                    <ActivityIndicator
                        size={"large"}
                        color={"#2778f2"}
                    /> : <FlatList
                        contentContainerStyle={{ paddingBottom: movieData.length != 0 && status === "loading" ? 0 : 20 }}
                        data={movieData}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        onEndReached={handleEnd}
                        onEndReachedThreshold={2}
                        ListFooterComponent={() => status === "loading" ? <ListFooterComponent /> : null}
                        refreshControl={
                            <RefreshControl
                            colors={["#2778f2"]}
                            refreshing={refreshing&&status === "loading"?true:false}
                            onRefresh={refreshMovie}
                            tintColor={"#2778f2"}
                            />
                        }
                    />
            }
        </View>
    )
}