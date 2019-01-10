const initialState = [
  {
    id: 1,
    title: "Zodiac",
    address: "ул.Московская 2а",
    inn: "1111-2222-3333"
  }
];

export default function orgReducer(state = initialState, action) {
  // switch (action.type) {
  //   case ADD__NEW_ORG:
  //     return [...state, action.payload];
  // }
  return state;
}
