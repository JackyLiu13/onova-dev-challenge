import type { NextApiRequest, NextApiResponse } from 'next';
import dbquery from '@/lib/db';

//Project Type
type Project = {
  project_id: string,
  project_name: string,
  project_description: string,
  project_founder: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project>
) {
  const { project_name } = req.query;
  //Query through to grab the project data
  const result = await dbquery("SELECT project_id, project_name, project_description, project_founder FROM projects WHERE project_name = $1;", [project_name])
    .then((res) => res.rows[0])
    .catch((err) => console.error("Error executing query", err.stack));
    res.status(200).json(result);
}
