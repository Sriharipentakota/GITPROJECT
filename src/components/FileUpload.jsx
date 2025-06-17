import React from 'react';

const FileUpload = ({ onFileUpload }) => {
  return (
    <div className="mb-6">
      <label 
        htmlFor="file-upload" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
      >
        Upload Excel File
      </label>
      <input
        id="file-upload"
        type="file"
        accept=".xlsx, .xls"
        onChange={onFileUpload}
        className="hidden"
      />
    </div>
  );
};

export default FileUpload;