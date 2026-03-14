import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const dailyData = [
  { label: 'T2', value: 4000000 }, { label: 'T3', value: 3000000 }, { label: 'T4', value: 5000000 },
  { label: 'T5', value: 4500000 }, { label: 'T6', value: 6000000 }, { label: 'T7', value: 7500000 }, { label: 'CN', value: 8200000 },
];
const weeklyData = [
  { label: 'Tuần 1', value: 28000000 }, { label: 'Tuần 2', value: 35000000 },
  { label: 'Tuần 3', value: 32000000 }, { label: 'Tuần 4', value: 41000000 },
];
const monthlyData = [
  { label: 'Thg 1', value: 120000000 }, { label: 'Thg 2', value: 150000000 }, { label: 'Thg 3', value: 135000000 },
  { label: 'Thg 4', value: 160000000 }, { label: 'Thg 5', value: 180000000 }, { label: 'Thg 6', value: 175000000 },
];
const dataSets = { day: dailyData, week: weeklyData, month: monthlyData };

const formatCurrency = (value) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);

export default function RevenueChart() {
  const [timeframe, setTimeframe] = useState('week');
  const chartData = useMemo(() => dataSets[timeframe], [timeframe]);
  const maxValue = useMemo(() => chartData.length > 0 ? Math.max(...chartData.map(d => d.value)) : 1, [chartData]);
  
  const yAxisLabels = useMemo(() => {
    if (maxValue <= 1) return [0, 0, 0, 0, 0];
    const topValue = Math.ceil(maxValue / 1000000) * 1000000;
    return Array.from({ length: 5 }, (_, i) => topValue * (1 - i * 0.25));
  }, [maxValue]);

  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/80 col-span-1 lg:col-span-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Phân tích doanh thu</h3>
          <p className="text-sm text-slate-500">Tổng quan doanh thu theo thời gian đã chọn.</p>
        </div>
        <div className="flex items-center bg-slate-100 p-1 rounded-lg mt-4 sm:mt-0">
          {[{key: 'day', label: 'Ngày'}, {key: 'week', label: 'Tuần'}, {key: 'month', label: 'Tháng'}].map((t) => (
            <button
              key={t.key}
              onClick={() => setTimeframe(t.key)}
              className={`px-3 py-1 text-sm font-medium rounded-md transition-colors relative ${
                timeframe === t.key ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {timeframe === t.key && (
                <motion.div
                  layoutId="active-chart-pill"
                  className="absolute inset-0 bg-white shadow-sm rounded-md z-0"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="h-72 flex gap-4">
        <div className="flex flex-col justify-between h-full text-xs text-slate-400 text-right">
          {yAxisLabels.map((label, i) => (
            <div key={i} className="relative">
              <span className="pr-2">{label / 1000000}tr</span>
            </div>
          ))}
        </div>
        <div className="flex-1 grid grid-flow-col items-end gap-2 border-l border-slate-200/60 pl-4">
            {chartData.map((dataPoint) => (
              <div key={dataPoint.label} className="relative flex flex-col items-center justify-end h-full group">
                <motion.div
                  className="w-3/4 bg-indigo-400 hover:bg-indigo-500 rounded-t-lg transition-colors cursor-pointer"
                  style={{ height: `${(dataPoint.value / maxValue) * 100}%` }}
                  initial={{ opacity: 0, height: '0%' }}
                  animate={{ opacity: 1, height: `${(dataPoint.value / maxValue) * 100}%` }}
                  exit={{ opacity: 0, height: '0%' }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  layout
                >
                  <div className="absolute -bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block bg-slate-800 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap z-10">
                    {formatCurrency(dataPoint.value)}
                  </div>
                </motion.div>
                <span className="text-xs text-slate-500 mt-2 absolute -bottom-5">{dataPoint.label}</span>
              </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
}
