import httpClient from '@/configs/httpClient';
import { CategoryType } from '@/types/type';
import { Stack, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';


const ExploreScreen = () => {
    const [categoryies, setCategories] = useState<CategoryType[]>();
    useEffect(() => {
        httpClient.get("categories")
            .then((res) => {
                setCategories(res.data);
            })
            .catch((err) => {
                console.log('err', err)
            })
            ;
    }, [])

    const router = useRouter();
    return (
        <>
            <Stack.Screen options={{
                headerShown: true
            }}
            />
            {categoryies
                ? (<View style={{}} className='flex-1 px-5'>
                    <FlatList data={categoryies}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item, index }) => (
                            <View className={`flex-1 px-5 flex-row justify-between items-center bg-extraLightGray mb-5 rounded-xl ${index === 0 ? 'mt-5' : ''}`} >
                                <Text className='text-lg'>{item.name}</Text>
                                <Image source={{uri: item.image}} width={100} height={100}/>
                            </View>
                        )}
                    />
                </View>)
                : (
                    <View>
                        <ActivityIndicator size={"large"} color={"#000"} />
                    </View>
                )}

        </>
    )
}

export default ExploreScreen

