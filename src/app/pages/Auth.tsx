import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Mic, Mail, Lock, User } from "lucide-react";
import { useState } from "react";
import logoImage from "figma:asset/893ab94157a5e8aeb045ea6015e29a915c555244.png";
import logoImage2 from "figma:asset/8dd1b8c27d22f6e01a56a2db491bbd59f8bdff22.png";

export function Auth() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleGoogleLogin = () => {
    // Simulate Google OAuth flow
    // In production, this would redirect to Google OAuth
    console.log("Initiating Google login...");
    
    // Simulate successful login and redirect to onboarding
    setTimeout(() => {
      navigate("/onboarding");
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSignUp) {
      // Validate passwords match
      if (formData.password !== formData.confirmPassword) {
        alert("Пароли не совпадают");
        return;
      }
      console.log("Sign up with:", formData);
    } else {
      console.log("Sign in with:", { email: formData.email, password: formData.password });
    }
    
    // Simulate successful authentication
    setTimeout(() => {
      navigate("/onboarding");
    }, 500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center px-6 py-8">
      {/* Logo Placeholders in Top Corners */}
      <div className="fixed top-6 left-6 w-16 h-16 bg-white rounded-xl shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-shadow overflow-hidden">
        <img src={logoImage} alt="Logo" className="w-full h-full object-cover" />
      </div>
      <div className="fixed top-6 right-6 w-16 h-16 bg-white rounded-xl shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-shadow overflow-hidden">
        <img src={logoImage2} alt="Logo" className="w-full h-full object-cover" />
      </div>

      {/* Logo/Icon */}
      <div className="mb-8 text-center">
        
        <h1 className="text-[28px] font-bold text-[#1A1A1A] mb-2"></h1>
        
      </div>

      {/* Auth Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-[20px] font-bold text-[#1A1A1A]">
            Добро пожаловать
          </h2>
          <p className="text-[14px] text-[#757575]">Платформа создана для участия в alem.ai battle и демонстрации механики сбора данных для ИИ-моделей</p>
        </div>

        {/* Google Sign In Button */}
        <Button
          onClick={handleGoogleLogin}
          className="w-full h-14 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700 text-white text-[16px] font-semibold rounded-xl shadow-md"
        >
          <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Войти через Google
        </Button>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-[#757575] text-[12px]">
              или
            </span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full h-14 pl-10 pr-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-gray-500"
                placeholder="Имя"
                required
              />
            </div>
          )}
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full h-14 pl-10 pr-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-gray-500"
              placeholder="Email"
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full h-14 pl-10 pr-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-gray-500"
              placeholder="Пароль"
              required
            />
          </div>
          {isSignUp && (
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full h-14 pl-10 pr-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-gray-500"
                placeholder="Подтвердите пароль"
                required
              />
            </div>
          )}
          <Button
            type="submit"
            className="w-full h-14 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700 text-white text-[16px] font-semibold rounded-xl shadow-md"
          >
            {isSignUp ? "Зарегистрироваться" : "Войти"}
          </Button>
        </form>

        {/* Toggle Sign Up/Sign In */}
        <div className="text-center pt-4">
          <p className="text-[12px] text-[#757575]">
            {isSignUp ? "Уже есть аккаунт?" : "Нет аккаунта?"}{" "}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-gray-700 hover:underline font-medium"
            >
              {isSignUp ? "Войти" : "Зарегистрироваться"}
            </button>
          </p>
        </div>

        {/* Terms & Privacy */}
        <div className="text-center pt-4">
          <p className="text-[12px] text-[#757575]">
            Продолжая, вы соглашаетесь с{" "}
            <button
              onClick={() => navigate("/terms")}
              className="text-gray-700 hover:underline font-medium"
            >
              Условиями использования
            </button>{" "}
            и{" "}
            <button
              onClick={() => navigate("/privacy")}
              className="text-gray-700 hover:underline font-medium"
            >
              Политикой конфиденциальности
            </button>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-[12px] text-[#757575]">
          © 2026 Voice Recording Platform
        </p>
      </div>
    </div>
  );
}