import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, Form } from 'react-native';
import {TextInput} from 'react-native-web';

import CourseEditScreen from './CourseEditScreen';
import CourseList from '../components/CourseList';
import Banner from '../components/Banner';
import UserContext from '../UserContext';


const ScheduleScreen = ({navigation}) => {
  const user = useContext(UserContext);
  const canEdit = user && user.role === 'admin';
  const [schedule, setSchedule] = useState({ title: '', courses: [] });

  const view = (course) => {
    navigation.navigate(canEdit ? 'CourseEditScreen' : 'CourseDetailScreen', { course });
  };

  const url = 'https://courses.cs.northwestern.edu/394/data/cs-courses.php';

  useEffect(() => {
    const fetchSchedule = async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      setSchedule(json);
    }
    fetchSchedule();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Banner title={schedule.title} />
      <CourseList courses={schedule.courses} view={view} />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1C40F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    color: 'white',
    fontSize: 32         
  }
});

export default ScheduleScreen;