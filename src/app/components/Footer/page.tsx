import { Container, Paper, Typography, Box } from '@mui/material'
import Image from 'next/image'

function Footer() {
  return (
    <Container maxWidth={false} disableGutters sx={{ mt: '200px' }}>
      <Paper
        elevation={2}
        sx={{
          pt: 12,
          width: '100%',
          height: '260px',
          position: 'sticky',
          bottom: 0,
          bgcolor: '#f5f5f5',
        }}
      >
        <Box sx={{ flexGrow: 1, justifyContent: 'center', display: 'flex' }}>
          <div>
            <Image priority src='/logo.svg' width={50} height={50} alt='logo' />
          </div>
        </Box>
        <Box sx={{ flexGrow: 1, justifyContent: 'center', display: 'flex' }}>
          <Typography variant='caption' color='initial' sx={{ mt: 2 }}>
            Created using Next.js and Material UI. Copyright ©2025. Limited
          </Typography>
        </Box>
      </Paper>
    </Container>
  )
}

export default Footer
