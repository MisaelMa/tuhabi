import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Copyright from '../components/Copyright';
import Link from '../components/Link';
import ProTip from '../components/ProTip';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
