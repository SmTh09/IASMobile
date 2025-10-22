# 🚗 ADD YOUR 5 VEHICLES NOW

## Step 1️⃣: Open Console

Press **F12** on your keyboard

You'll see a panel at the bottom or right side of your browser

Click on the **"Console"** tab

---

## Step 2️⃣: Copy & Paste This

```javascript
await seedVehicles("customer-theo-floyd");
```

**Paste it in the console** and press **Enter**

---

## Step 3️⃣: Wait for Success

You'll see:
```
🚗 Seeding vehicles with LOCAL images...
  ✅ CF-545-YA - BMW 330i xDrive
  ✅ TK-271-GT - BMW 540i xDrive
  ✅ QX-504-AP - BMW 330I XDRIVE A
  ✅ WW-896-BA - BMW 330I XDRIVE A
  ✅ QR-759-HY - BMW X6 XDRIVE35I US

🎉 Successfully seeded 5 vehicles!
```

---

## Step 4️⃣: See Your Vehicles

1. Click **"Login"** button in your app
2. Click **"New Appointment Request"**
3. Click **"Select Car"**
4. **🎉 YOU'LL SEE YOUR 5 VEHICLES WITH IMAGES!**

---

## ✅ DONE!

You now have:
- ✅ 5 BMW vehicles in your database
- ✅ All with beautiful images
- ✅ Ready to select for appointments
- ✅ Working on your local server

---

## 🔄 Want to Start Over?

```javascript
await clearVehicles();              // Delete all
await seedVehicles("customer-theo-floyd");  // Add them back
```

---

## 🎯 Your 5 Vehicles

1. **CF-545-YA** - BMW 330i xDrive (Red car) 🔴
2. **TK-271-GT** - BMW 540i xDrive (Gray car) ⚫
3. **QX-504-AP** - BMW 330I XDRIVE A (White car) ⚪
4. **WW-896-BA** - BMW 330I XDRIVE A (Orange car) 🟠
5. **QR-759-HY** - BMW X6 XDRIVE35I US (SUV) 🚙

---

## 🚨 Problems?

### Console says "seedVehicles is not defined"
→ **Refresh the page** (F5) and try again

### Images don't show up
→ Check that files exist in `/public/assets/car-*.png`

### Can't find the Console
→ Right-click anywhere → **Inspect** → Click **Console** tab

---

## 💡 That's It!

**One command = 5 vehicles ready to use!** 🚀

```javascript
await seedVehicles("customer-theo-floyd");
```
