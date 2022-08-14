import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function DisplayLanguage() {
    const language = useContext(LanguageContext)
  return (
    <div>
      <h3>Current language: {language}</h3>
    </div>
  );
}
