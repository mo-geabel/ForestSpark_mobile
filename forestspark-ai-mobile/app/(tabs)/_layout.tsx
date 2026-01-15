import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useAuth } from "../../src/context/AuthContext";

export default function TabsLayout() {
  const { logout } = useAuth();

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#059669",
        },
        headerTintColor: "#fff",
        tabBarActiveTintColor: "#059669",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Map",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map-outline" size={size} color={color} />
          ),
          headerRight: () => (
            <Pressable onPress={logout} style={{ marginRight: 16 }}>
              <Ionicons name="log-out-outline" size={24} color="#fff" />
            </Pressable>
          ),
        }}
      />

      <Tabs.Screen
        name="HistoryScreen"
        options={{
          title: "History",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
