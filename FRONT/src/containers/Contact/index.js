import { connect } from 'react-redux';
import Contact from 'src/components/Contact';
import { contact } from 'src/actions';

const mapStateToProps = (state) => ({
  
});
const mapDispatchToProps = (dispatch) => ({
  onSubmitFormContact: () => {
    dispatch(contact());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
