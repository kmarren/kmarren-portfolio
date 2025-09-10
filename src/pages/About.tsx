import { useEffect } from "react";
import headshot from "../assets/headshot.png";

const About = () => {
    useEffect(() => {
        document.title = "About | My Portfolio";
    }, []);

    return (
        <main className="mx-auto max-w-3xl p-4 space-y-6">
            <h2 className='text-2xl font-bold'>Braden Guliano</h2>
            <div className='flex justify-center'>
                <img
                    src={headshot}
                    alt='Profile picture'
                    className='w-32 h-32 rounded-full border'
                />
            </div>
            <p className='text-gray-700'>
                This line describes who I am as a person, a worker, and a student.
            </p>
        </main>
    );
};
export default About;
