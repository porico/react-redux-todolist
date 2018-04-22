import { createStore } from 'redux';

const intialState = { // Taskの初期状態
  tasks: []
};

/**
 * tasksReducerの定義
 * @param {object} state 現在の状態を示す。初期状態としてintialStateを代入する。
 * @param {object} action 操作内容
 * @returns {object} state
 */
function tasksReducer(state = intialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.task])
      };
    default:
      return state;
  };
}

/**
 * Storeの生成
 * アプリケーション全体の状態ツリーを管理する
 * Storeはアプリケーション内で一つだけ
 * @param {function} tasksReducer Reducer
 * @param {object} [preloadedState] オプション：Storeの初期値
 * @param {object} [enhancer] オプション：Storeの機能を拡張するためのサードパーティ製のツールを指定可能。Reduxに唯一同梱されているapplyMiddleware()を指定することもできる。
 */
const store = createStore(tasksReducer);


// Actionの定義
// Actionの標準化による定義（Flux Standard Action by Facebook Corp.）
// Actionはプレーンなオブジェクトで、typeプロパティが必須
// オプソンとして以下のプロパティも設定できる
// payload: Actionに伴うデータとして利用できる。オブジェクト形式で扱う。errorプロパティがtrueの場合はErrorオブジェクトを返すべき
// error: エラーを表現したい場合はtrueにする。それに伴ってpayloadの中身も変化させる。
// meta: payloadとは別に他の情報をActionとして含めたい場合はmetaを使う


// ActionCreator を定義する

/**
 * Actionを生成する関数の定義（Action Creator）
 * @param {object} task タスクとして追加したいtask
 * @returns {object} Actionオブジェクト
 */
const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
});

/**
 * Actionの発行
 * 
 */
store.dispatch(addTask('Storeを学ぶ'));

console.log(store.getState()); // storeの現在の状態
