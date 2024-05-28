// const {
//   errors,
//   getValues,
//   handleSubmit,
//   isSubmitting,
// } = useForm<FormProps>({
//   mode: 'onBlur',
//   reValidateMode: 'onChange',
// });

interface UseFormOptions<T> {
  mode: 'onBlur' | 'onChange';
  reValidateMode: 'onChange' | 'onBlur';
}