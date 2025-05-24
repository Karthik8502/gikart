class Product {
  final String id;
  final String title;
  final String description;
  final double price;
  final String imageUrl;
  final String seller;
  final String category;

  Product({
    required this.id,
    required this.title,
    required this.description,
    required this.price,
    required this.imageUrl,
    required this.seller,
    required this.category,
  });
}

// Featured categories
final List<Map<String, String>> featuredCategories = [
  {
    'title': 'Wallpapers',
    'imageUrl': 'https://picsum.photos/id/1/400/400',
  },
  {
    'title': 'Templates',
    'imageUrl': 'https://picsum.photos/id/2/400/400',
  },
  {
    'title': 'Fonts',
    'imageUrl': 'https://picsum.photos/id/3/400/400',
  },
  {
    'title': 'Presets',
    'imageUrl': 'https://picsum.photos/id/4/400/400',
  },
  {
    'title': 'Icons',
    'imageUrl': 'https://picsum.photos/id/5/400/400',
  },
];

// Sample product data
final List<Product> trendingProducts = [
  Product(
    id: '1',
    title: 'Moody Lightroom Preset',
    description: 'A cinematic preset pack for creating moody and atmospheric photos.',
    price: 24.99,
    imageUrl: 'https://picsum.photos/id/15/400/300',
    seller: 'K Bros Studio',
    category: 'Presets',
  ),
  Product(
    id: '2',
    title: 'Social Media Bundle',
    description: 'Complete Instagram template pack with 50+ unique designs.',
    price: 39.99,
    imageUrl: 'https://picsum.photos/id/16/400/300',
    seller: 'Design Masters',
    category: 'Templates',
  ),
  Product(
    id: '3',
    title: 'Minimal Font Collection',
    description: 'Set of 5 minimal sans-serif fonts perfect for modern designs.',
    price: 49.99,
    imageUrl: 'https://picsum.photos/id/17/400/300',
    seller: 'Typography Lab',
    category: 'Fonts',
  ),
  Product(
    id: '4',
    title: 'Nature Wallpaper Pack',
    description: 'High-resolution nature wallpapers for desktop and mobile.',
    price: 19.99,
    imageUrl: 'https://picsum.photos/id/18/400/300',
    seller: 'Nature Clicks',
    category: 'Wallpapers',
  ),
  Product(
    id: '5',
    title: 'Line Icons Pro',
    description: '1000+ professional line icons for modern UI design.',
    price: 29.99,
    imageUrl: 'https://picsum.photos/id/19/400/300',
    seller: 'Icon Masters',
    category: 'Icons',
  ),
]; 