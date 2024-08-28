import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";
import Dashboard from "./../../dashboard/index";

export default function Header() {
    const { user, isSignedIn } = useUser();
    return (
        <div className="w-full pb-20">
            <div className="flex fixed w-full justify-between items-center px-10 py-4 min-h-20 bg-white/40 backdrop-blur-sm shadow-2xl shadow-zinc-950/5 z-30">
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
            </div>
        </div>
    );
}
