import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  TableDataAvailabilityStatus,
  columnData,
  columnSelectors,
} from "./helpers/constants";

// Let's not take _quite_ the entire browser screen.
const styles = {
  appInnerContainer: {
    width: "90%",
    margin: "20px auto 0"
  },
  paper: {
    overflowX: "auto"
  },
  spinner: {
    margin: "20px auto",
    display: "block"
  }
};

const columnHeaders = columnData.map(({ label }) => <TableCell key={label}>{label}</TableCell>);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataState: TableDataAvailabilityStatus.NOT_REQUESTED,
      data: []
    };
  }

  getBindingValueForSelector(selector, binding) {
    const bindingValue = binding[selector === "movie" ? "movies" : selector];
    // NOTE: In a production app, we would probably want to do this formatting elsewhere.
    return Array.isArray(bindingValue) ? bindingValue.join(", ") : bindingValue;
  }

  renderRowForBinding(binding, index) {
    return (
      // Use every "selector" to extract table cell data from each binding.
      <TableRow key={binding.id}>
        {columnSelectors.map(selector => (
          <TableCell key={selector}>
            {this.getBindingValueForSelector(selector, binding)}
          </TableCell>
        ))}
      </TableRow>
    );
  }

  render() {
    const { dataState, data } = this.state;
    const isLoading = dataState === TableDataAvailabilityStatus.LOADING;

    return (
      <div className="App" style={styles.appInnerContainer}>
        <CssBaseline />
        <Paper style={styles.paper}>
          <Toolbar>
            <Typography variant="title">
              <i>Star Wars</i> with Stardog
            </Typography>
          </Toolbar>
          {isLoading ? <CircularProgress style={styles.spinner} /> : (
            <Table>
              <TableHead>
                <TableRow>
                  {columnHeaders}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((binding, index) => this.renderRowForBinding(binding, index))}
              </TableBody>
            </Table>
          )}
        </Paper>
      </div>
    );
  }
}

export default App;