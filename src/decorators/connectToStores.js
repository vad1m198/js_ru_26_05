import React, { Component } from 'react'

export default (Component, stores, getStateFromStores) => class ConnectToStores extends Component {

    constructor(props) {
        super()

        this.state = getStateFromStores(props);
        this.handleStoresChanged = this.handleStoresChanged.bind(this)
    }

    componentDidMount() {
        for (let key in stores) {
           stores[key].addChangeListener(this.handleStoresChanged)
        }
    }
    componentWillUnmount() {
        for (let key in stores) {
            stores[key].removeChangeListener(this.handleStoresChanged)
        }
    }
    handleStoresChanged() {
        this.setState(getStateFromStores(this.props));
    }
    
    render() {
      return <Component {...this.props} {...this.state} />;
    }
}
