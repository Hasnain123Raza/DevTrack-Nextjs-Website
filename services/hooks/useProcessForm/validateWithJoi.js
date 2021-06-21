export default function validateWithJoi(formData, formSchema) {
  const validationResult = formSchema.validate(formData, {
    abortEarly: false,
  });

  const success = !Boolean(validationResult.error);
  const errors =
    !success &&
    validationResult.error.details.map(({ message, path }) => ({
      message,
      path,
    }));

  return { success, errors };
}
