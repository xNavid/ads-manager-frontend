import React from "react";
import { dateFormat } from "../utils/dates";

class EditAd extends React.Component {
  constructor(props) {
    super(props);
    const { _id, title, link, valid_until } = props.location.state.ad;
    this.state = {
      _id,
      title,
      link,
      valid_until: dateFormat(valid_until),
    };
  }

  update = (e) => {
    e.preventDefault();
    if (
      this.state.title === "" ||
      this.state.link === "" ||
      this.state.valid_until === ""
    ) {
      alert("Missing Fields!");
      return;
    }
    this.props.updateAdHandler(this.state);
    this.setState({ title: "", link: "", valid_until: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="container p-0">
        <div className="card my-4 p-4 shadow-sm border-0">
          <div className="card-body">
            <h2>Edit Ad</h2>
            <form onSubmit={this.update}>
              <div className="my-3">
                <label className="form-label">Title</label>
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
                  value={dateFormat(this.state.valid_until)}
                  onChange={(e) =>
                    this.setState({ valid_until: dateFormat(e.target.value) })
                  }
                />
              </div>
              <button className="btn btn-primary">Update</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditAd;
