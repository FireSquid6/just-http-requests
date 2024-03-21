import { Dispatch, createContext, useContext, useState } from "react";

export interface UserRequest {
  url: string;
  method: string;
  headers: Map<string, string>;
  params: Map<string, string>;
  body: string;
}

const defaultRequest: UserRequest = {
  url: "http://localhost:3000",
  method: "GET",
  headers: new Map<string, string>(),
  params: new Map<string, string>(),
  body: "",
};

const RequestContext = createContext<[UserRequest, Dispatch<UserRequest>]>([
  defaultRequest, // default value
  () => { }, // dummy function
]);

export function RequestProvider({ children }: { children: React.ReactNode }) {
  const [request, setRequest] = useState<UserRequest>(defaultRequest);

  return (
    <RequestContext.Provider value={[request, setRequest]}>
      {children}
    </RequestContext.Provider>
  );
}

export function useRequest(): [UserRequest, Dispatch<UserRequest>] {
  const [request, setRequest] = useContext(RequestContext);
  return [request, setRequest];
}
