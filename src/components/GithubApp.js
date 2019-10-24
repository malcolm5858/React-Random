import React from "react";
import Header from "./Header";
import Profiles from "./Profiles";
import SearchForm from "./SearchForm";

const API = "https://api.github.com/";

export default class GithubApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "malcolm5858",
      data: ""
    };
  }

  fetchSearch = username => {
    let url = `${API}search/users?q=${username}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data
        });
      });
  };

  componentDidMount() {
    this.fetchSearch(this.state.searchText);
  }

  render() {
    return (
      <div>
        <Header />
        <SearchForm fetchSearch={this.fetchSearch} />
        <Profiles data={this.state.data} />
      </div>
    );
  }
}
