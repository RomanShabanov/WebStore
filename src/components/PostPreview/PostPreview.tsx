
import React, { Component } from 'react';

import './PostPreview.scss';
import { IPost } from '../../interfaces';
import { Link } from 'react-router-dom';

import { LazyImage } from '../../components';

type PostPreviewProps = {
    post: IPost;
}

class PostPreview extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    convertDate(timestamp: number) {
        const date = new Date(+timestamp);

        const months = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

        const day = date.getDate();
        const month = months[date.getMonth()];

        return <React.Fragment><strong>{day}</strong><span>{month}</span></React.Fragment>
    }

    render() {

        const { post } = this.props;

        return <div className="PostPreview">
            <div className="content">
                <div className="cover" style={{ backgroundImage: `url(${post.cover})` }}></div>
                <div className="body">
                    <div className="date">{this.convertDate(post.timestamp)}</div>
                    <h2 className="title">{post.title}</h2>
                    <div className="description">{post.description}</div>
                    <Link to={`/blog/${post.slug}`} className="link">Читать дальше</Link>
                </div>
            </div>
        </div>
    }
}

export default PostPreview;