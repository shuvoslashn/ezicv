import { useUser } from "@clerk/clerk-react";
import AddCV from "./components/AddCV";
import GlobalAPI from "../../service/GlobalAPI";
import { useEffect, useState } from "react";
import CvCardItem from "./components/CvCardItem";
import SkeletonCard from "./components/SkeletonCard";

export default function Dashboard() {
    const { user } = useUser();
    const [cvList, setCvList] = useState([]);

    useEffect(() => {
        user && GetCVsList();
    }, [user]);

    const GetCVsList = () => {
        GlobalAPI.GetUserCVs(user?.primaryEmailAddress?.emailAddress).then(
            (resp) => {
                setCvList(resp.data.data);
            }
        );
    };

    return (
        <section className="px-8 md:px-16 lg:px-32 py-16">
            <div className="max-w-3xl pb-8">
                <h2 className="text-3xl mb-3">My Curriculum Vitae</h2>
                <p>
                    Start creating an AI-powered curriculum vitae to elevate
                    your chances of landing your next job role by showcasing
                    personalized skills and experiences tailored to industry
                    demands.
                </p>
            </div>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                <AddCV />
                {cvList.length > 0
                    ? cvList.map((cv) => {
                          return <CvCardItem cv={cv} key={cv.cvid} />;
                      })
                    : "abcdefghijk".split("").map((i) => {
                          return <SkeletonCard />;
                      })}
            </div>
        </section>
    );
}
