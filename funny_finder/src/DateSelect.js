import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export default function DateSelect({ currentDate, setCurrentDate }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker 
        label="Change Date" 
        format="YYYY-MM-DD"
        inputFormat="YYYY-MM-DD"
        value={dayjs(currentDate)}
        onChange={(newValue) => setCurrentDate(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}