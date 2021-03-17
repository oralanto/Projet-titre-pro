import { connect } from 'react-redux';
import Adverts from 'src/components/Adverts';
import { fetchAdvertData } from 'src/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({
  fetchAdvert: () => {
    console.log('J\'ai bien entendu le clik');
    fetchAdvertData();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Adverts);
