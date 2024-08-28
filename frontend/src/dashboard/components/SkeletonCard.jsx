import { Skeleton } from "@/components/ui/skeleton";

export default function SkalatonCard() {
    return (
        <div className="w-full bg-zinc-300 rounded-md overflow-hidden flex flex-col border-dashed h-60 cursor-pointer hover:scale-[1.03]  transition-all duration-300">
            <Skeleton className="h-full w-full"></Skeleton>
            <Skeleton className="py-3 px-6 "></Skeleton>
        </div>
    );
}
