import { Box } from '@mui/material';
import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <main>
      <Box sx={{ textAlign: 'center' }}>
        <h1>Page Not Found</h1>
        <a href='/'>Back to home</a>
      </Box>
    </main>
  );
}
