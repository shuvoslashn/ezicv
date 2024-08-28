import AddCV from "./components/AddCV";

export default function Dashboard() {
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
            </div>
        </section>
    );
}
