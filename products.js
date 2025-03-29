const PRODUCTS = [
 {
 id: 1,
 name: 'Premium Wireless Headphones',
 description: 'Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and ultra-comfortable ear cushions for all-day listening.',
 price: 199.99,
 rating: 4.7,
 stock: 15,
 images: [
 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
 ],
 colors: [
 'Black',
 'White',
 'Blue'
 ],
 features: [
 'Active Noise Cancellation',
 'Bluetooth 5.0',
 '30-hour battery life',
 'Quick charge (5 min = 3 hours)',
 'Voice assistant compatible'
 ]
 },
 {
 id: 2,
 name: 'Smart Fitness Tracker',
 description: 'Track your health and fitness goals with our advanced smart fitness tracker. Monitor heart rate, sleep patterns, and activity levels with precision sensors and a vibrant display.',
 price: 89.99,
 rating: 4.5,
 stock: 42,
 images: [
 'https://images.unsplash.com/photo-1575311373937-040b8e1fd6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
 'https://images.unsplash.com/photo-1626371353531-b2cf4f8a4038?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
 ],
 colors: [
 'Black',
 'Red',
 'Green'
 ],
 features: [
 'Heart rate monitoring',
 'Sleep tracking',
 'Water resistant (50m)',
 '7-day battery life',
 'Smartphone notifications'
 ]
 },
 {
 id: 3,
 name: 'Portable Bluetooth Speaker',
 description: 'Take your music anywhere with our compact yet powerful Bluetooth speaker. Featuring 360° sound, waterproof design, and 12 hours of playback for the perfect outdoor companion.',
 price: 59.99,
 rating: 4.2,
 stock: 28,
 images: [
 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
 'https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
 'https://images.unsplash.com/photo-1596455607563-ad6193f76b17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
 ],
 colors: [
 'Orange',
 'Blue',
 'Gray'
 ],
 features: [
 'Waterproof (IPX7)',
 '360° sound technology',
 '12-hour battery life',
 'Built-in microphone',
 'Portable design'
 ]
 },
 {
 id: 5,
 name: 'broo title',
 description: 'ooooooooooooh sdfs df',
 price: 1111111,
 rating: 4.4,
 stock: 38,
 images: [
 'https://images.unsplash.com/photo-1615663245611-4af4d1a1c6a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
 'https://images.unsplash.com/photo-1594050035600-2f35aebd44b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
 'https://images.unsplash.com/photo-1629429408209-1f9129f1db17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
 ],
 colors: [
 'Graphite',
 'White',
 'blue'
 ],
 features: [
 'this is a just feature brooooooo'
 ]
 },
 {
 id: 6,
 name: 'RGB Mechanical Keyboard',
 description: 'Experience tactile typing with our RGB mechanical keyboard. Full N-key rollover, customizable lighting effects, and durable construction for gaming and typing enthusiasts.',
 price: 119.99,
 rating: 4.8,
 stock: 19,
 images: [
 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
 'https://images.unsplash.com/photo-1595225476474-8756307b084e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
 'https://images.unsplash.com/photo-1605297433480-0423e17b6a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
 ],
 colors: [
 'Black',
 'Gunmetal Gray'
 ],
 features: [
 'Tactile Mechanical Switches (Blue)',
 'Customizable RGB Backlighting',
 'Full N-Key Rollover',
 'Detachable USB-C Cable',
 'Aluminum Top Plate'
 ]
 },
 {
 id: 7,
 name: 'Classic Smartwatch',
 description: 'Stay connected and stylish with our Classic Smartwatch. Features a round AMOLED display, GPS, heart rate tracking, and customizable watch faces.',
 price: 249.99,
 rating: 4.6,
 stock: 22,
 images: [
 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
 'https://images.unsplash.com/photo-1617625802912-cde586faf331?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
 ],
 colors: [
 'Silver Stainless Steel',
 'Black Aluminum',
 'Rose Gold'
 ],
 features: [
 'NFC Payments'
 ]
 },
 {
 id: 10,
 name: 'no no no',
 description: 'wtttttttttttttttg',
 price: 89.99,
 rating: 4.4,
 stock: 26,
 images: [
 'https://images.unsplash.com/photo-1616440347328-a3f89d73ef80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
 'https://images.unsplash.com/photo-1585136146633-99a5589970ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
 'https://images.unsplash.com/photo-1614687164617-c69f1db6997e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
 ],
 colors: [
 'Black/Red Accent',
 'blue'
 ],
 features: [
 'Virtual 7.1 Surround Sound',
 'Noise-Cancelling Boom Mic',
 'Comfortable Over-Ear Design'
 ]
 },
 {
 id: 11,
 name: 'PaperLight E-Reader',
 description: 'Read comfortably day or night with the glare-free PaperLight display. Features adjustable warm light, weeks of battery life, and access to millions of books.',
 price: 129.99,
 rating: 4.7,
 stock: 18,
 images: [
 'https://images.unsplash.com/photo-1605799040034-951789f7a18a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
 'https://images.unsplash.com/photo-1583468982073-50746b5d28f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
 'https://images.unsplash.com/photo-1620375399860-76a7d8927a10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
 ],
 colors: [
 'Black',
 'Twilight Blue'
 ],
 features: [
 '6.8" Glare-Free Display (300 ppi)',
 'Adjustable Warm Light',
 'Waterproof (IPX8)',
 'Weeks of Battery Life',
 '8GB Storage'
 ]
 },
 {
 id: 12,
 name: 'Compact Folding Drone',
 description: 'Capture stunning aerial shots with this easy-to-fly folding drone. Features a 4K camera, intelligent flight modes, and a 30-minute flight time.',
 price: 449.99,
 rating: 4.5,
 stock: 12,
 images: [
 'https://images.unsplash.com/photo-1507582020474-9a35b76552d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
 'https://images.unsplash.com/photo-1591795960133-9d62c1a916d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
 ],
 colors: [
 'Gray',
 'White'
 ],
 features: [
 '4K Video Camera',
 '3-Axis Gimbal Stabilization',
 '30-Minute Max Flight Time',
 'Intelligent Flight Modes (Follow Me, Orbit)',
 'GPS + Obstacle Sensing',
 'Foldable & Portable'
 ]
 },
 {
 id: 13,
 name: 'Smart Home Voice Hub',
 description: 'Control your smart home devices with your voice. Ask questions, play music, set timers, and manage compatible lights, locks, and thermostats with this central hub.',
 price: 99.99,
 rating: 4.6,
 stock: 35,
 images: [
 'https://images.unsplash.com/photo-1518444065439-e933c06ce9ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
 'https://images.unsplash.com/photo-1605440417635-54c14c8e8a9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
 ],
 colors: [
 'Charcoal Fabric',
 'Chalk Fabric',
 'Sky Blue Fabric'
 ],
 features: [
 'Voice Assistant Built-in',
 'Multi-room Audio',
 'Smart Home Device Control (Zigbee, Wi-Fi, Bluetooth)',
 'Privacy Controls (Mic Off Button)',
 'Rich Sound Quality'
 ]
 }
];