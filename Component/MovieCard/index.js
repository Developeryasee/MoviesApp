import React from "react";
import { View, Text, Image, } from "react-native";
import { Styles } from "../../Container/Home/styles";
import Error from '../../assets/Svg/x-circle.svg'
import Fonts from "../../Themes/Fonts";
import { globalstyle } from "../../Themes/GlobalStyle";
const MovieCard = ({ item, index }) => {

    return (
        <View style={Styles.MovieCard}>
            <View style={[Styles.CornerCurve, Styles.topLeft]} />
            <View style={[Styles.CornerCurve, Styles.topRight]} />
            <View style={[Styles.CornerCurve, Styles.bottomLeft]} />
            <View style={[Styles.CornerCurve, Styles.bottomRight]} />

            <View style={Styles.ContentView}>
                <View style={Styles.ImageCard}>
                    {
                        item.image?.url ? <Image
                            source={{ uri: item.image?.url }}
                            style={{ width: 100, height: 100, resizeMode: 'cover' }}
                        /> : <View style={{ width: 100, height: 100, justifyContent: 'center', alignItems: 'center' }}>
                            <Error width={70} height={70} />
                        </View>
                    }

                </View>

                <View style={{ marginLeft: 20, justifyContent: 'center' }}>
                    {
                        Array.from({ length: 5 }, (_, i) => (
                            <View
                                key={i}
                                style={[Styles.DotedView, { marginBottom: i + 1 === 5 ? 0 : 10 }]}
                            />

                        ))
                    }


                </View>

                <View>

                </View>
                <View style={Styles.MovieDetail}>
                    <Text numberOfLines={1} style={[Fonts.COLORS.black,Fonts.SIZES.h5]}>
                        Title: {item.title}
                    </Text>
                    <Text numberOfLines={1} style={[Fonts.COLORS.gray,Fonts.SIZES.h10,globalstyle.mt5]}>
                        Genre: {item.titleType}
                    </Text>
                    <Text numberOfLines={1} style={[Fonts.COLORS.gray,Fonts.SIZES.light,globalstyle.mt5]}>
                        year: {item.year}
                    </Text>
                </View>
            </View>



        </View>
    )
}
const areEqual = (prevProps, nextProps) => {
    const { item } = nextProps;

    const { item: presIsitem } = prevProps

    const isItemequal = item === presIsitem

    return isItemequal;

};
export default React.memo(MovieCard, areEqual);