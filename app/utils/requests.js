export const formatData = data => {
  const formData = new FormData();
  formData.append('data', JSON.stringify(data));

  return formData;
};