import { Colors } from '@/constants/Colors'
import React from 'react'
import { Text, View } from 'react-native'

type PropType = {
    items: string[],
    paginationIndex: number
}

const ImageSliderPagination = (props: PropType) => {
    return (
        <View className='flex-row justify-center items-center h-14'>
            {props.items.map((item, index) => {
                return (
                    <View key={index} 
                        style={{backgroundColor: index === props.paginationIndex ? Colors.primary : '#ccc'}}
                        className='w-10 h-1 mx-1.5 rounded-md' 
                    />
                )
            })}
            <View className='absolute items-end w-full pr-4'>
                <View className='px-2 py-1 rounded-full' 
                    style={{backgroundColor: Colors.extraLightGray}}
                >
                    <Text style={{color: Colors.primary}}>{props.paginationIndex + 1}/{props.items.length}</Text>
                </View>
            </View>
        </View>
    )
}

export default ImageSliderPagination