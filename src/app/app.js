import fritz, { Component, h } from 'fritz';

class App extends Component {
  render() {
    return h('div', null, 'Hello world!');
  }
}

fritz.define('my-app', App);