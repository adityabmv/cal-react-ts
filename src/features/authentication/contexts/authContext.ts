
import React from "react";
import authStore, { AuthStore } from "../stores/authStore";

export const AuthContext:React.Context<AuthStore> = React.createContext(authStore);

