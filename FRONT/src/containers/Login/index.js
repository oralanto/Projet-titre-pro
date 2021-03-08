import { connect } from 'react-redux';
import Login from 'src/components/Login';
import { login, logout } from 'src/actions';

const mapStateToProps = (state) => ({
  loading: state.user.loading,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitForm: () => {
    dispatch(login());
  },
  handleLogout: () => dispatch(logout()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
