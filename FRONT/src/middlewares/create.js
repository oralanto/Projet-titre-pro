/* import axios from 'axios';

import {
  CREATE_ADVERT,

} from 'src/actions';

const create = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case CREATE_ADVERT:
      axios.post('http://34.207.234.22/api/create-advert', JSON.stringify({
        title: state.title,
        gameTitle: state.user.gameTitle,
        locationPrice: state.user.locationPrice,
        gameAvgDuration: state.user.gameAvgDuration,
        advertMinPlayers: state.user.advertMinPlayers,
        advertMaxPlayers: state.user.advertMaxPlayers,
        advertSuggestedAge: state.user.advertSuggestedAge,
        advertImage: state.user.advertImage,
        gameLocalisationId: state.user.gameLocalisationId,
        description: state.user.description,
        gameAuthor: state.user.gameAuthor,
        gameReleaseYear: state.user.ReleaseYear,
      }), {
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((response) => {
          console.log('response', response);
        })
        .catch(() =>
          console.warn("Echec de l'envoi"));
      break;

    default:
      next(action);
  }
};

export default create;
 */
