"use server";

import { UserDto } from "@/types/user";
import axios from "axios";

export async function signUp(userDto: UserDto) {
  const res = await axios
    .post(`${process.env.API_URL}/api/v1/users`, userDto)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
}
