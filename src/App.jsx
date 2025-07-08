import { useState } from "react";
import "./App.css";

function App() {
  const [cat, setCat] = useState(null);
  const [banList, setBanList] = useState([]);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchCat = async () => {
    setLoading(true);
    setError("");
    let newCat = null;
    let tries = 0;

    while (tries < 10) {
      try {
        const res = await fetch("https://api.thecatapi.com/v1/images/search?has_breeds=1", {
          headers: {
            "x-api-key": import.meta.env.VITE_CAT_API_KEY,
          },
        });
        const data = await res.json();

        if (data.length > 0 && data[0].breeds.length > 0) {
          const breed = data[0].breeds[0];
          if (!banList.includes(breed.name) && !banList.includes(breed.origin)) {
            newCat = {
              image: data[0].url,
              breed: breed.name,
              origin: breed.origin || "Unknown",
              weight: breed.weight.imperial || "Unknown",
              lifespan: breed.life_span || "Unknown",
            };
            break;
          }
        }
      } catch (err) {
        console.error("API error:", err);
        setError("Failed to fetch cat data. Please try again later.");
        break;
      }
      tries++;
    }

    if (newCat) {
      setCat(newCat);
      setHistory((prev) => [newCat, ...prev]);
    } else if (!error) {
      setError("No cats found that match your current filters.");
    }

    setLoading(false);
  };

  const toggleBan = (attributeValue) => {
    setBanList((prev) =>
      prev.includes(attributeValue)
        ? prev.filter((val) => val !== attributeValue)
        : [...prev, attributeValue]
    );
  };

  return (
    <div className="App">
      <div className="sidebar left">
        <h3>Who have we seen so far?</h3>
        <div className="history-list">
          {history.map((item, index) => (
            <div key={index} className="history-item">
              <img src={item.image} alt={item.breed} />
              <p>
                A {item.breed} cat from {item.origin}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="main-content">
        <h1>Trippin' on Cats</h1>
        <p>Discover cats from your wildest dreams!</p>
        <p>😺😻😼😽🙀😿😾😸😹</p>

        {cat && (
          <div className="cat-card">
            <h2>{cat.breed}</h2>
            <div className="cat-attributes">
              <div onClick={() => toggleBan(cat.breed)} className="attribute textbox clickable">
                {cat.breed}
              </div>
              <div onClick={() => toggleBan(cat.weight)} className="attribute textbox clickable">
                {cat.weight} lbs
              </div>
              <div onClick={() => toggleBan(cat.origin)} className="attribute textbox clickable">
                {cat.origin}
              </div>
              <div onClick={() => toggleBan(cat.lifespan)} className="attribute textbox clickable">
                {cat.lifespan} years
              </div>
            </div>
            <img src={cat.image} alt={cat.breed} />
          </div>
        )}

        <button onClick={fetchCat} disabled={loading}>
          {loading ? <span className="spinner"></span> : "Discover!"}
        </button>

        {error && <p className="error-message">{error}</p>}
      </div>

      <div className="sidebar right">
        <h3>Ban List</h3>
        <p>Select an attribute in your listing to ban it</p>
        <div className="ban-list">
          {banList.map((item, index) => (
            <div key={index} onClick={() => toggleBan(item)} className="ban-item">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;