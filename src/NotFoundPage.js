import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';

export function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className='page-notfound'>
      <h1 className='oops'>Oops!</h1>
      <h4 className='sec-page'>404 - PAGE NOT FOUND</h4>
      <p className='page'>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
      <Button variant="contained" startIcon={<HomeIcon />}
        onClick={() => navigate('/')}
      >GO TO HOMEPAGE</Button>
    </div>
  );
}
