import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

type Props = {}

const NotificationsScreen = (props: Props) => {
    return (
        <>
        <StatusBar barStyle={"dark-content"} backgroundColor={"#eee"} />
            <View style={styles.container}>
                <Text>Notifications Screen</Text>
            </View>
        </>
    )
}

export default NotificationsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})