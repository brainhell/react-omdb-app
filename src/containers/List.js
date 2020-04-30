import React, { Fragment } from "react";

import Card from "../components/Card/Card";

console.log(process.env.API);

const API = process.env.API;

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchTerm: "",
      error: "",
      loading: true,
    };
  }

  async componentDidMount() {
    //const res = await fetch('../../assets/data.json');
    const res = await fetch(`${API}&s=batman`);
    const resJSON = await res.json();
    //console.log(resJSON);
    this.setState({ data: resJSON.Search, loading: false });
  }

  async handleSubmit(e) {
    e.preventDefault();
    if (!this.state.searchTerm) {
      return this.setState({ error: "Please write a valid text" });
    }

    const res = await fetch(`${API}&s=${this.state.searchTerm}`);
    const data = await res.json();
    if (!data.Search) {
      return this.setState({ error: "There is no data" });
    }
    this.setState({ data: data.Search, error: "", searchTerm: "" });
    //console.log(data);
  }

    render() {

        const { data, loading} = this.state;
        if (loading) {
            return <h3 className="text-gray-200">Loading....</h3>
        }
        return (
            <Fragment>
                <div>
                <form
                    className="items-center w-auto"
                    onSubmit={(e) => this.handleSubmit(e)}
                >
                    <div className="flex flex-wrap">
                    <input
                        className="border w-1/5 mt-5 ml-auto mr-auto appearance-none rounded-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Search"
                        onChange={(e) => this.setState({ searchTerm: e.target.value })}
                        value={this.state.searchTerm}
                        autoFocus
                    />
                    </div>
                </form>
                <p className="text-white w-1/4 py-2 px-3 ml-auto mr-auto">
                    {this.state.error ? this.state.error : ""}
                </p>
                <div className="flex flex-wrap">
                    {data.map((movie, i) => {
                    return <Card movie={movie} key={i} />;
                    })}
                </div>
                </div>
            </Fragment>
        );
    }
}

export default List;
