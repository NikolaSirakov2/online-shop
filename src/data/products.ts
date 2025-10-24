export interface Product {
  id: string
  src: string
  alt: string
  description: string
  rating: number
  currentPrice: number
  originalPrice: number
  category: string
  features: string[]
  sizes: string[]
  colors: string[]
  inStock: boolean
  reviews: {
    id: string
    name: string
    rating: number
    comment: string
    date: string
  }[]
}

// Array of all shoe images from /public/shoes folder
export const products: Product[] = [
  {
    id: 'aqva-shoes',
    src: '/shoes/aqva-shoes.webp',
    alt: 'Aqva Shoes',
    description: 'Professional water sports shoes with excellent grip and quick-dry technology.',
    rating: 4,
    currentPrice: 89.99,
    originalPrice: 119.99,
    category: 'Aqua',
    features: [
      'Quick-dry technology',
      'Superior grip on wet surfaces',
      'Lightweight construction',
      'Breathable mesh upper',
      'Non-slip sole design'
    ],
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['Blue', 'Black', 'White'],
    inStock: true,
    reviews: [
      {
        id: '1',
        name: 'John D.',
        rating: 5,
        comment: 'Perfect for water sports! Dries quickly and provides excellent grip.',
        date: '2024-01-15'
      },
      {
        id: '2',
        name: 'Sarah M.',
        rating: 4,
        comment: 'Great quality and comfortable fit. Highly recommended.',
        date: '2024-01-10'
      }
    ]
  },
  {
    id: 'basketball-shoes',
    src: '/shoes/basketball-shoes.webp',
    alt: 'Basketball Shoes',
    description: 'High-performance basketball shoes with superior ankle support and cushioning.',
    rating: 5,
    currentPrice: 129.99,
    originalPrice: 159.99,
    category: 'Basketball',
    features: [
      'Superior ankle support',
      'Advanced cushioning technology',
      'High-traction outsole',
      'Breathable upper material',
      'Lightweight design'
    ],
    sizes: ['7', '8', '9', '10', '11', '12', '13'],
    colors: ['Red', 'Black', 'White'],
    inStock: true,
    reviews: [
      {
        id: '3',
        name: 'Mike R.',
        rating: 5,
        comment: 'Best basketball shoes I\'ve ever owned. Great ankle support!',
        date: '2024-01-20'
      }
    ]
  },
  {
    id: 'football-shoes',
    src: '/shoes/football-shoes.webp',
    alt: 'Football Shoes',
    description: 'Lightweight football cleats designed for speed and precision on the field.',
    rating: 4,
    currentPrice: 79.99,
    originalPrice: 99.99,
    category: 'Football',
    features: [
      'Lightweight design',
      'Precision traction',
      'Speed-focused construction',
      'Durable materials',
      'Comfortable fit'
    ],
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['Green', 'Black', 'White'],
    inStock: true,
    reviews: [
      {
        id: '4',
        name: 'Alex T.',
        rating: 4,
        comment: 'Great for speed and agility on the field.',
        date: '2024-01-18'
      }
    ]
  },
  {
    id: 'running-shoes',
    src: '/shoes/running-shoes.webp',
    alt: 'Running Shoes',
    description: 'Comfortable running shoes with advanced shock absorption and breathable design.',
    rating: 4,
    currentPrice: 109.99,
    originalPrice: 139.99,
    category: 'Running',
    features: [
      'Advanced shock absorption',
      'Breathable design',
      'Lightweight construction',
      'Cushioned midsole',
      'Flexible outsole'
    ],
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['Blue', 'Black', 'White', 'Gray'],
    inStock: true,
    reviews: [
      {
        id: '5',
        name: 'Emma L.',
        rating: 4,
        comment: 'Very comfortable for long runs. Great shock absorption.',
        date: '2024-01-12'
      }
    ]
  },
  {
    id: 'tennis-shoes',
    src: '/shoes/tennis-shoes.webp',
    alt: 'Tennis Shoes',
    description: 'Durable tennis shoes with excellent lateral support and court-specific traction.',
    rating: 5,
    currentPrice: 95.99,
    originalPrice: 125.99,
    category: 'Tennis',
    features: [
      'Excellent lateral support',
      'Court-specific traction',
      'Durable construction',
      'Comfortable cushioning',
      'Stable platform'
    ],
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['White', 'Black', 'Blue'],
    inStock: true,
    reviews: [
      {
        id: '6',
        name: 'David K.',
        rating: 5,
        comment: 'Perfect for tennis. Great lateral support and traction.',
        date: '2024-01-14'
      }
    ]
  },
  {
    id: 'volleyball-shoes',
    src: '/shoes/voleyball-shoes.webp',
    alt: 'Volleyball Shoes',
    description: 'Volleyball shoes with superior grip and lightweight construction for quick movements.',
    rating: 4,
    currentPrice: 84.99,
    originalPrice: 109.99,
    category: 'Volleyball',
    features: [
      'Superior grip',
      'Lightweight construction',
      'Quick movement support',
      'Cushioned sole',
      'Breathable upper'
    ],
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['Yellow', 'Black', 'White'],
    inStock: true,
    reviews: [
      {
        id: '7',
        name: 'Lisa P.',
        rating: 4,
        comment: 'Great grip on the court. Lightweight and comfortable.',
        date: '2024-01-16'
      }
    ]
  },
  {
    id: 'workout-shoes',
    src: '/shoes/workout-shoes.webp',
    alt: 'Workout Shoes',
    description: 'Versatile training shoes perfect for gym workouts and cross-training activities.',
    rating: 4,
    currentPrice: 99.99,
    originalPrice: 129.99,
    category: 'Training',
    features: [
      'Versatile design',
      'Cross-training support',
      'Stable platform',
      'Comfortable cushioning',
      'Durable construction'
    ],
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['Black', 'Gray', 'White'],
    inStock: true,
    reviews: [
      {
        id: '8',
        name: 'Tom W.',
        rating: 4,
        comment: 'Perfect for all types of workouts. Very versatile.',
        date: '2024-01-11'
      }
    ]
  }
]

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id)
}

export const getProductByIndex = (index: number): Product | undefined => {
  return products[index]
}
