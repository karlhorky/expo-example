import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '@/constants/theme';

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    fontFamily: fonts.heading,
    fontSize: 24,
  },
  body: {
    color: colors.textSecondary,
    fontFamily: fonts.body,
    fontSize: 16,
  },
});

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/about" style={{ marginTop: 20 }}>
        About the app
      </Link>
      <Link href="/animals" style={{ marginTop: 20 }}>
        Animals
      </Link>
      <Link href="/animals/1" style={{ marginTop: 20 }}>
        View Animal 1
      </Link>
      <Link href="/animals/2" style={{ marginTop: 20 }}>
        View Animal 2
      </Link>
    </View>
  );
}
