// App.js

import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TextInput, Alert } from 'react-native';
import _ from 'lodash';
import { Divider } from 'react-native-paper';

const questionsData = [
  { id: 1, text: "How often do you feel overwhelmed by tasks at work or school?" },
  { id: 2, text: "In the past month, how often have you experienced difficulty falling asleep?" },
  { id: 3, text: "Do you often find it hard to focus on tasks?" },
  { id: 4, text: "How satisfied are you with your current relationships? (1-10)" },
  { id: 5, text: "Have you experienced a major life change recently? (yes/no)" },
  { id: 6, text: "Do you engage in regular physical activity? (yes/no)" },
  { id: 7, text: "How often do you take breaks during the day to relax?" },
  { id: 8, text: "How would you rate your overall happiness? (1-10)" },
  { id: 9, text: "Do you feel a sense of purpose or fulfillment in your daily activities?" },
  { id: 10, text: "How often do you engage in activities you enjoy?" },
  { id: 11, text: "Do you feel a sense of accomplishment in your work or studies?" },
  { id: 12, text: "How often do you experience feelings of loneliness?" },
  { id: 13, text: "Are you satisfied with your work-life balance? (yes/no)" },
  { id: 14, text: "How often do you experience intrusive or negative thoughts?" },
  { id: 15, text: "Do you have a support system of friends or family? (yes/no)" },
  { id: 16, text: "In the past month, how often have you felt fatigued or low on energy?" },
  { id: 17, text: "How often do you engage in relaxation techniques, such as meditation?" },
  { id: 18, text: "Do you have a healthy diet with a variety of nutrients? (yes/no)" },
  { id: 19, text: "How often do you feel a sense of control over your life?" },
  { id: 20, text: "Do you have a creative outlet or hobby? (yes/no)" },
  { id: 20, text: "Do you have a creative outlet or hobby? (yes/no)" },
  { id: 21, text: "How often do you practice gratitude or reflection on positive aspects of your life?" },
  { id: 22, text: "Do you feel a sense of security and safety in your living environment? (yes/no)" },
  { id: 23, text: "How often do you engage in social activities or outings with friends?" },
  { id: 24, text: "Are you satisfied with your current level of education or professional development?" },
  { id: 25, text: "How often do you experience feelings of hopefulness about the future?" },
  { id: 26, text: "Do you have a mentor or role model who positively influences your life? (yes/no)" },
  { id: 27, text: "How well do you adapt to changes in your routine or environment? (1-10)" },
  { id: 28, text: "In the past month, how often have you felt a lack of motivation or enthusiasm?" },
  { id: 29, text: "How often do you engage in activities that challenge your mind, such as learning new skills?" },
  { id: 30, text: "Are you comfortable setting boundaries with others? (yes/no)" },
  { id: 31, text: "How often do you engage in activities that promote relaxation and stress reduction?" },
  { id: 32, text: "Do you feel a sense of independence and autonomy in your life? (yes/no)" },
  { id: 33, text: "How often do you engage in acts of kindness or help others?" },
  { id: 34, text: "In the past month, how often have you experienced feelings of sadness or depression?" },
  { id: 35, text: "Do you feel a sense of fulfillment in your personal relationships? (yes/no)" },
  { id: 36, text: "How often do you engage in activities that connect you with nature?" },
  { id: 37, text: "Are you satisfied with the level of social support you receive? (yes/no)" },
  { id: 38, text: "In the past month, how often have you felt a sense of isolation from others?" },
  { id: 39, text: "How well do you handle and cope with stressful situations? (1-10)" },
  { id: 40, text: "Do you feel a sense of accomplishment in your personal life? (yes/no)" },
  { id: 41, text: "How often do you engage in activities that promote laughter and joy?" },
  { id: 42, text: "Are you content with your current level of physical health? (yes/no)" },
  { id: 43, text: "In the past month, how often have you experienced feelings of anxiety?" },
  { id: 44, text: "How often do you engage in activities that promote relaxation and stress reduction?" },
  { id: 45, text: "Do you feel a sense of purpose in your daily activities? (yes/no)" },
  { id: 46, text: "How often do you engage in activities that promote self-reflection and mindfulness?" },
  { id: 47, text: "Are you satisfied with your current work or academic achievements? (yes/no)" },
  { id: 48, text: "In the past month, how often have you experienced feelings of irritability?" },
  { id: 49, text: "How well do you communicate and express your needs to others? (1-10)" },
  { id: 50, text: "Do you feel a sense of control over your thoughts and emotions? (yes/no)" },
  { id: 51, text: "Do you feel satisfied with your current financial situation? (yes/no)" },
  { id: 52, text: "How often do you experience feelings of guilt or shame?" },
  { id: 53, text: "Are you comfortable expressing your emotions to others? (yes/no)" },
  { id: 54, text: "In the past month, how often have you had trouble enjoying activities you used to love?" },
  { id: 55, text: "Do you feel a sense of belonging in your community or social groups? (yes/no)" },
  
  // Add more questions...
];

const Session = () => {
    const [currentQuestions, setCurrentQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [suggestions, setSuggestions] = useState('');
  
    useEffect(() => {
      shuffleQuestions();
    }, []);
  
    const shuffleQuestions = () => {
      const shuffledQuestions = _.shuffle(questionsData);
      const selectedQuestions = shuffledQuestions.slice(0, 5);
      setCurrentQuestions(selectedQuestions);
    };
  
    const handleAnswer = (questionId, answer) => {
      setAnswers({ ...answers, [questionId]: parseInt(answer) || 0 });
    };
  
    const calculateSuggestion = () => {
      const totalScore = Object.values(answers).reduce((acc, answer) => acc + answer, 0);
      const averageScore = totalScore / currentQuestions.length;
  
      let suggestion = '';
      // Customize the suggestions based on your scoring criteria
      if (averageScore >= 4) {
        suggestion = 'Your mental health seems to be in a good place. Keep it up!';
      } else if (averageScore >= 2) {
        suggestion = 'There may be some areas to focus on. Consider seeking support if needed.';
      } else {
        suggestion = 'It\'s important to prioritize your mental health. Consider reaching out for support.';
      }
  
      // Show an alert with the suggestion
      Alert.alert('Suggestion', suggestion, [{ text: 'OK', onPress: shuffleQuestions }]);
      setSuggestions(suggestion);
    };
  
    const renderQuestions = () => {
      return currentQuestions.map((question) => (
        <View key={question.id} style={styles.questionContainer}>
          <Text style={styles.questionText}>{question.text}</Text>
          <TextInput
            style={styles.answerInput}
            placeholder="Your Answer"
            onChangeText={(text) => handleAnswer(question.id, text)}
            keyboardType="numeric"
          />
        </View>
      ));
    };
  
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Mental Health Assessment</Text>
        {renderQuestions()}
        <Button title="Submit Answers" onPress={calculateSuggestion} />
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      marginTop:15
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      color:'black'
    },
    questionContainer: {
      marginBottom: 16,
    },
    questionText: {
      fontSize: 18,
      marginBottom: 8,
    },
    answerInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingLeft: 10,
    },
    suggestions: {
      marginTop: 20,
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  
  export default Session;