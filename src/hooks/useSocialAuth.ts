import { View, Text, Alert } from 'react-native'
import { useState } from 'react'
import { useSSO } from '@clerk/expo';

const useSocialAuth = () => {

    // loading spinner
    const [loadingState, setLoadingState] = useState<string | null>(null)

    // hook from clerk, for dingle sign on
    const {startSSOFlow} = useSSO();

    // this checks what does the user want to log/sign in with
    const handleSocialAuth = async (strategy: "oauth_google" | "oauth_apple" | "oauth_github")=> {
        if (loadingState) return // guard against multiple clicks

        setLoadingState(strategy)

            // await new Promise(r => setTimeout(r, 2000))


        try {
            const {createdSessionId, setActive} = await startSSOFlow({strategy})

            if (!createdSessionId || !setActive) {// user couldnt auth succesfully
                const provider = 
                strategy === "oauth_google" ? "Google" : strategy === "oauth_apple" ? "Apple" : "GitHub"

                Alert.alert(
                    "Sign in incomplete", 
                    `${provider} sign in is incomplete, pls try again ;}`)
                
                return
            }
            await setActive({session: createdSessionId}) // if this is undefined then i should't pass it

        } catch (error) {
            console.error("Error in social Auth:", error)

            const provider = 
                strategy === "oauth_google" ? "Google" : strategy === "oauth_apple" ? "Apple" : "GitHub"

            Alert.alert(
                "ERROR", `Failed to sign in with ${provider}, please try again.`)
        } finally {
            setLoadingState(null)       
        }
    }
    return { handleSocialAuth, loadingState }
}



export default useSocialAuth