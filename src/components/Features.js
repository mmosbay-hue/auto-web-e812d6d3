import React from 'react';
import { Gift, QrCode, BrainCircuit, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Tích điểm & Thẻ thành viên',
    description: 'Xây dựng chương trình khách hàng thân thiết, phân hạng thành viên và tích điểm tự động.',
    icon: Gift,
  },
  {
    name: 'Thanh toán QR tiện lợi',
    description: 'Cung cấp giải pháp thanh toán không tiền mặt nhanh chóng, an toàn và tích hợp loyalty.',
    icon: QrCode,
  },
  {
    name: 'AI Quản trị thông minh',
    description: 'Phân tích dữ liệu, dự báo doanh thu và đưa ra gợi ý kinh doanh tự động bằng AI.',
    icon: BrainCircuit,
  },
  {
    name: 'Quản lý khách hàng (CRM)',
    description: 'Lưu trữ và phân tích thông tin, hành vi khách hàng để cá nhân hóa trải nghiệm.',
    icon: Users,
  },
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Tính năng vượt trội</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Mọi thứ bạn cần để phát triển kinh doanh
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 lg:mx-auto">
            Nền tảng LoyalAI cung cấp bộ công cụ toàn diện giúp bạn thu hút, giữ chân khách hàng và tối ưu vận hành.
          </p>
        </div>

        <motion.div 
          className="mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <motion.div key={feature.name} className="relative" variants={itemVariants}>
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-slate-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-slate-500">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}
