import fritz, { Component, Fragment, h } from 'fritz';

class Counter extends Component {
  render({}, { count = 0 }) {
    return (
      <Fragment>
        <button type="button" onClick={() => this.setState({ count: count + 1 })}>
          Increment
        </button>
        <div><strong>Count</strong>: {count}</div>
      </Fragment>
    );
  }
}

fritz.define('my-counter', Counter);

class App extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <h1>My App!</h1>
        </header>
        <main>
          <my-counter />
        </main>
      </Fragment>

    );
  }
}

fritz.define('my-app', App);