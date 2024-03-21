import { useRequest } from "../context/request";
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
        <option>DELETE</option>
      </select>
    </div>
  );
}

function UrlInput() {
  const [request, setRequest] = useRequest();

  return (
    <div>
      <input
        className="input input-bordered w-full"
        placeholder="http://..."
        type="text"
        value={request.url}
        onChange={(e) => {
          const newRequest = request;
          request.url = e.target.value;
          setRequest(newRequest);
        }}
      />
    </div>
  );
}
