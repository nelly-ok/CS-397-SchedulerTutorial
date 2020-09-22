import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView} from 'react-native-web'

import Course from './Course';
import TermSelector from './TermSelector'

const termMap = { F: 'Fall', W: 'Winter', S: 'Spring'};
const terms = Object.values(termMap);

const getCourseTerm = course => (
  termMap[course.id.charAt(0)]
);

const CourseList = ({courses}) => {
  const [selectedTerm, setSelectedTerm] = useState('Spring');
  const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));

  return (
    <View>
      <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
      <ScrollView contentContainerStyle={styles.courseList}>
        {termCourses.map(course => <Course key={course.id} course={course} />)}
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  courseList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

export default CourseList;