import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../actions/user";

class Home extends Component {
  componentDidMount() {
    this.props.getUser(this.props.user.id).then(() => {
      console.log(this.props.user);
    });
  }

  renderUser() {
    const { user } = this.props;
    return (
      <div style={{ marginTop: "10px" }}>
        <h4>User Details</h4>
        <div className="three column">
          <div>Name: {user.name}</div>
          <div>Email: {user.email}</div>
          <div>Username: {user.username}</div>
          <div>Company: {user.company.name}</div>
        </div>

        <div className="one column right aligned" style={{ marginTop: "10px" }}>
          <h5>Posts</h5>
          <div className="ui list">
            {user.posts.map((post) => {
              return (
                <div
                  className="item"
                  style={{ marginBottom: "10px" }}
                  key={post.id}
                >
                  <div className="content">
                    <div className="header">{post.title}</div>
                    <div className="description">{post.body}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { user } = this.props;
    return (
      <div className="home">
        {!user && "User not loaded"}
        {user && user.name && this.renderUser()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {
  getUser,
})(Home);
