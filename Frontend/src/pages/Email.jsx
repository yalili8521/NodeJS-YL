import { useState } from 'react';
import {
  Box,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography,
  Avatar,
  Chip,
  IconButton,
  TextField,
  Button,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import DeleteIcon from '@mui/icons-material/Delete';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ReplyIcon from '@mui/icons-material/Reply';
import ForwardIcon from '@mui/icons-material/Forward';

export default function Email() {
  const [selectedEmail, setSelectedEmail] = useState(0);
  const [starred, setStarred] = useState([0, 2]);

  const folders = [
    { name: 'Inbox', icon: <InboxIcon />, count: 12 },
    { name: 'Sent', icon: <SendIcon />, count: 0 },
    { name: 'Drafts', icon: <DraftsIcon />, count: 3 },
    { name: 'Trash', icon: <DeleteIcon />, count: 5 },
  ];

  const emails = [
    {
      id: 0,
      from: 'John Doe',
      email: 'john.doe@example.com',
      subject: 'Meeting Tomorrow',
      preview: 'Hi, just wanted to confirm our meeting scheduled for tomorrow at 10 AM...',
      time: '10:30 AM',
      unread: true,
      hasAttachment: true,
    },
    {
      id: 1,
      from: 'Sarah Wilson',
      email: 'sarah.w@company.com',
      subject: 'Project Update',
      preview: 'Please find attached the latest project update and timeline...',
      time: '9:15 AM',
      unread: true,
      hasAttachment: false,
    },
    {
      id: 2,
      from: 'Mike Johnson',
      email: 'mike.j@business.com',
      subject: 'Re: Budget Approval',
      preview: 'Thank you for your prompt response. The budget has been approved...',
      time: 'Yesterday',
      unread: false,
      hasAttachment: true,
    },
    {
      id: 3,
      from: 'Emily Brown',
      email: 'emily.brown@startup.io',
      subject: 'New Feature Request',
      preview: 'We would like to request a new feature for the dashboard...',
      time: 'Yesterday',
      unread: false,
      hasAttachment: false,
    },
    {
      id: 4,
      from: 'David Lee',
      email: 'david.lee@tech.com',
      subject: 'Weekly Report',
      preview: 'Here is the weekly report for this week. Key highlights include...',
      time: '2 days ago',
      unread: false,
      hasAttachment: true,
    },
  ];

  const currentEmail = emails[selectedEmail];

  const toggleStar = (id) => {
    setStarred(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <Box sx={{ height: 'calc(100vh - 100px)' }}>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(12, 1fr)' },
        gap: 2,
        height: '100%'
      }}>
        {/* Sidebar - Folders */}
        <Box sx={{ gridColumn: { xs: 'span 1', md: 'span 2' } }}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                mb: 2,
                bgcolor: '#696CFF',
                '&:hover': { bgcolor: '#5f5ae0' },
              }}
            >
              Compose
            </Button>
            <List>
              {folders.map((folder, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton selected={index === 0}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      {folder.icon}
                    </ListItemIcon>
                    <ListItemText primary={folder.name} />
                    {folder.count > 0 && (
                      <Chip
                        label={folder.count}
                        size="small"
                        sx={{
                          bgcolor: index === 0 ? '#696CFF' : '#e7e7e7',
                          color: index === 0 ? '#fff' : '#4b465c',
                          height: 20,
                          fontSize: '0.75rem',
                        }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>

        {/* Email List */}
        <Box sx={{ gridColumn: { xs: 'span 1', md: 'span 4' } }}>
          <Paper sx={{ height: '100%', overflow: 'auto' }}>
            <Box sx={{ p: 2, borderBottom: '1px solid #e7e7e7' }}>
              <TextField
                placeholder="Search emails..."
                size="small"
                fullWidth
              />
            </Box>
            <List>
              {emails.map((email) => (
                <ListItem
                  key={email.id}
                  disablePadding
                  sx={{
                    borderBottom: '1px solid #e7e7e7',
                    bgcolor: selectedEmail === email.id ? '#f5f5f9' : 'transparent',
                  }}
                >
                  <ListItemButton onClick={() => setSelectedEmail(email.id)}>
                    <Box sx={{ display: 'flex', width: '100%', gap: 2 }}>
                      <Avatar sx={{ bgcolor: '#696CFF', width: 40, height: 40 }}>
                        {email.from.charAt(0)}
                      </Avatar>
                      <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: email.unread ? 600 : 400,
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {email.from}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {email.time}
                          </Typography>
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: email.unread ? 600 : 400,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {email.subject}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            display: 'block',
                          }}
                        >
                          {email.preview}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, mt: 0.5 }}>
                          {email.hasAttachment && (
                            <AttachFileIcon sx={{ fontSize: 16, color: '#8592A3' }} />
                          )}
                          <IconButton
                            size="small"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleStar(email.id);
                            }}
                            sx={{ p: 0 }}
                          >
                            {starred.includes(email.id) ? (
                              <StarIcon sx={{ fontSize: 16, color: '#FFB400' }} />
                            ) : (
                              <StarBorderIcon sx={{ fontSize: 16, color: '#8592A3' }} />
                            )}
                          </IconButton>
                        </Box>
                      </Box>
                    </Box>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>

        {/* Email Content */}
        <Box sx={{ gridColumn: { xs: 'span 1', md: 'span 6' } }}>
          <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ p: 3, borderBottom: '1px solid #e7e7e7' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                    {currentEmail.subject}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: '#696CFF', width: 40, height: 40 }}>
                      {currentEmail.from.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {currentEmail.from}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {currentEmail.email}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Typography variant="caption" color="text.secondary">
                  {currentEmail.time}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button startIcon={<ReplyIcon />} size="small" variant="outlined">
                  Reply
                </Button>
                <Button startIcon={<ForwardIcon />} size="small" variant="outlined">
                  Forward
                </Button>
                <Button startIcon={<DeleteIcon />} size="small" variant="outlined" color="error">
                  Delete
                </Button>
              </Box>
            </Box>
            <Box sx={{ p: 3, flexGrow: 1, overflow: 'auto' }}>
              <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap', lineHeight: 1.8 }}>
                {currentEmail.preview}
                {'\n\n'}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                {'\n\n'}
                Best regards,{'\n'}
                {currentEmail.from}
              </Typography>
              {currentEmail.hasAttachment && (
                <Box sx={{ mt: 3, p: 2, bgcolor: '#f5f5f9', borderRadius: 1 }}>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                    Attachments
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AttachFileIcon sx={{ color: '#696CFF' }} />
                    <Typography variant="body2">document.pdf</Typography>
                    <Typography variant="caption" color="text.secondary">
                      (245 KB)
                    </Typography>
                  </Box>
                </Box>
              )}
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
