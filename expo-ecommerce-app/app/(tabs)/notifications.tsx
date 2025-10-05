import httpClient from '@/configs/httpClient';
import { NotificationType } from '@/types/type';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';



const NotificationsScreen = () => {
    const [notifications, setNotifications] = useState<NotificationType[]>();
    useEffect(() => {
        httpClient.get("notifications")
            .then((res) => {
                setNotifications(res.data);
            })
            .catch((err) => {
                console.log('err', err)
            })
            ;
    }, []);
    
    return (
        <>
            <Stack.Screen options={{
                headerShown: true
            }}
            />
            {notifications
                ? (<View style={{}} className='flex-1 px-0'>
                    <FlatList data={notifications}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item._id.toString()}
                        renderItem={({ item, index }) => (
                            <Animated.View entering={FadeInDown.delay(300 + 100 * index).duration(500)} className={`flex-row border-b p-2.5 border-[rgba(0,0,0,0.15)] bg-white ${index === 0 ? 'mt-2' : ''}`} >
                                <View className='justify-center items-center w-10'>
                                    <Ionicons name='notifications-outline' size={21}/>
                                </View>
                                <View>
                                    <Text className='text-lg font-medium'>{item?.title}</Text>
                                    <Text className='text-base font-normal'>{item?.message}</Text>
                                    <Text className='text-base font-normal'>{item?.timestamp}</Text>
                                </View>
                            </Animated.View>
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

export default NotificationsScreen

