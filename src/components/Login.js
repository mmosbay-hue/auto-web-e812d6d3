import React, { useState, useRef, useEffect } from 'react';
import { Zap, Phone, KeyRound, ArrowRight, LoaderCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.804 8.841C34.525 4.942 29.632 2.5 24 2.5C11.983 2.5 2.5 11.983 2.5 24s9.483 21.5 21.5 21.5c11.147 0 20.25-8.694 20.25-20.25c0-1.372-.124-2.71-.359-4.017z"></path>
    <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12.5 24 12.5c3.059 0 5.842 1.154 7.961 3.039l5.843-5.843C34.525 4.942 29.632 2.5 24 2.5C16.318 2.5 9.5 6.963 6.306 14.691z"></path>
    <path fill="#4CAF50" d="M24 45.5c5.842 0 11.013-2.438 14.704-6.429l-6.393-4.948C30.156 36.686 27.219 38 24 38c-5.222 0-9.613-3.26-11.284-7.663l-6.522 5.025C9.505 41.045 16.318 45.5 24 45.5z"></path>
    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.393 4.948C44.333 34.896 46.5 29.863 46.5 24c0-1.372-.124-2.71-.359-4.017z"></path>
  </svg>
);

export default function Login() {
  const [step, setStep] = useState('phone'); // 'phone' or 'otp'
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timer, setTimer] = useState(60);

  const otpInputs = useRef([]);

  useEffect(() => {
    let interval;
    if (step === 'otp' && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('otp');
      setTimer(60);
    }, 1500);
  };

  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputs.current[index - 1].focus();
    }
  };

  const handleResendOtp = () => {
    if (timer === 0) {
      setOtp(new Array(6).fill(''));
      setTimer(60);
      // Add logic to resend OTP
    }
  };

  const renderPhoneStep = () => (
    <motion.div
      key="phone"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold text-slate-800">Đăng nhập</h2>
      <p className="mt-2 text-sm text-slate-600">Chào mừng bạn quay trở lại. Vui lòng nhập số điện thoại để tiếp tục.</p>
      <form onSubmit={handlePhoneSubmit} className="mt-8 space-y-6">
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-slate-700">Số điện thoại</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-slate-400" />
            </div>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="appearance-none block w-full px-3 py-3 pl-10 border border-slate-300 rounded-xl placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="09xxxxxxxx"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 transition-colors duration-300"
          >
            {isSubmitting ? (
              <LoaderCircle className="animate-spin h-5 w-5 mr-2" />
            ) : (
              <ArrowRight className="h-5 w-5 mr-2" />
            )}
            Tiếp tục
          </button>
        </div>
      </form>
    </motion.div>
  );

  const renderOtpStep = () => (
    <motion.div
      key="otp"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold text-slate-800">Nhập mã xác thực</h2>
      <p className="mt-2 text-sm text-slate-600">Một mã OTP gồm 6 chữ số đã được gửi đến số <span className="font-semibold text-slate-800">{phoneNumber}</span>.</p>
      <form className="mt-8 space-y-6">
        <div>
          <label className="text-sm font-medium text-slate-700">Mã OTP</label>
          <div className="mt-1 flex justify-between space-x-2">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                name="otp"
                maxLength="1"
                className="w-12 h-14 text-center text-2xl font-semibold border border-slate-300 rounded-xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={data}
                onChange={e => handleOtpChange(e.target, index)}
                onFocus={e => e.target.select()}
                onKeyDown={e => handleKeyDown(e, index)}
                ref={el => otpInputs.current[index] = el}
              />
            ))}
          </div>
        </div>
        <div className="text-center text-sm">
          <button 
            type="button"
            onClick={handleResendOtp}
            disabled={timer > 0}
            className="font-medium text-indigo-600 hover:text-indigo-500 disabled:text-slate-400 disabled:cursor-not-allowed"
          >
            Gửi lại mã {timer > 0 ? `(${timer}s)` : ''}
          </button>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <KeyRound className="h-5 w-5 mr-2" />
            Xác thực & Đăng nhập
          </button>
        </div>
      </form>
    </motion.div>
  );

  return (
    <motion.div 
      layout
      className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg"
    >
      <div className="text-center">
        <Zap className="mx-auto h-12 w-auto text-indigo-600" />
      </div>
      
      <AnimatePresence mode="wait">
        {step === 'phone' ? renderPhoneStep() : renderOtpStep()}
      </AnimatePresence>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-slate-500">Hoặc đăng nhập với</span>
        </div>
      </div>

      <div>
        <div className="mt-6 grid grid-cols-1 gap-3">
          <div>
            <a href="#" className="w-full inline-flex justify-center items-center py-3 px-4 border border-slate-300 rounded-xl shadow-sm bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors duration-300">
              <GoogleIcon />
              <span className="ml-3">Google</span>
            </a>
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-slate-600">
        Chưa có tài khoản?
        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 ml-1">
          Đăng ký ngay
        </a>
      </p>
    </motion.div>
  );
}
