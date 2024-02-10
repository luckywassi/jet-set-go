import { produce } from "immer";
import { UPDATE_LOADING } from "./actions";

export const initialState = {
  loading: false
}

export default function reducer(store, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_LOADING:
      return produce(store, draft => {
        draft.loading = payload;
      });
    default:
      return store
  }
}

