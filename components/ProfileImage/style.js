import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'grey',
  },
  view: {
    flex: 1,
    padding: 4,
  },
  text: {
    color: 'white',
  },
  actionContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
});
