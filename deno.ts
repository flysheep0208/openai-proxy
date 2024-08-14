const OPENAI_API_HOST = "api.openai.com";
const OPENAI_API_PATH = "/v1";

Deno.serve(async (request) => {
  const url = new URL(request.url);
  url.host = OPENAI_API_HOST;
  url.pathname = OPENAI_API_PATH;

  const newRequest = new Request(url.toString(), {
    headers: request.headers,
    method: request.method,
    body: request.body,
    redirect: "follow",
  });
  return await fetch(newRequest);
});
