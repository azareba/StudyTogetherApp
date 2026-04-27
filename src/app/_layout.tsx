import { Stack } from "expo-router";
import '../../global.css';
import { ClerkProvider } from '@clerk/expo';
import { tokenCache } from '@clerk/expo/token-cache'
import { useFonts, SpaceMono_400Regular } from '@expo-google-fonts/space-mono';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY! // tu musi byc ! na końcu aby ts wiedzial ze ma mi ufać że ta wartość istanieje, inaczej ts myśli że publishableKey jest undefined

if (!publishableKey) {
  throw new Error('Add your Clerk Publishable Key to the .env.local file')
}

export default function RootLayout() {

  const [fontsLoaded] = useFonts({ SpaceMono: SpaceMono_400Regular });

  if (fontsLoaded) SplashScreen.hideAsync();
  return (
    <ClerkProvider publishableKey={publishableKey}  tokenCache={tokenCache} > 
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" options={{ title: "Home" }} />
      </Stack>
    </ClerkProvider>
  );
}
