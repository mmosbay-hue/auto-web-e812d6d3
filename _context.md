### Design Tokens
- **Primary Color**: Indigo (`indigo-600`)
- **Font**: Inter, Sans-serif
- **Border Radius**: `rounded-xl`
- **Shadow Style**: `shadow-sm` / `shadow-lg`

### Components Created
- `src/App.js`: Main application component, renders header, content, and footer.
- `src/components/Header.js`: Responsive top navigation bar with a two-level menu for main features.
- `src/components/Footer.js`: Standard site footer with navigation links and company info.
- `src/components/SignUp.js`: A simple user registration form with fields for name, email, and password.
- `src/components/Login.js`: Màn hình đăng nhập 2 bước sử dụng số điện thoại và xác thực OTP.
- `src/components/ForgotPassword.js`: Màn hình quên mật khẩu với hướng dẫn và trạng thái thành công.
- `src/components/Onboarding.js`: Màn hình onboarding đa bước giới thiệu các chức năng chính cho người dùng mới.
- `src/components/Dashboard.js`: Bảng điều khiển tổng quan hiển thị các chỉ số KPI, biểu đồ doanh thu và hoạt động gần đây.
- `src/components/KpiCard.js`: Thẻ hiển thị một chỉ số hiệu suất chính (KPI) với icon, giá trị, và % thay đổi.
- `src/components/RevenueChart.js`: Biểu đồ doanh thu tương tác cho phép xem theo ngày, tuần, tháng.
- `src/components/CustomerChart.js`: Biểu đồ cột so sánh khách hàng mới và khách hàng quay lại.
- `src/components/RecentActivity.js`: Widget hiển thị các hoạt động gần đây của người dùng.
- `src/components/UserProfile.js`: Trang hồ sơ người dùng, cho phép xem và chỉnh sửa thông tin cá nhân.
- `src/components/LoyaltyWallet.js`: Màn hình ví điểm thưởng hiển thị số điểm, hạng thành viên và lịch sử giao dịch.
- `src/components/TierProgressBar.js`: Thanh tiến trình hiển thị tiến độ lên hạng thành viên. Props: `currentPoints`, `pointsForNextTier`, `currentTier`, `nextTier`.

### Shared Data Shapes
- `navigationItem: { name, href?, submenu?: [{ name, href, icon, description }] }`
- `kpiCard: { title, value, change, changeType, icon, color, bgColor }`
- `revenueDataPoint: { label, value }`
- `customerDataPoint: { label, new, returning }`
- `user: { name, email, phone, avatarUrl, memberTier, address, twoFactorEnabled, notifications: { promotions, updates } }`
- `transaction: { id, type, merchant, description, date, points, icon }`

### Routing Structure
- `/`: Loyalty Wallet
