import React from 'react';
import {ErrorIndicator} from "../../primitives/error-indicator";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false}
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary;
