import React, { Component } from 'react';

import { IPost } from '../../interfaces';

import { PostPreview } from '../../components';

import { observer, inject } from "mobx-react";

import './Blog.scss';

@inject('posts')
@observer
class Blog extends Component<any, any> {
    render() {
        return <div className="Blog">
            <div className="wrapper">
                <h1>Blog</h1>
                {this.props.posts.list.map((post: any) => <PostPreview key={post.id} post={post} /> )}
            </div>
        </div>
    }
}

export default Blog;