import { useRouter } from 'expo-router'
import React from 'react'
import { ActivityIndicator, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {}

const ExploreScreen = (props: Props) => {
    const router = useRouter();
  return (
    <View style={styles.container} className=''>
        <Pressable
            className='bg-blue-500 p-4 rounded-md'
            style={({pressed}) => {
                console.log('Pressed', pressed);
                return {
                    backgroundColor: 'red',
                    padding: 10,
                    borderRadius: 5
                }
            }}
            onPress={() => console.log('Pressed')}
        >
            <Text>Explore</Text>
        </Pressable>
        <TouchableOpacity
            onPress={() => {
                router.navigate({
                pathname: "/product-details/[id]",
                params: {"apiPathPrefix": "saleProducts", "id": "29"}
            })
            }}
            style={{}}
        >
            <Text>Explore</Text>
        </TouchableOpacity>
        <ActivityIndicator />
    </View>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})