import React, { useContext } from "react";
import { UserContext } from "./context";

export default function UserName() {
  const user = useContext(UserContext);
  return <h3>{user.firstName}</h3>;
}
