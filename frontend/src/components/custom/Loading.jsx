import { Loader2 } from "lucide-react";

export default function Loading() {
    return (
        <div className="w-full h-screen flex justify-center items-center fixed backdrop-blur bg-gray-800/30 left-0 top-0 z-50 transition-all duration-300">
            <div className="bg-white max-w-2xl p-8 text-center flex flex-col justify-center items-center rounded-lg gap-4">
                <Loader2 className="animate animate-spin w-16 h-16 stroke-primary" />
                <div className="text-center">
                    <h3 className="text-xl font-semibold">Please Wait</h3>
                    <p className="">We are creating your CV</p>
                </div>
            </div>
        </div>
    );
}
