import { useState } from 'react'

const menuData = [
  {
    category: 'Kahveler',
    items: [
      {
        name: 'Espresso',
        price: '160 TL',
      },
      {
        name: 'Americano',
        price: '210 TL',
      },
      {
        name: 'Macchiato',
        price: '180 TL',
      },
      {
        name: 'Cappucino',
        price: '230 TL',
      },
      {
        name: 'Caffe Latte',
        price: '230 TL',
      },
      {
        name: 'Mocha',
        price: '255 TL',
      },
      {
        name: 'Cold Brew',
        price: '310 TL',
      },
      {
        name: 'Filtre Kahve',
        price: '200 TL',
      },
      {
        name: 'Sütlü Filtre Kahve',
        price: '225 TL',
      },
      {
        name: 'Türk Kahvesi',
        price: '160 TL',
      },
      {
        name: 'Damla Sakızlı Türk Kahvesi',
        price: '180 TL',
      },
      {
        name: 'Menengiç Kahvesi',
        price: '180 TL',
      },
      {
        name: 'Sıcak Çikolata',
        price: '225 TL',
      },
      {
        name: 'Sahlep',
        price: '235 TL',
      },
      {
        name: 'Çay',
        price: '70 TL',
      },
      {
        name: 'Yeşil Çay',
        price: '190 TL',
      },
      {
        name: 'Ihlamur',
        price: '190 TL',
      },
      {
        name: 'Papatya',
        price: '190 TL',
      },
    ],
  },
  {
    category: 'Tatlılar',
    items: [
      {
        name: 'San Sebastian',
        description: 'Belçika çikolatası sosu ile servis edilir.',
        price: '360 TL',
      },
      {
        name: 'Lotus Cheesecake',
        description: 'Orijinal Lotus bisküvisi ve karamelize krema.',
        price: '375 TL',
      },
      {
        name: 'Dubai Çikolatalı Cheesecake',
        description: 'Antep fıstığı ezmesi ve çıtır kadayıf dolgulu.',
        price: '490 TL',
      },
      {
        name: 'İtalyan Tiramisu',
        description: '%100 Mascarpone ve taze espresso ile.',
        price: '340 TL',
      },
      {
        name: 'Çilekli Magnolia',
        description: 'Ev yapımı pastacı kreması ve taze çilekler.',
        price: '310 TL',
      },
      {
        name: 'Belçika Brownie',
        description: 'Cevizli, sıcak servis edilir ve dondurmalıdır.',
        price: '330 TL',
      },
      {
        name: 'Limonlu Merengli Tart',
        description: 'Mayhoş limon kreması ve yakılmış mereng tepeli.',
        price: '320 TL',
      },
      {
        name: 'Profiterol Kulesi',
        description: "3'lü kule, özel bitter çikolata sosu ile.",
        price: '290 TL',
      },
      {
        name: 'Orman Meyveli Pasta',
        description: 'Frambuaz, böğürtlen ve hafif beyaz krema.',
        price: '350 TL',
      },
      {
        name: 'Fıstık Rüyası',
        description: 'Duble Antep fıstıklı, akışkan dolgulu pasta.',
        price: '420 TL',
      },
      {
        name: 'Mozaik Pasta',
        description: 'Anne usulü, bol kakaolu ve bisküvili klasik.',
        price: '240 TL',
      },
      {
        name: 'Budapeşte Roll',
        description: 'Fındıklı beze katmanları ve taze meyveler.',
        price: '380 TL',
      },
      {
        name: 'Sıcak Sufle',
        description: 'Kalbinde akışkan bitter çikolata (15 dk hazırlanma süresi).',
        price: '320 TL',
      },
      {
        name: 'Marlenka (Ballı)',
        description: 'Orijinal tarif, bol cevizli ve ballı katmanlar.',
        price: '280 TL',
      },
      {
        name: 'Waffle Klasik',
        description: 'Taze meyve, 2 çeşit çikolata ve fındık parçaları.',
        price: '390 TL',
      },
      {
        name: 'Havuçlu Tarçınlı Kek',
        description: 'Üzerinde krema peyniri (frosting) ve ceviz ile.',
        price: '260 TL',
      },
      {
        name: 'Karamelli Trileçe',
        description: 'Manda ve inek sütlü, yoğun karamel soslu.',
        price: '270 TL',
      },
      {
        name: 'Vişneli Brownie Cheese',
        description: 'Altı brownie, üstü vişneli cheesecake katmanı.',
        price: '365 TL',
      },
    ],
  },
  {
    category: 'Atıştırmalıklar',
    items: [
      {
        name: 'Çıtır Patates Sepeti',
        description: 'Trüf yağı ve parmesan peyniri rendesi ile.',
        price: '190 TL',
      },
      {
        name: 'Sıcak Kruvasan Sandviç',
        description: 'Füme et, kaşar peyniri ve taze yeşillik.',
        price: '280 TL',
      },
      {
        name: 'Avokadolu Ekşi Maya',
        description: 'Poşe yumurta, çörek otu ve taze lor peyniri.',
        price: '340 TL',
      },
      {
        name: 'Mini Burger Üçlüsü',
        description: 'Klasik, Barbekü ve Acılı soslu 3 mini burger.',
        price: '450 TL',
      },
      {
        name: 'Nachos Tabağı',
        description: 'Eritilmiş peynir, jalapeno ve salsa sos eşliğinde.',
        price: '310 TL',
      },
      {
        name: 'Falafel Tabağı',
        description: '5 adet falafel, humus ve mini pita ekmeği.',
        price: '290 TL',
      },
      {
        name: 'Peynir Tabağı',
        description: '4 çeşit yerli-yabancı peynir, ceviz ve meyve.',
        price: '420 TL',
      },
      {
        name: 'Tavuk Parmak (Nugget)',
        description: 'Özel kaplamalı tavuk göğsü, ballı hardal sos ile.',
        price: '260 TL',
      },
      {
        name: 'Mozzarella Sticks',
        description: '6 adet çıtır çubuk, marinara sos ile.',
        price: '240 TL',
      },
      {
        name: 'Sıcak Sebze Mücver',
        description: 'Yanında süzme yoğurt ve dereotu ile.',
        price: '210 TL',
      },
      {
        name: 'Dana Jambonlu Tost',
        description: 'Ekşi mayalı ekmekte, cheddar ve pesto soslu.',
        price: '250 TL',
      },
      {
        name: 'Sigara Böreği (Sepet)',
        description: '8 adet çıtır börek, yanında acuka ile.',
        price: '180 TL',
      },
      {
        name: 'Quiche (Kiş) Dilimi',
        description: 'Ispanaklı veya Mantarlı günlük taze dilim.',
        price: '230 TL',
      },
      {
        name: 'Sosis Sepeti',
        description: 'Izgara kokteyl sosisler, yanında patates tava.',
        price: '320 TL',
      },
      {
        name: 'Bruschetta Mix',
        description: 'Domatesli, Mantarlı ve Somonlu 3 çeşit.',
        price: '360 TL',
      },
      {
        name: 'Karışık Kuruyemiş',
        description: 'Özel kavrulmuş sıcak lüks kokteyl.',
        price: '170 TL',
      },
      {
        name: 'Meksika Fasulyeli Salata',
        description: 'Hafif ve doyurucu küçük boy kase.',
        price: '260 TL',
      },
      {
        name: 'Çıtır Soğan Halkası',
        description: '10 adet halka, barbekü sos ile.',
        price: '190 TL',
      },
    ],
  },
]

const allMenuItems = menuData.flatMap((group) =>
  group.items.map((item) => ({
    ...item,
    category: group.category,
  })),
)

function App() {
  const [selectedItemName, setSelectedItemName] = useState(allMenuItems[0].name)
  const [quantity, setQuantity] = useState(1)
  const [cart, setCart] = useState([])
  const [orderMessage, setOrderMessage] = useState('')

  const selectedItem = allMenuItems.find((item) => item.name === selectedItemName)

  const addToCart = () => {
    if (!selectedItem) return
    const lineId =
      globalThis.crypto?.randomUUID?.() ??
      `line-${Date.now()}-${Math.random().toString(36).slice(2)}`
    setCart((prev) => [...prev, { ...selectedItem, quantity, lineId }])
    setOrderMessage('')
  }

  const removeFromCart = (lineId) => {
    setCart((prev) => prev.filter((row) => row.lineId !== lineId))
    setOrderMessage('')
  }

  const clearCart = () => {
    setCart([])
    setOrderMessage('')
  }

  const createOrder = () => {
    if (cart.length === 0) {
      setOrderMessage('Lütfen sipariş oluşturmadan önce ürün ekleyin.')
      return
    }
    setOrderMessage('Siparişiniz alındı! Garson beklemeden mutfağa iletildi.')
    setCart([])
  }

  const totalPrice = cart.reduce(
    (sum, item) => sum + Number.parseInt(item.price, 10) * item.quantity,
    0,
  )

  return (
    <>
      <style>{`
        .cafe-page {
          min-height: 100vh;
          padding: 48px 20px 64px;
          background: #ffffff;
          color: #111111;
          font-family: Inter, Segoe UI, Roboto, sans-serif;
        }

        .cafe-container {
          max-width: 1080px;
          margin: 0 auto;
        }

        .cafe-header {
          text-align: center;
          margin-bottom: 42px;
        }

        .cafe-logo {
          display: block;
          width: min(320px, 85vw);
          height: auto;
          margin: 0 auto 14px;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .cafe-subtitle {
          margin: 14px auto 0;
          max-width: 620px;
          color: #111111;
          font-size: clamp(15px, 2vw, 18px);
        }

        .order-section {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 18px;
          margin-bottom: 34px;
        }

        .qr-card,
        .order-card {
          border: 1px solid #d1d5db;
          border-radius: 14px;
          padding: 20px;
          background: #ffffff;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08);
        }

        .qr-card h3,
        .order-card h3 {
          margin: 0 0 12px;
          font-size: 19px;
          color: #111827;
          letter-spacing: -0.01em;
        }

        .qr-card p {
          margin: 0 0 12px;
          color: #374151;
          font-size: 14px;
        }

        .qr-image {
          width: 180px;
          height: 180px;
          border-radius: 10px;
          border: 1px solid #d1d5db;
          background: #fff;
        }

        .order-controls {
          display: grid;
          grid-template-columns: 1fr 120px auto;
          gap: 10px;
          margin-bottom: 14px;
        }

        .field {
          background: #ffffff;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          color: #0f172a;
          padding: 10px 12px;
        }

        .field:focus {
          outline: none;
          border-color: #111827;
        }

        .btn {
          border: 1px solid #111827;
          border-radius: 8px;
          padding: 10px 12px;
          font-weight: 700;
          cursor: pointer;
        }

        .btn-add {
          background: #111827;
          color: #ffffff;
        }

        .btn-create {
          margin-top: 10px;
          background: #ffffff;
          color: #111827;
        }

        .cart-list {
          margin: 0;
          padding: 0;
          list-style: none;
          color: #334155;
        }

        .cart-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 8px 0;
          border-bottom: 1px solid #e5e7eb;
        }

        .cart-row:last-child {
          border-bottom: none;
        }

        .cart-row-text {
          flex: 1;
          min-width: 0;
          font-size: 14px;
          line-height: 1.4;
        }

        .btn-remove {
          flex-shrink: 0;
          padding: 6px 10px;
          font-size: 12px;
          font-weight: 700;
          background: #ffffff;
          color: #b91c1c;
          border: 1px solid #b91c1c;
          border-radius: 8px;
          cursor: pointer;
        }

        .btn-remove:hover {
          background: #fef2f2;
        }

        .cart-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          margin-top: 12px;
        }

        .btn-clear {
          background: #ffffff;
          color: #374151;
          border-color: #9ca3af;
        }

        .btn-clear:hover:not(:disabled) {
          background: #f9fafb;
        }

        .btn-clear:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }

        .cart-total {
          margin-top: 10px;
          font-weight: 700;
          color: #111827;
        }

        .order-message {
          margin-top: 10px;
          font-size: 14px;
          color: #16a34a;
        }

        .menu-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .menu-card {
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 20px;
          padding: 22px;
          background: #ffffff;
          box-shadow: 0 10px 24px rgba(148, 163, 184, 0.24);
          backdrop-filter: blur(8px);
        }

        .menu-card:nth-child(1) {
          background: #ffffff;
        }

        .menu-card:nth-child(2) {
          background: #ffffff;
        }

        .menu-card:nth-child(3) {
          background: #ffffff;
        }

        .menu-category {
          margin: 0 0 18px;
          font-size: 26px;
          color: #111111;
          letter-spacing: -0.01em;
        }

        .menu-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 16px;
        }

        .menu-item {
          border-top: 1px dashed rgba(148, 163, 184, 0.45);
          padding-top: 14px;
        }

        .menu-item:first-child {
          border-top: 0;
          padding-top: 0;
        }

        .item-top {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 10px;
          margin-bottom: 6px;
        }

        .item-name {
          margin: 0;
          font-size: 18px;
          color: #111111;
        }

        .item-price {
          font-weight: 700;
          color: #111111;
          background: #ffffff;
          border: 1px solid #111111;
          padding: 4px 10px;
          border-radius: 999px;
          white-space: nowrap;
          font-size: 13px;
        }

        .item-description {
          margin: 0;
          color: #64748b;
          line-height: 1.5;
          font-size: 14px;
        }

        @media (max-width: 960px) {
          .order-section {
            grid-template-columns: 1fr;
          }

          .order-controls {
            grid-template-columns: 1fr;
          }

          .menu-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <main className="cafe-page">
        <div className="cafe-container">
          <header className="cafe-header">
            <h1 className="sr-only">Cursor Cafe</h1>
            <img
              className="cafe-logo"
              src="/cafe-logo.svg"
              alt=""
              width="268"
              height="56"
            />
            <p className="cafe-subtitle">
              Taze demlenen kahveler, imza tatlılar ve gün boyu keyifle eşlik eden
              atıştırmalıklar.
            </p>
          </header>

          <section className="order-section">
            <article className="qr-card">
              <h3>Dijital Sipariş QR</h3>
              <p>Masadaki QR kodu taratarak sipariş ekranını doğrudan açabilirsiniz.</p>
              <img
                className="qr-image"
                src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=https://cursor-cafe.local/order"
                alt="Cursor Cafe sipariş QR kodu"
              />
            </article>

            <article className="order-card">
              <h3>Hızlı Sipariş Paneli</h3>
              <div className="order-controls">
                <select
                  className="field"
                  value={selectedItemName}
                  onChange={(event) => setSelectedItemName(event.target.value)}
                >
                  {allMenuItems.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.category} - {item.name} ({item.price})
                    </option>
                  ))}
                </select>

                <input
                  className="field"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(event) => setQuantity(Number(event.target.value) || 1)}
                />

                <button className="btn btn-add" type="button" onClick={addToCart}>
                  Ekle
                </button>
              </div>

              <ol className="cart-list">
                {cart.map((item) => (
                  <li className="cart-row" key={item.lineId}>
                    <span className="cart-row-text">
                      {item.quantity} × {item.name} — {item.price}
                    </span>
                    <button
                      className="btn-remove"
                      type="button"
                      onClick={() => removeFromCart(item.lineId)}
                      aria-label={`${item.name} satırını sil`}
                    >
                      Sil
                    </button>
                  </li>
                ))}
              </ol>

              <div className="cart-actions">
                <button
                  className="btn btn-clear"
                  type="button"
                  onClick={clearCart}
                  disabled={cart.length === 0}
                >
                  Sepeti temizle
                </button>
              </div>

              <p className="cart-total">Toplam: {totalPrice} TL</p>
              <button className="btn btn-create" type="button" onClick={createOrder}>
                Siparişi Oluştur
              </button>
              {orderMessage && <p className="order-message">{orderMessage}</p>}
            </article>
          </section>

          <section className="menu-grid">
            {menuData.map((group) => (
              <article className="menu-card" key={group.category}>
                <h2 className="menu-category">{group.category}</h2>
                <ul className="menu-list">
                  {group.items.map((item) => (
                    <li className="menu-item" key={item.name}>
                      <div className="item-top">
                        <h3 className="item-name">{item.name}</h3>
                        <span className="item-price">{item.price}</span>
                      </div>
                      {item.description && (
                        <p className="item-description">{item.description}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        </div>
      </main>
    </>
  )
}

export default App
