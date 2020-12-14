import React from 'react';

class App extends React.Component {

		constructor(props) {
			super(props);
			this.state = {
        name: '😆',
        na: '川田',
        me: '京助',
			};
    }

    switching(name) {
      this.setState({name:name});
    }
　
  render() {
    return (
    	<div>
        <h1>{this.state.name}</h1>
    	  <h1>{this.state.na}か{this.state.me}かどちらかを選択</h1>
    	  <button onClick={() => {this.switching('京助')}}>川田</button>
    	  <button onClick={() => {this.switching('川田')}}>京助</button>
    	</div>
    );
  }
}

export default App;