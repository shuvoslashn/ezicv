import { useEffect } from "react";
import { useParams } from "react-router-dom";
import FormSection from "../../components/FormSection";
import CvPreview from "../../components/CvPreview";

export default function EditCV() {
    const params = useParams();

    useEffect(() => {
        console.log(params);
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-8 lg:px-16 xl:px-32 gap-12">
            <FormSection />
            <CvPreview />
        </div>
    );
}
