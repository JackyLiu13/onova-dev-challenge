## Welcome

Welcome to our developer challenge! This challenge is designed to mimic the day-to-day activities on our project. We use Next.js and postgres as part of our stack. These are designed to be challenging so we don't expect everything to be perfect. Good luck!

If you get stuck anywhere at all, just assume it works and move onto something else.

First, create a repo for this project. Make sure to push your work to your own repo.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Challenge

Create a simple table in the home page to view the data from our SQL database. Our database has one table (projects) with just 4 fields (project id, project name, project founder and project description) You can see how we access it in `pages/api/projects/index.ts`. 

Users should be able to click on the project page URL, and it should take them to a new page displaying the following content: project name, project founder and project description. These special URLs will be based on the project id, similar to how Google Docs has unique URLs to specific docs.

The documentation on Routing and API routes will be especially useful.

Here's the [figma](https://www.figma.com/file/LXS3hdf8nFTI0xEHE8spyw/Dev-Interview?node-id=0%3A1&t=Pb71tR49Is3iJWON-1)

## Backend API

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/projects](http://localhost:3000/api/projects). This endpoint can be edited in `pages/api/projects/index.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Documentation

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Routing](https://nextjs.org/docs/routing/introduction) - routing 
- [API routes](https://nextjs.org/docs/api-routes/introduction) - learn about how Next.js works
