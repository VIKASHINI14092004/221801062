import React, { useState } from "react";
import log from "./log";

function App() {
  const [url, setUrl] = useState("");
  const [short, setShort] = useState("");
  const [copied, setCopied] = useState(false);

  function shorten() {
    if (url.trim() === "") return;

    const code = Math.random().toString(36).slice(2, 7);
    const shortLink = "http://sho.rt/" + code;

    setShort(shortLink);

   
    log("Frontend", "INFO", "url-shortener", "User shortened a URL", "cWyaXW");

  }

  function copyToClipboard() {
    navigator.clipboard.writeText(short);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>My Simple URL Shortener</h1>

      <input
        type="text"
        placeholder="Type a URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ padding: 5, width: "300px" }}
      />

      <button onClick={shorten} style={{ marginLeft: 10 }}>
        Make Short
      </button>

      {short && (
        <div style={{ marginTop: 20 }}>
          <p>Short link: <a href={url}>{short}</a></p>
          <button onClick={copyToClipboard}>Copy</button>
          {copied && <p style={{ color: "green" }}>Copied!</p>}
        </div>
      )}
    </div>
  );
}

export default App;
