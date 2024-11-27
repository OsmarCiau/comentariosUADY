import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../hooks";
import { LoadingElement } from "../helpers/LoadingElement";

export const PublicRoutes = ({children}) => {

    const { status, checkAuthToken } = useAuthStore();

    useEffect(() => {
      checkAuthToken();
    }, []);

    if (status === "checking") {
        return <LoadingElement />
    }


    //Si no esta autenticado muestra el login y si esta autenticado redirige al panel de administrador
    
    return status === "not-authenticated" 
    ? children 
    : <Navigate to={"/"} />;
}