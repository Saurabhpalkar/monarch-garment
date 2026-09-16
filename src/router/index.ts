import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Monarch Mens Wear – Premium Men\'s Fashion Boutique | Chiplun',
      description: 'Discover Monarch Mens Wear in Chiplun. Premium printed shirts, tailored trousers, denim, and modern menswear at Parkar Complex.'
    }
  },
  {
    path: '/collection',
    name: 'collection',
    component: () => import('../views/CollectionView.vue'),
    meta: {
      title: 'The Collection | Monarch Mens Wear Chiplun',
      description: 'Browse the complete Monarch menswear catalog: printed resort shirts, crisp formals, pleated trousers, knitwear and festive collections.'
    }
  },
  {
    path: '/collection/:category',
    name: 'category-collection',
    component: () => import('../views/CollectionView.vue'),
    meta: {
      title: 'Curated Category | Monarch Mens Wear',
      description: 'Explore category-specific luxury menswear pieces hand-selected for the modern gentleman.'
    }
  },
  {
    path: '/product/:slug',
    name: 'product-details',
    component: () => import('../views/ProductDetailsView.vue'),
    meta: {
      title: 'Product Details | Monarch Mens Wear',
      description: 'View fabric composition, tailoring specifications, fit details and check boutique availability.'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'The Monarch Standard – About Our Heritage | Chiplun',
      description: 'Learn about the philosophy, textile curation, and leadership behind Chiplun’s premier menswear destination.'
    }
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('../views/StoreView.vue'),
    meta: {
      title: 'Boutique Location & Store Hours | Parkar Complex Chiplun',
      description: 'Visit Monarch Mens Wear at Shop No. 72, Parkar Complex, Chiplun. Open 7 days a week, 10:00 AM – 10:00 PM.'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Concierge & Enquiries | Monarch Mens Wear Chiplun',
      description: 'Connect directly with boutique directors Ahmed Khatib & Gufran Khan for bespoke styling and availability enquiries.'
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue'),
    meta: {
      title: 'Your Boutique Bag | Monarch Mens Wear',
      description: 'Review your selected garments and connect via WhatsApp for instant reservation and dispatch.'
    }
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: () => import('../views/WishlistView.vue'),
    meta: {
      title: 'Personal Wishlist | Monarch Mens Wear',
      description: 'Your saved luxury menswear selections and curated looks.'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    }
    return { top: 0, left: 0, behavior: 'smooth' };
  }
});

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title as string;
  }
  if (to.meta && to.meta.description) {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', to.meta.description as string);
    }
  }
});

export default router;
