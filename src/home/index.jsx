import { UserButton } from "@clerk/clerk-react";

export default function Home() {
    return (
        <div>
            <h1 className="text-3xl font-bold">Home</h1>
            <UserButton />
        </div>
    );
}
