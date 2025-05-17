import { Colors } from '@/constants/Colors';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { LayoutChangeEvent, SafeAreaView, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import TabBarButton from './TabBarButton';



function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const { colors } = useTheme();
    const { buildHref } = useLinkBuilder();
    const bgColor = "bg-white"
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const buttonWidth = dimensions.width / state.routes.length;
    const tabPositionX = useSharedValue(0);
    useEffect(() => {
        tabPositionX.value = withTiming(buttonWidth * state.index, { duration: 200 });
    }, [state.index, buttonWidth, tabPositionX]);
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: tabPositionX.value }]
        }
    })
    const onTabBarLayout = (e: LayoutChangeEvent) => {
        setDimensions({
            height: e.nativeEvent.layout.height,
            width: e.nativeEvent.layout.width
        })
    }
    const paddingHorizontalLine = 1.5;
    return (
        <SafeAreaView 
            className={`${bgColor}`}
            
        >
            <View onLayout={onTabBarLayout} style={{ flexDirection: 'row' }} className={`pt-2 ${bgColor}`}>
                <Animated.View className=" absolute top-0 h-1" style={[animatedStyle,
                    { backgroundColor: Colors.primary, width: buttonWidth / paddingHorizontalLine, left: buttonWidth * (1 - 1/paddingHorizontalLine)/2 }]} 
                />
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TabBarButton
                            className=""
                            key={route.name} onPress={onPress} onLongPress={onLongPress} isFocused={isFocused} label={label} routeName={route.name}
                        />
                    );
                })}
            </View>
        </SafeAreaView>
    );
}

export default TabBar;