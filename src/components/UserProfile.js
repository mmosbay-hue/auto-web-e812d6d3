import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Edit, Camera, Shield, Bell, Trash2, KeyRound, Save, X } from 'lucide-react';

const tierColors = {
  'Đồng': 'bg-orange-100 text-orange-800',
  'Bạc': 'bg-slate-200 text-slate-800',
  'Vàng': 'bg-yellow-100 text-yellow-800',
  'Kim Cương': 'bg-blue-100 text-blue-800',
};

const ProfileInfoRow = ({ icon: Icon, label, value, isEditing, onChange, name, type = 'text' }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center py-4 border-b border-slate-200/80">
    <div className="flex items-center text-slate-500">
      <Icon className="w-5 h-5 mr-3 text-slate-400 flex-shrink-0" />
      <span className="font-medium text-sm">{label}</span>
    </div>
    <div className="md:col-span-2">
      {isEditing ? (
        <input 
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition text-sm text-slate-800"
        />
      ) : (
        <span className="text-slate-800 font-semibold text-sm">{value}</span>
      )}
    </div>
  </div>
);

const ToggleSwitch = ({ enabled, setEnabled }) => (
  <button
    type="button"
    className={`${enabled ? 'bg-indigo-600' : 'bg-slate-300'} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
    onClick={() => setEnabled(!enabled)}
  >
    <span
      aria-hidden="true"
      className={`${enabled ? 'translate-x-5' : 'translate-x-0'} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
    />
  </button>
);

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: 'Nguyễn Văn An',
    email: 'nguyen.van.an@email.com',
    phone: '0987 654 321',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    memberTier: 'Vàng',
    joinDate: '15/03/2022',
    address: '123 Đường ABC, Quận 1, TP. Hồ Chí Minh',
    twoFactorEnabled: true,
    notifications: {
      promotions: true,
      updates: false,
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleToggleChange = (name) => {
    setUser(prev => ({ ...prev, notifications: { ...prev.notifications, [name]: !prev.notifications[name] } }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.div initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Hồ sơ của bạn</h1>
          <p className="mt-1 text-sm text-slate-500">Quản lý thông tin cá nhân, cài đặt và bảo mật tài khoản.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div variants={itemVariants} className="lg:col-span-1 space-y-8">
            {/* Profile Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/80 text-center">
              <div className="relative w-32 h-32 mx-auto group">
                <img src={user.avatarUrl} alt="Avatar" className="rounded-full w-full h-full object-cover ring-4 ring-white shadow-md" />
                <label htmlFor="avatar-upload" className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <Camera className="w-6 h-6" />
                  <input id="avatar-upload" type="file" className="hidden" />
                </label>
              </div>
              <h2 className="mt-4 text-xl font-bold text-slate-900">{user.name}</h2>
              <p className="text-sm text-slate-500">{user.email}</p>
              <div className="mt-4">
                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${tierColors[user.memberTier]}`}>
                  Thành viên {user.memberTier}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-400">Tham gia ngày {user.joinDate}</p>
            </div>
          </motion.div>

          <div className="lg:col-span-2 space-y-8">
            {/* Personal Info Card */}
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/80">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-slate-900">Thông tin cá nhân</h3>
                <button 
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  {isEditing ? <><X className="w-4 h-4 mr-1"/> Hủy</> : <><Edit className="w-4 h-4 mr-1"/> Chỉnh sửa</>}
                </button>
              </div>
              <ProfileInfoRow icon={User} label="Họ và tên" name="name" value={user.name} isEditing={isEditing} onChange={handleInputChange} />
              <ProfileInfoRow icon={Mail} label="Email" name="email" value={user.email} isEditing={isEditing} onChange={handleInputChange} type="email" />
              <ProfileInfoRow icon={Phone} label="Số điện thoại" name="phone" value={user.phone} isEditing={isEditing} onChange={handleInputChange} />
              <ProfileInfoRow icon={MapPin} label="Địa chỉ" name="address" value={user.address} isEditing={isEditing} onChange={handleInputChange} />
              {isEditing && (
                <div className="mt-6 flex justify-end">
                  <button 
                    onClick={() => setIsEditing(false)}
                    className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-sm hover:bg-indigo-700 transition-colors text-sm font-semibold"
                  >
                    <Save className="w-4 h-4 mr-2" /> Lưu thay đổi
                  </button>
                </div>
              )}
            </motion.div>

            {/* Security Card */}
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/80">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Bảo mật</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <KeyRound className="w-5 h-5 mr-3 text-slate-400"/>
                    <span className="text-sm font-medium text-slate-600">Đổi mật khẩu</span>
                  </div>
                  <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-800">Thay đổi</button>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 mr-3 text-slate-400"/>
                    <span className="text-sm font-medium text-slate-600">Xác thực hai yếu tố (2FA)</span>
                  </div>
                  <ToggleSwitch enabled={user.twoFactorEnabled} setEnabled={(val) => setUser(p => ({...p, twoFactorEnabled: val}))} />
                </div>
              </div>
            </motion.div>

            {/* Notifications Card */}
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/80">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Cài đặt thông báo</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Bell className="w-5 h-5 mr-3 text-slate-400"/>
                    <span className="text-sm font-medium text-slate-600">Nhận thông báo khuyến mãi</span>
                  </div>
                  <ToggleSwitch enabled={user.notifications.promotions} setEnabled={() => handleToggleChange('promotions')} />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Bell className="w-5 h-5 mr-3 text-slate-400"/>
                    <span className="text-sm font-medium text-slate-600">Nhận cập nhật giao dịch</span>
                  </div>
                  <ToggleSwitch enabled={user.notifications.updates} setEnabled={() => handleToggleChange('updates')} />
                </div>
              </div>
            </motion.div>

            {/* Danger Zone */}
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-sm border border-red-300">
              <h3 className="text-lg font-bold text-red-700 mb-2">Vùng nguy hiểm</h3>
              <p className="text-sm text-slate-600 mb-4">Các hành động sau đây không thể hoàn tác. Hãy chắc chắn trước khi thực hiện.</p>
              <button className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg shadow-sm hover:bg-red-700 transition-colors text-sm font-semibold">
                <Trash2 className="w-4 h-4 mr-2" /> Xóa tài khoản
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
