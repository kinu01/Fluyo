import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'pink',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 80,
  },
  mainContainer: {
    // backgroundColor: 'pink',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelContainer: {
    // backgroundColor: 'powderblue',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 72,
  },
  label: {
    textAlign: 'center',
    fontSize: SIZES.fontSize3,
    color: COLORS.white,
    lineHeight: SIZES.lineHeight,
  },
  taskSpaceContainer: {
    // backgroundColor: 'pink',
    height: 30,
    width: 120,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  dash: {
    backgroundColor: COLORS.white,
    height: 1,
    width: 120,
  },
});

export default styles;
