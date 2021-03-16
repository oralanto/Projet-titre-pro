import { connect } from 'react-redux';
import Advert from 'src/components/Advert';

const mapStateToProps = (state) => ({
  advert: state.advert,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Advert);
