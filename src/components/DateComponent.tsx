import React, { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { Box } from '@mui/system'
import { TextField } from '@mui/material'

function DateComponent() {

    const [date, setDate] = useState(null);
  return (
        <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="date"
                    value={date}
                    onChange={(newDate)=> setDate(newDate)}
                    renderInput={(props: any)=> <TextField  {...props}/>}
                    // renderLoading={(props: any)=> <TextField {...props}/>}
                />

            </LocalizationProvider>
        </Box>
    )
}

export default DateComponent