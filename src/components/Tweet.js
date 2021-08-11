import React from "react";
import data from "../data.json";

class Tweet extends React.Component {
  state = {
    tweets: data,
  };

  addTweet(e) {
    e.preventDefault();
    const { tweets } = this.state;
    const newTweet = this.newTweet.value;

    this.setState({
      tweets: [
        ...this.state.tweets,
        {
          id: tweets.length + 1,
          name: tweets[Math.floor(Math.random() * tweets.length)].name,
          username: tweets[Math.floor(Math.random() * tweets.length)].username,
          image: tweets[Math.floor(Math.random() * tweets.length)].image,
          tweet: newTweet,
        },
      ],
    });
  }

  render() {
    const { tweets } = this.state;
    return (
      <>
        <div className="form-wrapper">
          <div className="form-container">
            <form
              onSubmit={(e) => {
                this.addTweet(e);
              }}
            >
              <div className="input-and-button">
                <div>
                  <input
                    className="textbox"
                    type="text"
                    ref={(input) => {
                      this.newTweet = input;
                    }}
                  />
                </div>
                <div>
                  <button
                    className="btn"
                    type="submit"
                    onClick={this.handleclick}
                  >
                    New Tweet!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {tweets.map((tweet, index) => {
          return (
            <div className="tweet-wrap">
              <div className="tweet-header">
                <img src={tweet.image} alt="" className="avator" />
                <div className="tweet-header-info">
                  {tweet.name}
                  <span>{tweet.username}</span>
                  <span>. 11 August</span>
                  <p>🔥 {tweet.tweet}.</p>
                </div>
              </div>
              <div className="tweet-img-wrap">
                <img
                  src="https://secureservercdn.net/198.71.233.31/oxi.808.myftpupload.com/wp-content/uploads/2019/08/logo@2x.png?time=1628269089"
                  alt=""
                  className="tweet-img"
                />
              </div>
              <div className="tweet-info-counts">
                <div className="comments">
                  <svg
                    className="feather feather-message-circle sc-dnqmqq jxshSx"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  <div className="comment-count">33</div>
                </div>
                <div className="retweets">
                  <svg
                    className="feather feather-repeat sc-dnqmqq jxshSx"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="17 1 21 5 17 9"></polyline>
                    <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                    <polyline points="7 23 3 19 7 15"></polyline>
                    <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                  </svg>
                  <div className="retweet-count">397</div>
                </div>
                <div className="likes">
                  <svg
                    className="feather feather-heart sc-dnqmqq jxshSx"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                  <div className="likes-count">2.6k</div>
                </div>
                <div className="message">
                  <svg
                    className="feather feather-send sc-dnqmqq jxshSx"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default Tweet;
