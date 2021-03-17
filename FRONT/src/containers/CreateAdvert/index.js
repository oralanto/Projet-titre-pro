import { connect } from 'react-redux';
import CreateAdvert from 'src/components/CreateAdvert';
import { createAdvert } from 'src/actions';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});
const mapDispatchToProps = (dispatch) => ({
  onSubmitFormAdvert: () => {
    dispatch(createAdvert());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAdvert);
