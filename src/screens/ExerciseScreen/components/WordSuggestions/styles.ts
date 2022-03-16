import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'pink',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: SIZES.generalPadding,
  },
  resultContainer: {
    opacity: 0.3,
  },
});

export default styles;
