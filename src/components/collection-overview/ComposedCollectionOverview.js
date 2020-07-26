import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionFetch } from "../../redux/shop/shop-selectors";
import LoadSpinner from "../load-spinner/LoadSpinner";
import CollectionOverview from "./CollectionOverview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionFetch,
});

const ComposedCollectionOverview = compose(
  connect(mapStateToProps),
  LoadSpinner
)(CollectionOverview);

export default ComposedCollectionOverview;
