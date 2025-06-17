import { useState } from 'react';
import DataTable from './components/DataTable';
import FileUpload from './components/FileUpload';
import { parseExcelFile } from './utils/excelParser';

function App() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

console.log(data,"data")

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const { data: excelData, columns: tableColumns } = await parseExcelFile(file);
        setColumns(tableColumns);
        setData(excelData);
      } catch (error) {
        console.error('Error parsing Excel file:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Excel Data Table</h1>
        
        <FileUpload onFileUpload={handleFileUpload} />

        {data.length > 0 ? (
          <div className="bg-white rounded-lg shadow p-6">
            <DataTable 
              data={data} 
              columns={columns} 
              setData={setData}
            />
          </div>
        ) : (
          <div className="text-center text-gray-500 py-12">
            Upload an Excel file to view data
          </div>
        )}
      </div>
    </div>
  );
}

export default App;