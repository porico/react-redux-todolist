import React from 'react';
import { render } from 'react-dom';
import tasksReducer from './reducers/tasks';
import TodoApp from './components/TodoApp';
import { createStore } from 'redux';


/**
 * Storeの生成
 * アプリケーション全体の状態ツリーを管理する
 * Storeはアプリケーション内で一つだけ
 * @param {function} tasksReducer Reducer
 * @param {object} [preloadedState] オプション：Storeの初期値
 * @param {object} [enhancer] オプション：Storeの機能を拡張するためのサードパーティ製のツールを指定可能。Reduxに唯一同梱されているapplyMiddleware()を指定することもできる。
 */
const store = createStore(tasksReducer);

// /**
//  * dispachによって状態が変わると呼ばれるコールバック関数
//  * @returns undefined
//  */
// function handleChange() {
//   console.log(store.getState()); //storeの現在の状態
// }

// /**
//  * subscribeを解除するunsubscribeを定義
//  * @param {function} handleChange
//  * @returns {function} unsubscribe
//  */
// const unsubscribe = store.subscribe(handleChange)
// unsubscribe()を実行するとsubscribeが解除される
// unsubscribe()


// /**
//  * Actionの発行
//  * 
//  */
// store.dispatch(addTask('Storeを学ぶ'));

// store.replaceReducer(resetReducer); // ReducerをresetReducerに入れ替える。これだけではStoreの状態は変化しない

// store.dispatch(resetTask()); // このdispachにより、Storeの中身がリセットされる

// store.dispatch(addTask('Reducerを学ぶ')); //Storeに関連付けられているReducerはresetReducerになっているので、ADD_TASKがdispatchされても何も起こらない

// // replaceReducerはReducerを動的にロードしたい場合に使用するとよいが、
// // 複数のReducerを定義するときはcombineReducerでReducerを１つにまとめて関連づけるとよい
// // combineReducerはStoreを擬似的に分割できる

/**
 * Reactコンポーネントを描画させるための関数
 * @param {*} store 
 */
function renderApp(store) {
  render(
    <TodoApp store={store} />,
    document.getElementById('root')
  );
}

/**
 * Viewを描画する関数
 * @param {*} store 
 */
store.subscribe(() => renderApp(store));

/**
 * 関数実行
 * @param {*} store 
 */
renderApp(store);
