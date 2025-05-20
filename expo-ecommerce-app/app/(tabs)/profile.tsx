import { Stack } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


const ProfileScreen = () => {
    const insets = useSafeAreaInsets();
    console.log('insets', insets)
    return (
        <>
            <Stack.Screen options={{
                header(props) {
                    return (
                        <Text>{JSON.stringify(props)}</Text>
                    )
                },
            }}
            />
            <View className='flex-1'>
                <Text>Profile Screen</Text>

            </View>
        </>
    )
}

export default ProfileScreen

