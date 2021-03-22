import { connect } from 'react-redux';
import SignIn from 'src/components/SignIn';
import { signIn } from 'src/actions';

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  onSubmitForm: () => {
    dispatch(signIn());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
