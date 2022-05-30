import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import "./styles/App.css";

class App extends React.Component {
  componentDidMount() {
    this.onTermSubmit("Rihanna");
  }
  //getting the term from SearchBar component
  state = { videos: [], selectedVideo: null };
  onTermSubmit = async (term) => {
    try {
      const res = await youtube.get("/search", {
        params: {
          q: term,
        },
      });
      this.setState({
        videos: res.data.items,
        selectedVideo: res.data.items[0],
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="app ui container">
        {/* sending the props to Search component and getting back
         the calling with the argument from it */}
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videoList={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
