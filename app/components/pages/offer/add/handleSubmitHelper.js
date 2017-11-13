import serialize from 'form-serialize';
import {WARNING} from '../../../../constants';
import {MESSAGES} from '../../../../locales';

export default function({target}) {
  const {sendData, showNotification, items} = this.props;
  const data = formatData(serialize(target, {hash: true}), items);

  if (data.startDate >= data.endDate) {
    showNotification({message: MESSAGES.START_DATE_BIGGER, type: WARNING});
  } else {
    const formData = new FormData();

    formData.append('data', JSON.stringify(data));
    sendData(formData);
  }
}

const formatData = (data, items) => {
  data.startDate = new Date(data.startDate).getTime();
  data.endDate = new Date(data.endDate).getTime();
  data.item = items.find(item => item.id == data.item);

  return data;
};