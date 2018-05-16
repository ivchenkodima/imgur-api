export default function galleriesList(state = [], action) {
  switch (action.type) {
    case "FETCH_GALLERIES_SUCCESS":
      return [...state, ...action.payload];
  }
  return state;
}
