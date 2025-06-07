import React from "react";

/**
 * Component Lifecycle Example (Class Component)
 * ---------------------------------------------
 * Demonstrates mounting, updating, and unmounting lifecycle methods.
 * Open your browser console to see the lifecycle logs.
 */
class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor: Component is being constructed");
  }

  componentDidMount() {
    console.log("componentDidMount: Component has mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("componentDidUpdate: count changed");
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Component will be removed");
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default function ComponentLifecycleExample() {
  const [show, setShow] = React.useState(true);
  return (
    <div>
      <button onClick={() => setShow((s) => !s)}>
        {show ? "Unmount" : "Mount"} Demo Component
      </button>
      <div style={{ marginTop: 16 }}>
        {show && <LifecycleDemo />}
      </div>
    </div>
  );
}