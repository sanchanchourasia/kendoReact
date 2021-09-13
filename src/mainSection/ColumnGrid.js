import React from "react";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import products from "../products.json";
import "../App.css";

const KendoGrid = () => {
  const [skip, setSkip] = React.useState(0);
  const [take, setTake] = React.useState(10);

  const onPageChange = (e) => {
    setSkip(e.page.skip);
    setTake(e.page.take);
  };

  return (
    <div className="gridView">
      <Grid
        data={products.slice(skip, skip + take)}
        style={{ width: "70vw" }}
        pageable={true}
        skip={skip}
        take={take}
        onPageChange={onPageChange}
        total={products.length}
      >
        <GridColumn field="ProductName" />
        <GridColumn field="UnitPrice" />
        <GridColumn field="UnitsInStock" />
        <GridColumn field="Discontinued" />
      </Grid>
    </div>
  );
};

export default KendoGrid;
