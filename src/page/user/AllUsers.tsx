// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
// import { Order, UserData } from '../../utils/types';
// import { EnhancedTableHead, EnhancedTableToolbar, rows } from './AllUserTableHead';
// import { getComparator, stableSort } from '../../utils/tablefunction';


// export default function AllUsers() {
//   const [order, setOrder] = React.useState<Order>('asc');
//   const [orderBy, setOrderBy] = React.useState<keyof UserData>('srno');
//   const [selected, setSelected] = React.useState<readonly number[]>([]);
//   const [page, setPage] = React.useState(0);
//   const [dense, setDense] = React.useState(false);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   const handleRequestSort = (
//     _event: React.MouseEvent<unknown>,
//     property: keyof UserData,
//   ) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.checked) {
//       const newSelected = rows.map((n) => n.srno);
//       setSelected(newSelected);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (_event: React.MouseEvent<unknown>, id: number) => {
//     const selectedIndex = selected.indexOf(id);
//     let newSelected: readonly number[] = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, id);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1),
//       );
//     }
//     setSelected(newSelected);
//   };

//   const handleChangePage = (_event: unknown, newPage: number) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setDense(event.target.checked);
//   };

//   const isSelected = (id: number) => selected.indexOf(id) !== -1;

//   // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

//   const visibleRows = React.useMemo(
//     () =>
//       stableSort(rows, getComparator(order, orderBy)).slice(
//         page * rowsPerPage,
//         page * rowsPerPage + rowsPerPage,
//       ),
//     [order, orderBy, page, rowsPerPage],
//   );

//   // const [searchRows, setSearchRows] = React.useState(visibleRows);



//   function findUser(_event: any){
//     // let searchInput: any = _event.target.value;
//     // let afterSearch: any = [];

//     // visibleRows.map((row)=>{
//     //   if(row.userName.search(searchInput)>=0){
//     //     afterSearch.push(row);
//     //   }
//     // });

//     // if(afterSearch.length > 0){
//     //   setSearchRows(afterSearch);
//     // }
   
//   }

//   return (
//     <Box sx={{margin: 'auto'}}>
//       <Paper>
//         <EnhancedTableToolbar numSelected={selected.length} findUser={findUser}/>
//         <TableContainer>
//           <Table
//             // sx={{ minWidth: 750 }}
//             aria-labelledby="tableTitle"
//             size={dense ? 'small' : 'medium'}
//           >
//             <EnhancedTableHead
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               onSelectAllClick={handleSelectAllClick}
//               onRequestSort={handleRequestSort}
//               rowCount={rows.length}
//             />
//             <TableBody>
//               {visibleRows.map((row, index) => {
//                 const isItemSelected = isSelected(row.srno);
//                 const labelId = `enhanced-table-checkbox-${index}`;

//                 return (
//                   <TableRow
//                     hover
//                     onClick={(event) => handleClick(event, row.srno)}
//                     role="checkbox"
//                     aria-checked={isItemSelected}
//                     tabIndex={-1}
//                     key={row.srno}
//                     selected={isItemSelected}
//                     sx={{ cursor: 'pointer' }}
//                   >
//                     <TableCell padding="checkbox">
//                       <Checkbox
//                         color="primary"
//                         checked={isItemSelected}
//                         inputProps={{
//                           'aria-labelledby': labelId,
//                         }}
//                       />
//                     </TableCell>
//                     <TableCell
//                       component="th"
//                       id={labelId}
//                       scope="row"
//                       padding="none"
//                     >
//                       {row.srno}
//                     </TableCell>
//                     <TableCell align="right">{row.userType}</TableCell>
//                     <TableCell align="right">{row.userName}</TableCell>
//                     <TableCell align="right">{row.emailId}</TableCell>
//                     <TableCell align="right">{row.phoneNo}</TableCell>
//                     <TableCell align="right">{row.productName}</TableCell>
//                     <TableCell align="right">{row.branchName}</TableCell>
//                     <TableCell align="right">{row.lastLogin}</TableCell>
//                     <TableCell align="right">{row.createdBy}</TableCell>
//                     <TableCell align="right">{row.createdOn}</TableCell>
//                     <TableCell align="right">{row.updatedBy}</TableCell>
//                     <TableCell align="right">{row.updatedOn}</TableCell>
//                     <TableCell align="right">{row.vendorUser}</TableCell>
//                     <TableCell align="right">{row.accountBlocked}</TableCell>
//                     <TableCell align="right">{row.status}</TableCell>
//                     <TableCell align="right">{row.mobileApp}</TableCell>
//                   </TableRow>
//                 );
//               })}
//               {emptyRows > 0 && (
//                 <TableRow
//                   style={{
//                     height: (dense ? 33 : 53) * emptyRows,
//                   }}
//                 >
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//       <FormControlLabel
//         control={<Switch checked={dense} onChange={handleChangeDense} />}
//         label="Dense padding"
//       />
//     </Box>
//   );
// }



import DataTable from '../../components/DataTable'
import { UserData, UserHeadCell } from '../../utils/types';

function AllUsers() {

  const headCells: UserHeadCell[] = [
    {
      id: "srno",
      numeric: false,
      disablePadding: true,
      label: "Sr. No.",
    },
    {
      id: "userType",
      numeric: true,
      disablePadding: false,
      label: "User Type",
    },
    {
      id: "userName",
      numeric: true,
      disablePadding: false,
      label: "User Name",
    },
    {
      id: "emailId",
      numeric: true,
      disablePadding: false,
      label: "Email Id",
    },
    {
      id: "phoneNo",
      numeric: true,
      disablePadding: false,
      label: "Phone No.",
    },
    {
      id: "productName",
      numeric: true,
      disablePadding: false,
      label: "Product Name",
    },
    {
      id: "branchName",
      numeric: true,
      disablePadding: false,
      label: "Branch Name",
    },
    {
      id: "lastLogin",
      numeric: true,
      disablePadding: false,
      label: "Last Login",
    },
    {
      id: "createdBy",
      numeric: true,
      disablePadding: false,
      label: "Created By",
    },
    {
      id: "createdOn",
      numeric: true,
      disablePadding: false,
      label: "Created On",
    },
    {
      id: "updatedBy",
      numeric: true,
      disablePadding: false,
      label: "Updated By",
    },
    {
      id: "updatedOn",
      numeric: true,
      disablePadding: false,
      label: "Updated On",
    },
    {
      id: "vendorUser",
      numeric: true,
      disablePadding: false,
      label: "Vendor User",
    },
    {
      id: "accountBlocked",
      numeric: true,
      disablePadding: false,
      label: "Account Blocked",
    },
    {
      id: "status",
      numeric: true,
      disablePadding: false,
      label: "Status",
    },
    {
      id: "mobileApp",
      numeric: true,
      disablePadding: false,
      label: "Mobile App",
    },
  ];

  function createData(
    id: number,
    srno: number,
    userType: string,
    userName: string,
    emailId: string,
    phoneNo: number,
    productName: string,
    branchName: string,
    lastLogin: string,
    createdBy: string,
    createdOn: string,
    updatedBy: string,
    updatedOn: string,
    vendorUser: string,
    accountBlocked: string,
    status: string,
    mobileApp: string
  ): UserData {
    return {
      id,
      srno,
      userType,
      userName,
      emailId,
      phoneNo,
      productName,
      branchName,
      lastLogin,
      createdBy,
      createdOn,
      updatedBy,
      updatedOn,
      vendorUser,
      accountBlocked,
      status,
      mobileApp,
    };
  }

  const rows = [
    createData(
      0,
      0,
      "user type",
      "sagar",
      "email id",
      1234567890,
      "product name",
      "branch",
      "01/01/0001",
      "created by",
      "01/01/0001",
      "updated by",
      "01/01/0001",
      "vendor user",
      "Account blocked",
      "status",
      "mobile app"
    ),
    createData(
      1,
      1,
      "user type",
      "sagar",
      "email id",
      1234567890,
      "product name",
      "branch",
      "01/01/0001",
      "created by",
      "01/01/0001",
      "updated by",
      "01/01/0001",
      "vendor user",
      "Account blocked",
      "status",
      "mobile app"
    ),
    createData(
      2,
      2,
      "user type",
      "Sagar",
      "email id",
      1234567890,
      "product name",
      "branch",
      "01/01/0001",
      "created by",
      "01/01/0001",
      "updated by",
      "01/01/0001",
      "vendor user",
      "Account blocked",
      "status",
      "mobile app"
    ),
    createData(
      3,
      3,
      "user type",
      "user name 3",
      "email id",
      1234567890,
      "product name",
      "branch",
      "01/01/0001",
      "created by",
      "01/01/0001",
      "updated by",
      "01/01/0001",
      "vendor user",
      "Account blocked",
      "status",
      "mobile app"
    ),
    createData(
      4,
      4,
      "user type",
      "user name 4",
      "email id",
      1234567890,
      "product name",
      "branch",
      "01/01/0001",
      "created by",
      "01/01/0001",
      "updated by",
      "01/01/0001",
      "vendor user",
      "Account blocked",
      "status",
      "mobile app"
    ),
    createData(
      5,
      5,
      "user type",
      "user name 5",
      "email id",
      1234567890,
      "product name",
      "branch",
      "01/01/0001",
      "created by",
      "01/01/0001",
      "updated by",
      "01/01/0001",
      "vendor user",
      "Account blocked",
      "status",
      "mobile app"
    ),
    createData(
      6,
      6,
      "user type",
      "user name 6",
      "email id",
      1234567890,
      "product name",
      "branch",
      "01/01/0001",
      "created by",
      "01/01/0001",
      "updated by",
      "01/01/0001",
      "vendor user",
      "Account blocked",
      "status",
      "mobile app"
    ),
    createData(
      7,
      7,
      "user type",
      "user name 7",
      "email id",
      1234567890,
      "product name",
      "branch",
      "01/01/0001",
      "created by",
      "01/01/0001",
      "updated by",
      "01/01/0001",
      "vendor user",
      "Account blocked",
      "status",
      "mobile app"
    ),
    createData(
      8,
      8,
      "user type",
      "user name 8",
      "email id",
      1234567890,
      "product name",
      "branch",
      "01/01/0001",
      "created by",
      "01/01/0001",
      "updated by",
      "01/01/0001",
      "vendor user",
      "Account blocked",
      "status",
      "mobile app"
    ),
    createData(
      9,
      9,
      "user type",
      "user name 9",
      "email id",
      1234567890,
      "product name",
      "branch",
      "01/01/0001",
      "created by",
      "01/01/0001",
      "updated by",
      "01/01/0001",
      "vendor user",
      "Account blocked",
      "status",
      "mobile app"
    ),
  ];
  return <DataTable title="User" rows={rows} headCells={headCells} />;
}

export default AllUsers