import { UserData } from "../../types";
import axios from "axios";

//make api call
export const fetchDictionary = async () => {
  return await axios
    .get("/define", { params: { terms: "hello" } })
    .then((res) => res.data);
};
