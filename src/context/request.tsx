import { createContext, useContext } from "react";

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

const RequestContext = createContext<UserRequest>(defaultRequest);

export function RequestProvider({ children }: { children: React.ReactNode }) {
  return (
    <RequestContext.Provider value={defaultRequest}>
      {children}
    </RequestContext.Provider>
  );
}

export function useRequest(): UserRequest {
  const request = useContext(RequestContext);
  return request;
}
