import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LoyaltyWallet from './components/LoyaltyWallet';

export default function App() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <LoyaltyWallet />
      </main>
      <Footer />
    </div>
  );
}
