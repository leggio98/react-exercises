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
            { (language) => {
                return (
                    <h1> Testo da tradurre</h1>    //Non ho capito cosa vuole l'esercizio
                )
            }}
            </LanguageContext.Consumer>
        </div>
      </div>
    );
  }
}
