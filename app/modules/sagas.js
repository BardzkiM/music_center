import userDataSaga from './userData/saga';

export default function* sagas() {
  yield [
    userDataSaga()
  ];
}