import React, { Component } from 'react';
import './Post.scss';

import Posts from '../../assets/json/posts.json';
import { IPost } from '../../interfaces';

type PostState = {
    post: IPost | null;
}

class Post extends Component<any, PostState> {
    constructor(props: any) {
        super(props);

        const slug = props.match.params.slug;
        const post = Posts.find(post => post.slug === slug) || null;

        this.state = {
            post
        };
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {

        if (!this.state.post) {
            return null;
        }

        return <div className="Post">
            <div className="wrapper">
                <h1>{this.state.post.title}</h1>
            </div>
        </div>
    }
}

export default Post;