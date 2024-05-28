import { Warning } from '@/models/interfaces';

const determineInputAlertProps = (warning: Warning): {
  message: string;
  type: 'error' | 'warn' | 'hide';
} => {
  const { active, message } = warning;

  if (active) { return { message, type: 'warn' }; }

  // if (fieldError?.message) {
  //   return { message: fieldError.message, type: 'error' };
  // }

  return { message: '', type: 'hide' };
};

export default determineInputAlertProps;
