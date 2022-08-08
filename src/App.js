import { Routes, Route, useNavigate } from 'react-router-dom';
import  { Suspense } from 'react';

import { AuthProvider } from './context/AuthContext';
import { CardProvider } from './context/CardContext';
import PrivateRoute from './components/common/PrivateParts';

import { ExplorePage } from './components/pages/ExplorePage';
import { HomePage } from './components/pages/HomePage';
import { DetailsPage } from './components/pages/DetailsPage';
import { CreatePage } from './components/pages/CreatePage';
import { AuthorPage } from './components/pages/AuthorPage';
import { RegisterPage } from './components/pages/RegisterPage';
import { LoginPage } from './components/pages/LoginPage';
import Logout from './components/pages/Logout';

function App() {
  
  return (
    <AuthProvider>
      <CardProvider>
        <Routes>
          {/* <Route path="/" exact element={<HomePage card={cards}/>} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />


          <Route path="/create" element={(
            <PrivateRoute>
              <CreatePage />
            </PrivateRoute>
            )} />
          {/* <Route path="/explore" element={<ExplorePage card={cards}/>} /> */}
          <Route path="/author" element={<AuthorPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/logout" element={<Logout />} />
          </Route>
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/explore/:id" element={<DetailsPage />} />
        </Routes>
      </CardProvider>
    </AuthProvider>
  );
}

export default App;
