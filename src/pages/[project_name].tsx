import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function ProjectDetails() {
    const router = useRouter();
    const { project_name } = router.query;
    const [project, setProject] = useState(null);

    useEffect(() => {
        async function fetchProject() {
            const response = await fetch(`http://localhost:3000/api/projects/${project_name}`);
            const data = await response.json();
            setProject(data);
        }

        if (project_name) {
            fetchProject();
        }
    }, [project_name]);

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <div className="mt-5 px-5">
            <h1 className="font-bold">{project.project_name}</h1>
            <p className="mt-8">
                <span className="font-bold">Founder:</span> {project.project_founder}
            </p>
            <p className="mt-8">
                <span className="font-bold">Description:</span> {project.project_description}
            </p>
        </div>
    );
}
