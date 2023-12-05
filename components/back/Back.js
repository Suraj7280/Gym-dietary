import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Back = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.description}>
        Perform the following back exercise to target your back muscles:
      </Text>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>Deadlifts:</Text>
        <Text>Targets: Lower and middle back, hamstrings, glutes</Text>
        <Text>Instructions: Stand with feet shoulder-width apart, grip a barbell, and lift the barbell by extending your hips and knees.</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>Pull-Ups:</Text>
        <Text>Targets: Latissimus dorsi, upper back</Text>
        <Text>Instructions: Hang from a pull-up bar with hands slightly wider than shoulder-width apart, and pull your body up until your chin is over the bar.</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>Bent Over Barbell Rows:</Text>
        <Text>Targets: Middle and upper back</Text>
        <Text>Instructions: Bend at the hips, keeping your back straight, and row a barbell to your lower chest while keeping your elbows close to your body.
</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>Lat Pulldowns:</Text>
        <Text>Targets: Latissimus dorsi, upper back</Text>
        <Text>Instructions: Use a cable machine with a wide grip attachment, and pull the bar down to your chest while keeping your back straight.</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>Seated Cable Rows:</Text>
        <Text>Targets: Middle and upper back</Text>
        <Text>Instructions: Sit at a cable row machine, grab the handles with an overhand grip, and row the handles toward your abdomen.</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>Face Pulls:</Text>
        <Text>Targets: Upper back, rear deltoids</Text>
        <Text>Instructions: Use a cable machine with a rope attachment, set at face height, and pull the rope towards your face while keeping your upper arms parallel to the ground.</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>T-Bar Rows:</Text>
        <Text>Targets: Middle and upper back</Text>
        <Text>Instructions: Use a T-Bar row machine or landmine attachment, grip the handles, and row the weight towards your chest.</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>Hyperextensions/Back Extensions:</Text>
        <Text>Targets: Lower back, hamstrings, glutes</Text>
        <Text>Instructions: Use a hyperextension bench, and with your back straight, lower your upper body towards the ground and then lift it back up.</Text>
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

export default Back;
