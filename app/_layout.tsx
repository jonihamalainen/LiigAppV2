import { Stack } from 'expo-router';

import "../global.css";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: 'grey',
        },
        title: "LiigApp",
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  );
}
