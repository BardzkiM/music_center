import userDataSaga from './userData/saga';
import notificationSaga from './notification/saga';
import itemSaga from './item/saga';

export default function* sagas() {
  yield [
    userDataSaga(),
    notificationSaga(),
    itemSaga()
  ];
}