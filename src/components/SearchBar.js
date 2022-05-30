import React from "react";
import "./styles/SearchBar.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  //TODO: Make sure we call callback parent component

  render() {
    return (
      <div className="ui search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field ui icon input">
            <input
              placeholder="Search Videos"
              onChange={this.onInputChange}
              type="text"
              id="input"
              value={this.state.term}
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
