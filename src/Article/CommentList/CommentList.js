import Comment from "./Comment/Comment";

const {Component} = require("react");


class CommentList extends Component {

    render(){
        return(
            <div>
                <Comment author = "Dostoevsky" date = "2020-12-19" content = "content"/>
                <Comment author = "Tolstoy" date = "1980-01-01" content = "content"/>
                <Comment author = "Jack London" date = "1900-20-20" content = "content"/>
                <Comment author = "Mark Twain" date = "1890-02-02" content = "content"/>
            </div>

        );
    }


}

export default CommentList;