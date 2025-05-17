import httpClient from '@/configs/httpClient';
import { Colors } from '@/constants/Colors';
import { WINDOW_DIMENSION } from '@/constants/Dimension';
import { ProductType } from '@/types/type';
import { platform } from '@/utils/utils';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
    const [products, setProducts] = useState<ProductType[]>();
    const [categories, setCategories] = useState();
    const [loading, setLoading] = useState<boolean>(false);
    const getProducts = async () => {
        httpClient.get('products')
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log('err', err)
            })
    }
    const getCategories = async () => {
        httpClient.get('categories')
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log('err', err)
            })
    }
    useEffect(() => {
        setLoading(true);
        getProducts();
        setLoading(false);
    }, [])
    const insets = useSafeAreaInsets();
    const contentHorizontal = 5;
    return (
        <>
            <Stack.Screen options={{
                headerShown: true, header: () => (
                    <>
                        <View style={{ paddingTop: platform.isAndroid ? insets.top + 12 : insets.top, paddingHorizontal: 20 }}
                            className='flex-row justify-between items-center bg-white pb-3 gap-3'
                        >
                            <Text className='text-3xl' style={{ color: Colors.primary }}>Logo</Text>
                            {/* <Link href={"/explore"} asChild> */}
                                <TouchableOpacity className='flex-1 justify-between flex-row py-3 rounded-md px-2' style={{ backgroundColor: Colors.background }}>
                                    <View className=' flex-1 justify-center'>
                                        <Text>Search</Text>
                                    </View>
                                    <Ionicons name='search-outline' size={20} color={Colors.black} />
                                </TouchableOpacity>
                            {/* </Link> */}
                        </View>
                    </>
                )
            }}
            />
            <View style={{ backgroundColor: Colors.background, marginHorizontal: contentHorizontal }} className='mt-2'>
                <View className='flex-row justify-between items-center mb-2 bg-white mx-1.5'>
                    <Text className='font-medium text-2xl '>For you</Text>
                    <TouchableOpacity>
                        <Text>See all</Text>
                    </TouchableOpacity>
                </View>
                <FlatList data={products}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    columnWrapperClassName='justify-between'
                    renderItem={({ item }) => (
                        <View
                            className={`bg-white mb-4 p-2`}
                            style={{ width: WINDOW_DIMENSION.width / 2 - contentHorizontal - 5 }}
                        >
                            <Image source={{ uri: item.images[0] }} className='w-[100%] h-[200] rounded-xl' />
                            <TouchableOpacity className='absolute right-5 top-5 rounded-full p-1.5 bg-[rgba(255,255,255,0.6)]'>
                                <Ionicons name='heart-outline' size={22} />
                            </TouchableOpacity>
                            <Text className='font-medium mb-5' numberOfLines={2}
                                ellipsizeMode='tail'
                            >
                                {item.title}
                            </Text>
                            <View>
                                <Text
                                    style={{ color: Colors.primary, fontSize: 16 }}
                                >${item.price}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        </>
    )
}

export default HomeScreen
