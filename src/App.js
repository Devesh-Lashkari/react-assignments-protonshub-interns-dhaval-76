import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function App() {
  const [rows, setRows] = useState([]);

  const printInputValues = (e) => {
    console.log(e.target.id, ": ", e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();

    const formArray = e.target;

    const row = [];

    for (let index = 0; index < formArray.length - 1; index++) {
      row.push(formArray[index].value);
    }

    setRows((prevRows) => [...prevRows, row]);

    e.target.reset();
  };

  return (
    <div className="App">
      <form onSubmit={formSubmit}>
        <label htmlFor="firstName" className="input__container">
          First Name
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={printInputValues}
          />
        </label>

        <label htmlFor="lastName">
          Last Name
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={printInputValues}
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            onChange={printInputValues}
          />
        </label>

        <label htmlFor="address">
          Address
          <input
            type="text"
            name="address"
            id="address"
            onChange={printInputValues}
          />
        </label>

        <label htmlFor="phone">
          Phone
          <input
            type="number"
            name="phone"
            id="phone"
            onChange={printInputValues}
          />
        </label>

        <label htmlFor="city">
          City
          <input
            type="text"
            name="city"
            id="city"
            onChange={printInputValues}
          />
        </label>

        <label htmlFor="state">
          State
          <input
            type="text"
            name="state"
            id="state"
            onChange={printInputValues}
          />
        </label>

        <label htmlFor="country">
          Country
          <input
            type="text"
            name="country"
            id="country"
            onChange={printInputValues}
          />
        </label>

        <button type="submit">Submit</button>
      </form>

      {rows.length !== 0 && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>City</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Country</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, idx) => (
                <TableRow
                  key={idx}
                  sx={{ "&:last-child td": { borderBottom: 0 } }}
                >
                  <TableCell>{row[0]}</TableCell>
                  <TableCell>{row[1]}</TableCell>
                  <TableCell>{row[2]}</TableCell>
                  <TableCell>{row[3]}</TableCell>
                  <TableCell>{row[4]}</TableCell>
                  <TableCell>{row[5]}</TableCell>
                  <TableCell>{row[6]}</TableCell>
                  <TableCell>{row[7]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

export default App;
