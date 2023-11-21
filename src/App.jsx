import Form from "./components/Form";
import Footer from "./components/Footer";
import { useState } from "react";

const API_URL = "https://api.datamuse.com";

export default function App() {
  // State
  const [word, setWord] = useState("");
  const [synonyms, setSynonyms] = useState([]);

  // Variables
  const hasSynonyms = synonyms.length > 0;

  // Handler functions
  const handleWord = (e) => setWord(e.target.value);

  const handleFetchSynonyms = (e) => {
    e.preventDefault();

    fetch(`${API_URL}/words?rel_syn=${word}`)
      .then((response) => response.json())
      .then(setSynonyms);
  };

  const handleRemoveInputText = () => {
    setWord("");
    setSynonyms([]);
  };

  const handleNewWord = (synonym) => {
    const updatedWord = synonym.word;
    setWord(updatedWord);
    fetch(`${API_URL}/words?rel_syn=${updatedWord}`)
      .then((response) => response.json())
      .then(setSynonyms);
  };

  // Markup
  return (
    <div className="container py-10 md:py-[60px] lg:py-20">
      <section>
        <div className="max-w-[800px] w-full mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-balance text-center mb-4">
            Thesaurus App
          </h1>
          <p className="text-lg text-center font-normal text-gray-500 lg:text-xl text-balance mb-6">
            Enter a word and discover its synonyms!
          </p>

          <Form
            value={word}
            onSubmit={handleFetchSynonyms}
            onChange={handleWord}
            onClick={handleFetchSynonyms}
            onRemove={handleRemoveInputText}
          />
          {hasSynonyms ? (
            <ul className="text-center my-6 space-y-2">
              {synonyms.map((synonym, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      handleNewWord(synonym);
                      handleFetchSynonyms;
                    }}
                    className="cursor-pointer"
                  >
                    {synonym.word}
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </section>

      <Footer
        className={hasSynonyms ? "mt-0" : "mt-6"}
        link="https://alexandre-zahrai.vercel.app/"
        name="Alex Zahrai"
      />
    </div>
  );
}
