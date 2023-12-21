import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { MandateData, MandateHeadCell, Order } from '../utils/types';



  
  function createData(
    srno : number,
    mandateStatus: string,
    UMRN: number,
    mandateId: number,
    reference1: number,
    customerName: string,
    customerAccountNo: number,
    amount: number,
    amountInWord: string,
    IFSC_MICR: string,
    customerBank: string,
    sponsorBank: string,
    dateOnMandate: string,
    formDate: string,
    debitTo: string,
    frequency: string,
    mandateType: string,
    rejectResion: string,
    createOn: string,
    createBy: string,
    lastActivityOn: string,
    product: string,
    branch: string,
    categoryCode: string,
    utilityCode: string,
  ): MandateData {
    return {

    srno,
    mandateStatus,
    UMRN,
    mandateId,
    reference1,
    customerName,
    customerAccountNo,
    amount,
    amountInWord,
    IFSC_MICR,
    customerBank,
    sponsorBank,
    dateOnMandate,
    formDate,
    debitTo,
    frequency,
    mandateType,
    rejectResion,
    createOn,
    createBy,
    lastActivityOn,
    product,
    branch,
    categoryCode,
    utilityCode
    };
  }
  
  export const rows = [
    createData(1, 'status', 12345, 1, 12345, 'customer', 12345, 100, 'One hundred', '12333IFSC', 'bank', 'sponsor bank', '20/02/2005', '20/02/2005', 'Saving Account', 'frequency', 'mandate type', 'reject resion', '20/02/2005', 'created by', '20/02/2005', 'product', 'branch', 'category code', 'utility code'),
    createData(2, 'status', 12345, 2, 12345, 'customer', 12345, 100, 'One hundred', '12333IFSC', 'bank', 'sponsor bank', '20/02/2005', '20/02/2005', 'Saving Account', 'frequency', 'mandate type', 'reject resion', '20/02/2005', 'created by', '20/02/2005', 'product', 'branch', 'category code', 'utility code'),
    createData(3, 'status', 12345, 3, 12345, 'customer', 12345, 100, 'One hundred', '12333IFSC', 'bank', 'sponsor bank', '20/02/2005', '20/02/2005', 'Saving Account', 'frequency', 'mandate type', 'reject resion', '20/02/2005', 'created by', '20/02/2005', 'product', 'branch', 'category code', 'utility code'),
    createData(4, 'status', 12345, 4, 12345, 'customer', 12345, 100, 'One hundred', '12333IFSC', 'bank', 'sponsor bank', '20/02/2005', '20/02/2005', 'Saving Account', 'frequency', 'mandate type', 'reject resion', '20/02/2005', 'created by', '20/02/2005', 'product', 'branch', 'category code', 'utility code'),
    createData(5, 'status', 12345, 5, 12345, 'customer', 12345, 100, 'One hundred', '12333IFSC', 'bank', 'sponsor bank', '20/02/2005', '20/02/2005', 'Saving Account', 'frequency', 'mandate type', 'reject resion', '20/02/2005', 'created by', '20/02/2005', 'product', 'branch', 'category code', 'utility code'),
    createData(6, 'status', 12345, 6, 12345, 'customer', 12345, 100, 'One hundred', '12333IFSC', 'bank', 'sponsor bank', '20/02/2005', '20/02/2005', 'Saving Account', 'frequency', 'mandate type', 'reject resion', '20/02/2005', 'created by', '20/02/2005', 'product', 'branch', 'category code', 'utility code'),

  ];
  

  
  const headCells: readonly MandateHeadCell[] = [
    {
      id: 'srno',
      numeric: false,
      disablePadding: true,
      label: 'Sr. No.',
    },
    {
      id: 'mandateStatus',
      numeric: true,
      disablePadding: false,
      label: 'Mandate Status',
    },
    {
      id: 'UMRN',
      numeric: true,
      disablePadding: false,
      label: 'UMRN',
    },
    {
      id: 'mandateId',
      numeric: true,
      disablePadding: false,
      label: 'Mandate ID',
    },
    {
      id: 'reference1',
      numeric: true,
      disablePadding: false,
      label: 'Reference 1',
    },
    {
      id: 'customerName',
      numeric: true,
      disablePadding: false,
      label: 'Customer Name',
    },
    {
      id: 'customerAccountNo',
      numeric: true,
      disablePadding: false,
      label: 'Customer Account No.',
    },
    {
      id: 'amount',
      numeric: true,
      disablePadding: false,
      label: 'Amount',
    },
    {
      id: 'amountInWord',
      numeric: true,
      disablePadding: false,
      label: 'Amount in words',
    },
    {
      id: 'IFSC_MICR',
      numeric: true,
      disablePadding: false,
      label: 'IFSC/MICR',
    },
    {
      id: 'customerBank',
      numeric: true,
      disablePadding: false,
      label: 'Customer Bank',
    },
    {
      id: 'sponsorBank',
      numeric: true,
      disablePadding: false,
      label: 'Sponsor Bank',
    },
    {
      id: 'dateOnMandate',
      numeric: true,
      disablePadding: false,
      label: 'Date on Mandate',
    },
    {
      id: 'formDate',
      numeric: true,
      disablePadding: false,
      label: 'Form Date',
    },
    {
      id: 'debitTo',
      numeric: true,
      disablePadding: false,
      label: 'Debit to',
    },
    {
      id: 'frequency',
      numeric: true,
      disablePadding: false,
      label: 'Frequency',
    },
    {
      id: 'mandateType',
      numeric: true,
      disablePadding: false,
      label: 'Mandate Type',
    },
    {
      id: 'rejectResion',
      numeric: true,
      disablePadding: false,
      label: 'Reject Reason',
    },
    {
      id: 'createOn',
      numeric: true,
      disablePadding: false,
      label: 'Create on',
    },
    {
      id: 'createBy',
      numeric: true,
      disablePadding: false,
      label: 'Create by',
    },
    {
      id: 'lastActivityOn',
      numeric: true,
      disablePadding: false,
      label: 'Last Activity on',
    },
    {
      id: 'product',
      numeric: true,
      disablePadding: false,
      label: 'Product',
    },
    {
      id: 'branch',
      numeric: true,
      disablePadding: false,
      label: 'Branch',
    },
    {
      id: 'categoryCode',
      numeric: true,
      disablePadding: false,
      label: 'Category Code',
    },
    {
      id: 'utilityCode',
      numeric: true,
      disablePadding: false,
      label: 'Utility Code',
    },
  ];
  
  interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof MandateData) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
  }
  
 export function EnhancedTableHead(props: EnhancedTableProps) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
      props;
    const createSortHandler =
      (property: keyof MandateData) => (event: React.MouseEvent<unknown>) => {
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
            Mandates
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


