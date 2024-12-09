import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="about" options={{ title: 'About' }} />
      <Tabs.Screen name="info" options={{ title: 'Info' }} />
      <Tabs.Screen name="(tabs)" options={{ title: 'Menu' }} />
    </Tabs>
  );
}
