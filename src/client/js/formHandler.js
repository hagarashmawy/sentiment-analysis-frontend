import { checkInput } from "./linkChecker.js";

async function handleSubmit() {
  const inputUrl = document.getElementById("web").value;
  if (checkInput(inputUrl) == false) {
    return alert("Please enter a valid URL");
  }
  const btn = document.getElementById("submit");
  btn.addEventListener("click", handleSubmit);
  const resultPar = document.getElementById("result");
  btn.disabled = true;
  resultPar.innerText = "Analysing, please wait";
  const analysRes = await urlAnalysis(inputUrl);
  console.log(analysRes);

  resultPar.innerText = `Your results. \n ${JSON.stringify(analysRes)}`;
  btn.disabled = false;
}

async function urlAnalysis(url) {
  const apiUrl = `http://localhost:1995/api?url=${url}`;
  const request = await fetch(apiUrl);
  const response = await request.json();
  return response;
}

export { handleSubmit, urlAnalysis };
