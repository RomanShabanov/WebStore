import { observable } from "mobx";

import PostsJSON from '../assets/json/posts.json';

class PostsStore {

    @observable list: any = [];

    constructor() {
        this.loadPosts();
    }

    loadPosts() {
        setTimeout(() => {
            this.list = PostsJSON;
        }, 2000);
    }

}
export default PostsStore;