import 'react-native-gesture-handler';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from '../home/Home';
import Foodcount from '../food/Foodcount';
import Bmi from '../bmi/Bmi';

import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Calories from '../calories/Calories';
import Calorieswomen from '../calorieswomen/Calorieswomen';
import Play from '../play/Play';

export default function Calculate({navigation}) {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={styles.uheader}>
          <Text style={styles.theader}>Calculator</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate(Bmi)}>
          <View style={styles.card}>
            <View>
              <Text style={styles.heading}>
                Body Mass Index (BMI) calculator
              </Text>
            </View>
            <Text>
              Helps you to identify you are healthy,overweight or underweight.
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(Calories)}>
          <View style={styles.card}>
            <View>
              <Text style={styles.heading}>Calorie Calculator For Men</Text>
            </View>
            <Text>
              Use the calorie calculator to estimate the number of daily
              calories your body needs
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(Calorieswomen)}>
          <View style={styles.card}>
            <View>
              <Text style={styles.heading}>Calorie Calculator For Women</Text>
            </View>
            <Text>
              Use the calorie calculator to estimate the number of daily
              calories your body needs
            </Text>
          </View>
        </TouchableOpacity>
        
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.subhcontainer}>
          <TouchableOpacity onPress={() => navigation.navigate(Home)}>
            <Icon name={'home'} size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(Calculate)}>
            <Icon name={'calculator'} size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(Foodcount)}>
            <Icon name={'balance-scale'} size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(Play)}>
            <Icon name={'user'} size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  footer: {
    height: 70,
    backgroundColor: 'white',
  },
  subhcontainer: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  uheader: {
    height: 100,
    backgroundColor: 'white',
    marginBottom: 10,
    shadowColor: 'black',
    elevation: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: 'black',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 40,
    paddingHorizontal: 25,
    width: 'auto',
    marginLeft: 15,
    marginRight: 15,
    marginVertical: 10,
    marginTop: 10,
    
   
  },
  theader: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    marginTop: 23,
  },
});
