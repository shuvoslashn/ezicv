import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";
import Dashboard from "./../../dashboard/index";

export default function Header() {
    const { user, isSignedIn } = useUser();
    return (
        <header className="flex justify-between items-center p-4 min-h-20 bg-white/80 backdrop-blur-md shadow-2xl shadow-zinc-950/5">
            <Link to={"/"}>
                <img src="/ezicvlogo.svg" className="w-[90px]" />
            </Link>

            {isSignedIn ? (
                <div className="flex gap-4 items-center">
                    <UserButton />
                    <Button
                        asChild
                        className="bg-zinc-200 hover:bg-zinc-100 text-secondary"
                    >
                        <Link to={"/dashboard"}>Dashboard</Link>
                    </Button>
                </div>
            ) : (
                <Button asChild>
                    <Link to={"/auth/sign-in"}>Get Started</Link>
                </Button>
            )}
        </header>
    );
}
