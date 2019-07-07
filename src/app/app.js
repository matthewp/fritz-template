import fritz, { Component, h } from 'fritz';

class App extends Component {
  render() {
    return (
      <main>Hello world!</main>
    );
  }
}

fritz.define('my-app', App);