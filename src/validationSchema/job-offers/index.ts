import * as yup from 'yup';

export const jobOfferValidationSchema = yup.object().shape({
  salary_range: yup.string().nullable(),
});
