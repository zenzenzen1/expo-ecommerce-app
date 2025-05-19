import "@/global.css";
import { useFonts } from 'expo-font';
import { Stack, useRouter, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const isAuthenticated = undefined;
    const segments = useSegments();
    const router = useRouter();

    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    useEffect(() => {
        // router.replace("/(tabs)");
    }, [isAuthenticated, segments, router]);

    if (!loaded) {
        return null;
    }

    return (
        <>
            <GestureHandlerRootView>
                <Stack initialRouteName="index">
                    <Stack.Screen name="product-details/[id]" options={{ }} />
                    <Stack.Screen name="index" options={{ headerShown: false }} />
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen name="signin" options={{ presentation: 'modal' }} />
                    <Stack.Screen name="signup" options={{ presentation: 'modal' }} />
                </Stack>
            </GestureHandlerRootView>
        </>
    );
}
