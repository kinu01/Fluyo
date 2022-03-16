import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    // paddingVertical: 20,
    height: 160,
    borderTopLeftRadius: 30,
    borderRadius: 30,
    justifyContent: 'flex-end',
    paddingHorizontal: SIZES.generalPadding,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  resultDescription: {
    position: 'absolute',
    top: 20,
    left: 20,
    paddingHorizontal: SIZES.generalPadding,
    color: COLORS.white,
    fontWeight: '600',
  },
});

export default styles;
