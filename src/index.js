import { createStore, replaceReducer } from 'redux';

const intialState = { // Taskの初期状態
  tasks: []
};

/**
 * addReducerの定義
 * @param {object} state 現在の状態を示す。初期状態としてintialStateを代入する。
 * @param {object} action 操作内容
 * @returns {object} state
 */
function addReducer(state = intialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      // Using Object.assign()
      // return Object.assign({}, state, {
      //   tasks: action.payload.task
      // })

      // Using Object Spread Operator
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      };
    default:
      return state;
  };
}

/**
 * resetReducerの定義
 * 
 */
function resetReducer (state = intialState, action) {
  switch (action.type) {
    case 'RESET_TASK':
      return {
        ...state,
        tasks: []
      };
    default:
      return state;
  };
}

/**
 * Storeの生成
 * アプリケーション全体の状態ツリーを管理する
 * Storeはアプリケーション内で一つだけ
 * @param {function} addReducer Reducer
 * @param {object} [preloadedState] オプション：Storeの初期値
 * @param {object} [enhancer] オプション：Storeの機能を拡張するためのサードパーティ製のツールを指定可能。Reduxに唯一同梱されているapplyMiddleware()を指定することもできる。
 */
const store = createStore(addReducer);

/**
 * dispachによって状態が変わると呼ばれるコールバック関数
 * @returns undefined
 */
function handleChange() {
  console.log(store.getState()); //storeの現在の状態
}

/**
 * subscribeを解除するunsubscribeを定義
 * @param {function} handleChange
 * @returns {function} unsubscribe
 */
const unsubscribe = store.subscribe(handleChange)
// unsubscribe()を実行するとsubscribeが解除される
// unsubscribe()

// Actionの定義
// Actionの標準化による定義（Flux Standard Action by Facebook Corp.）
// Actionはプレーンなオブジェクトで、typeプロパティが必須
// オプションとして以下のプロパティも設定できる
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

const resetTask = () => ({
  type: 'RESET_TASK'
})

/**
 * Actionの発行
 * 
 */
store.dispatch(addTask('Storeを学ぶ'));

store.replaceReducer(resetReducer); // ReducerをresetReducerに入れ替える。これだけではStoreの状態は変化しない

store.dispatch(resetTask()); // このdispachにより、Storeの中身がリセットされる

store.dispatch(addTask('Reducerを学ぶ')); //Storeに関連付けられているReducerはresetReducerになっているので、ADD_TASKがdispatchされても何も起こらない

// replaceReducerはReducerを動的にロードしたい場合に使用するとよいが、
// 複数のReducerを定義するときはcombineReducerでReducerを１つにまとめて関連づけるとよい
// combineReducerはStoreを擬似的に分割できる

