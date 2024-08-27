import { useUser } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";

export default function App() {
    const { user, isLoaded, isSignedIn } = useUser();

    if (!isSignedIn && isLoaded) {
        return <Navigate to={"/auth/sign-in"} />;
    }

    return (
        <>
            <Outlet />
        </>
    );
}
