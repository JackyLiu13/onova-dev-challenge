// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import dbquery from '@/lib/db';

// Defining the type of the response
type Project = {
  project_id: string,
  project_name: string,
  project_description: string,
  project_founder: string,
}

// Sends a query to the db and returns the results
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Project[]>
) {
	//grabs the project informations per row and sent to result asynchronously 
	const result = await dbquery("SELECT project_id, project_name, project_description, project_founder FROM projects;")
		.then((res) => res.rows)
		.catch((err) => console.error("Error executing query", err.stack));	
	res.status(200).json(result);
}

