import { localizeString } from 'i18n';
import { ToastOption } from './type';

const unknown: ToastOption = {
  type: 'error',
  position: 'top',
  text1: localizeString('Something_went_wrong'),
  text2: localizeString('An_unknwon_error_occrred_please_try_again_later'),
};

const failed_to_load_exercise: ToastOption = {
  type: 'error',
  position: 'bottom',
  text1: localizeString('Could_not_load_exercise'),
};

const Please_select_a_word: ToastOption = {
  type: 'error',
  position: 'bottom',
  text1: localizeString('Please_select_a_word_to_continue'),
};

export default {
  unknown,
  failed_to_load_exercise,
  Please_select_a_word,
  custom: (
    text1?: string,
    text2?: string,
    visibilityTime?: number,
  ): ToastOption => {
    return {
      type: 'error',
      position: 'top',
      text1,
      text2,
      visibilityTime: visibilityTime ?? 4000,
      text2NumberOfLines: 4,
    };
  },
};
