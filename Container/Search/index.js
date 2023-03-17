import React, { useState } from "react";
import { Keyboard, TouchableOpacity, View, Image, Text, TextInput } from "react-native";
import { globalstyle } from "../../Themes/GlobalStyle";
import { styles } from "./styles";
import CloseIcon from '../../assets/Svg/CloseIcon.svg'
import Fonts from "../../Themes/Fonts";
import { FlatList } from "react-native-gesture-handler";
import ActorCard from "../../Component/ActorCard";
export default function Search() {
    const [sortName, setsortName] = useState("Ascending")
    const data =
        [
            {
                "id": 1,
                "name": "Iron Man",
                "actor": "Robert Downey, Jr.",
                "realname": "Tony Stark",
                "species": "Human",
                "citizenship": "American",
                "dateofbirth": 1970,
                "image": "https://wellgroomedgentleman.com/media/images/tony-stark-beard.original.jpg"
            },
            {
                "id": 2,
                "name": "Captain America",
                "actor": "Chris Evans",
                "realname": "Steve Rogers",
                "species": "Human",
                "citizenship": "American",
                "dateofbirth": 1918,
                "image": "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/6/66/Captain_America_AIW_Profile.jpg/revision/latest?cb=20180518211704"
            },
            {
                "id": 3,
                "name": "Hulk",
                "actor": "Mark Ruffalo, Edward Norton",
                "realname": "Bruce Banner",
                "species": "Human",
                "citizenship": "American, Sakaaran (formerly)",
                "dateofbirth": 1969,
                "image": "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/c/c3/Hulk_AIW_Profile.jpg/revision/latest?cb=20180518211829"
            },
            {
                "id": 4,
                "name": "Thor",
                "actor": "Chris Hemsworth",
                "realname": "Thor Odinson",
                "species": "Asgardian",
                "citizenship": "Asgardian",
                "dateofbirth": 1960,
                "image": "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/4/45/Thor_AIW_Profile.jpg/revision/latest?cb=20180518212120"
            },
            {
                "id": 5,
                "name": "Black Widow",
                "actor": "Scarlett Johansson",
                "realname": "Natasha Romanoff",
                "species": "Human",
                "citizenship": "Soviet, Russian, American",
                "dateofbirth": 1984,
                "image": "https://resize.indiatvnews.com/en/resize/newbucket/730_-/2021/09/black-widow-1-1631278936.jpg"
            },
            {
                "id": 6,
                "name": "Hawkeye",
                "actor": "Jeremy Renner",
                "realname": "Clint Barton",
                "species": "Human",
                "citizenship": "American",
                "dateofbirth": 1971,
                "image": "https://pyxis.nymag.com/v1/imgs/158/437/92090f1cf4447527910a035d5aedf239e3-hawkeye-jeremy-renner.2x.rsquare.w330.jpg"
            },
            {
                "id": 7,
                "name": "Catherine Missal",
                "actor": "actress",
                "realname": "Clint Barton",
                "species": "Human",
                "citizenship": "American",
                "dateofbirth": 1999,
                "image": "https://media.kidadl.com/catherine_missal_872c152517.jpg"
            },
            {
                "id": 8,
                "name": "Jasmine Reate",
                "actor": "actress",
                "realname": "Clint Barton",
                "species": "Human",
                "citizenship": "American",
                "dateofbirth": 1979,
                "image": "https://networthheightsalary.com/wp-content/uploads/2020/02/Who-Is-Charlotte-Lewis-6-Things-You-Need-to-Know.jpg"
            },
            {
                "id": 9,
                "name": "Jason Statham",
                "actor": "actor",
                "realname": "Clint Barton",
                "species": "Human",
                "citizenship": "American",
                "dateofbirth": 1967,
                "image": "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSUD_78qicz9WnjawNqFryeVP0tfsPUZSuI_ZSb8UQK9A9kwevvKh4itte4C96SRqgkXM7e0te_flqd3_8"
            },
            {
                "id": 10,
                "name": "Tom Hardy",
                "actor": "actor",
                "realname": "Clint Barton",
                "species": "Human",
                "citizenship": "American",
                "dateofbirth": 1977,
                "image": "https://bifa.imgix.net/web/2018/10/AR-AF729_HaRDY_GS_20140416175521.jpg?auto=compress%2Cformat&fit=scale&h=1600&ixlib=php-3.3.1&w=1600&wpsize=xl"
            }
        ]
    const [actorData, setactorData] = useState(data)
    const [search, setSearch] = useState('')
    const Clear = () => {
        setSearch("")
        setactorData(data)
        Keyboard.dismiss();
    }
    const renderItem = ({ item, index }) => (
        <ActorCard item={item} index={index} />
    )

    const SearchName = (name) => {
        setSearch(name)
        if (name === "") {
            setactorData(data)
        } else {
            const newData = actorData.filter(item => {
                const itemData = `${item.name.toUpperCase()}`
                const textData = name.toUpperCase() || name;
                return itemData.indexOf(textData) > -1;
            })
            setactorData(newData)
        }
    }
    const Sort = () => {
        if (sortName === "Ascending") {
            setsortName("Descending")

            data.sort((a, b) => a.dateofbirth - b.dateofbirth);
            setactorData(data)

        } else {
            setsortName("Ascending")
            data.sort((a, b) => b.dateofbirth - a.dateofbirth);
            setactorData(data)
        }
    }
    return (
        <View style={[globalstyle.container, styles.CentreDisabled]}>
            <View style={styles.SearchandSortContainer}>
                <View style={[globalstyle.TextInput, globalstyle.mt20,]}>
                    <TextInput
                        placeholder="Enter Name"
                        style={[Fonts.SIZES.h6, Fonts.COLORS.black, { flex: 1 }]}
                        value={search}
                        placeholderTextColor={Fonts.COLORS.gray.color}
                        onChangeText={(txt) => SearchName(txt)}
                    />
                    {
                        search != "" ?
                            <TouchableOpacity style={styles.closeIcon}
                                onPress={Clear}
                            >
                                <CloseIcon width={15} height={15}/>
                            </TouchableOpacity> : null
                    }


                </View>
                <TouchableOpacity style={styles.SortButton}
                    onPress={Sort}
                >
                    <Image
                        source={sortName === "Ascending" ? require('../../assets/img/sort2.png') : require('../../assets/img/sort.png')}
                        style={{ width: 25, height: 25, resizeMode: 'contain' }}
                    />
                </TouchableOpacity>

            </View>

            <View style={styles.ListContainer}>
                {
                    actorData.length!=0?<FlatList
                    data={actorData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />:<Text style={[Fonts.COLORS.black,Fonts.SIZES.h11,{alignSelf:'center',}]}>No Data Found</Text>
                }
                
            </View>
        </View>
    )
}