import { useRequest } from "../context/request";
import { useState } from "react";

export default function InputLine() {
  return (
    <div className="flex flex-row">
      <MethodSelector />
      <UrlInput />
    </div>
  );
}

function MethodSelector() {
  return (
    <div>
      <select>
        <option>GET</option>
        <option>POST</option>
        <option>PUT</option>
        <option>PATCH</option>
        <option>DELETE</option>
      </select>
    </div>
  );
}

function UrlInput() {
  const [request, setRequest] = useRequest();
  const [url, setUrl] = useState(request.url);

  return (
    <div>
      <input
        className="input input-bordered w-full"
        placeholder="http://..."
        type="text"
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
          setRequest({ ...request, url: e.target.value });
          console.log(request);
        }}
      />
    </div>
  );
}
