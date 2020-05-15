import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LineChart from "./charts/line-chart/line-chart";
import CyclesChart from "./charts/cycles-chart/cycles-chart";

const useStyles = makeStyles(() => ({
  page: {
    margin: 16,
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <h3>Nivo Charts</h3>
      <div>
        <a href="https://nivo.rocks/" target="_blank">
          https://nivo.rocks/
        </a>
      </div>
      <div>
        <a href="https://github.com/plouc/nivo" target="_blank">
          Nivo Github
        </a>
      </div>
      <div>
        <a href="https://github.com/jsaelhof/nivo-chart-test" target="_blank">
          Github for this test
        </a>
      </div>
      <LineChart />
      <CyclesChart />
    </div>
  );
};

export default App;
