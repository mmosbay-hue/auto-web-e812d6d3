import React from 'react';
import { Zap } from 'lucide-react';

const navigation = {
  solutions: [
    { name: 'Tích điểm', href: '#' },
    { name: 'Thanh toán QR', href: '#' },
    { name: 'AI Analytics', href: '#' },
    { name: 'CRM', href: '#' },
  ],
  support: [
    { name: 'Bảng giá', href: '#' },
    { name: 'Tài liệu', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'Về chúng tôi', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Tuyển dụng', href: '#' },
  ],
  legal: [
    { name: 'Chính sách', href: '#' },
    { name: 'Điều khoản', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <a href="#" className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold text-slate-900">LoyalAI</span>
            </a>
            <p className="text-slate-500 text-base">
              Nền tảng Loyalty tích hợp AI cho doanh nghiệp.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-600 tracking-wider uppercase">Giải pháp</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-slate-500 hover:text-indigo-600 transition-colors duration-200">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-slate-600 tracking-wider uppercase">Hỗ trợ</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-slate-500 hover:text-indigo-600 transition-colors duration-200">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-600 tracking-wider uppercase">Công ty</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-slate-500 hover:text-indigo-600 transition-colors duration-200">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-slate-600 tracking-wider uppercase">Pháp lý</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-slate-500 hover:text-indigo-600 transition-colors duration-200">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8">
          <p className="text-base text-slate-500 xl:text-center">&copy; 2024 LoyalAI, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
