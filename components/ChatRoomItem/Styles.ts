import { StyleSheet } from "react-native"
import { exp } from "react-native-reanimated";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
  },
  badgeContainer: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#3872E9',
    justifyContent: 'center',
    alignContent: 'center',
    position: 'absolute',
    left: 50,
    top: 15,
  },
  badgeText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'white',
    
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 5
  },
  row: {
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  text: {
    color: 'gray',
    fontSize: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
});

export default styles;