import { Route, Router, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login y Registro */}
      <Route path='/auth/*' element={ <AuthRoutes/> }/>

      {/* Journal */}
      <Route path='/*' element={ <JournalRoutes/> }/>
    </Routes>

  )
}
