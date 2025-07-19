export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'casual' | 'street' | 'oversized';
  type: 'shirt' | 'pants';
  description: string;
  sizes: string[];
  // colors: string[];
}

export const products: Product[] = [
  // Casual Wear - Shirts
  {
    id: 'casual-polo-black',
    name: 'Sea Island Polo Shirt Short Sleeve - Black',
    price: 5990,
    image: '/images/balck polo t shirt.webp',
    category: 'casual',
    type: 'shirt',
    description: 'Premium sea island cotton polo shirt with classic fit. Perfect for casual occasions with superior comfort and style.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    // colors: ['Black', 'White', 'Sand', 'Twilight Blue']
  },
  {
    id: 'casual-polo-white',
    name: 'Sea Island Polo Shirt Short Sleeve - White',
    price: 5990,
    image: '/images/White polo t shirt.webp',
    category: 'casual',
    type: 'shirt',
    description: 'Premium sea island cotton polo shirt with classic fit. Perfect for casual occasions with superior comfort and style.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    // colors: ['Black', 'White', 'Sand', 'Twilight Blue']
  },
  {
    id: 'casual-polo-sand',
    name: 'Sea Island Polo Shirt Short Sleeve - Sand',
    price: 5990,
    image: '/images/Beige polo tshirt.webp',
    category: 'casual',
    type: 'shirt',
    description: 'Premium sea island cotton polo shirt with classic fit. Perfect for casual occasions with superior comfort and style.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    // colors: ['Black', 'White', 'Sand', 'Twilight Blue']
  },
  {
    id: 'casual-polo-blue',
    name: 'Sea Island Polo Shirt Short Sleeve - Twilight Blue',
    price: 5990,
    image: '/images/Twilight blue polo tshirt.webp',
    category: 'casual',
    type: 'shirt',
    description: 'Premium sea island cotton polo shirt with classic fit. Perfect for casual occasions with superior comfort and style.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    // colors: ['Black', 'White', 'Sand', 'Twilight Blue']
  },

  // Casual Wear - Pants
  {
    id: 'casual-chinos-beige',
    name: 'Classic Chinos - Beige',
    price: 6500,
    image: '/images/Beige chino pnats.webp',
    category: 'casual',
    type: 'pants',
    description: 'Comfortable classic chinos made from premium cotton blend. Perfect for smart-casual occasions.',
    sizes: ['28', '30', '32', '34', '36', '38'],
    // colors: ['Beige', 'Navy', 'Olive', 'Charcoal']
  },
  {
    id: 'casual-jeans-dark',
    name: 'Comfort Fit Jeans - Dark Wash',
    price: 4980,
    image: '/images/ComfortFitJeans-Darkwash.webp',
    category: 'casual',
    type: 'pants',
    description: 'Premium denim jeans with comfort fit design. Classic dark wash suitable for any casual occasion.',
    sizes: ['28', '30', '32', '34', '36', '38'],
    // colors: ['Dark Wash', 'Light Wash', 'Black']
  },
  {
    id: 'casual-linen-navy',
    name: 'Linen Trousers - Navy',
    price: 7800,
    image: '/images/LinenTrousers-Navy.webp',
    category: 'casual',
    type: 'pants',
    description: 'Breathable linen trousers perfect for warm weather. Elegant and comfortable for casual wear.',
    sizes: ['28', '30', '32', '34', '36', '38'],
    // colors: ['Navy', 'Beige', 'White', 'Olive']
  },
  {
    id: 'casual-joggers-grey',
    name: 'Slim Fit Joggers - Grey',
    price: 6800,
    image: '/images/SlimFitJoggers-Grey.webp',
    category: 'casual',
    type: 'pants',
    description: 'Modern slim fit joggers with premium cotton blend. Perfect for casual comfort and style.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    // colors: ['Grey', 'Black', 'Navy', 'Olive']
  },

  // Street Wear - Shirts
  {
    id: 'street-salty-crew',
    name: 'SALTY CREW Simple Fade Mens Tee',
    price: 4980,
    image: '/images/Streetwear-CREW.jpg',
    category: 'street',
    type: 'shirt',
    description: 'Urban streetwear tee with fade design. Made from premium cotton for ultimate comfort and style.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    // colors: ['Black', 'White', 'Grey', 'Navy']
  },
  {
    id: 'street-santa-cruz',
    name: 'SANTA CRUZ Mens Heavyweight Boxy Tee',
    price: 4980,
    image: '/images/SANTACRUZ-BarbedDotMensHeavyweightBoxyTee.jpg',
    category: 'street',
    type: 'shirt',
    description: 'Heavyweight boxy tee with iconic Santa Cruz branding. Perfect for street style enthusiasts.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    // colors: ['Black', 'White', 'Red', 'Blue']
  },
  {
    id: 'street-primitive',
    name: 'PRIMITIVE Nuevo II Mens Boxy Tee',
    price: 4980,
    image: '/images/PRIMITIVENuevo-MensBoxyTee.jpg',
    category: 'street',
    type: 'shirt',
    description: 'Modern boxy tee with Primitive graphics. Essential piece for contemporary streetwear looks.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    // colors: ['Black', 'White', 'Grey', 'Green']
  },
  {
    id: 'street-lost-hills',
    name: 'LOST IN THE HILLS Shatter Mens Tee',
    price: 4980,
    image: '/images/LOSTINTHEHILLSS-hatterMensTee.jpg',
    category: 'street',
    type: 'shirt',
    description: 'Artistic shatter design tee from Lost in the Hills. Perfect for making a statement on the streets.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    // colors: ['Black', 'White', 'Grey', 'Purple']
  },

  // Street Wear - Pants
  {
    id: 'street-cargo-olive',
    name: 'Cargo Pants - Olive Green',
    price: 7500,
    image: '/images/CargoPants-OliveGreen.webp',
    category: 'street',
    type: 'pants',
    description: 'Tactical-inspired cargo pants with multiple pockets. Perfect for urban streetwear styling.',
    sizes: ['28', '30', '32', '34', '36', '38'],
    // colors: ['Olive Green', 'Black', 'Khaki', 'Grey']
  },
  {
    id: 'street-denim-black',
    name: 'Distressed Denim Jeans - Black',
    price: 8200,
    image: '/images/DistressedDenimJeans-Black.webp',
    category: 'street',
    type: 'pants',
    description: 'Edgy distressed denim with authentic street style. Premium quality with unique wear patterns.',
    sizes: ['28', '30', '32', '34', '36', '38'],
    // colors: ['Black', 'Blue', 'Grey']
  },
  {
    id: 'street-sweatpants-charcoal',
    name: 'Baggy Sweatpants - Charcoal',
    price: 7800,
    image: '/images/BaggySweatpants-Charcoal.webp',
    category: 'street',
    type: 'pants',
    description: 'Comfortable baggy sweatpants with relaxed fit. Essential for streetwear comfort and style.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    // colors: ['Charcoal', 'Black', 'Grey', 'Navy']
  },
  {
    id: 'street-track-red',
    name: 'Track Pants - Red Stripe',
    price: 7200,
    image: '/images/TrackPants-RedStripe.webp',
    category: 'street',
    type: 'pants',
    description: 'Classic track pants with bold red stripe detail. Perfect for athletic-inspired street looks.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    // colors: ['Red Stripe', 'Blue Stripe', 'White Stripe', 'Black']
  },

  // Oversized Wear - Shirts
  {
    id: 'oversized-graphic-abstract',
    name: 'Oversized Graphic Tee - Abstract Print',
    price: 6200,
    image: '/images/OversizedGraphicTee-AbstractPrint.webp',
    category: 'oversized',
    type: 'shirt',
    description: 'Bold oversized tee with abstract graphic print. Perfect for making a statement with comfort.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    // colors: ['Black', 'White', 'Grey', 'Cream']
  },
  {
    id: 'oversized-heavyweight-cream',
    name: 'Heavyweight Oversized Tee - Cream',
    price: 6800,
    image: '/images/HeavyweightOversizedTee-Cream.avif',
    category: 'oversized',
    type: 'shirt',
    description: 'Premium heavyweight cotton in oversized fit. Ultimate comfort meets contemporary style.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    // colors: ['Cream', 'Black', 'White', 'Sand']
  },
  {
    id: 'oversized-vintage-wash',
    name: 'Oversized Vintage Wash Tee',
    price: 5800,
    image: '/images/OversizedVintageWashTee.avif',
    category: 'oversized',
    type: 'shirt',
    description: 'Vintage-inspired oversized tee with authentic wash finish. Retro style with modern comfort.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    // colors: ['Vintage Blue', 'Vintage Black', 'Vintage Grey']
  },
  {
    id: 'oversized-minimalist-white',
    name: 'Minimalist Oversized Tee - White',
    price: 5500,
    image: '/images/MinimalistOversizedTee-White.jpg',
    category: 'oversized',
    type: 'shirt',
    description: 'Clean minimalist design in oversized fit. Essential piece for modern wardrobe.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    // colors: ['White', 'Black', 'Grey', 'Beige']
  },

  // Oversized Wear - Pants
  {
    id: 'oversized-cargo-khaki',
    name: 'Wide Leg Cargo Pants - Khaki',
    price: 8500,
    image: '/images/WideLegCargoPants-Khaki.webp',
    category: 'oversized',
    type: 'pants',
    description: 'Oversized cargo pants with wide leg cut. Multiple pockets with contemporary oversized styling.',
    sizes: ['28', '30', '32', '34', '36', '38'],
    // colors: ['Khaki', 'Black', 'Olive', 'Grey']
  },
  {
    id: 'oversized-jeans-light',
    name: 'Relaxed Fit Jeans - Light Wash',
    price: 7800,
    image: '/images/RelaxedFitJeans-LightWash.webp',
    category: 'oversized',
    type: 'pants',
    description: 'Relaxed fit jeans with light wash finish. Comfortable oversized denim for casual wear.',
    sizes: ['28', '30', '32', '34', '36', '38'],
    // colors: ['Light Wash', 'Medium Wash', 'Dark Wash']
  },
  {
    id: 'oversized-wide-trousers',
    name: 'Wide Leg Trousers - Black',
    price: 8200,
    image: '/images/WideLegTrousers-Black.jpeg',
    category: 'oversized',
    type: 'pants',
    description: 'Elegant wide leg trousers with oversized fit. Perfect for contemporary formal-casual looks.',
    sizes: ['28', '30', '32', '34', '36', '38'],
    // colors: ['Black', 'Navy', 'Grey', 'Beige']
  },
  {
    id: 'oversized-sweatpants-grey',
    name: 'Oversized Sweatpants - Grey',
    price: 6800,
    image: '/images/OversizedSweatpants-Grey.webp',
    category: 'oversized',
    type: 'pants',
    description: 'Ultimate comfort in oversized sweatpants. Perfect for lounging and casual streetwear.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    // colors: ['Grey', 'Black', 'Navy', 'Cream']
  }
];