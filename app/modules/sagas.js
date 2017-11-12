import userDataSaga from './userData/saga';
import notificationSaga from './notification/saga';
import itemSaga from './item/saga';
import offerSaga from './offer/sagas';
import rentalSaga from './rental/saga';

export default function* sagas() {
  yield [
    userDataSaga(),
    notificationSaga(),
    itemSaga(),
    offerSaga(),
    rentalSaga()
  ];
}