// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import Header from '../header/Header';


const challenges = [
  'Do 20 push-ups',
  'Take a 30-minute walk',
  'Try a new workout video on YouTube',
  'Eat a healthy, balanced meal',
  'Do 20 push-ups',
  'Take a 30-minute brisk walk',
  'Try a new workout video on YouTube',
  'Perform 50 jumping jacks',
  'Hold a plank for one minute',
  'Complete a set of 15 burpees',
  'Go for a 3-mile run',
  'Do 50 bodyweight squats',
  'Take the stairs instead of the elevator all day',
  'Perform 20 tricep dips',
  'Cycle for 45 minutes',
  'Try a yoga class',
  'Complete a set of 15 lunges on each leg',
  'Swim for 30 minutes',
  'Do 30 seconds of high knees',
  'Try a dance workout',
  'Perform 50 mountain climbers',
  'Go for a hike in nature',
  'Attend a fitness class at the gym',
  'Perform 20 bicep curls with weights',
  'Take a 20-minute bike ride',
  'Do a full-body stretching routine',
  'Perform 15 push-ups with a shoulder tap',
  'Run up and down a flight of stairs 10 times',
  'Try a kickboxing workout',
  'Complete a set of 20 Russian twists',
  'Do 15 box jumps',
  'Attend a group fitness class',
  'Perform 20 leg raises',
  'Take a 1-hour power walk',
  'Try a Pilates session',
  'Do a set of 15 diamond push-ups',
  'Jump rope for 15 minutes',
  'Perform 25 sit-ups',
  'Try a 7-minute workout',
  'Attend a spin class',
  'Do 20 supermans',
  'Take a 2-mile jog',
  'Try a calisthenics routine',
  'Perform 30 seconds of butt kicks',
  'Go for a swim in the ocean or pool',
  'Attend a Zumba class',
  'Do a set of 15 bench presses',
  'Try a barre workout',
  'Perform 25 bicycle crunches',
  'Take a 45-minute power walk',
  'Do 20 jumping lunges',
  'Attend a CrossFit class',
  'Perform 15 pull-ups or assisted pull-ups',
  'Try a 10-minute HIIT workout',
  // Add more challenges as needed
];

const Play = () => {
  const [challenge, setChallenge] = useState('');

  useEffect(() => {
    generateChallenge();
  }, []);

  const generateChallenge = () => {
    const randomIndex = Math.floor(Math.random() * challenges.length);
    setChallenge(challenges[randomIndex]);
  };

  return (
  <>
  <Header />
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'white'}}>
     
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 40 ,color:'black'}}>
        {challenge}
      </Text>
      <Button title="Generate New Challenge" onPress={generateChallenge} />
    </View>
    
    </>
  );
};

export default Play;
