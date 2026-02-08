import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import ProfessionalContainer from "../components/BorderAnimatedContainer";
import { MessageCircleIcon, MailIcon, LoaderIcon, LockIcon } from "lucide-react";
import { Link } from "react-router";

function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl md:h-[750px] h-[650px]">
        <ProfessionalContainer>
          <div className="w-full flex flex-col md:flex-row">
            {/* FORM COLUMN - LEFT SIDE */}
            <div className="md:w-1/2 p-10 flex items-center justify-center md:border-r border-gray-700/50">
              <div className="w-full max-w-md">
                {/* HEADING TEXT */}
                <div className="text-center mb-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 mb-6 shadow-lg shadow-blue-900/30">
                    <MessageCircleIcon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-100 mb-2">Welcome Back</h2>
                  <p className="text-gray-400">Sign in to continue your conversations</p>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* EMAIL INPUT */}
                  <div>
                    <label className="auth-input-label">Email Address</label>
                    <div className="relative">
                      <MailIcon className="auth-input-icon" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* PASSWORD INPUT */}
                  <div>
                    <label className="auth-input-label">Password</label>
                    <div className="relative">
                      <LockIcon className="auth-input-icon" />
                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="input"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button className="auth-btn" type="submit" disabled={isLoggingIn}>
                    {isLoggingIn ? (
                      <LoaderIcon className="w-5 h-5 animate-spin mx-auto" />
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <Link to="/signup" className="auth-link">
                    Don't have an account? Sign Up
                  </Link>
                </div>
              </div>
            </div>

            {/* ILLUSTRATION - RIGHT SIDE */}
            <div className="hidden md:w-1/2 md:flex items-center justify-center p-10 bg-gradient-to-br from-gray-800/20 to-transparent">
              <div className="text-center">
                <img
                  src="/login.png"
                  alt="Chat illustration"
                  className="w-full max-w-md h-auto object-contain mb-8"
                />
                <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                  Connect Anytime, Anywhere
                </h3>
                <p className="text-gray-400 mb-6 max-w-sm mx-auto">
                  Stay connected with friends and colleagues through secure, real-time messaging
                </p>
                <div className="flex justify-center gap-3">
                  <span className="auth-badge">🔒 Secure</span>
                  <span className="auth-badge">⚡ Fast</span>
                  <span className="auth-badge">🎯 Simple</span>
                </div>
              </div>
            </div>
          </div>
        </ProfessionalContainer>
      </div>
    </div>
  );
}
export default LoginPage;
