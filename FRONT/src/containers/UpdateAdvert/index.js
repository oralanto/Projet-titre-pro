import { connect } from 'react-redux';
import UpdateAdvert from 'src/components/UpdateAdvert';
import { updateAdvert } from 'src/actions';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});
const mapDispatchToProps = (dispatch) => ({
  onSubmitFormAdvert: () => {
    dispatch(updateAdvert());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(UpdateAdvert);
