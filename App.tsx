import { GluestackUIProvider, Spinner } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

import { useFonts } from "expo-font";

import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { StatusBar } from "react-native";

export default function App() {
  let [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      {fontsLoaded ? (
        <></>
      ) : (
        <Spinner size="large" flex={1} color="greenDark" />
      )}
    </GluestackUIProvider>
  );
}
