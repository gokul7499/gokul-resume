import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  heading: {
    color: '#1976d2',
    paddingTop: '1.5rem',
    marginBottom: '2rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontWeight: 700,
    textAlign: 'center',
    background: 'linear-gradient(90deg, #1976d2 0%, #ff9800 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  mainContainer: {
    minHeight: '100vh',
    padding: '2rem 1rem',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  },
  cardContainer: {
    maxWidth: 380,
    margin: '2rem auto', // Increased margin for more space between cards
    borderRadius: '18px',
    boxShadow:
      '0 8px 32px 0 rgba(25, 118, 210, 0.13), 0 1.5px 8px 0 rgba(255, 152, 0, 0.13)',
    background: '#fff',
    transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s',
    border: '1.5px solid #f0f0f0',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      transform: 'scale(1.05) translateY(-10px)',
      boxShadow: '0 16px 40px 0 rgba(25, 118, 210, 0.22), 0 3px 16px 0 rgba(255, 152, 0, 0.18)',
      border: '2px solid #1976d2',
    },
    // Decorative top bar
    '&::before': {
      content: '""',
      display: 'block',
      height: '5px',
      width: '100%',
      background: 'linear-gradient(90deg, #1976d2 0%, #ff9800 100%)',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  },
  projectName: {
    color: '#1976d2',
    fontSize: '22px',
    fontWeight: 600,
    letterSpacing: '1px',
    marginBottom: '0.5rem',
    textAlign: 'center',
  },
  language: {
    background: 'linear-gradient(90deg, #e3f2fd 0%, #fffde7 100%)',
    margin: '1.5rem auto',
    borderRadius: '0.75rem',
    padding: '1.5rem',
    boxShadow: '0 2px 8px rgba(25, 118, 210, 0.08)',
  },
  languageView: {
    display: 'flex',
    color: '#ff9800',
    alignItems: 'center',
    fontWeight: 500,
    fontSize: '1.1rem',
    marginBottom: '0.75rem',
    letterSpacing: '0.5px',
  },
  logo: {
    marginRight: '14px',
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    background: '#fff',
    boxShadow: '0 1px 4px rgba(25, 118, 210, 0.10)',
    padding: '4px',
    objectFit: 'contain',
  },
});