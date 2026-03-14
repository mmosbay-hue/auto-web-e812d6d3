import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            <span className="block">Sẵn sàng để bứt phá doanh thu?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-slate-500">
            Trải nghiệm nền tảng LoyalAI miễn phí và cảm nhận sự khác biệt ngay hôm nay.
          </p>
          <a
            href="#"
            className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 sm:w-auto transition-transform transform hover:scale-105"
          >
            Đăng ký ngay <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
