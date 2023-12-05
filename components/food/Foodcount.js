import React ,{ useState }from 'react';
import { Provider as PaperProvider, Appbar, Button, List, Divider } from 'react-native-paper';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from '../home/Home';
import Calculate from '../calculate/Calculate';
import Play from '../play/Play';

const fruitsData = {
  apple: { calories: 52, protein: 0.3, carbohydrates: 14, fats: 0.2 },
    banana: { calories: 96, protein: 1.3, carbohydrates: 27, fats: 0.3 },
    orange: { calories: 43, protein: 1, carbohydrates: 8.3, fats: 0.2 },
    grape: { calories: 69, protein: 0.6, carbohydrates: 18, fats: 0.2 },
    pineapple: { calories: 50, protein: 0.5, carbohydrates: 13.1, fats: 0.1 },
    strawberry: { calories: 4, protein: 0.1, carbohydrates: 0.9, fats: 0 },
    watermelon: { calories: 30, protein: 0.6, carbohydrates: 7.6, fats: 0.2 },
    kiwi: { calories: 61, protein: 1.1, carbohydrates: 14.7, fats: 0.5 },
    mango: { calories: 60, protein: 0.8, carbohydrates: 15, fats: 0.4 },
    blueberry: { calories: 57, protein: 0.7, carbohydrates: 14.5, fats: 0.4 },
    raspberry: { calories: 52, protein: 1.2, carbohydrates: 11.9, fats: 0.7 },
    blackberry: { calories: 40, protein: 2, carbohydrates: 9, fats: 0.5 },
    peach: { calories: 39, protein: 0.9, carbohydrates: 9.5, fats: 0.3 },
    plum: { calories: 46, protein: 0.7, carbohydrates: 11.4, fats: 0.3 },
    apricot: { calories: 17, protein: 0.5, carbohydrates: 3.9, fats: 0.1 },
    cherry: { calories: 50, protein: 1, carbohydrates: 12, fats: 0.3 },
    pear: { calories: 57, protein: 0.4, carbohydrates: 15, fats: 0.1 },
    avocado: { calories: 160, protein: 2, carbohydrates: 8.5, fats: 14.7 },
    pomegranate: { calories: 83, protein: 1.7, carbohydrates: 18.7, fats: 1.2 },
    lemon: { calories: 29, protein: 1.1, carbohydrates: 9, fats: 0.3 },
    lime: { calories: 30, protein: 0.7, carbohydrates: 10, fats: 0.2 },
    melon: { calories: 36, protein: 0.9, carbohydrates: 8.6, fats: 0.2 },
    nectarine: { calories: 44, protein: 1, carbohydrates: 10.6, fats: 0.4 },
    papaya: { calories: 43, protein: 0.5, carbohydrates: 11, fats: 0.4 },
    raspberry: { calories: 52, protein: 1.2, carbohydrates: 11.9, fats: 0.7 },
    coconut: { calories: 354, protein: 3.3, carbohydrates: 15, fats: 33.5 },
    fig: { calories: 74, protein: 0.8, carbohydrates: 19.2, fats: 0.3 },
    guava: { calories: 68, protein: 2.6, carbohydrates: 14, fats: 0.9 },
    passionFruit: { calories: 68, protein: 2.2, carbohydrates: 13.5, fats: 0.5 },
    persimmon: { calories: 81, protein: 0.8, carbohydrates: 21, fats: 0.4 },
    date: { calories: 282, protein: 2.5, carbohydrates: 75, fats: 0.4 },
    egg: { calories: 68, protein: 5.5, carbohydrates: 0.6, fats: 4.8 },
    bread: { calories: 69, protein: 2.7, carbohydrates: 12.8, fats: 0.9 },
    milk: { calories: 42, protein: 3.4, carbohydrates: 5, fats: 1 },
    chickenBreast: { calories: 165, protein: 31, carbohydrates: 0, fats: 3.6 },
    rice: { calories: 130, protein: 2.7, carbohydrates: 28, fats: 0.3 },
    potato: { calories: 161, protein: 2.2, carbohydrates: 36.6, fats: 0.2 },
    spinach: { calories: 23, protein: 2.9, carbohydrates: 3.6, fats: 0.4 },
    broccoli: { calories: 55, protein: 3.7, carbohydrates: 11.2, fats: 0.6 },
    carrot: { calories: 41, protein: 0.9, carbohydrates: 10, fats: 0.2 },
    tomato: { calories: 22, protein: 1, carbohydrates: 5, fats: 0.2 },
    cucumber: { calories: 16, protein: 0.7, carbohydrates: 3.6, fats: 0.2 },
    onion: { calories: 44, protein: 1.2, carbohydrates: 10.1, fats: 0.1 },
    garlic: { calories: 149, protein: 6.4, carbohydrates: 33.1, fats: 0.5 },
    oliveOil: { calories: 119, protein: 0, carbohydrates: 0, fats: 13.5 },
    cheese: { calories: 402, protein: 25, carbohydrates: 3.2, fats: 33.3 },
    yogurt: { calories: 59, protein: 3.5, carbohydrates: 4.7, fats: 3.3 },
    beef: { calories: 250, protein: 26, carbohydrates: 0, fats: 17 },
    salmon: { calories: 206, protein: 22, carbohydrates: 0, fats: 13 },
    tuna: { calories: 184, protein: 40, carbohydrates: 0, fats: 1 },
    shrimp: { calories: 85, protein: 20, carbohydrates: 0, fats: 1.7 },
    coffee: { calories: 2, protein: 0.3, carbohydrates: 0, fats: 0 },
    tea: { calories: 2, protein: 0.1, carbohydrates: 0.5, fats: 0 },
    water: { calories: 0, protein: 0, carbohydrates: 0, fats: 0 },
};

export default function Foodcount({navigation}) {
  const [fruitCounts, setFruitCounts] = useState({});
  const [selectedFruits, setSelectedFruits] = useState([]);

  const handleAdd = (fruit) => {
    setSelectedFruits((prev) => {
      const updatedList = [...prev, fruit];
      setFruitCounts((prevCounts) => ({ ...prevCounts, [fruit]: (prevCounts[fruit] || 0) + 1 }));
      return updatedList;
    });
  };

  const handleRemove = (fruit) => {
    setSelectedFruits((prev) => {
      const updatedList = prev.filter((selected) => selected !== fruit);
      setFruitCounts((prevCounts) => ({ ...prevCounts, [fruit]: (prevCounts[fruit] || 0) - 1 }));
      return updatedList;
    });
  };

  const calculateTotalNutrition = () => {
    const totalNutrition = selectedFruits.reduce((acc, fruit) => {
      const { calories, protein, carbohydrates, fats } = fruitsData[fruit];
      acc.calories += calories;
      acc.protein += protein;
      acc.carbohydrates += carbohydrates;
      acc.fats += fats;
      return acc;
    }, { calories: 0, protein: 0, carbohydrates: 0, fats: 0 });

    // Round the nutritional values to two decimal places
    const roundedNutrition = Object.fromEntries(
      Object.entries(totalNutrition).map(([key, value]) => [key, value.toFixed(2)])
    );

    return roundedNutrition;
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <View style={styles.upper}>
          <View style={{marginTop: 20}}>
            <Text style={styles.eat}>What did you </Text>
            <Text style={styles.eat}>eat today!</Text>
          </View>
          <View>
            <Image
              source={require('../img/food.png')}
              style={{height: 130, width: 180, marginRight: 5}}
            />
          </View>
        </View>

        <View style={styles.calorbox}>
          <View style={styles.head}>
            <Text style={styles.heading}>Amount Per Serving</Text>
            <Text style={styles.heading}>Total Amount</Text>
          </View>
          <View style={styles.head}>
            <Text style={styles.heading}><List.Item title={`Calories:`} /></Text>
            <Text style={styles.heading}><List.Item title={`${calculateTotalNutrition().calories}`} /></Text>
          </View>
          <Divider />
          <View style={styles.head}>
            <Text style={styles.heading}><List.Item title={`Protein:`} /></Text>
            <Text style={styles.heading}><List.Item title={`${calculateTotalNutrition().protein}`} /></Text>
          </View>
          <Divider />
          <View style={styles.head}>
            <Text style={styles.heading}><List.Item title={`Carbohydrates:`} /></Text>
            <Text style={styles.heading}><List.Item title={`${calculateTotalNutrition().carbohydrates}g`} /></Text>
          </View>
          <Divider />
          <View style={styles.head}>
            <Text style={styles.heading}><List.Item title={`Fats:`} /></Text>
            <Text style={styles.heading}><List.Item title={`${calculateTotalNutrition().fats}g`} /></Text>
          </View>
          <View>
          <Divider />
        </View>
        </View>
        
        
          <View style={styles.itemss}>
            <List.Section>
          {Object.keys(fruitsData).map((fruit) => (
            <List.Item
              key={fruit}
              title={`${fruit} (${fruitCounts[fruit] || 0})`}
              right={() => (
                <View style={styles.buttonContainer}>
                  <Button mode="contained" onPress={() => handleAdd(fruit)}>
                    Add
                  </Button>
                  <Button mode="outlined" onPress={() => handleRemove(fruit)} disabled={fruitCounts[fruit] === 0}>
                    Remove
                  </Button>
                </View>
              )}
            />
          ))}
          </List.Section>
          </View>
          
        
        
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
  upper: {
    marginTop: 25,
    marginLeft: 15,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
  },
  eat: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  calorbox: {
    marginLeft: 13,
    marginRight: 13,
    marginTop: 20,
    height: 260,
    borderRadius: 10,
    width: 'auto',
    backgroundColor: 'lavender',
    shadowColor: 'blue',
    elevation: 10,
    borderBottomWidth: 4,
    borderEndWidth: 2,
  },
  head: {
    display: 'flex',
    marginTop: 7,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
  },
  heading: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
    marginTop: 0,
    marginBottom:0
  },
  headings: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    marginTop: 0,
    marginBottom:0,
  },
  heads: {
    display: 'flex',
    marginTop: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft:15,
    marginRight:10,
    flex:1
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:-10,
    gap:12,
  },
  infoText: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 9,
  },
  itemss:{
    marginTop:30,
    marginLeft:5,
  }
});
