import * as React from 'react';
import { alpha } from '@mui/material/styles';
import TableHead from "@mui/material/TableHead";
import { Order, UserData, UserHeadCell } from "../../utils/types";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { visuallyHidden } from '@mui/utils';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';




function createData(
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
    mobileApp: string,
  ): UserData {
    return {
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


  

export const rows = [
    createData(1, 'user type', 'user name 1', 'email id', 1234567890, 'product name', 'branch', '01/01/0001', 'created by', '01/01/0001', 'updated by', '01/01/0001', 'vendor user', 'Account blocked', 'status', 'mobile app'),
    createData(2, 'user type', 'user name 2', 'email id', 1234567890, 'product name', 'branch', '01/01/0001', 'created by', '01/01/0001', 'updated by', '01/01/0001', 'vendor user', 'Account blocked', 'status', 'mobile app'),
    createData(3, 'user type', 'user name 3', 'email id', 1234567890, 'product name', 'branch', '01/01/0001', 'created by', '01/01/0001', 'updated by', '01/01/0001', 'vendor user', 'Account blocked', 'status', 'mobile app'),
    createData(4, 'user type', 'user name 4', 'email id', 1234567890, 'product name', 'branch', '01/01/0001', 'created by', '01/01/0001', 'updated by', '01/01/0001', 'vendor user', 'Account blocked', 'status', 'mobile app'),
    createData(5, 'user type', 'user name 5', 'email id', 1234567890, 'product name', 'branch', '01/01/0001', 'created by', '01/01/0001', 'updated by', '01/01/0001', 'vendor user', 'Account blocked', 'status', 'mobile app'),
    createData(6, 'user type', 'user name 6', 'email id', 1234567890, 'product name', 'branch', '01/01/0001', 'created by', '01/01/0001', 'updated by', '01/01/0001', 'vendor user', 'Account blocked', 'status', 'mobile app'),
    createData(7, 'user type', 'user name 7', 'email id', 1234567890, 'product name', 'branch', '01/01/0001', 'created by', '01/01/0001', 'updated by', '01/01/0001', 'vendor user', 'Account blocked', 'status', 'mobile app'),
    createData(8, 'user type', 'user name 8', 'email id', 1234567890, 'product name', 'branch', '01/01/0001', 'created by', '01/01/0001', 'updated by', '01/01/0001', 'vendor user', 'Account blocked', 'status', 'mobile app'),
    createData(9, 'user type', 'user name 9', 'email id', 1234567890, 'product name', 'branch', '01/01/0001', 'created by', '01/01/0001', 'updated by', '01/01/0001', 'vendor user', 'Account blocked', 'status', 'mobile app'),
  ];
  

  
export const headCells: readonly UserHeadCell[] = [
    {
      id: 'srno',
      numeric: false,
      disablePadding: true,
      label: 'Sr. No.',
    },
    {
      id: 'userType',
      numeric: true,
      disablePadding: false,
      label: 'User Type',
    },
    {
      id: 'userName',
      numeric: true,
      disablePadding: false,
      label: 'User Name',
    },
    {
      id: 'emailId',
      numeric: true,
      disablePadding: false,
      label: 'Email Id',
    },
    {
      id: 'phoneNo',
      numeric: true,
      disablePadding: false,
      label: 'Phone No.',
    },
    {
      id: 'productName',
      numeric: true,
      disablePadding: false,
      label: 'Product Name',
    },
    {
      id: 'branchName',
      numeric: true,
      disablePadding: false,
      label: 'Branch Name',
    },
    {
      id: 'lastLogin',
      numeric: true,
      disablePadding: false,
      label: 'Last Login',
    },
    {
      id: 'createdBy',
      numeric: true,
      disablePadding: false,
      label: 'Created By',
    },
    {
      id: 'createdOn',
      numeric: true,
      disablePadding: false,
      label: 'Created On',
    },
    {
      id: 'updatedBy',
      numeric: true,
      disablePadding: false,
      label: 'Updated By',
    },
    {
      id: 'updatedOn',
      numeric: true,
      disablePadding: false,
      label: 'Updated On',
    },
    {
      id: 'vendorUser',
      numeric: true,
      disablePadding: false,
      label: 'Vendor User',
    },
    {
      id: 'accountBlocked',
      numeric: true,
      disablePadding: false,
      label: 'Account Blocked',
    },
    {
      id: 'status',
      numeric: true,
      disablePadding: false,
      label: 'Status',
    },
    {
      id: 'mobileApp',
      numeric: true,
      disablePadding: false,
      label: 'Mobile App',
    },
  ];


  interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof UserData) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
  }

  export function EnhancedTableHead(props: EnhancedTableProps) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
      props;
    const createSortHandler =
      (property: keyof UserData) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
      };
  
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all desserts',
              }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  



  
interface EnhancedTableToolbarProps {
    numSelected: number;
  }
  
  export function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
    const { numSelected } = props;
  
    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Nutrition
          </Typography>
        )}
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  }
  