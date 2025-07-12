import React from 'react';
import { certificates } from '../../data/data';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

const Certification = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>My Certificates</h2>
      <div style={styles.grid}>
        {certificates.map(cert => (
          <div key={cert.id} style={styles.card} className="cert-card">
            <div style={styles.iconWrap}>
              <EmojiEventsIcon style={{ fontSize: 40, color: '#FFD700' }} />
            </div>
            <h3 style={styles.title}>{cert.title}</h3>
            <p style={styles.issuer}><b>Issuer:</b> {cert.issuer}</p>
            <p style={styles.date}><b>Date:</b> {cert.date}</p>
            <p style={styles.desc}>{cert.description}</p>
            <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer" style={styles.link}>
              View Certificate
            </a>
          </div>
        ))}
      </div>
      {/* Inline CSS for hover effect */}
      <style>
        {`
          .cert-card {
            transition: box-shadow 0.3s, transform 0.3s;
          }
          .cert-card:hover {
            box-shadow: 0 8px 24px rgba(25, 118, 210, 0.18);
            transform: translateY(-6px) scale(1.03);
            border: 1.5px solid #1976d2;
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
    padding: '2rem 1.5rem 1.5rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    border: '1.5px solid #f0f0f0',
    minHeight: '320px',
  },
  iconWrap: {
    marginBottom: '0.5rem',
    background: '#f7f7f7',
    borderRadius: '50%',
    padding: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.25rem',
    color: '#1976d2',
    fontWeight: 600,
    textAlign: 'center',
  },
  issuer: {
    margin: '0 0 0.25rem 0',
    color: '#555',
    fontSize: '1rem',
    textAlign: 'center',
  },
  date: {
    margin: '0 0 0.5rem 0',
    color: '#777',
    fontSize: '0.95rem',
    textAlign: 'center',
  },
  desc: {
    margin: '0 0 1rem 0',
    color: '#444',
    fontSize: '1rem',
    textAlign: 'center',
  },
  link: {
    marginTop: 'auto',
    color: '#fff',
    background: '#1976d2',
    textDecoration: 'none',
    fontWeight: 'bold',
    padding: '0.5rem 1.2rem',
    borderRadius: '6px',
    transition: 'background 0.2s',
    boxShadow: '0 2px 8px rgba(25, 118, 210, 0.08)',
    display: 'inline-block',
  },
};

export default Certification;