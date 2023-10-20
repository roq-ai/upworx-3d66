import * as yup from 'yup';

export const applicationValidationSchema = yup.object().shape({
  application_status: yup.string().required(),
  freelancer_id: yup.string().nullable().required(),
});
