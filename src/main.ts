import "./style.css";

interface UserRequest {
  url: string;
  method: string;
  body: string;
  params: Map<string, string>;
  headers: Map<string, string>;
  bodyType: "plaintext" | "json" | "form-data" | "xml";
}

const request: UserRequest = {
  url: "http://localhost:3000",
  method: "GET",
  body: "",
  params: new Map(),
  headers: new Map(),
  bodyType: "plaintext",
};

// TODO:
// - List of common headers to set
// - Changing body type with dropdown
// - Add ability to disable cors (I hate cors)
// - better formating for response data

document.getElementById("url")?.addEventListener("input", (e) => {
  request.url = (e.target as HTMLInputElement).value;
});

document.getElementById("body")?.addEventListener("input", (e) => {
  request.body = (e.target as HTMLInputElement).value;
});

document.getElementById("method")?.addEventListener("change", (e) => {
  request.method = (e.target as HTMLSelectElement).value;
});

document.getElementById("send")?.addEventListener("click", async () => {
  console.log(request);
  const res = await fetch(request.url, {
    method: request.method,
    body: request.method !== "GET" ? request.body : null,
  });
  document.getElementById("response")!.innerText = await res.text();
});

document.getElementById("add-param")?.addEventListener("click", () => {
  addParam();
});

function addParam() {
  const i = request.params.size;
  const newHtml = `
    <div id="param-${i}">
      <input type="text" id="p-key-${i}" placeholder="Key">
      <input type="text" id="p-value-${i}" placeholder="Value">
      <button id="p-delete-${i}">-</button>
    </div>
  `;
  document.getElementById("params")!.insertAdjacentHTML("beforeend", newHtml);

  let key = "";
  let value = "";
  request.params.set(key, value);

  document.getElementById(`p-delete-${i}`)!.addEventListener("click", () => {
    document.getElementById(`param-${i}`)!.remove();
    request.params.delete(key);
  });

  document.getElementById(`p-key-${i}`)!.addEventListener("input", (e) => {
    request.params.delete(key);
    key = (e.target as HTMLInputElement).value;
    request.params.set(key, value);
  });

  document.getElementById(`p-value-${i}`)!.addEventListener("input", (e) => {
    value = (e.target as HTMLInputElement).value;
    request.params.set(key, value);
  });
}

function addHeader() {
  const i = request.headers.size;
  const newHtml = `
    <div id="header-${i}">
      <input type="text" id="h-key-${i}" placeholder="Key">
      <input type="text" id="h-value-${i}" placeholder="Value">
      <button id="h-delete-${i}">-</button>
    </div>
  `;
  document.getElementById("headers")!.insertAdjacentHTML("beforeend", newHtml);

  let key = "";
  let value = "";
  request.headers.set(key, value);

  document.getElementById(`h-delete-${i}`)!.addEventListener("click", () => {
    document.getElementById(`header-${i}`)!.remove();
    request.headers.delete(key);
  });

  document.getElementById(`h-key-${i}`)!.addEventListener("input", (e) => {
    request.headers.delete(key);
    key = (e.target as HTMLInputElement).value;
    request.headers.set(key, value);
  });

  document.getElementById(`h-value-${i}`)!.addEventListener("input", (e) => {
    value = (e.target as HTMLInputElement).value;
    request.headers.set(key, value);
  });
}

document.getElementById("add-header")?.addEventListener("click", () => {
  addHeader();
});
