import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchCollectionAsync } from "../../redux/shop/shop-actions";
import {
  selectCollectionFetch,
  selectCollectionLoaded,
} from "../../redux/shop/shop-selectors";
import LoadSpinner from "../../components/load-spinner/LoadSpinner";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import CollectionPage from "../collectionPage/collectionPage";

const CollectionOverviewWithSpinner = LoadSpinner(CollectionOverview);
const CollectionPageWithSpinner = LoadSpinner(CollectionPage);

class shopPage extends React.Component {
  componentDidMount() {
    const { fetchCollection } = this.props;
    fetchCollection();
  }

  render() {
    const { match } = this.props;
    const { isCollectionFetch, isCollectionLoaded } = this.props;

    return (
      <>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={isCollectionFetch}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:categoryId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetch: selectCollectionFetch,
  isCollectionLoaded: selectCollectionLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollection: () => dispatch(fetchCollectionAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(shopPage);
