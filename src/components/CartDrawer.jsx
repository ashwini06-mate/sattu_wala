import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = Math.round(subtotal * discount);
  const total = Math.max(0, subtotal - discountAmount);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'ROASTU20') {
      setDiscount(0.2);
      setPromoApplied(true);
    } else {
      alert('Use promo code ROASTU20 for 20% OFF!');
    }
  };

  const handleCheckout = () => {
    // Trigger festive confetti explosion
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#d97706', '#10b981', '#ffffff']
    });

    setCheckoutSuccess(true);
    setTimeout(() => {
      onClearCart();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md glass-nav border-l border-white/10 text-white p-6 flex flex-col justify-between shadow-2xl relative">

          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              <h2 className="font-display text-xl font-black text-white">Your Sattu Wala Cart</h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                {cartItems.length} items
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-stone-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Checkout Success Screen */}
          {checkoutSuccess ? (
            <div className="my-auto text-center space-y-4 p-6 glass-panel-gold rounded-3xl border border-amber-400/40 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto text-3xl">
                ✓
              </div>
              <h3 className="font-display text-2xl font-black text-white">Order Confirmed!</h3>
              <p className="text-stone-300 text-sm">
                Your cold-brewed Sattu Wala cans are being freshly packed and dispatched via Pan-India express cold-chain delivery.
              </p>
              <div className="p-3 rounded-xl bg-stone-950/80 text-amber-400 text-xs font-mono">
                Tracking ID: RST-{Math.floor(100000 + Math.random() * 900000)}
              </div>
              <button
                onClick={() => {
                  setCheckoutSuccess(false);
                  onClose();
                }}
                className="w-full py-3 rounded-full bg-amber-500 text-stone-950 font-bold text-sm"
              >
                Continue Exploring
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto py-4 space-y-4 my-2 pr-1">
                {cartItems.length === 0 ? (
                  <div className="text-center py-16 space-y-4 text-stone-400">
                    <span className="text-5xl block">🌾</span>
                    <p className="text-sm font-semibold">Your cart is empty.</p>
                    <p className="text-xs text-stone-500">Add a signature Sattu Wala can or customize your own brew!</p>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl glass-panel border border-white/10 flex items-center justify-between gap-3"
                    >
                      <div className="flex-1">
                        <div className="font-bold text-white text-sm">{item.name}</div>
                        <div className="text-xs text-amber-400 font-semibold">{item.protein} Protein</div>
                        <div className="text-xs text-stone-400 mt-1">₹{item.price} each</div>
                      </div>

                      {/* Quantity Modifiers */}
                      <div className="flex items-center gap-2 bg-stone-950/80 p-1.5 rounded-xl border border-white/10">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-md hover:bg-white/10 text-stone-300"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-black text-white px-1">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-md hover:bg-white/10 text-stone-300"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-2 text-stone-500 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Promo Code & Order Summary */}
              {cartItems.length > 0 && (
                <div className="border-t border-white/10 pt-4 space-y-4">
                  {/* Promo Code Input */}
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Promo code (ROASTU20)"
                      className="flex-1 px-3 py-2 rounded-xl bg-stone-950 border border-white/10 text-white text-xs font-semibold uppercase placeholder-stone-500 focus:outline-none focus:border-amber-400"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold text-xs"
                    >
                      Apply
                    </button>
                  </form>

                  {promoApplied && (
                    <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>20% OFF Discount Applied!</span>
                    </div>
                  )}

                  {/* Calculations */}
                  <div className="space-y-2 text-xs text-stone-300">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-emerald-400 font-semibold">
                        <span>Discount (20%)</span>
                        <span>-₹{discountAmount}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Express Shipping</span>
                      <span className="text-emerald-400 font-semibold">FREE</span>
                    </div>
                    <div className="flex justify-between text-base font-black text-white pt-2 border-t border-white/10">
                      <span>Total Payable</span>
                      <span className="text-amber-400">₹{total}</span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={handleCheckout}
                    className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-amber-500/25"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Pan-India Fresh Delivery • Secure Payment</span>
                  </div>
                </div>
              )}
            </>
          )}

        </div>
      </div>
    </div>
  );
}
