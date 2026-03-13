import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ResetPassword from './pages/ResetPassword';
import DeleteAccount from './pages/DeleteAccount';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Support from './pages/Support';
import TermsOfService from './pages/TermsOfService';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/delete-account" element={<DeleteAccount />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/support" element={<Support />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
