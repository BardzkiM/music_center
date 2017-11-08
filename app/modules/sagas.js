import userDataSaga from './userData/saga';
import notificationSaga from './notification/saga';
import itemSaga from './item/saga';
import offerSaga from './offer/sagas';

export default function* sagas() {
  yield [
    userDataSaga(),
    notificationSaga(),
    itemSaga(),
    offerSaga()
  ];
}