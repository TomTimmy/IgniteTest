import React from "react"
import { NativeBaseProvider } from "native-base"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { IamportNavigation } from "./NavigationService"

function IamportMain() {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <IamportNavigation />
      </SafeAreaProvider>
    </NativeBaseProvider>
  )
}

export default IamportMain
