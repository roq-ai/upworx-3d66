import * as yup from 'yup';

export const contractValidationSchema = yup.object().shape({
  contract_duration: yup.number().integer().required(),
});
