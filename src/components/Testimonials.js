import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: '"Hệ thống đã giúp chúng tôi tăng 30% lượng khách hàng quay lại. Giao diện thân thiện và đội ngũ hỗ trợ rất nhiệt tình. Rất khuyến khích các chủ cửa hàng sử dụng!"',
    author: 'Chị An, Chủ The Coffee House',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    quote: '"Trợ lý AI thực sự là một cuộc cách mạng. Chúng tôi đã tối ưu được chi phí marketing và hiểu rõ hơn về khách hàng của mình nhờ các gợi ý thông minh từ hệ thống."',
    author: 'Anh Bình, Quản lý Chuỗi Spa',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    quote: '"Giải pháp thanh toán QR rất nhanh và tiện. Khách hàng của tôi rất thích vì không cần mang theo tiền mặt hay thẻ. Tích hợp tích điểm tự động là một điểm cộng lớn."',
    author: 'Anh Khoa, Chủ cửa hàng thời trang',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-slate-900">Khách hàng nói gì về chúng tôi</h2>
          <p className="mt-4 text-lg text-slate-500">
            Lắng nghe chia sẻ từ các doanh nghiệp đã tin tưởng và thành công cùng LoyalAI.
          </p>
        </div>
        <motion.div 
          className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-8">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <blockquote className="mt-6 text-slate-700">
                  <p>{testimonial.quote}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center">
                  <img className="h-12 w-12 rounded-full" src={testimonial.avatar} alt={testimonial.author} />
                  <div className="ml-4">
                    <div className="text-base font-medium text-slate-900">{testimonial.author}</div>
                  </div>
                </figcaption>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
