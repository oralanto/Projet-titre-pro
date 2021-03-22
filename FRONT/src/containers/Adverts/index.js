import { connect } from 'react-redux';
import Adverts from 'src/components/Adverts';
import { fetchAdvertData } from 'src/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({
  fetchAdvert: () => {
    fetchAdvertData();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Adverts);
