import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./styles.css";
import Index from "./pages/Index.tsx";
import AboutPage from "./pages/AboutPage";
import OurVolunteersPage from "./pages/OurVolunteersPage";
import MissionVisionPage from "./pages/MissionVisionPage";
import CancerAwarenessPage from "./pages/CancerAwarenessPage";
import CancerScreeningPage from "./pages/CancerScreeningPage";
import FreeDoctorConsultationPage from "./pages/FreeDoctorConsultationPage";
import CollaborationHospitalsPage from "./pages/CollaborationHospitalsPage";
import CommunityOutreachPage from "./pages/CommunityOutreachPage";
import EducationalWorkshopsPage from "./pages/EducationalWorkshopsPage";
import NutritionalGuidancePage from "./pages/NutritionalGuidancePage";
import CounselingPatientSupportPage from "./pages/CounselingPatientSupportPage";
import EarlyDetectionAwarenessPage from "./pages/EarlyDetectionAwarenessPage";
import PalliativeCarePage from "./pages/services/PalliativeCarePage";
import DonatePage from "./pages/DonatePage";
import DonateHairPage from "./pages/DonateHairPage";
import BecomeVolunteerPage from "./pages/BecomeVolunteerPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import GetInvolvedPage from "./pages/GetInvolvedPage";
import MediaPage from "./pages/MediaPage";
import GalleryPage from "./pages/GalleryPage";
import VideosPage from "./pages/VideosPage";
import ServicesPage from "./pages/ServicesPage";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
import AdminDashboard from "./pages/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/our-volunteers" element={<OurVolunteersPage />} />
          <Route path="/mission-aur-vision" element={<MissionVisionPage />} />
          <Route path="/cancer-awareness" element={<CancerAwarenessPage />} />
          <Route path="/cancer-screening" element={<CancerScreeningPage />} />

          {/* Services Routes */}
          <Route path="/free-doctor-consultation-health-checkups" element={<FreeDoctorConsultationPage />} />
          {/* <Route path="/services/features/general-health-checkup" element={<FreeDoctorConsultationPage />} /> */}
          <Route path="/services/features/cancer-screening" element={<CancerScreeningPage />} />
          <Route path="/collaboration-with-hospitals-oncosurgeons" element={<CollaborationHospitalsPage />} />
          <Route path="/community-outreach-programs" element={<CommunityOutreachPage />} />
          <Route path="/services/features/cancer-awareness-camps" element={<CancerAwarenessPage />} />
          
          <Route path="/services/features/school-health-programs" element={<CommunityOutreachPage />} />
          <Route path="/educational-workshops-seminars" element={<EducationalWorkshopsPage />} />
          <Route path="/services/features/cancer-awareness-workshop" element={<EducationalWorkshopsPage />} />
          <Route path="/services/features/nutrition-workshop" element={<NutritionalGuidancePage />} />
          <Route path="/services/features/caregiver-training" element={<EducationalWorkshopsPage />} />
          <Route path="/palliative-care-assistance" element={<PalliativeCarePage />} />
          <Route path="/services/features/pain-management" element={<PalliativeCarePage />} />
          <Route path="/services/features/emotional-support" element={<CounselingPatientSupportPage />} />
          <Route path="/services/features/home-care-services" element={<PalliativeCarePage />} />
          <Route path="/nutritional-guidance" element={<NutritionalGuidancePage />} />
          <Route path="/services/features/cancer-prevention-nutrition" element={<NutritionalGuidancePage />} />
          <Route path="/services/features/treatment-nutrition" element={<NutritionalGuidancePage />} />
          <Route path="/services/features/recovery-nutrition" element={<NutritionalGuidancePage />} />
          <Route path="/counseling-patient-support" element={<CounselingPatientSupportPage />} />
          <Route path="/services/features/individual-counseling" element={<CounselingPatientSupportPage />} />
          <Route path="/services/features/family-counseling" element={<CounselingPatientSupportPage />} />
          <Route path="/services/features/support-groups" element={<CounselingPatientSupportPage />} />
          <Route path="/early-detection-awareness" element={<EarlyDetectionAwarenessPage />} />
          <Route path="/services/features/breast-cancer-screening" element={<EarlyDetectionAwarenessPage />} />
          <Route path="/services/features/cervical-cancer-screening" element={<EarlyDetectionAwarenessPage />} />
          <Route path="/services/features/oral-cancer-screening" element={<EarlyDetectionAwarenessPage />} />
          

          <Route path="/donate" element={<DonatePage />} />
          <Route path="/donate-hair" element={<DonateHairPage />} />
          <Route path="/become-a-volunteer" element={<BecomeVolunteerPage />} />
           <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/services" element={<ServicesPage />} /> 

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/panel" element={<AdminPanel />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
