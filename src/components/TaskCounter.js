import React from 'react';

class TaskCounter extends React.Component {
  render() {
    return (
      <p>
        Tasks Remaining: {this.props.count}
      </p>
    );
  }
}

export default TaskCounter;