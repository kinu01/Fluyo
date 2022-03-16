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
    paddingHorizontal: SIZES.generalPadding,
  },
  label: {
    textAlign: 'center',
    fontSize: SIZES.fontSize3,
    color: COLORS.white,
    lineHeight: SIZES.lineHeight,
  },
  taskLabel: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default styles;
