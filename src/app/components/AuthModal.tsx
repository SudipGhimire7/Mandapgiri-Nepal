import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, User, AlertCircle, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function AuthModal() {
  const { isAuthModalOpen, setAuthModalOpen, login, register } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!isLogin && !name) {
      setError('Please enter your name');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    try {
      if (isLogin) {
        await login(email, password);
        setAuthModalOpen(false);
        resetForm();
      } else {
        await register(name, email, password);
        setSuccessMsg('Account created successfully! Please sign in.');
        setIsLogin(true);
        setPassword('');
        setName('');
      }
    } catch (err: any) {
      setError(err.message || 'Authentication failed');
      setSuccessMsg('');
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setError('');
    setSuccessMsg('');
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    resetForm();
  };

  return (
    <AnimatePresence>
      {isAuthModalOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => setAuthModalOpen(false)}
          />
          <div className="fixed inset-0 z-[51] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md pointer-events-auto overflow-hidden relative"
            >
              {/* Form header background */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-[#1B4D3E] to-[#C8102E] opacity-90" />
              
              <button
                onClick={() => setAuthModalOpen(false)}
                className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative pt-10 pb-8 px-8 z-10">
                <div className="text-center mb-8">
                  <h2 className="text-3xl text-white mb-2 shadow-sm" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                    {isLogin ? 'Welcome Back' : 'Create Account'}
                  </h2>
                  <p className="text-white/80 text-sm">
                    {isLogin ? 'Sign in to access your wishlist' : 'Join us to save your favorite adventures'}
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 -mt-4 border border-gray-100">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {successMsg && (
                      <div className="flex items-center gap-2 text-green-700 bg-green-50 p-3 rounded-lg text-sm border border-green-200">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        {successMsg}
                      </div>
                    )}
                    {error && (
                      <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm border border-red-200">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        {error}
                      </div>
                    )}

                    {!isLogin && (
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#C8102E] focus:border-[#C8102E] sm:text-sm transition-colors"
                          placeholder="Full Name"
                        />
                      </div>
                    )}

                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#C8102E] focus:border-[#C8102E] sm:text-sm transition-colors"
                        placeholder="Email Address"
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#C8102E] focus:border-[#C8102E] sm:text-sm transition-colors"
                        placeholder="Password"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-[#C8102E] hover:bg-[#A00D24] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C8102E] transition-colors mt-6"
                    >
                      {isLogin ? 'Sign In' : 'Sign Up'}
                    </button>
                  </form>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      {isLogin ? "Don't have an account? " : "Already have an account? "}
                      <button
                        onClick={toggleMode}
                        className="font-medium text-[#1B4D3E] hover:text-[#C8102E] transition-colors"
                      >
                        {isLogin ? 'Sign up' : 'Sign in'}
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
