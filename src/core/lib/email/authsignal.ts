import { Authsignal } from "@authsignal/node";

export const authsignal = new Authsignal({
  apiSecretKey: process.env.AUTHSIGNAL_API_KEY!,
  apiUrl: "https://api.authsignal.com/v1",
});
