import React from 'react';
import { StyleSheet, Text, } from 'react-native';

const Banner = ({title}) => (
  <Text >{title  || '[loading...]'}</Text>
);

export default Banner;