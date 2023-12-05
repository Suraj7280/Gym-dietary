import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Chest = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.description}>
        Perform the following chest exercise to target your chest muscles:
      </Text>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>Barbell Bench Press:</Text>
        <Text>Targets: Overall chest development</Text>
        <Text>Instructions: Lie on a flat bench, grip the barbell slightly wider than shoulder-width apart, and lower it to your chest before pressing it back up.</Text>
      </View>
      <View style={styles.box}> 
        <Text style={{fontWeight:'bold',color:'black'}}>Dumbbell Flyes:</Text>
        <Text>Targets: Chest isolation and stretching</Text>
        <Text>Instructions: Lie on a flat bench with a dumbbell in each hand. Keep a slight bend in your elbows and open your arms wide, then bring the weights back together over your chest.</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>Incline Bench Press:</Text>
        <Text>Targets: Upper chest development</Text>
        <Text>Instructions: Similar to the barbell bench press but performed on an inclined bench. This emphasizes the upper part of the chest.</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>Chest Dips:</Text>
        <Text>Targets: Lower chest and triceps</Text>
        <Text>Instructions: Use parallel bars or dip station. Lower your body until your upper arms are parallel to the ground, then push back up.</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>Push-Ups:</Text>
        <Text>Targets: Overall chest, especially the lower chest</Text>
        <Text>Instructions: A bodyweight exercise that can be performed anywhere. Keep your body in a straight line as you lower and raise yourself.</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>Cable Crossover:</Text>
        <Text>Targets: Chest isolation and stretching</Text>
        <Text>Instructions: Stand between two cable machines, set the cables at shoulder height, and pull the handles together in front of you.</Text>
      </View>
      <View style={styles.box}>
        <Text style={{fontWeight:'bold',color:'black'}}>Decline Bench Press:</Text>
        <Text>Targets: Lower chest development</Text>
        <Text>Instructions: Similar to the barbell bench press but performed on a decline bench. This emphasizes the lower part of the chest.</Text>
      </View>
      <View style={styles.box}> 
        <Text style={{fontWeight:'bold',color:'black'}}>Machine Chest Press:</Text>
        <Text>Targets: Overall chest development</Text>
        <Text>Instructions: Sit on a chest press machine and push the handles away from your chest.</Text>
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

export default Chest;
