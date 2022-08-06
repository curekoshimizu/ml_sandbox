import { useState } from 'react';
import { Box, Button } from '@mui/material';

const App: React.VFC = () => {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Button
        variant="contained"
        onClick={() => setCount(count + 1)}
      >
        {count}
      </Button>
    </Box>
  );
};

export default App;
