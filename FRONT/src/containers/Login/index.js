import { connect } from 'react-redux';
import Login from 'src/components/Login';
import { login } from 'src/actions';

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  onSubmitForm: () => {
    dispatch(login());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
