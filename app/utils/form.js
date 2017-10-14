import serialize from 'form-serialize';

export const formatData = formNode => {
  const data = serialize(formNode, {hash: true});
  const formData = new FormData();
  formData.append('data', JSON.stringify(data));

  return formData;
};