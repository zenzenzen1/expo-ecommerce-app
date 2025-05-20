import httpClient from '@/configs/httpClient';
import { Colors } from '@/constants/Colors';
import { CartItemType } from '@/types/type';
import { Ionicons } from '@expo/vector-icons';
import { Checkbox } from "expo-checkbox";
import { Stack, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Pressable, Text, TouchableOpacity, View } from 'react-native';

const CartScreen = () => {
    const [cartItems, setCartItems] = useState<CartItemType[]>();
    const router = useRouter();
    useEffect(() => {
        httpClient.get('/cart')
            .then((response) => {
                const { data } = response;
                setCartItems(data);
            })
            .catch((error) => {
                console.error('Error fetching cart items:', error);
            });
    }, []);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);

    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: true,
                }}
            />
            <View className='flex-1 '>
                {
                    cartItems ? (
                        <>
                            <View className='flex-1 px-2'>
                                <FlatList
                                    data={cartItems}
                                    renderItem={({ item, index }) => (
                                        <View className={`h-36 flex-row items-center justify-between rounded-md bg-white mb-3 py-1 ${index === 0 ? 'mt-3' : ''}`}>
                                            <TouchableOpacity className=''
                                                onPress={() => {
                                                    if (selectedItems.includes(item.id)) {
                                                        setSelectedItems(selectedItems.filter(id => id !== item.id));
                                                    } else {
                                                        setSelectedItems([...selectedItems, item.id]);
                                                    }
                                                }}
                                            >
                                                <View className='px-3 justify-center h-full'>
                                                    <Checkbox className='border border-red-700 ' value={selectedItems.includes(item.id)} color={Colors.lightGray}
                                                    />
                                                    {/* <View className='border border-lightGray rounded-md h-6 w-6' /> */}
                                                </View>
                                            </TouchableOpacity>
                                            <Pressable className='flex-1 flex-row '
                                                onPress={() => {
                                                    router.push({
                                                        pathname: '/product-details/[id]',
                                                        params: { id: 7 }
                                                    })
                                                }}
                                            >
                                                <Image source={{ uri: item.image }} className='rounded-md' width={100} height={100} />
                                                <View className='flex-col justify-between flex-1 ml-3'>
                                                    <Text>{item.title}</Text>
                                                    <View className='flex-row items-center justify-between'>
                                                        <Text className='text-lg font-normal'>${item.price}</Text>
                                                        <View className='flex-row items-center gap-2 mr-3'>
                                                            <TouchableOpacity className='border border-lightGray rounded-md' onPress={() => {
                                                                setCartItems(cartItems.map((cart) => cart.id === item.id && cart.quantity > 1 ? { ...cart, quantity: cart.quantity - 1 } : cart));
                                                            }}
                                                            >
                                                                <Ionicons name='remove-outline' className='p-1.5' />
                                                            </TouchableOpacity>
                                                            <Text>{item.quantity}</Text>
                                                            <TouchableOpacity className='border border-lightGray rounded-md' onPress={() => {
                                                                setCartItems(cartItems.map((cart) => cart.id === item.id ? { ...cart, quantity: cart.quantity + 1 } : cart));
                                                            }}>
                                                                <Ionicons name='add-outline' className='p-1.5' />
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>
                                                </View>
                                            </Pressable>
                                        </View>
                                    )}
                                    keyExtractor={(item) => item.id.toString()}
                                />
                            </View>
                            <View className='flex-row bg-white p-4'>
                                <View className='flex-1 justify-center p-2'>
                                    <Text className='text-xl'>Total: $100</Text>
                                </View>
                                <TouchableOpacity
                                    className='flex-1 justify-center items-center bg-primary h-12 rounded-md  '
                                >
                                    <Text className='font-medium text-xl color-white'>Checkout</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    ) : (
                        <View>
                            <ActivityIndicator size={"large"} />
                            <Text className='text-center text-lg'>Loading...</Text>
                        </View>
                    )
                }
            </View>
        </>
    )
}

export default CartScreen
