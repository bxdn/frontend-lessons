import { useState } from 'react'
import Box from '@mui/material/Box';
import reactLogo from './assets/react.svg'
import { Button, Typography } from '@mui/material';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '500px' }}>
      <Box>
        <Box
          component="img"
          sx={{
            height: 200,
            width: 200
          }}
          src={reactLogo}
        />
      </Box>
      <Typography sx={{m: '15px'}} variant='h3'>Hello React!</Typography>
      <Box>
        <Button
          variant='outlined'
          onClick={() => setCount(count + 1)}
        >
          count is {count}
        </Button>
      </Box>
    </Box>
  )
}

export default App
