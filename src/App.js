import "./styles.css";
import React from "react";
import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function App() {
  const [value, setValue] = useState();
  const options = [
    { id: 1, name: "Ken", role: 0, age: 35 },
    { id: 2, name: "Taro", role: 1, age: 42 },
    { id: 3, name: "Tom", role: 2, age: 45 },
  ];

  return (
    <div className="App">
      <Autocomplete
        size="small"
        sx={{ width: "300px" }}
        options={options}
        isOptionEqualToValue={(option, v) => option.id === v.id}
        getOptionLabel={(option) => option.name}
        onChange={(_e, item) => {
          console.log(item)
          return setValue(item);
        }}
        value={value || null}
        noOptionsText="見つかりません"
        renderOption={(props, option) => {
          return (
            <Box component="li" {...props} key={option.id}>
              {option.name}
            </Box>
          );
        }}
        renderInput={(params) => <TextField {...params} fullWidth />}
      />
    </div>
  );
}
