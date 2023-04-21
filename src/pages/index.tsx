import DataTable from 'react-data-table-component'
import {useState, useEffect} from 'react'
import Link from 'next/link';



export default function Home() {
    
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [perPage,setPerPage] = useState(10);

  
  async function fetchTableData() {
    setLoading(true);
    const response = await fetch('http://localhost:3000/api/projects');
    const data = await response.json();
    setData(data);
    setLoading(false);
  }

  //Set up columns for data table
  const columns = [
    {
      name: "Project Name",
      selector: (row) => row.project_name
    },
    {
      name: "Project Page URL",
      //populate each cell with a link to the project page
      cell: (row) => (
        <Link className="text-blue-500 underline" href={`/${row.project_name}`}>
          {`${window.location.protocol}//${window.location.hostname}/${row.project_name}`}
        </Link>   
      )
    }
  ];

  // Fetch data on page load
  useEffect(() => {
    fetchTableData();
  },[]);


  return (
    
    <main className="Projects">      
      <section>
        <DataTable
          title={<h1 style={{fontWeight: 'bold'}}>Projects</h1>}
          columns={columns}
          data={data}
          progressPending={loading}
        ></DataTable>        
      </section>
      
    </main>
  )
}
