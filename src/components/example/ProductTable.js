import React from "react";
import { DataGrid } from "@mui/x-data-grid";

function ProductTable(prop) {
  const data = prop.data;
  const columns = prop.columns;
  return (
    <div className="product-table" style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerpageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default ProductTable;
