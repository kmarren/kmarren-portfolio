import { useEffect } from "react";
import headshot from "../assets/headshot.png";

const About = () => {
    useEffect(() => {
        document.title = "About | My Portfolio";
    }, []);

    return (
        <main className="mx-auto max-w-3xl p-4 space-y-6">
            <h2 className='text-2xl font-bold text-white'>Kennedy Marren</h2>
            <div className='flex justify-center'>
                <img
                    src={headshot}
                    alt='Profile picture'
                    className='w-32 h-32 rounded-full border border-white'
                />
            </div>
            <p className='text-gray-100'>
                I'm Kennedy, a passionate software engineer.
            </p>
        </main>
    );
};
export default About;
