import * as React from 'react';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false, count:this.props.count };
        this.handleLike = this.handleLike.bind(this);
        this.handleUnlike = this.handleUnlike.bind(this);
    }

    handleLike() {        
        this.setState({ liked: true });
        this.setState({ count: this.state.count + 1 });
    }
    handleUnlike() {        
        this.setState({ liked: false });
        this.setState({ count: this.state.count - 1 });
    }
    render() {
        let buttonText = this.state.liked ? 'Unlike' : 'Like';
        if(this.state.liked){
            return (
                <div>
                    <button onClick={this.handleUnlike}>
                        {buttonText} 
                    </button>
                    Likes:{this.state.count}
                </div>
            );
        }else{
            return (
                <div>
                    <button onClick={this.handleLike}>
                        {buttonText} 
                    </button>
                    Likes:{this.state.count}
                </div>
            );
        }

    }
}
export default LikeButton;