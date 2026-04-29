import { Stack } from "expo-router";
import '../../global.css';
import { ClerkProvider } from '@clerk/expo';
import { tokenCache } from '@clerk/expo/token-cache'
import { useFonts, SpaceMono_400Regular } from '@expo-google-fonts/space-mono';
import * as SplashScreen from 'expo-splash-screen';

import * as Sentry from '@sentry/react-native';



Sentry.init({
  dsn: 'https://a36bc9904cc8a9df296ceb75f1206864@o4511054010318848.ingest.de.sentry.io/4511293299556432',

  // Adds more context data to events (IP address, cookies, user, etc.)
  // For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
  sendDefaultPii: true,

  // Enable Logs
  enableLogs: true,

  // Configure Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  integrations: [Sentry.mobileReplayIntegration()],

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: __DEV__,
});


SplashScreen.preventAutoHideAsync();
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY! // tu musi byc ! na końcu aby ts wiedzial ze ma mi ufać że ta wartość istanieje, inaczej ts myśli że publishableKey jest undefined

if (!publishableKey) {
  throw new Error('Add your Clerk Publishable Key to the .env.local file')
}

function RootLayout() {
  const [fontsLoaded] = useFonts({ SpaceMono: SpaceMono_400Regular });

  if (fontsLoaded) SplashScreen.hideAsync();

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </ClerkProvider>
  );
}

export default Sentry.wrap(RootLayout);