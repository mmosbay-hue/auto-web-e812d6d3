import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';

const tierIcons = {
  'Đồng': <Award className="w-5 h-5 text-orange-500" />,
  'Bạc': <Award className="w-5 h-5 text-slate-500" />,
  'Vàng': <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />,
  'Kim Cương': <Star className="w-5 h-5 text-blue-500 fill-blue-500" />,
};

export default function TierProgressBar({ currentPoints, pointsForNextTier, currentTier, nextTier }) {
  const progressPercentage = Math.min((currentPoints / pointsForNextTier) * 100, 100);

  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/80 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          {tierIcons[currentTier] || <Award className="w-5 h-5 text-slate-400" />}
          <span className="font-semibold text-slate-700">{currentTier}</span>
        </div>
        <div className="flex items-center gap-2">
          {tierIcons[nextTier] || <Star className="w-5 h-5 text-slate-400" />}
          <span className="font-semibold text-indigo-600">{nextTier}</span>
        </div>
      </div>

      <div className="w-full bg-slate-200 rounded-full h-3 mb-2 overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
        />
      </div>

      <div className="flex justify-between items-center text-sm">
        <p className="text-slate-600">
          Bạn cần thêm <span className="font-bold text-indigo-600">{pointsForNextTier - currentPoints}</span> điểm để thăng hạng.
        </p>
        <p className="font-semibold text-slate-700">
          {currentPoints} / {pointsForNextTier}
        </p>
      </div>
    </motion.div>
  );
}
