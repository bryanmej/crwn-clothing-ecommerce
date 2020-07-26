import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionAsync } from "../../redux/shop/shop-actions";
import ComposedCollectionOverview from "../../components/collection-overview/ComposedCollectionOverview";
import ComposedCollectionPage from "../collectionPage/ComposedCollectionPage";

class shopPage extends React.Component {
  componentDidMount() {
    const { fetchCollection } = this.props;
    fetchCollection();
  }

  render() {
    const { match } = this.props;

    return (
      <>
        <Route
          exact
          path={`${match.path}`}
          component={ComposedCollectionOverview}
        />
        <Route
          path={`${match.path}/:categoryId`}
          component={ComposedCollectionPage}
        />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollection: () => dispatch(fetchCollectionAsync()),
});

export default connect(null, mapDispatchToProps)(shopPage);
