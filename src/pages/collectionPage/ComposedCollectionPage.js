import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionLoaded } from "../../redux/shop/shop-selectors";
import LoadSpinner from "../../components/load-spinner/LoadSpinner";
import CollectionPage from "./collectionPage";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectCollectionLoaded(state),
});

const ComposedCollectionPage = compose(
  connect(mapStateToProps),
  LoadSpinner
)(CollectionPage);

export default ComposedCollectionPage;
