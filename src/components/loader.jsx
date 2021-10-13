import React from "react";

// import Stack from '@mui/material/Stack';
// import CircularProgress from '@mui/material/CircularProgress';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

class ChangingProgressProvider extends React.Component {
  static defaultProps = {
    interval: 1000,
  };

  state = {
    valuesIndex: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        valuesIndex: (this.state.valuesIndex + 1) % this.props.values.length,
      });
    }, this.props.interval);
  }

  render() {
    return this.props.children(this.props.values[this.state.valuesIndex]);
  }
}

export default function CircularColor() {
  return (
    //     <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
    //       <CircularProgress size={80}  color="inherit" />
    //     </Stack>
    <ChangingProgressProvider values={[20, 100]}>
      {(percentage) => (
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            pathTransition:
              percentage === 20 ? "none" : "stroke-dashoffset 0.5s ease 0s",
          })}
        />
      )}
    </ChangingProgressProvider>
  );
}
