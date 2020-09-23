import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView} from 'react-native-web'

import TermSelector from './TermSelector'
import CourseSelector from './CourseSelector'
import { getCourseTerm, terms } from '../utils/course';

const CourseList = ({courses}) => {
  const [selectedTerm, setSelectedTerm] = useState('Spring');
  const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));

  return (
    <View>
      <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
      <CourseSelector courses={termCourses}/>
    </View>
  )
};


export default CourseList;