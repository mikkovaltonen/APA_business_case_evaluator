import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import ProcessAutomationChat from "@/components/ProfessionalBuyerChat";

const Workbench = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <ProcessAutomationChat onLogout={handleLogout} />
  );
};

export default Workbench;