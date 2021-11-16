import React from "react";

class AddAd extends React.Component {
  state = {
    title: "",
    link: "",
    valid_until: "",
  };

  add = (e) => {
    e.preventDefault();
    if (
      this.state.title === "" ||
      this.state.link === "" ||
      this.state.valid_until === ""
    ) {
      alert("Missing fields!");
      return;
    }
    this.props.addAdHandler(this.state);
    this.setState({ title: "", link: "", valid_until: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="container p-0">
        <div className="card my-4 p-4 shadow-sm border-0">
          <div className="card-body">
            <h2>Add Ad</h2>
            <form onSubmit={this.add}>
              <div className="my-3">
                <label className="form-label">Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={this.state.title}
                  onChange={(e) => this.setState({ title: e.target.value })}
                />
              </div>
              <div className="my-3">
                <label className="form-label">Link</label>
                <input
                  className="form-control"
                  type="text"
                  name="link"
                  placeholder="Link"
                  value={this.state.link}
                  onChange={(e) => this.setState({ link: e.target.value })}
                />
              </div>
              <div className="my-3">
                <label className="form-label">Valid Until</label>
                <input
                  className="form-control"
                  type="date"
                  name="valid_until"
                  placeholder="Valid Until"
                  value={this.state.valid_until}
                  onChange={(e) =>
                    this.setState({ valid_until: e.target.value })
                  }
                />
              </div>
              <button className="btn btn-success">Create Ad</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddAd;
