import React, { useState } from 'react';
import { Zap, Menu, X, ChevronDown, Wallet, Gift, Store, History, LayoutDashboard, Users, Megaphone, BarChart3 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigationItems = [
  {
    name: 'Dành cho Khách hàng',
    submenu: [
      { name: 'Ví điểm thưởng', href: '#', icon: Wallet, description: 'Kiểm tra điểm và lịch sử tích lũy.' },
      { name: 'Đổi ưu đãi', href: '#', icon: Gift, description: 'Sử dụng điểm để nhận voucher hấp dẫn.' },
      { name: 'Tìm cửa hàng', href: '#', icon: Store, description: 'Khám phá các đối tác trong hệ thống.' },
      { name: 'Lịch sử giao dịch', href: '#', icon: History, description: 'Xem lại tất cả các giao dịch của bạn.' },
    ]
  },
  {
    name: 'Dành cho Doanh nghiệp',
    submenu: [
      { name: 'Dashboard', href: '#', icon: LayoutDashboard, description: 'Tổng quan tình hình kinh doanh.' },
      { name: 'Quản lý khách hàng', href: '#', icon: Users, description: 'Phân tích và tương tác với khách hàng.' },
      { name: 'Tạo chiến dịch', href: '#', icon: Megaphone, description: 'Thu hút khách hàng với các ưu đãi.' },
      { name: 'Báo cáo & AI', href: '#', icon: BarChart3, description: 'Nhận phân tích và gợi ý từ AI.' },
    ]
  },
  { name: 'Bảng giá', href: '#' },
  { name: 'Về chúng tôi', href: '#' },
];

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);

  const mobileMenuVariants = {
    closed: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    open: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  const submenuVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
    exit: { opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.15, ease: 'easeIn' } },
  };

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center gap-2">
              <Zap className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold text-slate-900">LoyaltyAI</span>
            </a>
          </div>
          <nav className="hidden lg:flex lg:ml-10 lg:space-x-8">
            {navigationItems.map((item, index) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a href={item.href || '#'} className="flex items-center text-base font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-200 py-2">
                  {item.name}
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </a>
                <AnimatePresence>
                  {item.submenu && hoveredItem === index && (
                    <motion.div
                      variants={submenuVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute -left-8 top-full mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:max-w-lg"
                    >
                      <div className="rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {item.submenu.map((subItem) => (
                            <a key={subItem.name} href={subItem.href} className="-m-3 p-3 flex items-start rounded-lg hover:bg-slate-50 transition-colors duration-200">
                              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-500 text-white sm:h-12 sm:w-12">
                                <subItem.icon className="h-6 w-6" aria-hidden="true" />
                              </div>
                              <div className="ml-4">
                                <p className="text-base font-medium text-slate-900">{subItem.name}</p>
                                <p className="mt-1 text-sm text-slate-500">{subItem.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className="text-base font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-200">Đăng nhập</a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 shadow-sm">Đăng ký</a>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
              <span className="sr-only">Mở menu</span>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <button onClick={() => setOpenMobileSubmenu(openMobileSubmenu === item.name ? null : item.name)} className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50">
                        <span>{item.name}</span>
                        <ChevronDown className={`h-5 w-5 transform transition-transform duration-200 ${openMobileSubmenu === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {openMobileSubmenu === item.name && (
                        <div className="pl-4 mt-2 space-y-1">
                          {item.submenu.map((subItem) => (
                            <a key={subItem.name} href={subItem.href} className="flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50">
                              <subItem.icon className="h-5 w-5 text-indigo-500" />
                              <span>{subItem.name}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a href={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50">{item.name}</a>
                  )}
                </div>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-slate-200">
              <div className="px-5 space-y-3">
                <a href="#" className="block w-full text-center px-5 py-2.5 border border-slate-300 text-base font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-colors duration-200">Đăng nhập</a>
                <a href="#" className="block w-full text-center px-5 py-2.5 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">Đăng ký</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
