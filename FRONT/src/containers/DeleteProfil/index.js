import { connect } from 'react-redux';
import DeleteProfil from 'src/components/DeleteProfil';
import { deleteProfil } from 'src/actions';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});
const mapDispatchToProps = (dispatch) => ({
  onSubmitFormAdvert: () => {
    dispatch(deleteProfil());
    console.log('container delete', deleteProfil);
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(DeleteProfil);
