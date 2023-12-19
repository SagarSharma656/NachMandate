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
import { Order } from '../utils/types';


export interface Data {
    id: number;
    status: string;
    carbs: number;
    fat: number;
    name: string;
    protein: number;
  }
  
  function createData(
    id: number,
    name: string,
    status: string,
    fat: number,
    carbs: number,
    protein: number,
  ): Data {
    return {
      id,
      name,
      status,
      fat,
      carbs,
      protein,
    };
  }
  
  export const rows = [
    createData(1, 'Cupcake', "305", 3.7, 67, 4.3),
    createData(2, 'Donut', "452", 25.0, 51, 4.9),
    createData(3, 'Eclair', "262", 16.0, 24, 6.0),
    createData(4, 'Frozen yoghurt', "159", 6.0, 24, 4.0),
    createData(5, 'Gingerbread', "356", 16.0, 49, 3.9),
    createData(6, 'Honeycomb', "408", 3.2, 87, 6.5),
    createData(7, 'Ice cream sandwich', "237", 9.0, 37, 4.3),
    createData(8, 'Jelly Bean', "375", 0.0, 94, 0.0),
    createData(9, 'KitKat', "518", 26.0, 65, 7.0),
    createData(10, 'Lollipop', "392", 0.2, 98, 0.0),
    createData(11, 'Marshmallow', "318", 0, 81, 2.0),
    createData(12, 'Nougat', "360", 19.0, 9, 37.0),
    createData(13, 'Oreo', "437", 18.0, 63, 4.0),
  ];
  //globle
  
  interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
  }
  
  const headCells: readonly HeadCell[] = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Sr. No.',
    },
    {
      id: 'status',
      numeric: true,
      disablePadding: false,
      label: 'Mandate Status',
    },
    {
      id: 'fat',
      numeric: true,
      disablePadding: false,
      label: 'UMRN',
    },
    {
      id: 'carbs',
      numeric: true,
      disablePadding: false,
      label: 'Mandate ID',
    },
    // {
    //   id: 'protein',
    //   numeric: true,
    //   disablePadding: false,
    //   label: 'Reference 1',
    // },
    // {
    //   id: 'protein',
    //   numeric: true,
    //   disablePadding: false,
    //   label: 'Customer Name',
    // },
    // {
    //   id: 'protein',
    //   numeric: true,
    //   disablePadding: false,
    //   label: 'Customer Account No.',
    // },
    // {
    //   id: 'protein',
    //   numeric: true,
    //   disablePadding: false,
    //   label: 'Amount',
    // },
    // {
    //   id: 'protein',
    //   numeric: true,
    //   disablePadding: false,
    //   label: 'Amount in words',
    // },
    // {
    //   id: 'protein',
    //   numeric: true,
    //   disablePadding: false,
    //   label: 'IFSC/MICR',
    // },
    // {
    //   id: 'protein',
    //   numeric: true,
    //   disablePadding: false,
    //   label: 'Customer Bank',
    // },
    // {
    //   id: 'protein',
    //   numeric: true,
    //   disablePadding: false,
    //   label: 'Sponsor Bank',
    // },
    // {
    //   id: 'protein',
    //   numeric: true,
    //   disablePadding: false,
    //   label: 'Date on Mandate',
    // },
    // {
    //   id: 'protein',
    //   numeric: true,
    //   disablePadding: false,
    //   label: 'Form Date',
    // },
    // {
    //   id: 'protein',
    //   numeric: true,
    //   disablePadding: false,
    //   label: 'Debit to',
    // },
    // {
    //   id: 'protein',
    //   numeric: true,
    //   disablePadding: false,
    //   label: 'Frequency',
    // },
    // {
    //   id: 'protein',
    //   numeric: true,
    //   disablePadding: false,
    //   label: 'Mandate Type',
    // },
    // {
    //   id: 'protein',
    //   numeric: true,
    //   disablePadding: false,
    //   label: 'Reject Reason',
    // },
    // {
    //   id: 'protein',
    //   numeric: true,
    //   disablePadding: false,
    //   label: 'Create on',
    // },
    // {
    //   id: 'protein',
    //   numeric: true,
    //   disablePadding: false,
    //   label: 'Create by',
    // },
    // {
    //   id: 'protein',
    //   numeric: true,
    //   disablePadding: false,
    //   label: 'Last Activity on',
    // },
    // {
    //   id: 'protein',
    //   numeric: true,
    //   disablePadding: false,
    //   label: 'Product',
    // },
    // {
    //   id: 'protein',
    //   numeric: true,
    //   disablePadding: false,
    //   label: 'Branch',
    // },
    // {
    //   id: 'protein',
    //   numeric: true,
    //   disablePadding: false,
    //   label: 'Category Code',
    // },
    // {
    //   id: 'protein',
    //   numeric: true,
    //   disablePadding: false,
    //   label: 'Utility Code',
    // },
  ];
  
  interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
  }
  
 export function EnhancedTableHead(props: EnhancedTableProps) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
      props;
    const createSortHandler =
      (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
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