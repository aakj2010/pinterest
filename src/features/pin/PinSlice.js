import * as unsplashService from "../unsplash/unsplash";
import * as authService from "../auth/authService";


export const FETCH_SAVED_PINS = "FETCH_SAVED_PINS";
export const SET_FEED = "SET_FEED";
export const SAVE_PIN = "SAVE_PIN";
export const DELETE_SAVED_PIN = "DELETE_SAVED_PIN";

// export const getSavedPins =
//   ({ userId, setAsFeed }) =>
//   async (dispatch) => {
//     const response = await authService.getProfile(userId);
//     dispatch({
//       type: FETCH_SAVED_PINS,
//       photoUrls: response.data.savedPins,
//     });
//     if (setAsFeed) {
//       dispatch({
//         type: SET_FEED,
//         photoUrls: response.data.savedPins,
//       });
//     }
//   };

export const searchPins = (query) => async (dispatch) => {
  const response = await unsplashService.search({ query, per_page: 30 });
  const photoUrls = response.data.results.map((photo) => photo.urls.raw);
  dispatch({
    type: SET_FEED,
    photoUrls: photoUrls,
  });
};

export const getRandomPins = () => async (dispatch) => {
  const response = await unsplashService.random({ count: 30 });
  const photoUrls = response.data.map((photo) => photo.urls.raw);
  dispatch({
    type: SET_FEED,
    photoUrls: photoUrls,
  });
};

// export const savePin =
//   ({ userId, photoUrl }) =>
//   async (dispatch) => {
//     await authService.savePin({ userId, photoUrl });
//     dispatch({
//       type: SAVE_PIN,
//       photoUrl: photoUrl,
//     });
//   };

// export const deleteSavedPin =
//   ({ userId, photoUrl }) =>
//   async (dispatch) => {
//     await authService.deleteSavedPin({ userId, photoUrl });
//     dispatch({
//       type: DELETE_SAVED_PIN,
//       photoUrl: photoUrl,
//     });
//   };




  const INITIAL_STATE = {
    feed: [],
    saved: [],
  };
  
  const pinReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_SAVED_PINS:
        return {
          feed: state.feed,
          saved: action.photoUrls,
        };
      case SET_FEED:
        return {
          feed: action.photoUrls,
          saved: state.saved,
        };
      case SAVE_PIN:
        return {
          feed: state.feed,
          saved: [...state.saved, action.photoUrl],
        };
      case DELETE_SAVED_PIN:
        return {
          feed: state.feed,
          saved: state.saved.filter((url) => url !== action.photoUrl),
        };
      default:
        return state;
    }
  };
  
  export default pinReducer;