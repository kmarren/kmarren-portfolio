import { useState } from "react";

type Props = {
    title: string
    description: string
    details: string
    link: string
    image: string
}

const ProjectCard = (props: Props) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <article className="rounded-xl border p-4 shadow-sm border-white text-white">
            <img
                src={props.image}
                alt={props.title}
                className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-100">{props.title}</h3>
            <p className="text-sm text-gray-100">{props.description}</p>
            {expanded && (
                <p className="mt-2 text-sm text-gray-100">{props.details}</p>
            )}

            <div className="mt-3 flex items-center justify-between gap-2">
                <a className="text-sm underline underline-offset-4 hover:no-underline" href={props.link} target="_blank"
                   rel="noreferrer">View project →</a>
                <button className="rounded-md border px-2 py-1 text-sm hover:bg-[#363636] "
                        onClick={() => setExpanded(prevState => !prevState)}>
                    {expanded ? "Hide details" : "Show details"}
                </button>
            </div>
        </article>
    );
};
export default ProjectCard;
