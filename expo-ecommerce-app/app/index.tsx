import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, ImageBackground, Text, View } from "react-native";

const WelcomeScreen = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.replace("/(tabs)");
        }, 2000);
         
     
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
        <ImageBackground 
            source={require("@/assets/images/E-commerce-App-JPG-File-scaled.jpg")}
            className="flex-1"
            resizeMethod="auto"
        >
            
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                
                <LinearGradient
                    colors={["transparent", "rgba(255, 255, 255, 0.9)", "rgba(255, 255, 255, 1)"]}
                >   
                </LinearGradient>
                <ActivityIndicator size={"large"} color="gray " />
                <View>
                    <Text>Loading...</Text>
                </View>
            </View>
        </ImageBackground>
        </>
    );
};

export default WelcomeScreen;

