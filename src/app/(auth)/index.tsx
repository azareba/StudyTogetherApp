// log in page and sign up page
import useSocialAuth from "@/hooks/useSocialAuth";
import React from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";

const AuthScreen = () => {
  const {handleSocialAuth, loadingState} = useSocialAuth()
  const isLoading = loadingState !== null // this will be true if loadingState is not equal to null
  

  return (
    

    // instead of View i can use SafeAreaView to avoid content being hidden behind the notch on some devices or i can use ScrollView
    <View className="flex-1 bg-primary"> 
   
       <View className="absolute inset-0"> 
          <LinearGradient
          colors={[ "#8499B1","#AA6373","#AA6373","#6C9A8B" ]}
          locations={[0, 0.25, 0.5, 0.75]} 
          style={{ width: "100%", height: "100%" }} //location for the colors
          start={{ x: 0.5, y: 0 }} // x and y values for the start of the gradient, x is the horizontal position and y is the vertical position. 0.5 means the middle of the screen and 0 means the top of the screen
          end={{ x: 0.5, y: 1 }}
          />
      </View>

      <SafeAreaView className="flex-1 justify-between"> 
        {/* {top section of the screen} */}
        <View className="items-center pt-10 pb-2">
          <View className="w-16 h-16 rounded-[20px] bg-primary/15 items-center justify-center border border-primary/20">
            <Ionicons  name="school" size={30} color="#F0F2A6" />
          </View>

          <Text className="text-3xl  text-foreground mt-4 font-mono" >
            StudyBuddy
          </Text>

          <Text className="text-foreground-muted text-[15px] mt-1.5 tracking-wide">
              Learn together, grow together
          </Text>

        </View>

        <View className="items-center px-6 mt-4">
          <Image 
            source={require("@/assets/images/auth.png")}
            style={{width: 300, height: 350}}
            contentFit="cover"
          ></Image>
        </View>
        {/* featire chips */}
        <View className="flex-row flex-wrap justify-center gap-3 px-6 mt-5">
           {[
              {
                icon: "videocam" as const,
                label: "Video Calls",
                color: "#A29BFE",
                bg: "bg-primary/12 border-primary/80",
              },
              {
                icon: "chatbubbles" as const,
                label: "Study Rooms",
                color: "#FF6B6B",
                bg: "bg-accent/12 border-accent/80",
              },
              {
                icon: "people" as const,
                label: "Find Partners",
                color: "#00B894",
                bg: "bg-accent-secondary/12 border-accent-secondary/80",
              },
            ].map((chip) => (
              <View
                key={chip.label}
                className={`flex-row items-center gap-1.5 px-3.5 py-2 rounded-full border ${chip.bg}`}
              >
                <Ionicons name={chip.icon} size={14} color={chip.color} />
                <Text className="text-foreground text-xs font-semibold tracking-wide">
                  {chip.label}
                </Text>
              </View>
              ))}

        </View>
    
        <View className="px-8 pb-4">
          <View className="flex-row items-center gap-3 mb-6">
            <View className="flex-1 h-px bg-border"/>
            <Text className="text-foreground-subtle text-xs font-medium tracking-widest uppercase">
              Continue with
            </Text>
            <View className="flex-1 h-px bg-border" />
          </View>
          
          {/* buttonsssss */}
          
          <View className="flex-row justify-center items-center gap-4 mb-5">
            {/* GOOGLE btn */}
            <Pressable
              className="size-20 rounded-2xl bg-white items-center justify-center active:scale-95 shadow-lg shadow-white/10"
              style={({ pressed }) => ({ opacity: pressed ? 0.85 : 1 })}
              disabled={isLoading}
              accessibilityRole="button"
              accessibilityLabel="Continue with Google"
              onPress={() => !isLoading && handleSocialAuth("oauth_google")}
            >
              {loadingState === "oauth_google" ? (
                <ActivityIndicator size={"small"} color={"#6C5CE7"} />
              ) : (
                <Image
                  source={require("../../../assets/images/google.png")}
                  style={{ width: 28, height: 28 }}
                  contentFit="contain"
                />
              )};
            </Pressable>

            {/* APPLE btn */}
            <Pressable
              className="size-20 rounded-2xl bg-surface border border-border-light items-center justify-center active:scale-95"
              style={({ pressed }) => ({ opacity: pressed ? 0.85 : 1 })}
              disabled={isLoading}
              accessibilityRole="button"
              accessibilityLabel="Continue with Apple"
              onPress={() => !isLoading && handleSocialAuth("oauth_apple")}
            >
              {loadingState === "oauth_apple" ? (
                <ActivityIndicator size={"small"} color={"#6C5CE7"} />
              ) : (
                <Ionicons name="logo-apple" size={24} color="#FFFFFE" />
              )};

            </Pressable>

            {/* GITHUB btn */}
            <Pressable
              className="size-20 rounded-2xl bg-surface border border-border-light items-center justify-center active:scale-95"
              style={({ pressed }) => ({ opacity: pressed ? 0.85 : 1 })}
              disabled={isLoading}
              accessibilityRole="button"
              accessibilityLabel="Continue with GitHub"
              onPress={() => !isLoading && handleSocialAuth("oauth_github")}
            >
              {loadingState === "oauth_github" ? (
                <ActivityIndicator size="small" color="#6C5CE7" />
              ) : (
                <Ionicons name="logo-github" size={28} color="#FFFFFE" />
              )}
            </Pressable>

          </View>  

        </View>
      </SafeAreaView>
    </View>
  );
};

export default AuthScreen;
