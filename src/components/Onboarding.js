import React, { useState } from 'react';
import { LayoutDashboard, Gift, QrCode, Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const onboardingSteps = [
  {
    icon: LayoutDashboard,
    title: "Chào mừng đến với B-Loyalty!",
    description: "Bắt đầu hành trình quản lý doanh nghiệp thông minh. Hãy cùng khám phá những tính năng mạnh mẽ đang chờ bạn.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
  },
  {
    icon: Gift,
    title: "Chương trình Khách hàng Thân thiết",
    description: "Dễ dàng tạo và quản lý các chương trình tích điểm, phân hạng thành viên và gửi tặng voucher để giữ chân khách hàng.",
    image: "https://images.unsplash.com/photo-1572594537933-85c100235a2f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    icon: QrCode,
    title: "Thanh toán QR & Tích điểm Tự động",
    description: "Cung cấp trải nghiệm thanh toán không tiền mặt nhanh chóng, an toàn. Điểm thưởng được tích lũy tự động sau mỗi giao dịch.",
    image: "https://images.unsplash.com/photo-1604436124386-51398856a25a?q=80&w=1200&auto=format&fit=crop"
  },
  {
    icon: Sparkles,
    title: "Trợ lý AI Thông minh",
    description: "Nhận các phân tích, dự báo và gợi ý kinh doanh từ AI để tối ưu hóa hoạt động và tăng trưởng doanh thu vượt bậc.",
    image: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=1200&auto=format&fit=crop"
  }
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 30 : -30,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 30 : -30,
    opacity: 0
  })
};

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setStep(prev => Math.min(prev + 1, onboardingSteps.length - 1));
  };

  const handleBack = () => {
    setDirection(-1);
    setStep(prev => Math.max(prev - 1, 0));
  };

  const currentStep = onboardingSteps[step];

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden my-8">
      <div className="p-8 md:p-10">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            {onboardingSteps.map((_, index) => (
              <motion.div
                key={index}
                className={`h-2 rounded-full transition-colors ${step >= index ? 'bg-indigo-600' : 'bg-slate-200'}`}
                animate={{ width: step === index ? '2rem' : '0.5rem' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
            ))}
          </div>
          <button className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">
            Bỏ qua
          </button>
        </div>

        <div className="relative h-80 overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full h-full flex flex-col items-center text-center"
            >
              <div className="w-full h-40 mb-4 rounded-xl overflow-hidden">
                <img src={currentStep.image} alt={currentStep.title} className="w-full h-full object-cover" />
              </div>
              <div className="bg-indigo-100 text-indigo-600 rounded-full p-3 mb-4 inline-flex">
                <currentStep.icon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">{currentStep.title}</h2>
              <p className="text-slate-600 max-w-md">{currentStep.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={handleBack}
            disabled={step === 0}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại</span>
          </button>

          {step < onboardingSteps.length - 1 ? (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-sm transition-all"
            >
              <span>Tiếp theo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              className="px-6 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-sm transition-all"
            >
              Bắt đầu ngay
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
