import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const dailyData = [
  { label: 'T2', new: 65, returning: 110 },
  { label: 'T3', new: 72, returning: 130 },
  { label: 'T4', new: 80, returning: 145 },
  { label: 'T5', new: 75, returning: 140 },
  { label: 'T6', new: 95, returning: 160 },
  { label: 'T7', new: 110, returning: 185 },
  { label: 'CN', new: 120, returning: 200 },
];

const weeklyData = [
  { label: 'Tuần 1', new: 450, returning: 800 },
  { label: 'Tuần 2', new: 500, returning: 950 },
  { label: 'Tuần 3', new: 480, returning: 900 },
  { label: 'Tuần 4', new: 550, returning: 1100 },
];

const monthlyData = [
  { label: 'Thg 1', new: 1800, returning: 3500 },
  { label: 'Thg 2', new: 2100, returning: 3800 },
  { label: 'Thg 3', new: 2000, returning: 3700 },
  { label: 'Thg 4', new: 2400, returning: 4200 },
  { label: 'Thg 5', new: 2600, returning: 4500 },
  { label: 'Thg 6', new: 2500, returning: 4400 },
];

const TimeframeButton = ({ timeframe, activeTimeframe, setTimeframe, children }) => (
  <button
    onClick={() => setTimeframe(timeframe)}
    className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
      activeTimeframe === timeframe
        ? 'bg-indigo-600 text-white shadow-sm'
        : 'text-slate-600 hover:bg-slate-100'
    }`}
  >
    {children}
  </button>
);

export default function CustomerChart() {
  const [timeframe, setTimeframe] = useState('daily');

  const { data, maxValue } = useMemo(() => {
    let currentData;
    if (timeframe === 'daily') currentData = dailyData;
    else if (timeframe === 'weekly') currentData = weeklyData;
    else currentData = monthlyData;

    const maxVal = Math.max(...currentData.map(d => Math.max(d.new, d.returning)));
    return { data: currentData, maxValue: maxVal * 1.2 };
  }, [timeframe]);

  const yAxisLabels = useMemo(() => {
    if (maxValue === 0) return [];
    const numSteps = 5;
    const rawStep = maxValue / numSteps;
    const magnitude = Math.pow(10, Math.floor(Math.log10(rawStep)));
    const niceStep = Math.ceil(rawStep / magnitude) * magnitude;
    
    return Array.from({ length: numSteps + 1 }, (_, i) => Math.round(i * niceStep));
  }, [maxValue]);

  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/80"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Khách hàng mới vs. Khách quay lại</h3>
          <p className="text-sm text-slate-500">So sánh lượng khách hàng theo thời gian</p>
        </div>
        <div className="flex items-center space-x-1 mt-3 sm:mt-0 bg-slate-100 p-1 rounded-lg">
          <TimeframeButton timeframe="daily" activeTimeframe={timeframe} setTimeframe={setTimeframe}>Ngày</TimeframeButton>
          <TimeframeButton timeframe="weekly" activeTimeframe={timeframe} setTimeframe={setTimeframe}>Tuần</TimeframeButton>
          <TimeframeButton timeframe="monthly" activeTimeframe={timeframe} setTimeframe={setTimeframe}>Tháng</TimeframeButton>
        </div>
      </div>

      <div className="flex justify-end space-x-4 mb-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-teal-400 mr-2"></div>
          <span className="text-sm text-slate-600">Khách hàng mới</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>
          <span className="text-sm text-slate-600">Khách quay lại</span>
        </div>
      </div>

      <div className="h-72 w-full flex pt-4">
        <div className="flex flex-col justify-between h-full text-xs text-slate-500 pr-4 border-r border-slate-200">
          {yAxisLabels.slice().reverse().map(label => (
            <span key={label}>{label}</span>
          ))}
        </div>
        <div className="flex-1 grid" style={{ gridTemplateColumns: `repeat(${data.length}, minmax(0, 1fr))` }}>
            {data.map((d, i) => (
              <div key={d.label} className="relative flex justify-center items-end gap-1 px-2 group border-b border-slate-200">
                <motion.div
                  className="w-full bg-teal-400 rounded-t-md hover:bg-teal-500 transition-colors"
                  initial={{ height: 0 }}
                  animate={{ height: `${(d.new / maxValue) * 100}%` }}
                  transition={{ duration: 0.5, delay: i * 0.05, type: 'spring', stiffness: 100, damping: 15 }}
                  title={`Mới: ${d.new}`}
                />
                <motion.div
                  className="w-full bg-indigo-500 rounded-t-md hover:bg-indigo-600 transition-colors"
                  initial={{ height: 0 }}
                  animate={{ height: `${(d.returning / maxValue) * 100}%` }}
                  transition={{ duration: 0.5, delay: i * 0.05, type: 'spring', stiffness: 100, damping: 15 }}
                  title={`Quay lại: ${d.returning}`}
                />
                <span className="absolute -bottom-5 text-xs text-slate-500 whitespace-nowrap">{d.label}</span>
              </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
}
