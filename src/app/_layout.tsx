import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { SystemBars } from "react-native-edge-to-edge";

const queryClient = new QueryClient();

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </QueryClientProvider>
  );
}
