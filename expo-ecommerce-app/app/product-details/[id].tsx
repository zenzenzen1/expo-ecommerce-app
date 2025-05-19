import ImageSlider from '@/components/product/ImageSlider';
import httpClient from '@/configs/httpClient';
import { Colors } from '@/constants/Colors';
import { ProductType } from '@/types/type';
import { platform } from '@/utils/utils';
import { Ionicons } from '@expo/vector-icons';
import { useHeaderHeight } from '@react-navigation/elements';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const ProductDetails = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState<ProductType>();
    const params = useLocalSearchParams();
    const headerHeight = useHeaderHeight();
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const getProductDetails = async () => {
        return httpClient.get(`${params.apiPathPrefix}/${params.id}`);
    }
    useEffect(() => {
        setLoading(true);
        getProductDetails()
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            })
            ;


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <View className='flex-1' style={{paddingTop: insets.top}}>
                {/* <ScreenHeader title='Product Details'/> */}
                <Stack.Screen
                    options={{
                        header(props) {
                            return (
                                <View style={ platform.isIos ? { paddingTop: insets.top} : {}} className='bg-white px-2 py-3'>
                                    <View className='flex-row justify-between items-center px-3'>
                                        <TouchableOpacity
                                            onPress={() => {
                                                router.replace("/(tabs)");
                                            }}
                                        >
                                            <Ionicons name='arrow-back' size={22} color={"rgb(33, 150, 243)"} />
                                        </TouchableOpacity>
                                        <Text className='text-3xl'>Product Detail</Text>
                                        <TouchableOpacity>
                                            <Ionicons name='cart-outline' size={24} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        },
                        headerRight(_props) {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        console.log('Cart pressed');
                                    }}
                                >
                                    <Ionicons name='cart-outline' size={24} />
                                </TouchableOpacity>
                            )
                        },
                        headerTitleAlign: 'left',
                        // headerLeft: () => (
                        //     <TouchableOpacity className='' onPress={() => { router.replace("/(tabs)") }} onLongPress={() => { router.replace("/(tabs)") }} >
                        //         {/* rgb(0, 122, 255) */}
                        //         <Ionicons name='arrow-back' size={22} color={"rgb(33, 150, 243)"} />
                        //     </TouchableOpacity>
                        // ),
                    }}
                />
                {loading
                    ? <ActivityIndicator size={'large'} />
                    : (
                        product &&
                        <>
                            <View className='flex-1' >
                                <ScrollView
                                    keyboardShouldPersistTaps="handled"
                                    className='flex-1'
                                >
                                    <ImageSlider imageList={product?.images} />
                                    <View className='px-3'>
                                        <View className='flex-row items-center justify-between py-3 px-1'>
                                            <View className='flex-row items-center'>
                                                <Ionicons name='star' size={22} color="#d4af37" />
                                                <Text className='ml-1.5'>4.7</Text>
                                            </View>
                                            <View>
                                                <TouchableOpacity>
                                                    <Ionicons name='heart-outline' size={22} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        {/* <Text>{product.title}</Text> */}
                                        <View>
                                            <Text className='text-xl font-normal leading-6'>{product.title}</Text>
                                        </View>
                                        <View className='flex-row items-center mt-1.5 gap-1'>
                                            <Text className='text-2xl font-semibold'>${product.price}</Text>
                                            <View className='justify-center flex'>
                                                <Text style={{ color: Colors.primary }}
                                                    className='text-center text-xl bg-extraLightGray'
                                                >6% Off</Text>
                                            </View>
                                            <Text className='text-xl font-normal line-through'>${product.price - 2}</Text>
                                        </View>
                                        <View className='mt-3 '>
                                            <Text className='leading-6'>{product.description}</Text>
                                        </View>
                                        <View className='flex-row gap-2.5 mt-3'>
                                            <View className='flex-1'>
                                                <Text className='flex'>Color</Text>
                                                <View className='flex-row items-center gap-1 flex-wrap'>
                                                    <View className='border rounded-full p-0.5 border-dotted ' style={{ borderColor: Colors.primary }}>
                                                        <View className='w-8 h-8 rounded-full' style={{ backgroundColor: "#d4af37" }} />
                                                    </View>
                                                    <View className='w-8 h-8 rounded-full' style={{ backgroundColor: "#9c27b0" }} />
                                                    <View className='w-8 h-8 rounded-full' style={{ backgroundColor: "#2196f3" }} />
                                                    <View className='w-8 h-8 rounded-full' style={{ backgroundColor: "#8bc34a" }} />
                                                    <View className='w-8 h-8 rounded-full' style={{ backgroundColor: "#333" }} />
                                                    <View className='w-8 h-8 rounded-full' style={{ backgroundColor: "#f44336" }} />
                                                    <View className='w-8 h-8 rounded-full' style={{ backgroundColor: "#a28b22" }} />
                                                    <View className='w-8 h-8 rounded-full' style={{ backgroundColor: "#23e7df" }} />
                                                </View>
                                            </View>
                                            <View className='flex-1'>
                                                <Text>Size</Text>
                                                <View className='flex-row items-center gap-2 flex-wrap'>
                                                    <View className='border w-14 h-9 items-center justify-center rounded-md border-lightGray bg-extraLightGray'>
                                                        <Text className='font-bold'>S</Text>
                                                    </View>
                                                    <View className='border w-14 h-9 items-center justify-center rounded-md border-lightGray bg-extraLightGray'>
                                                        <Text>M</Text>
                                                    </View>
                                                    <View className='border w-14 h-9 items-center justify-center rounded-md border-lightGray bg-extraLightGray'>
                                                        <Text>L</Text>
                                                    </View>
                                                    <View className='border w-14 h-9 items-center justify-center rounded-md border-lightGray bg-extraLightGray'>
                                                        <Text>XL</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </ScrollView>
                                <View
                                    style={{ paddingBottom: insets.bottom + (platform.isIos ? 10 : 0) }}
                                    className='bg-white flex-row items-center px-3 gap-4 pt-3 pb-3'
                                >
                                    <TouchableOpacity
                                        onPress={() => {
                                            Alert.alert("Add to cart", "Are you sure you want to add this item to your cart?")
                                            console.log('Add to cart pressed');
                                        }}
                                        className='flex-1 justify-center items-center bg-white h-12 rounded-md border-primary border'
                                    >
                                        <Text className='color-primary'>Add To Cart</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        className='flex-1 justify-center items-center bg-primary h-12 rounded-md  '
                                    >
                                        <Text className='font-medium color-white'>Add To Cart</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </>

                    )
                }
            </View>
        </>
    )
    //     const {Colors} = require("./constants/Colors")
    // /** @type {import('tailwindcss').Config} */
    // module.exports = {
    //   // NOTE: Update this to include the paths to all of your component files.
    //   content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
    //   presets: [require("nativewind/preset")],
    //   theme: {
    //     extend: {
    //         colors: {
    //             ...Colors,
    //         }
    //     },
    //   },
    //   plugins: [], 
    // }
}

export default ProductDetails