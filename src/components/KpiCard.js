import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, ArrowDown } from 'lucide-react';

export default function KpiCard({ title, value, change, changeType, icon: Icon, color, bgColor }) {
  const isIncrease = changeType === 'increase';

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between border border-slate-200/80"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-between items-start">
        <div className={`p-3 rounded-lg ${bgColor}`}>
          <Icon className={`w-6 h-6 ${color}`} />
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-slate-500 font-medium">{title}</p>
        <h3 className="text-3xl font-bold text-slate-800 mt-1 tracking-tight">{value}</h3>
      </div>
      <div className="mt-4 flex items-center space-x-1">
        <div className={`flex items-center text-sm font-semibold ${isIncrease ? 'text-green-600' : 'text-red-600'}`}>
          {isIncrease ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
          <span>{change}</span>
        </div>
        <p className="text-sm text-slate-500">so với tháng trước</p>
      </div>
    </motion.div>
  );
}
