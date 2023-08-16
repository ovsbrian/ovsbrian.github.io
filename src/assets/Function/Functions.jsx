import { useNavigate } from "react-router-dom";

export const useViewNavigate = () => {
  const navigate = useNavigate();

  const viewNavigate = (newRoute) => {
    // Navigate to the new route
    if (!document.startViewTransition) {
      return navigate(newRoute);
    } else {
      return document.startViewTransition(() => {
        navigate(newRoute);
      });
    }
  };

  return viewNavigate;
};
