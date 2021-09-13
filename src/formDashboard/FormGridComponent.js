import React from "react";
import { Grid, GridColumn } from "@progress/kendo-react-grid";

const FormGridComponent = (props) => {
  const [skip, setSkip] = React.useState(0);
  const [take, setTake] = React.useState(4);

  const onPageChange = (e) => {
    setSkip(e.page.skip);
    setTake(e.page.take);
  };

  //let data = props.data;
  //console.log(data);


  // const notify = () => {
  //   toast.success("Working!", {
  //     position: "top-right",
  //   });
  // };

  return (
    <div className="gridView">
      <Grid
        //data={data.slice(skip, skip + take)}
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
