import { Grid, GridColumn } from "@progress/kendo-react-grid";
import React, { useState } from "react";


const FormGridComponent = (props) => {
  const [skip, setSkip] = useState();
  const [take, setTake] = useState();

  const onPageChange = (e) => {
    setSkip(e.page.skip);
    setTake(e.page.take);
  };

  let dataa = props.data;
  console.log(dataa);

  // const notify = () => {
  //   toast.success("Working!", {
  //     position: "top-right",
  //   });
  // };

  return (
    <div className="gridView">
      <Grid
        data={dataa}
        style={{ width: "70vw" }}
        pageable={true}
        skip={skip}
        take={take}
        onPageChange={onPageChange}
      >
        <GridColumn field="first_name" />
        <GridColumn field="last_name" />
        <GridColumn field="profile" />
        <GridColumn field="email" />
        <GridColumn field="contact" />
      </Grid>
    </div>
  );
};

export default FormGridComponent;
