import React from "react";
import { connect } from "react-redux";
import { StyleSheet, View } from "react-native";
import { fetchData } from "../redux/actions/cadastralAction";

class HomeScreen extends React.Component {
  componentDidMount() {
    this.fetchApiData();
  }

  fetchApiData = async () => {
    await this.props.onFetchData();
  };

  render() {
    // console.log(this.props.data);
    return <View style={styles.container} />;
  }
}

HomeScreen.navigationOptions = {
  title: "Cadastral Map"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

const mapStateToProps = ({ cadastral }) => {
  const { data } = cadastral;
  return { data };
};

const dispatchToProps = dispatch => {
  return {
    onFetchData: () => {
      return dispatch(fetchData());
    }
  };
};

export default connect(
  mapStateToProps,
  dispatchToProps
)(HomeScreen);
