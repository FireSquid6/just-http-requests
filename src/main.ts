import "./style.css";

interface UserRequest {
  url: string;
  method: string;
  body: string;
  params: Map<string, string>;
  headers: Map<string, string>;
}

const request: UserRequest = {
  url: "http://localhost:3000",
  method: "GET",
  body: "",
  params: new Map(),
  headers: new Map(),
};

let response = "";

document.getElementById("url")?.addEventListener("input", (e) => {
  request.url = (e.target as HTMLInputElement).value;
});

document.getElementById("body")?.addEventListener("input", (e) => {
  request.body = (e.target as HTMLInputElement).value;
});

document.getElementById("method")?.addEventListener("change", (e) => {
  request.method = (e.target as HTMLSelectElement).value;
});

document.getElementById("send")?.addEventListener("click", () => {
  console.log(request);
  fetch(request.url, {
    method: request.method,
    body: request.method !== "GET" ? request.body : null,
  })
    .then((res) => res.text())
    .then((res) => {
      response = res;
      document.getElementById("response")!.innerHTML = response;
    });
});
