import { Ionicons } from '@expo/vector-icons';

type TabBarIconProps = {
    color: string;
}
export const tabBarIcons = {
    index: ({ color }: TabBarIconProps) => (
        <Ionicons name='home-outline' size={22} color={color} />
    ),
    
    explore: ({ color }: TabBarIconProps) => (
        <Ionicons name='search-outline' size={22} color={color} />
    ),

    notifications: ({ color }: TabBarIconProps) => (
        <Ionicons name='notifications-outline' size={22} color={color} />
    ),

    cart: ({ color }: TabBarIconProps) => (
        <Ionicons name='cart-outline' size={22} color={color} />
    ),

    profile: ({ color }: TabBarIconProps) => (
        <Ionicons name='person-outline' size={22} color={color} />
    ),
}