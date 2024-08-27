import { UserButton } from "@clerk/clerk-react";
import Header from "../components/custom/Header";

export default function Home() {
    return (
        <>
            <Header />
            <h1 className="text-3xl font-bold">Home</h1>
            <UserButton />
        </>
    );
}
