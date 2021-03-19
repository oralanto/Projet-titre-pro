import { connect } from 'react-redux';
import Advert from 'src/components/Advert';
import { advertContact } from 'src/actions';

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitContactAdvertForm: (message, advertId) => {
    dispatch(advertContact(message, advertId));
    console.log(message, advertId);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Advert);
