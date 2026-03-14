import React, { useState } from 'react';
import { Zap, Mail, ArrowRight, LoaderCircle, CheckCircle, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, sending, sent

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg"
    >
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center bg-indigo-100 rounded-full p-3 mb-4">
          <Zap className="w-8 h-8 text-indigo-600" />
        </div>
        <h1 className="text-2xl font-bold text-slate-800">LoyaltyPlatform</h1>
      </div>

      <AnimatePresence mode="wait">
        {status !== 'sent' ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-center text-slate-700 mb-2">Quên mật khẩu?</h2>
            <p className="text-slate-500 text-center text-sm mb-6">Đừng lo, chúng tôi sẽ giúp bạn. Nhập email đã đăng ký để nhận liên kết đặt lại mật khẩu.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-1">Email</label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Mail className="h-5 w-5 text-slate-400" aria-hidden="true" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-lg border border-slate-300 bg-transparent py-2.5 pl-10 pr-3 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="flex w-full justify-center items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-400 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {status === 'sending' ? (
                    <>
                      <LoaderCircle className="animate-spin h-5 w-5" />
                      <span>Đang gửi...</span>
                    </>
                  ) : (
                    <>
                      <span>Gửi liên kết đặt lại</span>
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center bg-green-100 rounded-full p-3 mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-slate-800 mb-2">Kiểm tra email của bạn</h2>
            <p className="text-slate-500 text-sm">
              Chúng tôi đã gửi một liên kết đặt lại mật khẩu đến <span className="font-medium text-slate-700">{email}</span>. Vui lòng kiểm tra hộp thư đến (và cả mục spam).
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-8 text-center">
        <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-500">
          <ArrowLeft className="h-4 w-4" />
          Quay lại trang đăng nhập
        </a>
      </div>
    </motion.div>
  );
}
