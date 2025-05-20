import TabBar from '@/components/tabbar/TabBar';
import { Tabs } from "expo-router";
import React from 'react';
import { StatusBar } from 'react-native';
export default function TabLayout() {

    return (
        <>
            <StatusBar barStyle={"dark-content"} backgroundColor={"#eee"} />
            <Tabs tabBar={(props) => <TabBar {...props} />} screenOptions={{ headerShown: false }}>
                <Tabs.Screen name='index' options={{
                    title: 'Home',
                }} />
                <Tabs.Screen name='explore' options={{
                    title: 'Explore',
                }} />
                <Tabs.Screen name='notifications' options={{
                    title: 'Notification',
                }} />
                <Tabs.Screen name='cart' options={{
                    title: 'Cart',
                    tabBarBadge: 3,
                }} />
                <Tabs.Screen name='profile' options={{
                    title: 'Profile',
                }} />
            </Tabs>
        </>
    );
}