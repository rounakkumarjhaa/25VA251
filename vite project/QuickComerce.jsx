import { useState, useEffect } from "react";

const categories = [
  { id: "all", label: "All", icon: "🛒" },
  { id: "fruits", label: "Fruits & Veggies", icon: "🥦" },
  { id: "dairy", label: "Dairy", icon: "🥛" },
  { id: "snacks", label: "Snacks", icon: "🍿" },
  { id: "beverages", label: "Beverages", icon: "🧃" },
  { id: "bakery", label: "Bakery", icon: "🥐" },
  { id: "personal", label: "Personal Care", icon: "🧴" },
];

const products = [
  { id: 1, name: "Bananas", category: "fruits", price: 29, originalPrice: 39, unit: "1 dozen", emoji: "🍌", badge: "BESTSELLER", deliveryMin: 8 },
  { id: 2, name: "Spinach", category: "fruits", price: 35, originalPrice: null, unit: "250g", emoji: "🥬", badge: null, deliveryMin: 10 },
  { id: 3, name: "Tomatoes", category: "fruits", price: 42, originalPrice: 55, unit: "500g", emoji: "🍅", badge: "25% OFF", deliveryMin: 9 },
  { id: 4, name: "Full Cream Milk", category: "dairy", price: 68, originalPrice: null, unit: "1L", emoji: "🥛", badge: null, deliveryMin: 7 },
  { id: 5, name: "Paneer", category: "dairy", price: 89, originalPrice: 110, unit: "200g", emoji: "🧀", badge: "19% OFF", deliveryMin: 8 },
  { id: 6, name: "Curd", category: "dairy", price: 55, originalPrice: null, unit: "400g", emoji: "🍶", badge: "FRESH", deliveryMin: 7 },
  { id: 7, name: "Lay's Classic", category: "snacks", price: 20, originalPrice: null, unit: "26g", emoji: "🥔", badge: null, deliveryMin: 12 },
  { id: 8, name: "Biscuits Oreo", category: "snacks", price: 30, originalPrice: 35, unit: "120g", emoji: "🍪", badge: "14% OFF", deliveryMin: 11 },
  { id: 9, name: "Peanut Butter", category: "snacks", price: 149, originalPrice: null, unit: "400g", emoji: "🥜", badge: null, deliveryMin: 10 },
  { id: 10, name: "Orange Juice", category: "beverages", price: 99, originalPrice: 120, unit: "1L", emoji: "🍊", badge: "17% OFF", deliveryMin: 9 },
  { id: 11, name: "Coconut Water", category: "beverages", price: 45, originalPrice: null, unit: "500ml", emoji: "🥥", badge: "POPULAR", deliveryMin: 8 },
  { id: 12, name: "Green Tea", category: "beverages", price: 199, originalPrice: null, unit: "25 bags", emoji: "🍵", badge: null, deliveryMin: 12 },
  { id: 13, name: "Sourdough Bread", category: "bakery", price: 120, originalPrice: null, unit: "400g loaf", emoji: "🍞", badge: "FRESH", deliveryMin: 6 },
  { id: 14, name: "Croissants", category: "bakery", price: 89, originalPrice: 99, unit: "4 pcs", emoji: "🥐", badge: "10% OFF", deliveryMin: 7 },
  { id: 15, name: "Face Wash", category: "personal", price: 149, originalPrice: 179, unit: "100ml", emoji: "🧴", badge: "17% OFF", deliveryMin: 14 },
  { id: 16, name: "Shampoo", category: "personal", price: 249, originalPrice: null, unit: "200ml", emoji: "💆", badge: null, deliveryMin: 14 },
];

const banners = [
  { bg: "#FEF3C7", accent: "#F59E0B", text: "🚀 Delivery in under 10 minutes", sub: "Fresh from local stores" },
  { bg: "#DCFCE7", accent: "#16A34A", text: "🥬 Farm-fresh veggies daily", sub: "Sourced directly from farmers" },
  { bg: "#EFF6FF", accent: "#3B82F6", text: "💳 Flat ₹50 off on first order", sub: "Use code: FIRST50" },
];

export default function QuickCart() {
  const [cart, setCart] = useState({});
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState("home");
  const [bannerIdx, setBannerIdx] = useState(0);
  const [addedFlash, setAddedFlash] = useState(null);

  useEffect(() => {
    const t = setInterval(() => setBannerIdx(i => (i + 1) % banners.length), 3500);
    return () => clearInterval(t);
  }, []);

  const addToCart = (product) => {
    setCart(prev => ({ ...prev, [product.id]: (prev[product.id] || 0) + 1 }));
    setAddedFlash(product.id);
    setTimeout(() => setAddedFlash(null), 600);
  };

  const removeFromCart = (productId) => {
    setCart(prev => {
      const updated = { ...prev };
      if (updated[productId] > 1) updated[productId]--;
      else delete updated[productId];
      return updated;
    });
  };

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const p = products.find(p => p.id === Number(id));
    return sum + (p ? p.price * qty : 0);
  }, 0);

  const filteredProducts = products.filter(p => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const banner = banners[bannerIdx];

  const styles = {
    app: {
      fontFamily: "'Nunito', 'Segoe UI', sans-serif",
      background: "#FAFAF7",
      minHeight: "100vh",
      maxWidth: 430,
      margin: "0 auto",
      position: "relative",
      boxShadow: "0 0 40px rgba(0,0,0,0.08)",
    },
    header: {
      background: "#1A1A2E",
      padding: "16px 16px 12px",
      position: "sticky",
      top: 0,
      zIndex: 100,
    },
    logo: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 10,
    },
    logoText: {
      color: "#fff",
      fontSize: 20,
      fontWeight: 800,
      letterSpacing: "-0.5px",
    },
    deliveryBadge: {
      background: "#22C55E",
      color: "#fff",
      fontSize: 10,
      fontWeight: 700,
      padding: "2px 8px",
      borderRadius: 20,
      letterSpacing: "0.5px",
    },
    searchBar: {
      display: "flex",
      alignItems: "center",
      background: "#2D2D44",
      borderRadius: 12,
      padding: "8px 12px",
      gap: 8,
    },
    searchInput: {
      background: "none",
      border: "none",
      outline: "none",
      color: "#fff",
      fontSize: 14,
      flex: 1,
      "::placeholder": { color: "#888" },
    },
    banner: {
      margin: "12px 12px 0",
      background: banner.bg,
      borderRadius: 14,
      padding: "14px 16px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      transition: "all 0.4s ease",
    },
    bannerText: {
      fontSize: 14,
      fontWeight: 700,
      color: "#1a1a1a",
      marginBottom: 2,
    },
    bannerSub: {
      fontSize: 11,
      color: "#555",
    },
    bannerDot: (active) => ({
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: active ? banner.accent : "#ccc",
      transition: "background 0.3s",
    }),
    categories: {
      display: "flex",
      gap: 8,
      overflowX: "auto",
      padding: "12px 12px",
      scrollbarWidth: "none",
    },
    catChip: (active) => ({
      display: "flex",
      alignItems: "center",
      gap: 4,
      padding: "6px 12px",
      borderRadius: 20,
      background: active ? "#1A1A2E" : "#fff",
      color: active ? "#fff" : "#444",
      border: `1.5px solid ${active ? "#1A1A2E" : "#E5E5E5"}`,
      fontSize: 12,
      fontWeight: 600,
      whiteSpace: "nowrap",
      cursor: "pointer",
      transition: "all 0.2s",
      flexShrink: 0,
    }),
    sectionTitle: {
      fontSize: 16,
      fontWeight: 800,
      color: "#1a1a1a",
      padding: "4px 12px 8px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10,
      padding: "0 12px 80px",
    },
    card: (flashed) => ({
      background: "#fff",
      borderRadius: 14,
      overflow: "hidden",
      border: "1px solid #F0F0F0",
      transform: flashed ? "scale(0.97)" : "scale(1)",
      transition: "transform 0.15s",
    }),
    cardImg: {
      background: "#F8F8F3",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 48,
      height: 90,
    },
    cardBody: {
      padding: "8px 10px 10px",
    },
    cardName: {
      fontSize: 13,
      fontWeight: 700,
      color: "#1a1a1a",
      marginBottom: 2,
    },
    cardUnit: {
      fontSize: 11,
      color: "#999",
      marginBottom: 6,
    },
    priceRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    price: {
      fontSize: 15,
      fontWeight: 800,
      color: "#1a1a1a",
    },
    originalPrice: {
      fontSize: 11,
      color: "#aaa",
      textDecoration: "line-through",
    },
    addBtn: {
      background: "#1A1A2E",
      color: "#fff",
      border: "none",
      borderRadius: 8,
      padding: "5px 12px",
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer",
    },
    qtyControl: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      background: "#F0F0F0",
      borderRadius: 8,
      padding: "2px 6px",
    },
    qtyBtn: {
      background: "#1A1A2E",
      color: "#fff",
      border: "none",
      borderRadius: 5,
      width: 22,
      height: 22,
      fontSize: 14,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
    },
    qtyNum: {
      fontSize: 14,
      fontWeight: 700,
      minWidth: 16,
      textAlign: "center",
      color: "#1a1a1a",
    },
    badge: (text) => ({
      display: "inline-block",
      fontSize: 9,
      fontWeight: 800,
      padding: "2px 6px",
      borderRadius: 5,
      marginBottom: 4,
      background: text === "FRESH" ? "#DCFCE7" : text === "POPULAR" || text === "BESTSELLER" ? "#FEF3C7" : "#FEE2E2",
      color: text === "FRESH" ? "#15803D" : text === "POPULAR" || text === "BESTSELLER" ? "#B45309" : "#B91C1C",
      letterSpacing: "0.4px",
    }),
    cartBar: {
      position: "sticky",
      bottom: 0,
      left: 0,
      right: 0,
      background: "#1A1A2E",
      padding: "12px 16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: "20px 20px 0 0",
      cursor: "pointer",
    },
    cartBarLeft: {
      display: "flex",
      alignItems: "center",
      gap: 10,
    },
    cartCountBubble: {
      background: "#22C55E",
      color: "#fff",
      borderRadius: 8,
      padding: "4px 10px",
      fontSize: 13,
      fontWeight: 700,
    },
    cartBarText: {
      color: "#fff",
      fontSize: 14,
      fontWeight: 700,
    },
    cartBarPrice: {
      color: "#22C55E",
      fontSize: 16,
      fontWeight: 800,
    },
    viewCartBtn: {
      color: "#22C55E",
      fontSize: 12,
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      gap: 4,
    },
    // Cart view
    cartHeader: {
      background: "#1A1A2E",
      padding: "16px",
      display: "flex",
      alignItems: "center",
      gap: 12,
    },
    backBtn: {
      background: "rgba(255,255,255,0.1)",
      border: "none",
      color: "#fff",
      borderRadius: 8,
      padding: "6px 10px",
      cursor: "pointer",
      fontSize: 16,
    },
    cartTitle: {
      color: "#fff",
      fontSize: 18,
      fontWeight: 800,
    },
    cartItemList: {
      padding: "12px",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      paddingBottom: 120,
    },
    cartItem: {
      background: "#fff",
      borderRadius: 12,
      padding: "12px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      border: "1px solid #F0F0F0",
    },
    cartItemEmoji: {
      fontSize: 32,
      width: 50,
      height: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#F8F8F3",
      borderRadius: 10,
    },
    cartItemInfo: {
      flex: 1,
    },
    cartItemName: {
      fontSize: 14,
      fontWeight: 700,
      color: "#1a1a1a",
    },
    cartItemUnit: {
      fontSize: 11,
      color: "#999",
    },
    cartItemPrice: {
      fontSize: 14,
      fontWeight: 800,
      color: "#1a1a1a",
      textAlign: "right",
    },
    checkoutBox: {
      position: "sticky",
      bottom: 0,
      background: "#fff",
      borderTop: "1px solid #eee",
      padding: "16px",
      borderRadius: "20px 20px 0 0",
      boxShadow: "0 -4px 20px rgba(0,0,0,0.08)",
    },
    summaryRow: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 13,
      color: "#666",
      marginBottom: 6,
    },
    totalRow: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 16,
      fontWeight: 800,
      color: "#1a1a1a",
      marginBottom: 14,
      paddingTop: 8,
      borderTop: "1px dashed #eee",
    },
    checkoutBtn: {
      width: "100%",
      background: "#1A1A2E",
      color: "#fff",
      border: "none",
      borderRadius: 12,
      padding: "14px",
      fontSize: 15,
      fontWeight: 800,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
    },
    emptyCart: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "80px 20px",
      color: "#999",
    },
    deliveryETA: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      background: "#F0FDF4",
      borderRadius: 10,
      padding: "8px 12px",
      margin: "0 12px 12px",
      fontSize: 12,
      color: "#15803D",
      fontWeight: 600,
    },
  };

  const cartItems = Object.entries(cart).map(([id, qty]) => ({
    product: products.find(p => p.id === Number(id)),
    qty,
  })).filter(item => item.product);

  const deliveryFee = cartTotal > 199 ? 0 : 25;
  const discount = Math.floor(cartTotal * 0.05);

  if (view === "cart") {
    return (
      <div style={styles.app}>
        <div style={styles.cartHeader}>
          <button style={styles.backBtn} onClick={() => setView("home")}>←</button>
          <div>
            <div style={styles.cartTitle}>Your Cart 🛒</div>
            <div style={{ color: "#aaa", fontSize: 12 }}>{cartCount} items · Delivered in ~10 mins</div>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div style={styles.emptyCart}>
            <div style={{ fontSize: 64, marginBottom: 16 }}>🛒</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", marginBottom: 8 }}>Your cart is empty</div>
            <div style={{ fontSize: 14 }}>Add items to get started</div>
            <button
              style={{ ...styles.checkoutBtn, marginTop: 24, maxWidth: 200 }}
              onClick={() => setView("home")}
            >
              Browse Products
            </button>
          </div>
        ) : (
          <>
            <div style={styles.cartItemList}>
              {cartItems.map(({ product, qty }) => (
                <div key={product.id} style={styles.cartItem}>
                  <div style={styles.cartItemEmoji}>{product.emoji}</div>
                  <div style={styles.cartItemInfo}>
                    <div style={styles.cartItemName}>{product.name}</div>
                    <div style={styles.cartItemUnit}>{product.unit}</div>
                    <div style={{ ...styles.qtyControl, marginTop: 6, display: "inline-flex" }}>
                      <button style={styles.qtyBtn} onClick={() => removeFromCart(product.id)}>−</button>
                      <span style={styles.qtyNum}>{qty}</span>
                      <button style={styles.qtyBtn} onClick={() => addToCart(product)}>+</button>
                    </div>
                  </div>
                  <div style={styles.cartItemPrice}>₹{product.price * qty}</div>
                </div>
              ))}
            </div>
            <div style={styles.checkoutBox}>
              <div style={styles.summaryRow}>
                <span>Subtotal</span>
                <span>₹{cartTotal}</span>
              </div>
              <div style={styles.summaryRow}>
                <span>Delivery Fee</span>
                <span style={{ color: deliveryFee === 0 ? "#16A34A" : "#1a1a1a" }}>
                  {deliveryFee === 0 ? "FREE 🎉" : `₹${deliveryFee}`}
                </span>
              </div>
              <div style={styles.summaryRow}>
                <span>Discount (5%)</span>
                <span style={{ color: "#16A34A" }}>−₹{discount}</span>
              </div>
              <div style={styles.totalRow}>
                <span>Total</span>
                <span>₹{cartTotal + deliveryFee - discount}</span>
              </div>
              <button style={styles.checkoutBtn}>
                ⚡ Place Order · ₹{cartTotal + deliveryFee - discount}
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div style={styles.app}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.logo}>
          <span style={{ fontSize: 22 }}>⚡</span>
          <span style={styles.logoText}>QuickCart</span>
          <div style={{ flex: 1 }} />
          <span style={styles.deliveryBadge}>10-MIN DELIVERY</span>
        </div>
        <div style={styles.searchBar}>
          <span style={{ fontSize: 16 }}>🔍</span>
          <input
            style={styles.searchInput}
            placeholder="Search groceries, snacks..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              style={{ background: "none", border: "none", color: "#aaa", cursor: "pointer", fontSize: 16 }}
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Delivery ETA */}
      <div style={styles.deliveryETA}>
        <span>🟢</span>
        <span>Delivering to <strong>Sector 14, Ghaziabad</strong> · Estimated 8–10 mins</span>
      </div>

      {/* Banner */}
      <div style={styles.banner}>
        <div>
          <div style={styles.bannerText}>{banner.text}</div>
          <div style={styles.bannerSub}>{banner.sub}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {banners.map((_, i) => <div key={i} style={styles.bannerDot(i === bannerIdx)} />)}
        </div>
      </div>

      {/* Categories */}
      <div style={styles.categories}>
        {categories.map(cat => (
          <div
            key={cat.id}
            style={styles.catChip(activeCategory === cat.id)}
            onClick={() => setActiveCategory(cat.id)}
          >
            <span>{cat.icon}</span>
            <span>{cat.label}</span>
          </div>
        ))}
      </div>

      {/* Section title */}
      <div style={styles.sectionTitle}>
        {searchQuery ? `Results for "${searchQuery}"` : activeCategory === "all" ? "🔥 Popular Items" : categories.find(c => c.id === activeCategory)?.label}
        <span style={{ fontSize: 13, fontWeight: 400, color: "#999", marginLeft: 8 }}>
          {filteredProducts.length} items
        </span>
      </div>

      {/* Product Grid */}
      <div style={styles.grid}>
        {filteredProducts.map(product => (
          <div key={product.id} style={styles.card(addedFlash === product.id)}>
            <div style={styles.cardImg}>{product.emoji}</div>
            <div style={styles.cardBody}>
              {product.badge && <div style={styles.badge(product.badge)}>{product.badge}</div>}
              <div style={styles.cardName}>{product.name}</div>
              <div style={styles.cardUnit}>{product.unit} · ~{product.deliveryMin} mins</div>
              <div style={styles.priceRow}>
                <div>
                  <span style={styles.price}>₹{product.price}</span>
                  {product.originalPrice && (
                    <span style={{ ...styles.originalPrice, marginLeft: 4 }}>₹{product.originalPrice}</span>
                  )}
                </div>
                {cart[product.id] ? (
                  <div style={styles.qtyControl}>
                    <button style={styles.qtyBtn} onClick={() => removeFromCart(product.id)}>−</button>
                    <span style={styles.qtyNum}>{cart[product.id]}</span>
                    <button style={styles.qtyBtn} onClick={() => addToCart(product)}>+</button>
                  </div>
                ) : (
                  <button style={styles.addBtn} onClick={() => addToCart(product)}>+</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Bar */}
      {cartCount > 0 && (
        <div style={styles.cartBar} onClick={() => setView("cart")}>
          <div style={styles.cartBarLeft}>
            <span style={styles.cartCountBubble}>{cartCount}</span>
            <span style={styles.cartBarText}>View Cart</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={styles.cartBarPrice}>₹{cartTotal}</span>
            <span style={{ color: "#fff", fontSize: 16 }}>→</span>
          </div>
        </div>
      )}
    </div>
  );
}