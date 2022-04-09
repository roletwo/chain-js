import fetch, { RequestInit, Response } from "node-fetch-commonjs";

export async function send(
  url: string,
  method: string,
  params?: any
): Promise<Response> {
  const opt: RequestInit = {
    method,
  };

  if (params) {
    opt.body = JSON.stringify(params);
    opt.headers = { "content-type": "application/json" };
  }

  return fetch(url, opt);
}

export async function post(url: string, params?: any): Promise<Response> {
  return send(url, "post", params);
}
