import { JsonPlaceHolderFacade } from "../api/jsonPlaceHolderFacade";
import { JsonPlaceHolderService } from "../api/jsonPlaceHolderService";
import { FETCH_USER } from "../constants/actionTypes";

export const getUser = (userId: number) => async (dispatch: any) => {
  let facade = new JsonPlaceHolderFacade(new JsonPlaceHolderService());
  const user = await facade.getUser(userId);

  dispatch({
    type: FETCH_USER,
    payload: user,
  });
};
