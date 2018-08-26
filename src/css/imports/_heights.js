import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'h1': {
    'height': [{ 'unit': 'string', 'value': 'var(--spacing-medium)' }]
  },
  'h2': {
    'height': [{ 'unit': 'rem', 'value': 2 }]
  },
  'h3': {
    'height': [{ 'unit': 'rem', 'value': 4 }]
  },
  'h4': {
    'height': [{ 'unit': 'rem', 'value': 8 }]
  },
  'h5': {
    'height': [{ 'unit': 'rem', 'value': 16 }]
  },
  'h-7rem': {
    'height': [{ 'unit': 'rem', 'value': 7 }]
  },
  // Height Percentages - Based off of height of parent
  'h-25': {
    'height': [{ 'unit': '%V', 'value': 0.25 }]
  },
  'h-50': {
    'height': [{ 'unit': '%V', 'value': 0.5 }]
  },
  'h-75': {
    'height': [{ 'unit': '%V', 'value': 0.75 }]
  },
  'h-100': {
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'min-h-100': {
    'minHeight': [{ 'unit': '%V', 'value': 1 }]
  },
  // Screen Height Percentage
  'vh-25': {
    'height': [{ 'unit': 'vh', 'value': 25 }]
  },
  'vh-50': {
    'height': [{ 'unit': 'vh', 'value': 50 }]
  },
  'vh-75': {
    'height': [{ 'unit': 'vh', 'value': 75 }]
  },
  'vh-100': {
    'height': [{ 'unit': 'vh', 'value': 100 }]
  },
  'min-vh-100': {
    'minHeight': [{ 'unit': 'vh', 'value': 100 }]
  },
  // String Properties
  'h-auto': {
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'h-inherit': {
    'height': [{ 'unit': 'string', 'value': 'inherit' }]
  }
});
