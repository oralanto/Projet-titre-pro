import { connect } from 'react-redux';
import CreateAdvert from 'src/components/CreateAdvert';
import { createAdvert } from 'src/actions';

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  onSubmitFormAdvert: () => {
    dispatch(createAdvert());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAdvert);
