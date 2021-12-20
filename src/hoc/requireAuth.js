import React, { Component } from 'react';
import { connect } from 'react-redux';

// eslint-disable-next-line import/no-anonymous-default-export
export default (ChildComponent) => {

    class ComposedComponent extends Component {

        // our component just got rendered
        componentDidMount() {
            this.shouldNavigateAway()
        }

        // our component just got updated
        componentDidUpdate() {
            this.shouldNavigateAway()
        }

        shouldNavigateAway() {
            if (!this.props.auth) {
                alert('Successfully logged out')
            }
            else {
                alert('Successfully logged in')
            }
        }

        render() {
            return <ChildComponent {...this.props} />
        }
    };

    function mapStateToProps(state) {
        return { auth: state.auth }
    }

    return connect(mapStateToProps)(ComposedComponent);

};