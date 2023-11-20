import Form from "./components/Form";
import Footer from "./components/Footer";
import { useState } from "react";

const API_URL = "https://api.datamuse.com";

export default function App() {
  const [data, setData] = useState("");
  const [synonyms, setSynonyms] = useState([]);

  const handleFetchSynonyms = (e) => {
    e.preventDefault();

    fetch(`${API_URL}/words?rel_syn=${data}`)
      .then((response) => response.json())
      .then(setSynonyms);
  };

  return (
    <div className="container py-10 md:py-[60px] lg:py-20">
      <section>
        <div className="max-w-[600px] mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-balance mb-4">
            Thesaurus App
          </h1>
          <p className="text-lg text-center font-normal text-gray-500 lg:text-xl text-balance mb-6">
            Enter a word and discover its synonyms!
          </p>

          <Form
            value={data}
            onSubmit={handleFetchSynonyms}
            onChange={(e) => setData(e.target.value)}
            onClick={handleFetchSynonyms}
          />

          <ul className="text-center my-6">
            {synonyms.map((synonym, index) => {
              return <li key={index}>{synonym.word}</li>;
            })}
          </ul>
        </div>
      </section>

      <Footer link="https://alexandre-zahrai.vercel.app/" name="Alex Zahrai" />
    </div>
  );
}
