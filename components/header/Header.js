// StyledHeader.js
import React from 'react';
import { StyleSheet,View,Text } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
        
      <Text style={styles.content}>Your Fitness Challenge for Today</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2196F3', // Change to your desired color
    alignItems:'center'
  },
  content: {
    color:'white',
    alignItems: 'center',
    marginTop:25,
    marginBottom:25,
    fontSize:20,
    fontWeight:'bold'
  },
});

export default Header;
