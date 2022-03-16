import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'pink',
    marginVertical: 20,
    alignItems: 'center',
    paddingHorizontal: SIZES.generalPadding,
  },
  label: {
    textAlign: 'center',
    fontSize: SIZES.fontSize5,
    color: COLORS.grey,
    lineHeight: SIZES.lineHeight,
  },
});

export default styles;
