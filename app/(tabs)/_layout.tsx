import { Tabs } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router'; 

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <View >
    <Text >About screen</Text>
    <Link href="/about">
        Go to About screen
      </Link>
  </View>
  );
}
