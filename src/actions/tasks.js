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

const inputTask = (task) => ({
  type: 'INPUT_TASK',
  payload: {
    task
  }
})

const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
});

// const resetTask = () => ({
//   type: 'RESET_TASK'
// })
