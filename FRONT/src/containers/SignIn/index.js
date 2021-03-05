import { connect } from 'react-redux';
import SignIn from 'src/components/SignIn';
import { login } from 'src/actions';

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  onSubmitForm: () => {
    dispatch(login());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
