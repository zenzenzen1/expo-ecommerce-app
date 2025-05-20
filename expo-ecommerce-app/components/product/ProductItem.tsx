import { homeContentHorizontal } from '@/constants'
import { Colors } from '@/constants/Colors'
import { WINDOW_DIMENSION } from '@/constants/Dimension'
import { ProductType } from '@/types/type'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'

const ProductItem = ({ product, index, apiPathPrefix }: { product: ProductType, index: number, apiPathPrefix: string }) => {
    const router = useRouter();
    return (
            <Pressable
                onPress={() => {
                    router.push({
                        pathname: '/product-details/[id]',
                        params: { id: product.id, apiPathPrefix }
                    })
                }}
            >
                <Animated.View
                    entering={FadeInDown.delay(300 + index * 100).duration(900)}
                    className={`bg-white mb-2 p-2`}
                    style={{ width: WINDOW_DIMENSION.width / 2 - homeContentHorizontal - 2 }}
                >
                    <Image source={{ uri: product.images[0] }} className='w-[100%] h-[200] rounded-xl ' />
                    <TouchableOpacity className='absolute right-5 top-5 rounded-full p-1.5 bg-[rgba(255,255,255,0.6)]'
                        onPress={() => {
                            console.log("Add to favorite")
                        }}
                    >
                        <Ionicons name='heart-outline' size={22} />
                    </TouchableOpacity>
                    <Text className='font-medium mb-5 leading-5 h-10  ' numberOfLines={2}
                        ellipsizeMode='tail'
                    >
                        {product.title}
                    </Text>
                    <View>
                        <Text
                            style={{ color: Colors.primary, fontSize: 16 }}
                        >${product.price}</Text>
                    </View>
                </Animated.View>
            </Pressable>
    )
}

export default ProductItem