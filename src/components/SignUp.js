import React from 'react';
import { User, Mail, Lock, ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.804 8.841C34.525 4.942 29.632 2.5 24 2.5C11.983 2.5 2.5 11.983 2.5 24s9.483 21.5 21.5 21.5c11.147 0 20.25-8.694 20.25-20.25c0-1.372-.124-2.71-.359-4.017z"></path>
    <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12.5 24 12.5c3.059 0 5.842 1.154 7.961 3.039l5.843-5.843C34.525 4.942 29.632 2.5 24 2.5C16.318 2.5 9.5 6.963 6.306 14.691z"></path>
    <path fill="#4CAF50" d="M24 45.5c5.842 0 11.013-2.438 14.704-6.429l-6.393-4.948C30.156 36.686 27.219 38 24 38c-5.222 0-9.613-3.26-11.284-7.663l-6.522 5.025C9.505 41.045 16.318 45.5 24 45.5z"></path>
    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.393 4.948C44.333 34.896 46.5 29.863 46.5 24c0-1.372-.124-2.71-.359-4.017z"></path>
  </svg>
);

const FacebookIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
    </svg>
);

export default function SignUp() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <div className="flex justify-center">
            <div className="bg-indigo-100 p-3 rounded-full">
              <Zap className="h-8 w-8 text-indigo-600" />
            </div>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900">
            Tạo tài khoản mới
          </h2>
          <p className="mt-2 text-center text-sm text-slate-600">
            Bắt đầu hành trình của bạn với chúng tôi.
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-y-4">
            <div>
              <label htmlFor="full-name" className="sr-only">Họ và tên</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400" />
                </div>
                <input id="full-name" name="name" type="text" required className="appearance-none rounded-xl relative block w-full px-3 py-3 pl-10 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Họ và tên" />
              </div>
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">Địa chỉ email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-xl relative block w-full px-3 py-3 pl-10 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Địa chỉ email" />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Mật khẩu</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input id="password" name="password" type="password" autoComplete="new-password" required className="appearance-none rounded-xl relative block w-full px-3 py-3 pl-10 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Mật khẩu" />
              </div>
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <ArrowRight className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition-colors duration-300" />
              </span>
              Đăng ký
            </button>
          </div>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-slate-500">Hoặc tiếp tục với</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div>
            <a href="#" className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-slate-300 rounded-xl shadow-sm bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors duration-300">
              <span className="sr-only">Đăng nhập với Google</span>
              <GoogleIcon />
            </a>
          </div>
          <div>
            <a href="#" className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-slate-300 rounded-xl shadow-sm bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors duration-300">
              <span className="sr-only">Đăng nhập với Facebook</span>
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div className="text-sm text-center">
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            Đã có tài khoản? Đăng nhập
          </a>
        </div>
      </motion.div>
    </div>
  );
}
