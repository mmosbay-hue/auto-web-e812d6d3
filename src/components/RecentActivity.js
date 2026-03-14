import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Award, CreditCard, UserPlus } from 'lucide-react';

const activities = [
  { user: 'Nguyễn Văn A', action: 'đã đổi 1 voucher 50.000đ', time: '2 phút trước', icon: Gift, color: 'bg-amber-100 text-amber-600' },
  { user: 'Trần Thị B', action: 'đạt hạng Vàng', time: '15 phút trước', icon: Award, color: 'bg-yellow-100 text-yellow-600' },
  { user: 'Lê Văn C', action: 'thanh toán 250.000đ', time: '1 giờ trước', icon: CreditCard, color: 'bg-green-100 text-green-600' },
  { user: 'Phạm Thị D', action: 'đăng ký thành viên mới', time: '3 giờ trước', icon: UserPlus, color: 'bg-blue-100 text-blue-600' },
  { user: 'Hoàng Văn E', action: 'thanh toán 1.200.000đ', time: '5 giờ trước', icon: CreditCard, color: 'bg-green-100 text-green-600' },
];

export default function RecentActivity() {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/80"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h3 className="text-lg font-semibold text-slate-800">Hoạt động gần đây</h3>
      <p className="text-sm text-slate-500">Các giao dịch và sự kiện mới nhất.</p>
      <div className="mt-4 space-y-4">
        {activities.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center space-x-3">
              <div className={`flex-shrink-0 h-9 w-9 rounded-full flex items-center justify-center ${item.color}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-800 truncate">
                  <span className="font-medium">{item.user}</span> {item.action}
                </p>
                <p className="text-xs text-slate-500">{item.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
