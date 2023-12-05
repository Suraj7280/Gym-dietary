import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Biceps = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.description}>
        Perform the following biceps exercise to target your biceps muscles:
      </Text>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>Barbell Bicep Curl:</Text>
        <Text>Targets: Overall biceps development</Text>
        <Text>Instructions: Stand with feet shoulder-width apart, grip a barbell with hands shoulder-width apart, and curl the barbell towards your chest while keeping your elbows close to your body.</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>Dumbbell Hammer Curl:</Text>
        <Text>Targets: Brachialis and forearms</Text>
        <Text>Instructions: Hold a dumbbell in each hand with palms facing your body, and curl the weights toward your shoulders while keeping your palms facing each other.</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>Preacher Curl:</Text>
        <Text>Targets: Long head of the biceps</Text>
        <Text>Instructions: Sit or stand at a preacher curl bench, place your upper arms on the pad, and curl the barbell or dumbbells towards your face.
</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>Concentration Curl:</Text>
        <Text>Targets: Biceps peak</Text>
        <Text>Instructions: Sit on a bench with legs spread apart, rest your elbow on the inside of your thigh, and curl a dumbbell towards your shoulder.</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>Cable Bicep Curl:</Text>
        <Text>Targets: Constant tension on the biceps</Text>
        <Text>Instructions: Use a cable machine with a straight bar or rope attachment, and curl the bar or rope towards your chest.</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>Incline Dumbbell Curl:</Text>
        <Text>Targets: Upper part of the biceps</Text>
        <Text>Instructions: Sit on an incline bench with a dumbbell in each hand, and curl the weights towards your shoulders.</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>Reverse Grip Curl:</Text>
        <Text>Targets: Forearms and brachialis</Text>
        <Text>Instructions: Hold a barbell or EZ curl bar with a reverse (palms facing down) grip, and curl the bar towards your chest.</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>21s:</Text>
        <Text>Targets: Biceps endurance and pump</Text>
        <Text>Instructions: Perform 21s by breaking the standard curl into three parts - lower half, upper half, and full range of motion. Do 7 reps in each part without resting.</Text>
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

export default Biceps;
