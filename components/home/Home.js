import 'react-native-gesture-handler';
import React from 'react';

import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';


const Home = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={styles.subscontainer}>
          <Text style={styles.tex}>Welcome back, Suraj!</Text>
          <Text style={styles.text}>How are you feeling </Text>
          <Text style={styles.text}>today? </Text>
        </View>

        <View style={styles.box}>
          <View style={{marginTop: 15, marginLeft: 15}}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
              A 5-minute
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
              sessions for today's
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
              mood
            </Text>
            <Text></Text>
            <Text>5 Sessions</Text>
            <Text></Text>
            <TouchableOpacity onPress={() => navigation.navigate('Session')}> 
              <View style={styles.playbox}>
              <Icon
                name={'play-circle'}
                size={15}
                color="black"
                style={{marginTop: 10, marginLeft: 8}}
              />
              
              <Text style={{marginTop: 8, marginLeft: 5, color: 'black'}}>
                Start
              </Text>
            </View>
            </TouchableOpacity>
            
          </View>
          <Image
            source={require('../img/Meditating.png')}
            style={{height: 150, width: 180, marginTop: 35, marginRight: 10}}
          />
        </View>
        <View style={styles.subcontainer}>
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 20}}>
            Exercises
          </Text>
        </View>
        <ScrollView
          style={styles.hscroll}
          horizontal
          automaticallyAdjustContentInsets={false}
          directionalLockEnabled
          alwaysBounceVertical={false}
          pagingEnabled
          scrollsToTop={true}
          showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={() => navigation.navigate('Chest')}>
          <View style={styles.boxs}>
            <Image
              source={require('../img/mon.png')}
              style={{height: 130, width: 140}}
            />
            <View
              style={{
                borderWidth: 1,
                height: 85,
                marginTop: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 20,
                  marginTop: 10,
                  marginLeft: 15,
                }}>
                Chest
              </Text>
              <View style={styles.session}>
                <Icon name={'play-circle'} size={20} color="black" />
                <Text style={{marginLeft: 4}}>8 Sessions</Text>
              </View>
            </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Biceps')}>
          <View style={styles.boxs}>
            <Image
              source={require('../img/tue.png')}
              style={{height: 130, width: 150}}
            />
            <View
              style={{
                borderWidth: 1,
                height: 85,
                marginTop: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 20,
                  marginTop: 10,
                  marginLeft: 15,
                }}>
                Biceps
              </Text>
              <View style={styles.session}>
                <Icon name={'play-circle'} size={20} color="black" />
                <Text style={{marginLeft: 4}}>8 Sessions</Text>
              </View>
            </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Back')}>
          <View style={styles.boxs}>
            <Image
              source={require('../img/wed.png')}
              style={{height: 130, width: 150}}
            />
            <View
              style={{
                borderWidth: 1,
                height: 85,
                marginTop: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 20,
                  marginTop: 10,
                  marginLeft: 15,
                }}>
                Back
              </Text>
              <View style={styles.session}>
                <Icon name={'play-circle'} size={20} color="black" />
                <Text style={{marginLeft: 4}}>8 Sessions</Text>
              </View>
            </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Triceps')}>
          <View style={styles.boxs}>
            <Image
              source={require('../img/thur.png')}
              style={{height: 130, width: 150}}
            />
            <View
              style={{
                borderWidth: 1,
                height: 85,
                marginTop: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 20,
                  marginTop: 10,
                  marginLeft: 15,
                }}>
                Triceps
              </Text>
              <View style={styles.session}>
                <Icon name={'play-circle'} size={20} color="black" />
                <Text style={{marginLeft: 4}}>8 Sessions</Text>
              </View>
            </View>
          </View>
          </TouchableOpacity>
          <View style={styles.boxs}>
            <Image
              source={require('../img/fri.png')}
              style={{height: 130, width: 150}}
            />
            <View
              style={{
                borderWidth: 1,
                height: 85,
                marginTop: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 20,
                  marginTop: 10,
                  marginLeft: 15,
                }}>
                Abs
              </Text>
              <View style={styles.session}>
                <Icon name={'play-circle'} size={20} color="black" />
                <Text style={{marginLeft: 4}}>8 Sessions</Text>
              </View>
            </View>
          </View>
          <View style={styles.boxs}>
            <Image
              source={require('../img/sat.png')}
              style={{height: 130, width: 150}}
            />
            <View
              style={{
                borderWidth: 1,
                height: 85,
                marginTop: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 20,
                  marginTop: 10,
                  marginLeft: 15,
                }}>
                Shulder
              </Text>
              <View style={styles.session}>
                <Icon name={'play-circle'} size={20} color="black" />
                <Text style={{marginLeft: 4}}>8 Sessions</Text>
              </View>
            </View>
          </View>
          <View style={styles.boxs}>
            <Image
              source={require('../img/legs.png')}
              style={{height: 130, width: 150}}
            />
            <View
              style={{
                borderWidth: 1,
                height: 85,
                marginTop: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 20,
                  marginTop: 10,
                  marginLeft: 15,
                }}>
                Legs
              </Text>
              <View style={styles.session}>
                <Icon name={'play-circle'} size={20} color="black" />
                <Text style={{marginLeft: 4}}>8 Sessions</Text>
              </View>
            </View>
          </View>
       
        </ScrollView>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.subhcontainer}>
          <TouchableOpacity>
            <Icon name={'home'} size={25} color="black" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Calculate')}>
            <Icon name={'calculator'} size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Foodcount')}>
            <Icon name={'balance-scale'} size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Play')}>
            <Icon name={'user'} size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  subcontainer: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 17,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subscontainer: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 17,
  },
  tex: {
    fontSize: 17,
    fontFamily: 'aerial',
  },
  text: {
    fontSize: 28,
    fontFamily: 'aerial',
    fontWeight: 'bold',
    color: 'black',
  },
  box: {
    height: 210,
    width: 'auto',
    borderRadius: 20,
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lavender',
    shadowColor: 'blue',
    elevation: 5,
  },

  boxs: {
    height: 250,
    width: 150,
    marginLeft: 15,
    marginRight: 10,
  },
  session: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 6,
    marginLeft: 15,
  },
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
  playbox: {
    height: 35,
    width: 70,
    backgroundColor: 'lightpink',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  hscroll: {
    flex: 1,
  },
});

export default Home;
