import FlashSale from '@/components/home/FlashSale';
import ProductList from '@/components/home/ProductList';
import httpClient from '@/configs/httpClient';
import { homeContentHorizontal } from '@/constants';
import { Colors } from '@/constants/Colors';
import { CategoryType, ProductType } from '@/types/type';
import { platform } from '@/utils/utils';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
    const [products, setProducts] = useState<ProductType[]>();
    const [categories, setCategories] = useState<CategoryType[]>();
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
                setCategories(res.data);
            })
            .catch((err) => {
                console.log('err', err)
            })
    }
    useEffect(() => {
        getCategories();
        setLoading(true);
        getProducts();
        setLoading(false);
    }, [])
    const insets = useSafeAreaInsets();

    return (
        <>
        <StatusBar barStyle={"dark-content"} backgroundColor={"#eee"} />
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
            <ScrollView>


                <View style={{ backgroundColor: Colors.background, marginHorizontal: homeContentHorizontal }} className='mt-2 '>
                    {categories && <FlatList
                        data={categories}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={true}
                        contentContainerStyle={{ paddingHorizontal: homeContentHorizontal }}
                        // className='pt-5 pb-11'
                        renderItem={({ item }) => (
                            <TouchableOpacity className=''>
                                <View className='mx-2.5 flex-col items-center justify-center'>
                                    <Image source={{ uri: item.image }} className='h-14 w-14 rounded-full' />
                                    <View>
                                        <Text>{item.name}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />}
                    <FlashSale />
                    <View className='flex-row justify-between items-center pb-2 bg-white mx-0.5'>
                        <Text className='font-medium text-2xl '>For you</Text>
                        <TouchableOpacity>
                            <Text>See all</Text>
                        </TouchableOpacity>
                    </View>
                    {products && <ProductList products={products} flatList={false} />}
                </View>
            </ScrollView>
        </>
    )
}

export default HomeScreen
