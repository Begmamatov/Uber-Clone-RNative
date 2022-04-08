import React from 'react'
import { StyleSheet, FlatList, TouchableOpacity, Text, View, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';

const DATA = [
    {
        id: '123',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen',
    },
    {
        id: '456',
        title: 'Order food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatsScreen',
    },
];

const NavOption = () => {
    return (
        <>
            <FlatList
                data={DATA}
                horizontal
                renderItem={(item) => {
                    return (
                        <TouchableOpacity
                            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                        >
                            <View>
                                <Image
                                    source={{ uri: item.item.image }}
                                    style={{ width: 120, height: 120, resizeMode: 'contain' }}
                                />
                                <Text style={tw`mt-2 text-lg font-bold`}>{item.item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={item => item.id}
            />
        </>
    )
}

export default NavOption

const styles = StyleSheet.create({})