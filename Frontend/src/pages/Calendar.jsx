import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  IconButton,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddIcon from '@mui/icons-material/Add';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 10, 1)); // November 2025
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 10, 15));
  const [filters, setFilters] = useState({
    viewAll: true,
    personal: true,
    business: true,
    family: true,
    holiday: true,
    etc: true,
  });

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayNamesShort = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const events = [
    { id: 1, date: 15, title: '7:34• Design Review', color: '#9155FD', category: 'business' },
    { id: 2, date: 16, title: '7:34• Design Review', color: '#9155FD', category: 'business' },
    { id: 3, date: 17, title: 'Dart Game?', color: '#16B1FF', category: 'etc' },
    { id: 4, date: 17, title: 'Dinner', color: '#FFB400', category: 'family' },
    { id: 5, date: 19, title: 'Doctor\'s Appointment', color: '#FF4C51', category: 'personal' },
    { id: 6, date: 19, title: 'Meeting With Client', color: '#9155FD', category: 'business' },
    { id: 7, date: 21, title: 'Family Trip', color: '#56CA00', category: 'family' },
    { id: 8, date: 1, month: 11, title: 'Monthly Meeting', color: '#9155FD', category: 'business' },
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    const prevMonthLastDay = new Date(year, month, 0).getDate();

    const days = [];

    // Add days from previous month
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({ day: prevMonthLastDay - i, isCurrentMonth: false });
    }

    // Add all days in current month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({ day, isCurrentMonth: true });
    }

    // Add days from next month to complete the grid
    const remainingCells = 42 - days.length; // 6 weeks * 7 days
    for (let day = 1; day <= remainingCells; day++) {
      days.push({ day, isCurrentMonth: false });
    }

    return days;
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const isToday = (dayObj) => {
    const today = new Date();
    return dayObj.day === 15 && // Highlighting 15th as shown in screenshot
           dayObj.isCurrentMonth &&
           currentDate.getMonth() === 10 &&
           currentDate.getFullYear() === 2025;
  };

  const isSelected = (dayObj) => {
    return dayObj.day === selectedDate.getDate() &&
           dayObj.isCurrentMonth &&
           currentDate.getMonth() === selectedDate.getMonth() &&
           currentDate.getFullYear() === selectedDate.getFullYear();
  };

  const getEventsForDay = (dayObj) => {
    if (!dayObj.isCurrentMonth) return [];
    return events.filter(event =>
      event.date === dayObj.day &&
      (!event.month || event.month === currentDate.getMonth())
    );
  };

  const handleFilterChange = (filterName) => {
    setFilters(prev => ({ ...prev, [filterName]: !prev[filterName] }));
  };

  const days = getDaysInMonth(currentDate);

  return (
    <Box>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '280px 1fr' },
        gap: 3
      }}>
        {/* Sidebar */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Add Event Button */}
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            fullWidth
            sx={{
              bgcolor: '#696CFF',
              '&:hover': { bgcolor: '#5f5ae0' },
              py: 1.5,
              textTransform: 'none',
              fontSize: '0.9375rem',
              fontWeight: 500,
            }}
          >
            ADD EVENT
          </Button>

          {/* Small Calendar */}
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <IconButton size="small" onClick={previousMonth}>
                <ChevronLeftIcon fontSize="small" />
              </IconButton>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </Typography>
              <IconButton size="small" onClick={nextMonth}>
                <ChevronRightIcon fontSize="small" />
              </IconButton>
            </Box>

            {/* Small calendar grid */}
            <Box>
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', mb: 0.5 }}>
                {dayNamesShort.map((day) => (
                  <Box
                    key={day}
                    sx={{
                      textAlign: 'center',
                      py: 0.5,
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      color: 'text.secondary',
                    }}
                  >
                    {day}
                  </Box>
                ))}
              </Box>
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 0.25 }}>
                {days.slice(0, 35).map((dayObj, index) => (
                  <Box
                    key={index}
                    onClick={() => dayObj.isCurrentMonth && setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), dayObj.day))}
                    sx={{
                      aspectRatio: '1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8125rem',
                      fontWeight: 500,
                      cursor: dayObj.isCurrentMonth ? 'pointer' : 'default',
                      color: dayObj.isCurrentMonth ? 'text.primary' : 'text.disabled',
                      bgcolor: isToday(dayObj) ? '#696CFF' : isSelected(dayObj) ? '#696CFF20' : 'transparent',
                      color: isToday(dayObj) ? '#fff' : dayObj.isCurrentMonth ? 'text.primary' : 'text.disabled',
                      borderRadius: 1,
                      '&:hover': {
                        bgcolor: dayObj.isCurrentMonth ? (isToday(dayObj) ? '#696CFF' : '#F5F5F5') : 'transparent',
                      },
                    }}
                  >
                    {dayObj.day}
                  </Box>
                ))}
              </Box>
            </Box>
          </Paper>

          {/* Filter */}
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5, textTransform: 'uppercase', fontSize: '0.75rem', color: 'text.secondary' }}>
              FILTER
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.viewAll}
                    onChange={() => handleFilterChange('viewAll')}
                    size="small"
                    sx={{ color: '#8A8D93', '&.Mui-checked': { color: '#8A8D93' } }}
                  />
                }
                label={<Typography variant="body2" sx={{ fontSize: '0.875rem' }}>View All</Typography>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.personal}
                    onChange={() => handleFilterChange('personal')}
                    size="small"
                    sx={{ color: '#FF4C51', '&.Mui-checked': { color: '#FF4C51' } }}
                  />
                }
                label={<Typography variant="body2" sx={{ fontSize: '0.875rem' }}>Personal</Typography>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.business}
                    onChange={() => handleFilterChange('business')}
                    size="small"
                    sx={{ color: '#696CFF', '&.Mui-checked': { color: '#696CFF' } }}
                  />
                }
                label={<Typography variant="body2" sx={{ fontSize: '0.875rem' }}>Business</Typography>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.family}
                    onChange={() => handleFilterChange('family')}
                    size="small"
                    sx={{ color: '#FFB400', '&.Mui-checked': { color: '#FFB400' } }}
                  />
                }
                label={<Typography variant="body2" sx={{ fontSize: '0.875rem' }}>Family</Typography>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.holiday}
                    onChange={() => handleFilterChange('holiday')}
                    size="small"
                    sx={{ color: '#56CA00', '&.Mui-checked': { color: '#56CA00' } }}
                  />
                }
                label={<Typography variant="body2" sx={{ fontSize: '0.875rem' }}>Holiday</Typography>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.etc}
                    onChange={() => handleFilterChange('etc')}
                    size="small"
                    sx={{ color: '#16B1FF', '&.Mui-checked': { color: '#16B1FF' } }}
                  />
                }
                label={<Typography variant="body2" sx={{ fontSize: '0.875rem' }}>ETC</Typography>}
              />
            </Box>
          </Paper>
        </Box>

        {/* Main Calendar */}
        <Paper sx={{ p: 3 }}>
          {/* Calendar Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton onClick={previousMonth}>
                <ChevronLeftIcon />
              </IconButton>
              <IconButton onClick={nextMonth}>
                <ChevronRightIcon />
              </IconButton>
              <Typography variant="h5" sx={{ fontWeight: 600, ml: 1 }}>
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button
                variant="contained"
                size="small"
                sx={{
                  bgcolor: '#696CFF',
                  '&:hover': { bgcolor: '#5f5ae0' },
                  textTransform: 'none',
                  px: 2,
                }}
              >
                Month
              </Button>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  borderColor: '#E0E0E0',
                  color: 'text.primary',
                  textTransform: 'none',
                  px: 2,
                  '&:hover': { borderColor: '#C0C0C0', bgcolor: '#F5F5F5' },
                }}
              >
                Week
              </Button>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  borderColor: '#E0E0E0',
                  color: 'text.primary',
                  textTransform: 'none',
                  px: 2,
                  '&:hover': { borderColor: '#C0C0C0', bgcolor: '#F5F5F5' },
                }}
              >
                Day
              </Button>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  borderColor: '#E0E0E0',
                  color: 'text.primary',
                  textTransform: 'none',
                  px: 2,
                  '&:hover': { borderColor: '#C0C0C0', bgcolor: '#F5F5F5' },
                }}
              >
                List
              </Button>
            </Box>
          </Box>

          {/* Day Names */}
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', mb: 1, borderBottom: '1px solid #E0E0E0', pb: 1 }}>
            {dayNames.map((day) => (
              <Box
                key={day}
                sx={{
                  textAlign: 'center',
                  py: 1,
                  fontWeight: 600,
                  color: '#8A8D93',
                  fontSize: '0.875rem',
                }}
              >
                {day}
              </Box>
            ))}
          </Box>

          {/* Calendar Grid */}
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 0 }}>
            {days.map((dayObj, index) => {
              const dayEvents = getEventsForDay(dayObj);
              const visibleEvents = dayEvents.slice(0, 2);
              const moreCount = dayEvents.length - 2;

              return (
                <Box
                  key={index}
                  sx={{
                    minHeight: 120,
                    p: 1,
                    borderRight: '1px solid #E0E0E0',
                    borderBottom: '1px solid #E0E0E0',
                    cursor: dayObj.isCurrentMonth ? 'pointer' : 'default',
                    bgcolor: dayObj.isCurrentMonth ? '#fff' : '#FAFAFA',
                    '&:hover': {
                      bgcolor: dayObj.isCurrentMonth ? '#F5F5F9' : '#FAFAFA',
                    },
                  }}
                  onClick={() => dayObj.isCurrentMonth && setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), dayObj.day))}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: isToday(dayObj) ? 700 : 500,
                      color: dayObj.isCurrentMonth ? (isToday(dayObj) ? '#696CFF' : '#4B465C') : '#A8AAAE',
                      fontSize: '0.875rem',
                      mb: 0.5,
                    }}
                  >
                    {dayObj.day}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                    {visibleEvents.map((event) => (
                      <Box
                        key={event.id}
                        sx={{
                          bgcolor: event.color + '20',
                          color: event.color,
                          px: 1,
                          py: 0.5,
                          borderRadius: 0.5,
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          borderLeft: `3px solid ${event.color}`,
                        }}
                      >
                        {event.title}
                      </Box>
                    ))}
                    {moreCount > 0 && (
                      <Typography
                        variant="caption"
                        sx={{
                          fontSize: '0.75rem',
                          color: '#8A8D93',
                          pl: 1,
                          cursor: 'pointer',
                          '&:hover': { color: '#696CFF' },
                        }}
                      >
                        +{moreCount} more
                      </Typography>
                    )}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
