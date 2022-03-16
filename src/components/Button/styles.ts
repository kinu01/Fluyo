import { StyleSheet, Dimensions } from 'react-native';
import { SIZES, COLORS } from '../../constants/theme';

const WIDTH = Dimensions.get('window').width;

const containerHeight = 55;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    height: 55,
    padding: 5,
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 19,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  primaryVariantContainer: {
    backgroundColor: COLORS.successColor,
  },
  secondaryContainer: {
    backgroundColor: COLORS.errorColor,
  },
  emptyContainer: {
    backgroundColor: COLORS.primaryVariantColor,
    elevation: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  emptyTitle: {
    color: COLORS.primaryVariantColor,
  },
  removeBorderContainer: {
    borderWidth: 0,
  },
  title: {
    textAlign: 'center',
    color: COLORS.primaryColor,
    fontSize: SIZES.fontSize4,
    fontWeight: '600',
  },
  secondarytitle: {
    color: COLORS.white,
  },
});

export default styles;
