export default function reducer(state, action) {
  switch (action.type) {

    case 'EXAMPLE_ACTION':
      return {
        ...state,
        example: true,
      }

    default:
      return state
  }
}
