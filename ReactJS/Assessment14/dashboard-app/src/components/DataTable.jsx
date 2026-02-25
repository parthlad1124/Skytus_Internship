function DataTable({ columns, data }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr style={{ background: "#e2e8f0" }}>
          {columns.map((col, index) => (
            <th key={index} style={thStyle}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td key={colIndex} style={tdStyle}>
                {row[col.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const thStyle = {
  padding: "10px",
  textAlign: "left",
  borderBottom: "1px solid #ccc",
};

const tdStyle = {
  padding: "10px",
  borderBottom: "1px solid #eee",
};

export default DataTable;