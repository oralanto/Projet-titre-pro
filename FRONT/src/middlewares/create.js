import axios from 'axios';

import {
  CREATE_ADVERT,

} from 'src/actions';

const create = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case CREATE_ADVERT:
      axios.post('http://34.207.234.22/api/create-advert', JSON.stringify({
        title: state.title,
        gameTitle: state.gameTitle,
        locationPrice: state.locationPrice,
        gameAvgDuration: state.gameAvgDuration,
        advertMinPlayers: state.advertMinPlayers,
        advertMaxPlayers: state.advertMaxPlayers,
        advertSuggestedAge: state.advertSuggestedAge,
        advertImage: state.advertImage,
        gameLocalisationId: state.gameLocalisationId,
        description: state.description,
        gameAuthor: state.gameAuthor,
        gameReleaseYear: state.ReleaseYear,
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
