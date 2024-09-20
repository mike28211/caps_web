import { View, Text } from 'react-native';

export const ProfessionalDetailsScreen = ({ route }) => {
    const { professional } = route.params; // Get the professional data passed during navigation
  
    return (
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>{professional.name}</Text>
        <Text style={styles.detailsText}>Specialty: {professional.specialty}</Text>
        <Text style={styles.detailsText}>Age: {professional.age}</Text>
        <Text style={styles.detailsText}>Gender: {professional.gender}</Text>
        <Text style={styles.detailsText}>Rating: {professional.rating}</Text>
      </View>
    );
  }