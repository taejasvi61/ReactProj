import { useState, useEffect } from "react";
import "./App.css";
import Routing from "./Routing";
import Live from "./components/Live";
import useLocalStorage from "./hooks/useLocalStorage";
import Explorer from "./components/Explorer";
import Editor from "./components/Editor";

function App() {
  const [isHtml, setIsHtml] = useState(true);
  const [isCss, setIsCss] = useState(false);
  const [isJS, setIsJs] = useState(false);
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);
  //curl -X POST -d 'api_dev_key=YOUR API DEVELOPER KEY' -d 'api_paste_code=test' -d 'api_option=paste' "https://pastebin.com/api/api_post.php"

  const uploadToPasteBin = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append(
      "Cookie",
      "pastebin_posted=6dfcb5adcb61153e4b5c7b5f030c4b3320da6ca570e6319fa20fb1fdc0f13a8fa%3A2%3A%7Bi%3A0%3Bs%3A15%3A%22pastebin_posted%22%3Bi%3A1%3Bs%3A8%3A%22tJLcCdye%22%3B%7D"
    );

    var urlencoded = new URLSearchParams();
    urlencoded.append("api_dev_key", "TKrTvUB1FryHvVq7bsKAA2cbe-NMfXGC"); //my dev key
    urlencoded.append("api_paste_code", srcDoc);
    urlencoded.append("api_option", "paste");
    var requestOptions = {
      method: "POST",
      mode: "no-cors",  //sending data post method
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",};
    fetch("https://pastebin.com/api/api_post.php", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };




  return (
    <div className="App">
      <Explorer
        setIsCss={setIsCss} setIsHtml={setIsHtml} setIsJs={setIsJs} upload={uploadToPasteBin}/>
      {isHtml && !isCss && !isJS ? (
        <Editor language="xml" onChange={setHtml} value={html} type="index.html" />
      ) : null}
      {!isHtml && isCss && !isJS ? (
        <Editor language="xml" onChange={setCss} value={css} type="index.css" />
      ) : null}
      {!isHtml && !isCss && isJS ? (
        <Editor language="xml" onChange={setJs} value={js} type="app.js" />
      ) : null}
      <Live srcDoc={srcDoc} />
    </div>
  );
}

export default App;
