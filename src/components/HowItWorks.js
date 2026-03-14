import React from 'react';
import { UserPlus, Gift, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    name: 'Đăng ký & Thiết lập',
    description: 'Tạo tài khoản doanh nghiệp và thiết lập cửa hàng của bạn chỉ trong vài phút.',
    icon: UserPlus,
  },
  {
    name: 'Tạo chương trình ưu đãi',
    description: 'Dễ dàng tạo các chương trình tích điểm, voucher giảm giá để thu hút khách hàng.',
    icon: Gift,
  },
  {
    name: 'Tăng trưởng & Bứt phá',
    description: 'Theo dõi hiệu quả, nhận gợi ý từ AI và đưa ra quyết định kinh doanh đúng đắn.',
    icon: TrendingUp,
  },
];

export default function HowItWorks() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Bắt đầu dễ dàng</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Chỉ với 3 bước đơn giản
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Giao diện trực quan giúp bạn nhanh chóng làm chủ hệ thống và triển khai ngay lập tức.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.name}
                className="pt-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flow-root bg-slate-50 rounded-xl px-6 pb-8 shadow-lg h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-slate-900 tracking-tight">{step.name}</h3>
                    <p className="mt-5 text-base text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
