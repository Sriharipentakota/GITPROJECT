import React, { useState, useEffect } from 'react';

const EditableCell = ({ getValue, row, column, table }) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };

  return (
    <input
      value={value}
      onChange={e => setValue(e.target.value)}
      onBlur={onBlur}
      className="w-full p-1 border-0 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
    />
  );
};

export default EditableCell;