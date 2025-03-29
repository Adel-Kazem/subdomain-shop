const PRODUCTS = [
    {
        id: 4,
        name: 'Ultra HD 4K Webcam',
        description: 'Professional 4K webcam with auto-focus, low-light correction, and dual microphones for crystal-clear video calls and streaming.',
        price: 129.99,
        rating: 4.6,
        stock: 25,
        images: [
            'https://images.unsplash.com/photo-1611928547982-11a79f7f4a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1608438581951-2741c76284f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        ],
        colors: [
            'Black',
            'Silver'
        ],
        features: [
            '4K Ultra HD Resolution',
            'Auto-focus',
            'Low-light Correction',
            'Dual Stereo Microphones',
            'Privacy Shutter'
        ]
    },
    {
        id: 5,
        name: 'Ergonomic Wireless Mouse',
        description: 'Reduce wrist strain with this vertically designed ergonomic mouse. Features adjustable DPI, smooth tracking, and long battery life for comfortable productivity.',
        price: 49.99,
        rating: 4.4,
        stock: 38,
        images: [
            'https://images.unsplash.com/photo-1615663245611-4af4d1a1c6a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1594050035600-2f35aebd44b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1629429408209-1f9129f1db17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        ],
        colors: [
            'Graphite',
            'White'
        ],
        features: [
            'Vertical Ergonomic Design',
            'Adjustable DPI (800/1200/1600)',
            'Wireless 2.4GHz Connection',
            'Rechargeable Battery',
            '6 Programmable Buttons'
        ]
    },
    {
        id: 9,
        name: 'True Wireless Noise-Cancelling Earbuds',
        description: 'Immerse yourself in sound with these true wireless earbuds featuring active noise cancellation, secure fit, and a compact charging case.',
        price: 149.99,
        rating: 4.5,
        stock: 30,
        images: [
            'https://images.unsplash.com/photo-1606801434969-196168b1a7a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1610438235354-daa5ec75a837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1620331317383-17164a3d78e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        ],
        colors: [
            'Midnight Black',
            'Pearl White',
            'Navy Blue'
        ],
        features: [
            'Active Noise Cancellation (ANC)',
            'Transparency Mode',
            'Bluetooth 5.2',
            'IPX4 Water Resistant',
            '6-hour Playtime (24h with case)',
            'Wireless Charging Case'
        ]
    },
    {
        id: 10,
        name: 'Surround Sound Gaming Headset',
        description: 'Gain a competitive edge with immersive 7.1 surround sound. This gaming headset features a noise-cancelling microphone, comfortable earcups, and RGB lighting.',
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
            'White/Blue Accent'
        ],
        features: [
            'Virtual 7.1 Surround Sound',
            'Noise-Cancelling Boom Mic',
            'Comfortable Over-Ear Design',
            'Customizable RGB Lighting',
            'On-Earcup Controls'
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