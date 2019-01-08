import { connect } from 'react-redux';

import ProductInput from '../components/ProductInput';
import { createAddAction } from '../actions/products';

const mapDispatchToProps = {
    onAddClicked: createAddAction,
};

export default connect(
    null,
    mapDispatchToProps
)(ProductInput);
