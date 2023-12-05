import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Triceps = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.description}>
        Perform the following Triceps exercise to target your Triceps muscles:
      </Text>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>Tricep Dips:</Text>
        <Text>Targets: Overall triceps development</Text>
        <Text>Instructions: Use parallel bars or a dip station. Lower your body by bending your elbows until they are at a 90-degree angle, then push back up.</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>Close-Grip Bench Press:</Text>
        <Text>Targets: Triceps, chest</Text>
        <Text>Instructions: Lie on a flat bench and grip the barbell with hands closer than shoulder-width apart. Lower the bar to your chest and push it back up.</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>Tricep Pushdowns:</Text>
        <Text>Targets: Lateral and medial triceps</Text>
        <Text>Instructions: Use a cable machine with a straight or V-bar attachment. Push the bar down towards the floor, extending your elbows.
</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>Overhead Tricep Extension:</Text>
        <Text>Targets: Long head of the triceps</Text>
        <Text>Instructions: Sit or stand and hold a dumbbell or barbell with both hands overhead. Lower the weight behind your head and then extend your arms.</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>Skull Crushers (Lying Tricep Extensions):</Text>
        <Text>Targets: Long head of the triceps</Text>
        <Text>Instructions: Lie on a bench, hold a barbell with arms extended, and lower the barbell towards your forehead before extending your arms.</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>Tricep Kickbacks:</Text>
        <Text>Targets: Rear triceps</Text>
        <Text>Instructions: Bend at the hips, hold a dumbbell in each hand, and extend your arms back while keeping your upper arms parallel to the ground.</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>Diamond Push-Ups:</Text>
        <Text>Targets: Triceps, chest</Text>
        <Text>Instructions: Get into a push-up position with hands close together to form a diamond shape. Lower your body and push back up.</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>Cable Overhead Tricep Extension:</Text>
        <Text>Targets: Lower back, hamstrings, glutes</Text>
        <Text>Instructions: Use a cable machine with a rope attachment. Stand facing away from the machine, hold the rope overhead, and extend your arms.</Text>
      </View>
      <Text style={styles.note}>Follow the instructions carefully and take the help of trainer.</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  note: {
    fontSize: 16,
    color: 'black',
    marginTop: 20,
  },
  box:{
    backgroundColor:'white',
    padding:10,
    borderRadius:20,
    marginTop:5
  }
});

export default Triceps;
