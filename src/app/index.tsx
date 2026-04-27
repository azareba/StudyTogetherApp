import { Pressable, StyleSheet, Text, View } from "react-native";
import { Redirect } from "expo-router";
import { useAuth } from "@clerk/expo";

export default function Index() {

  const {isSignedIn , isLoaded, signOut} = useAuth()
  if (!isLoaded) return null // if clerk is not loaded dont do anything


  if (!isSignedIn) {
    return <Redirect href={"/(auth)"} />
  }

  return (
    <View style={styles.container}>
      <Text className="text-red-500 ">
        Edit src/app/index.js to edit this screen.
      </Text>
      <Text> hi im oki</Text>
      
      <Pressable onPress={()=> signOut()} className="mt-4 px-4 py-2 bg-red-500 rounded">
        <Text className="text-white font-semibold">Sign Out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
