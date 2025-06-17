import * as XLSX from 'xlsx';

export const parseExcelFile = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const workbook = XLSX.read(event.target.result, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        if (jsonData.length > 0) {
          const columnKeys = Object.keys(jsonData[0]);
          const tableColumns = columnKeys.map(key => ({
            accessorKey: key,
            header: key,
            enableSorting: true,
            enableFiltering: true,
          }));

          resolve({ data: jsonData, columns: tableColumns });
        } else {
          reject(new Error('No data found in Excel file'));
        }
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = () => reject(new Error('Error reading file'));
    reader.readAsBinaryString(file);
  });
};