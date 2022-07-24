import React from "react";
import { LanguageContext } from "./LanguageContext";

export class DisplayLanguage extends React.Component {
  state = {
    language: "en",
  };

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <div>
          <select
            value={this.state.language}
            onChange={this.handleLanguageChange}
          >
            <option value="en">ENGLISH</option>
            <option value="it">ITALIANO</option>
          </select>
        </div>
        <div>
            <LanguageContext.Consumer>
            { language => {
                return (
                    <p>Testo da tradurre</p>
                )
            }}
            </LanguageContext.Consumer>
        </div>
      </div>
    );
  }
}
