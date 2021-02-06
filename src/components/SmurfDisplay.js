import React from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";

import { fetchSmurfs } from "../actions";

export class SmurfDisplay extends React.Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  render() {
    if (this.props.isLoading) {
      return <div>Loading...</div>;
    }
    // console.log(this.props.smurfs);
    return (
      <div>
        {this.props.smurfs.data?.map((item) => {
          return (
            <div key={item.id}>
              <Smurf smurf={item} />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  smurfs: state.smurfs,
  isFetching: state.isFetching,
  error: state.error,
  isLoading: state.isLoading,
});

export default connect(mapStateToProps, { fetchSmurfs })(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.
