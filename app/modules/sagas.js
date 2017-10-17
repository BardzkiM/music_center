import userDataSaga from './userData/saga';
import notificationSaga from './notification/saga';

export default function* sagas() {
  yield [
    userDataSaga(),
    notificationSaga()
  ];
}