import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryColor,
  },
  continueButtonContainer: {
    backgroundColor: COLORS.primaryVariantColor,
  },
  continueButtonTitle: {
    color: COLORS.white,
  },
  correctButtonTitle: {
    color: COLORS.successColor,
  },
  wrongButtonTitle: {
    color: COLORS.errorColor,
  },
});

export default styles;
