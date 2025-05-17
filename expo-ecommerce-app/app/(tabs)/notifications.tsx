import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {}

const NotificationsScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Notifications Screen</Text>
    </View>
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