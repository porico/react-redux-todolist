const intialState = { // Taskの初期状態
  task: '',
  tasks: []
};

/**
 * tasksReducerの定義
 * @param {object} state 現在の状態を示す。初期状態としてintialStateを代入する。
 * @param {object} action 操作内容
 * @returns {object} state
 */
export default function tasksReducer(state = intialState, action) {
  switch (action.type) {
    case 'INPUT_TASK':
      return {
        ...state,
        task: action.payload.task
      };
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
// function resetReducer (state = intialState, action) {
//   switch (action.type) {
//     case 'RESET_TASK':
//       return {
//         ...state,
//         tasks: []
//       };
//     default:
//       return state;
//   };
// }