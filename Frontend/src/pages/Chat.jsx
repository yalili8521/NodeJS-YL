import { useState } from 'react';
import {
  Box,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Avatar,
  TextField,
  IconButton,
  Badge,
  InputAdornment,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SearchIcon from '@mui/icons-material/Search';

export default function Chat() {
  const [selectedChat, setSelectedChat] = useState(0);
  const [message, setMessage] = useState('');

  const contacts = [
    {
      id: 0,
      name: 'John Doe',
      lastMessage: 'See you tomorrow!',
      time: '10:30 AM',
      unread: 2,
      online: true,
    },
    {
      id: 1,
      name: 'Sarah Wilson',
      lastMessage: 'Thanks for the update',
      time: '9:15 AM',
      unread: 0,
      online: true,
    },
    {
      id: 2,
      name: 'Mike Johnson',
      lastMessage: 'That sounds great',
      time: 'Yesterday',
      unread: 0,
      online: false,
    },
    {
      id: 3,
      name: 'Emily Brown',
      lastMessage: 'Let me check and get back',
      time: 'Yesterday',
      unread: 1,
      online: false,
    },
    {
      id: 4,
      name: 'David Lee',
      lastMessage: 'Perfect, thank you!',
      time: '2 days ago',
      unread: 0,
      online: true,
    },
  ];

  const chatMessages = [
    {
      id: 0,
      sender: 'John Doe',
      message: 'Hey! How are you?',
      time: '10:15 AM',
      sent: false,
    },
    {
      id: 1,
      sender: 'Me',
      message: 'Hi! I\'m doing great, thanks! How about you?',
      time: '10:16 AM',
      sent: true,
    },
    {
      id: 2,
      sender: 'John Doe',
      message: 'I\'m good too! Are we still meeting tomorrow at 10 AM?',
      time: '10:18 AM',
      sent: false,
    },
    {
      id: 3,
      sender: 'Me',
      message: 'Yes, absolutely! Looking forward to it.',
      time: '10:20 AM',
      sent: true,
    },
    {
      id: 4,
      sender: 'John Doe',
      message: 'Great! I\'ll prepare the presentation.',
      time: '10:25 AM',
      sent: false,
    },
    {
      id: 5,
      sender: 'Me',
      message: 'Perfect! I\'ll bring the project files.',
      time: '10:28 AM',
      sent: true,
    },
    {
      id: 6,
      sender: 'John Doe',
      message: 'See you tomorrow!',
      time: '10:30 AM',
      sent: false,
    },
  ];

  const currentContact = contacts[selectedChat];

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <Box sx={{ height: 'calc(100vh - 100px)' }}>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(12, 1fr)' },
        gap: 2,
        height: '100%'
      }}>
        {/* Contacts List */}
        <Box sx={{ gridColumn: { xs: 'span 1', md: 'span 4' } }}>
          <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ p: 2, borderBottom: '1px solid #e7e7e7' }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Chats
              </Typography>
              <TextField
                placeholder="Search contacts..."
                size="small"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <List sx={{ overflow: 'auto', flexGrow: 1 }}>
              {contacts.map((contact) => (
                <ListItem
                  key={contact.id}
                  disablePadding
                  sx={{
                    borderBottom: '1px solid #e7e7e7',
                    bgcolor: selectedChat === contact.id ? '#f5f5f9' : 'transparent',
                  }}
                >
                  <ListItemButton onClick={() => setSelectedChat(contact.id)}>
                    <Box sx={{ display: 'flex', width: '100%', gap: 2 }}>
                      <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                        sx={{
                          '& .MuiBadge-badge': {
                            bgcolor: contact.online ? '#56CA00' : '#8592A3',
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            border: '2px solid white',
                          },
                        }}
                      >
                        <Avatar sx={{ bgcolor: '#696CFF', width: 48, height: 48 }}>
                          {contact.name.charAt(0)}
                        </Avatar>
                      </Badge>
                      <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                          <Typography
                            variant="body1"
                            sx={{
                              fontWeight: contact.unread > 0 ? 600 : 400,
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {contact.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {contact.time}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                              flexGrow: 1,
                            }}
                          >
                            {contact.lastMessage}
                          </Typography>
                          {contact.unread > 0 && (
                            <Box
                              sx={{
                                bgcolor: '#696CFF',
                                color: '#fff',
                                borderRadius: '50%',
                                width: 20,
                                height: 20,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                ml: 1,
                              }}
                            >
                              {contact.unread}
                            </Box>
                          )}
                        </Box>
                      </Box>
                    </Box>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>

        {/* Chat Messages */}
        <Box sx={{ gridColumn: { xs: 'span 1', md: 'span 8' } }}>
          <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Chat Header */}
            <Box sx={{ p: 2, borderBottom: '1px solid #e7e7e7', display: 'flex', alignItems: 'center', gap: 2 }}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
                sx={{
                  '& .MuiBadge-badge': {
                    bgcolor: currentContact.online ? '#56CA00' : '#8592A3',
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    border: '2px solid white',
                  },
                }}
              >
                <Avatar sx={{ bgcolor: '#696CFF', width: 48, height: 48 }}>
                  {currentContact.name.charAt(0)}
                </Avatar>
              </Badge>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {currentContact.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {currentContact.online ? 'Online' : 'Offline'}
                </Typography>
              </Box>
            </Box>

            {/* Messages */}
            <Box sx={{ flexGrow: 1, overflow: 'auto', p: 3, bgcolor: '#f5f5f9' }}>
              {chatMessages.map((msg) => (
                <Box
                  key={msg.id}
                  sx={{
                    display: 'flex',
                    justifyContent: msg.sent ? 'flex-end' : 'flex-start',
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: '70%',
                      bgcolor: msg.sent ? '#696CFF' : '#fff',
                      color: msg.sent ? '#fff' : '#4b465c',
                      p: 2,
                      borderRadius: 2,
                      boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                    }}
                  >
                    <Typography variant="body1">{msg.message}</Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        display: 'block',
                        mt: 0.5,
                        color: msg.sent ? 'rgba(255,255,255,0.7)' : '#8592A3',
                        textAlign: 'right',
                      }}
                    >
                      {msg.time}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Message Input */}
            <Box sx={{ p: 2, borderTop: '1px solid #e7e7e7', bgcolor: '#fff' }}>
              <TextField
                fullWidth
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton size="small">
                        <EmojiEmotionsIcon />
                      </IconButton>
                      <IconButton size="small">
                        <AttachFileIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        color="primary"
                        onClick={handleSendMessage}
                        disabled={!message.trim()}
                      >
                        <SendIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
