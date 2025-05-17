import { Colors } from "@/constants/Colors"
import { GestureResponderEvent, Pressable, Text, View } from "react-native"
import { tabBarIcons } from "./TabBarIcon"
type Props = {
    onPress: ((event: GestureResponderEvent) => void) | null | undefined,
    onLongPress: ((event: GestureResponderEvent) => void) | null | undefined,
    isFocused: boolean,
    label: string,
    routeName: "index" | "explore" | "notifications" | "cart" | "profile"
}

const TabBarButton = (props: Props) => {
    return (
        <Pressable
            onPress={props.onPress} onLongPress={props.onLongPress}
            className="flex-1 items-center justify-center gap-0.5"
        >
            {props.routeName === "cart" && (
                <View className="">
                    <View className="absolute -top-1 left-3 w-5 h-5 bg-red-500 rounded-full  items-center justify-center z-10" style={{  }}>
                        <Text className="text-white text-sm">3</Text>
                    </View>
                </View>
            )}
            {tabBarIcons[props.routeName]({ color: props.isFocused ? Colors.primary : Colors.black })}
            <Text style={{color: props.isFocused ? "#673ab7": "#222"}}>{props.label}</Text>
        </Pressable>
    )
}
export default TabBarButton