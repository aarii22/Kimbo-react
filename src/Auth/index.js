import { Cookies } from "react-cookie";

export const cookies = new Cookies();

export const config = {
  headers: {
    Authorization: cookies.get("SID"),
    "Content-Type": "application/json"
  },
  mode: "cors"
};
