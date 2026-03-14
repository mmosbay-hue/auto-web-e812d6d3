import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Gift, Coffee, ShoppingBag, Film, ChevronDown, ChevronUp } from 'lucide-react';
import TierProgressBar from './TierProgressBar';

const transactionsData = [
  { id: 1, type: 'earn', merchant: 'The Coffee House', description: 'Tích điểm', date: '2024-07-21', points: 25, icon: Coffee },
  { id: 2, type: 'spend', merchant: 'Voucher 50.000đ', description: 'Đổi ưu đãi', date: '2024-07-20', points: -200, icon: Gift },
  { id: 3, type: 'earn', merchant: 'Tiki', description: 'Tích điểm', date: '2024-07-18', points: 150, icon: ShoppingBag },
  { id: 4, type: 'earn', merchant: 'CGV Cinemas', description: 'Tích điểm', date: '2024-07-15', points: 45, icon: Film },
  { id: 5, type: 'spend', merchant: 'Voucher 20.000đ', description: 'Đổi ưu đãi', date: '2024-07-12', points: -100, icon: Gift },
  { id: 6, type: 'earn', merchant: 'The Coffee House', description: 'Tích điểm', date: '2024-07-10', points: 18, icon: Coffee },
  { id: 7, type: 'earn', merchant: 'Lazada', description: 'Tích điểm', date: '2024-07-05', points: 85, icon: ShoppingBag },
  { id: 8, type: 'spend', merchant: 'Voucher 100.000đ', description: 'Đổi ưu đãi', date: '2024-07-01', points: -500, icon: Gift },
];

const tierColors = {
  'Đồng': 'bg-orange-100 text-orange-800',
  'Bạc': 'bg-slate-200 text-slate-800',
  'Vàng': 'bg-yellow-100 text-yellow-800',
  'Kim Cương': 'bg-blue-100 text-blue-800',
};

const TransactionItem = ({ transaction, index }) => {
  const isEarn = transaction.type === 'earn';
  const Icon = transaction.icon;

  return (
    <motion.li
      className="flex items-center justify-between py-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      layout
    >
      <div className="flex items-center">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${isEarn ? 'bg-green-100' : 'bg-red-100'}`}>
          <Icon className={`w-5 h-5 ${isEarn ? 'text-green-600' : 'text-red-600'}`} />
        </div>
        <div>
          <p className="font-semibold text-slate-800">{transaction.merchant}</p>
          <p className="text-sm text-slate-500">{transaction.description} &bull; {transaction.date}</p>
        </div>
      </div>
      <div className={`font-semibold ${isEarn ? 'text-green-600' : 'text-red-600'}`}>
        {isEarn ? '+' : ''}{transaction.points} điểm
      </div>
    </motion.li>
  );
};

export default function LoyaltyWallet() {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filteredTransactions = useMemo(() => {
    if (filter === 'all') return transactionsData;
    return transactionsData.filter(t => t.type === filter);
  }, [filter]);

  const visibleTransactions = showAll ? filteredTransactions : filteredTransactions.slice(0, 5);

  const userData = {
    name: 'Trần Thu Trang',
    points: 850,
    tier: 'Vàng',
    nextTier: 'Kim Cương',
    pointsForNextTier: 1000,
  };

  return (
    <div className="bg-slate-50 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Ví điểm thưởng</h1>
          <p className="mt-2 text-lg text-slate-600">Quản lý điểm thưởng và theo dõi hạng thành viên của bạn.</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Points & Tier */}
          <div className="md:col-span-1 space-y-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/80 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-sm font-medium text-slate-500">Điểm hiện tại</p>
              <p className="mt-1 text-5xl font-bold text-indigo-600 tracking-tight">{userData.points.toLocaleString('vi-VN')}</p>
              <p className="mt-2 text-sm text-slate-500">Điểm</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/80 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-sm font-medium text-slate-500">Hạng thành viên</p>
              <div className={`mt-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-lg font-semibold ${tierColors[userData.tier]}`}>
                <Award className="w-5 h-5" />
                {userData.tier}
              </div>
            </motion.div>
            
            <TierProgressBar 
              currentPoints={userData.points}
              pointsForNextTier={userData.pointsForNextTier}
              currentTier={userData.tier}
              nextTier={userData.nextTier}
            />
          </div>

          {/* Right Column: Transaction History */}
          <motion.div 
            className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200/80"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-xl font-bold text-slate-800">Lịch sử giao dịch</h2>
            <div className="mt-4">
              <div className="flex space-x-1 rounded-lg bg-slate-100 p-1">
                <button onClick={() => setFilter('all')} className={`w-full rounded-md py-2 text-sm font-medium transition-colors ${filter === 'all' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:bg-white/60'}`}>Tất cả</button>
                <button onClick={() => setFilter('earn')} className={`w-full rounded-md py-2 text-sm font-medium transition-colors ${filter === 'earn' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:bg-white/60'}`}>Tích điểm</button>
                <button onClick={() => setFilter('spend')} className={`w-full rounded-md py-2 text-sm font-medium transition-colors ${filter === 'spend' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:bg-white/60'}`}>Dùng điểm</button>
              </div>
            </div>
            <ul className="mt-4 divide-y divide-slate-200/80">
              <AnimatePresence mode="wait">
                {visibleTransactions.map((transaction, index) => (
                  <TransactionItem key={transaction.id} transaction={transaction} index={index} />
                ))}
              </AnimatePresence>
            </ul>
            {filteredTransactions.length > 5 && (
              <div className="mt-4 text-center">
                <button 
                  onClick={() => setShowAll(!showAll)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  {showAll ? 'Thu gọn' : 'Xem tất cả'}
                  {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
