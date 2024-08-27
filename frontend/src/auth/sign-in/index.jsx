import { SignIn } from "@clerk/clerk-react";
import Header from "../../components/custom/Header";

export default function SignInPage() {
    return (
        <>
            <Header />
            <div className="w-full min-h-[70vh] flex justify-center items-center">
                <SignIn />
            </div>
        </>
    );
}
