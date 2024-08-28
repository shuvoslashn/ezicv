import { Link } from "react-router-dom";

export default function CvCardItem({ cv }) {
    return (
        <Link to={`/dashboard/cv/${cv.cvid}/edit`}>
            <div className="w-full rounded-md overflow-hidden flex flex-col border-dashed h-60 cursor-pointer hover:scale-[1.03]  transition-all duration-300">
                <div className="h-full w-full bg-primary/50"></div>
                <div className="py-3 px-6 bg-primary">
                    <h2 className="text-white">{cv.title}</h2>
                </div>
            </div>
        </Link>
    );
}
