import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Users, CreditCard, ShoppingCart } from 'lucide-react';
import KpiCard from './KpiCard';
import RevenueChart from './RevenueChart';
import RecentActivity from './RecentActivity';
import CustomerChart from './CustomerChart';

export default function Dashboard() {
  const kpiData = [
    { title: 'Tổng doanh thu', value: '1,250,000,000đ', change: '12.5%', changeType: 'increase', icon: DollarSign, color: 'text-green-500', bgColor: 'bg-green-50' },
    { title: 'Khách hàng mới', value: '1,230', change: '8.2%', changeType: 'increase', icon: Users, color: 'text-blue-500', bgColor: 'bg-blue-50' },
    { title: 'Tổng giao dịch', value: '25,670', change: '5.1%', changeType: 'increase', icon: CreditCard, color: 'text-indigo-500', bgColor: 'bg-indigo-50' },
    { title: 'Tỉ lệ quay lại', value: '35.8%', change: '1.8%', changeType: 'decrease', icon: ShoppingCart, color: 'text-red-500', bgColor: 'bg-red-50' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h1 className="text-3xl font-bold text-slate-800 mb-6">Tổng quan</h1>
          
          <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2 xl:grid-cols-4">
            {kpiData.map((kpi, index) => (
              <KpiCard key={index} {...kpi} />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>
            <div className="lg:col-span-1">
              <RecentActivity />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <CustomerChart />
          </div>

        </motion.div>
      </div>
    </div>
  );
}
