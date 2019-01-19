import React, { Component } from "react";

interface ILazyImage {
    src: string|null;
}

class LazyImage extends Component<any, ILazyImage> {
    state: ILazyImage = { src: null };

    componentDidMount() {
        const { src } = this.props;

        const imageLoader = new Image();
        imageLoader.src = src;

        imageLoader.onload = () => {
            this.setState({ src });
        };
    }

    render() {
        return <img src={this.state.src || this.props.placeholder} />;
    }
}

export default LazyImage;