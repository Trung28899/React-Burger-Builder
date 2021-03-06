import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from './containers/Checkout/Checkout'; 

/*
  APP ROOT COMPONENT
*/

class App extends Component {
  state = {
    show: true
  }

  // Testing for vid 185
  // componentDidMount(){
  //   setTimeout(() => {
  //     this.setState({show: false}); 
  //   }, 5000);
  // }

  render() {
    return (
      <div>
        <Layout>
          {this.state.show ? <BurgerBuilder /> : null}
          <Checkout/>
        </Layout>
      </div>
    );
  }
}

export default App;
