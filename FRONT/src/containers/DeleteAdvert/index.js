import { connect } from 'react-redux';
import DeleteAdvert from 'src/components/DeleteAdvert';
import { deleteAdvert } from 'src/actions';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});
const mapDispatchToProps = (dispatch) => ({
  onSubmitFormAdvert: () => {
    dispatch(deleteAdvert());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(DeleteAdvert);
