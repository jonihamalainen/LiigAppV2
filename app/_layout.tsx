import { Stack } from "expo-router";

import "../global.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { PaperProvider } from "react-native-paper";

export default function Layout() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: "#111111",
            },
            title: "LiigAppV2",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
      </PaperProvider>
    </Provider>
  );
}
