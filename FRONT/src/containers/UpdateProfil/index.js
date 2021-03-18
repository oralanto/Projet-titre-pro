import { connect } from 'react-redux';
import UpdateProfil from 'src/components/UpdateProfil';
import { updateProfil } from 'src/actions';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});
const mapDispatchToProps = (dispatch) => ({
  onSubmitFormAdvert: () => {
    dispatch(updateProfil());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfil);
