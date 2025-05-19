import { homeContentHorizontal } from '@/constants'
import { Colors } from '@/constants/Colors'
import { WINDOW_DIMENSION } from '@/constants/Dimension'
import { ProductType } from '@/types/type'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Alert, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import ProductItem from '../product/ProductItem'

type PropType = {
    products: ProductType[],
    flatList?: boolean
}

const ProductList = ({ products, flatList = true }: PropType) => {

    return (
        <>
            {flatList
                ? (<FlatList data={products}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    columnWrapperClassName='justify-between'
                    renderItem={({ item }) => (
                        <View
                            className={`bg-white mb-4 p-2`}
                            style={{ width: WINDOW_DIMENSION.width / 2 - homeContentHorizontal - 5 }}
                        >
                            <Image source={{ uri: item.images[0] }} className='w-[100%] h-[200] rounded-xl' />
                            <TouchableOpacity className='absolute right-5 top-5 rounded-full p-1.5 bg-[rgba(255,255,255,0.6)]'
                                onPress={() => {
                                    Alert.alert("Alert", "Add to favorite")
                                }}
                                
                            >
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
                />)
                : (
                    <View className='w-full flex-row flex-wrap justify-between'>
                        {products.map((item, index) => (
                            <View key={index}>
                                <ProductItem product={item} index={index} apiPathPrefix='products'/>
                            </View>
                        ))}
                    </View>
                )
            }

        </>
    )
}

export default ProductList