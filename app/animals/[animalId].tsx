import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function AnimalScreen() {
  const { animalId } = useLocalSearchParams();
  return (
    <View>
      <Text>Animal ID: {animalId}</Text>
      <Text>Edit app/animals/[animalId].tsx to edit this screen</Text>
    </View>
  );
}
