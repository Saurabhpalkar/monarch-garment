<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { useRoute, useRouter, RouterLink } from 'vue-router';
import {
  Heart,
  ShoppingBag,
  MessageCircle,
  MapPin,
  ShieldCheck,
  RotateCcw,
  Check,
  Share2,
  Sparkles,
  ArrowLeft
} from 'lucide-vue-next';
import { products } from '../data/products';
import { brand } from '../config/brand';
import { Product } from '../types';
import { useCart } from '../composables/useCart';
import { useWishlist } from '../composables/useWishlist';
import { useWhatsApp } from '../composables/useWhatsApp';
import ProductGallery from '../components/products/ProductGallery.vue';
import ProductGrid from '../components/products/ProductGrid.vue';
import ProductQuickView from '../components/products/ProductQuickView.vue';
import PremiumButton from '../components/common/PremiumButton.vue';

const route = useRoute();
const router = useRouter();

const { addToCart } = useCart();
const { isInWishlist, toggleWishlist } = useWishlist();
const { sendProductEnquiry } = useWhatsApp();

const product = ref<Product | null>(null);
const selectedSize = ref('');
const selectedColor = ref('');
const quantity = ref(1);
const isAddedSuccess = ref(false);
const isStoreModalOpen = ref(false);

const quickViewProduct = ref<Product | null>(null);
const isQuickViewOpen = ref(false);

const loadProduct = () => {
  const slug = route.params.slug as string;
  const found = products.find((p) => p.slug === slug);
  if (found) {
    product.value = found;
    selectedSize.value = found.sizes[0] || 'M';
    selectedColor.value = found.colors[0] || 'Standard';
    quantity.value = 1;
    // Set dynamic page title
    document.title = `${found.name} | Monarch Mens Wear Chiplun`;
  } else {
    product.value = null;
  }
};

onMounted(() => {
  loadProduct();
});

watch(
  () => route.params.slug,
  () => {
    loadProduct();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
);

const relatedProducts = computed(() => {
  if (!product.value) return [];
  return products
    .filter((p) => p.id !== product.value?.id && p.category === product.value?.category)
    .slice(0, 4);
});

const handleAddToCart = () => {
  if (!product.value) return;
  addToCart(product.value, selectedSize.value, selectedColor.value, quantity.value);
  isAddedSuccess.value = true;
  setTimeout(() => {
    isAddedSuccess.value = false;
  }, 2500);
};

const handleWhatsAppEnquiry = () => {
  if (!product.value) return;
  sendProductEnquiry(product.value, selectedSize.value, selectedColor.value);
};

const handleShare = async () => {
  if (typeof navigator !== 'undefined' && navigator.share && product.value) {
    try {
      await navigator.share({
        title: `${product.value.name} - Monarch Mens Wear`,
        text: `Take a look at ${product.value.name} available at Monarch Mens Wear in Chiplun.`,
        url: window.location.href
      });
    } catch (e) {
      // User cancelled
    }
  } else if (typeof window !== 'undefined') {
    navigator.clipboard?.writeText(window.location.href);
    alert('Product link copied to clipboard!');
  }
};
</script>

<template>
  <div class="bg-[#0B0B0B] text-[#F5F1E8] min-h-screen pt-24 pb-28">
    <!-- Breadcrumbs / Back navigation -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-[#1C1C1C]">
      <div class="flex items-center justify-between text-xs text-[#888]">
        <div class="flex items-center gap-2">
          <RouterLink to="/collection" class="hover:text-[#D4AF6A] flex items-center gap-1">
            <ArrowLeft class="w-3.5 h-3.5" /> Back to Collection
          </RouterLink>
          <span class="text-[#444]">/</span>
          <span v-if="product" class="text-[#AAA] truncate max-w-[200px] sm:max-w-md">
            {{ product.name }}
          </span>
        </div>

        <button
          @click="handleShare"
          class="flex items-center gap-1.5 text-xs text-[#AAA] hover:text-[#D4AF6A] transition-colors cursor-pointer"
        >
          <Share2 class="w-3.5 h-3.5" />
          <span class="hidden sm:inline">Share</span>
        </button>
      </div>
    </div>

    <!-- Product Details Section -->
    <div v-if="product" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        <!-- Left: Image Gallery (7 cols) -->
        <div class="lg:col-span-7">
          <ProductGallery
            :images="product.images"
            :productName="product.name"
          />
        </div>

        <!-- Right: Product Information & Purchase Suite (5 cols) -->
        <div class="lg:col-span-5 flex flex-col justify-between space-y-8 text-left">
          <div class="space-y-6">
            <!-- Category & Badge -->
            <div class="flex items-center justify-between">
              <span class="text-[10px] tracking-[0.35em] uppercase text-[#D4AF6A] font-semibold">
                {{ product.category.replace('-', ' ') }}
              </span>

              <span
                v-if="product.inStock !== false"
                class="inline-flex items-center gap-1.5 text-[10px] text-emerald-400 uppercase tracking-wider font-semibold"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available in Store
              </span>
            </div>

            <!-- Product Title -->
            <h1 class="font-serif text-2xl sm:text-4xl font-bold uppercase tracking-wide text-white leading-tight">
              {{ product.name }}
            </h1>

            <!-- Price & SKU -->
            <div class="flex items-baseline gap-4 border-b border-[#1E1E1E] pb-5">
              <span class="font-sans text-2xl sm:text-3xl font-bold text-white tracking-wide">
                ₹{{ product.price.toLocaleString('en-IN') }}
              </span>
              <span
                v-if="product.originalPrice && product.originalPrice > product.price"
                class="text-sm text-[#777] line-through font-light"
              >
                ₹{{ product.originalPrice.toLocaleString('en-IN') }}
              </span>
              <span class="text-[10px] text-[#888] font-mono ml-auto">
                TAX INCL.
              </span>
            </div>

            <!-- Description -->
            <p class="text-xs sm:text-sm text-[#AAA] font-light leading-relaxed">
              {{ product.description }}
            </p>

            <!-- Fabric & Fit Meta (if available) -->
            <div class="p-4 bg-[#121212] border border-[#222] space-y-2 text-xs">
              <div v-if="product.fabric" class="flex justify-between">
                <span class="text-[#777] uppercase text-[10px] tracking-wider">Fabrication:</span>
                <span class="text-white font-medium">{{ product.fabric }}</span>
              </div>
              <div v-if="product.fit" class="flex justify-between">
                <span class="text-[#777] uppercase text-[10px] tracking-wider">Silhouette:</span>
                <span class="text-white font-medium">{{ product.fit }}</span>
              </div>
            </div>

            <!-- Size Selector -->
            <div>
              <div class="flex justify-between text-xs mb-2.5">
                <span class="text-[#888] uppercase tracking-wider text-[11px] font-medium">
                  SELECT SIZE
                </span>
                <span class="text-[#D4AF6A] font-semibold text-xs">
                  Active: {{ selectedSize }}
                </span>
              </div>

              <div class="flex flex-wrap gap-2.5">
                <button
                  v-for="s in product.sizes"
                  :key="s"
                  @click="selectedSize = s"
                  :class="[
                    'w-12 h-12 flex items-center justify-center text-xs border uppercase transition-colors select-none cursor-pointer',
                    selectedSize === s
                      ? 'bg-[#D4AF6A] text-[#0B0B0B] border-[#D4AF6A] font-bold shadow-lg'
                      : 'bg-[#141414] text-[#DDD] border-[#2E2E2E] hover:border-[#555]'
                  ]"
                >
                  {{ s }}
                </button>
              </div>
            </div>

            <!-- Color Palette / Variant -->
            <div v-if="product.colors && product.colors.length > 0">
              <div class="flex justify-between text-xs mb-2.5">
                <span class="text-[#888] uppercase tracking-wider text-[11px] font-medium">
                  AVAILABLE TONES
                </span>
                <span class="text-white text-xs">{{ selectedColor }}</span>
              </div>

              <div class="flex flex-wrap gap-2">
                <button
                  v-for="c in product.colors"
                  :key="c"
                  @click="selectedColor = c"
                  :class="[
                    'px-4 py-2 text-xs border transition-colors cursor-pointer',
                    selectedColor === c
                      ? 'bg-[#222] border-[#D4AF6A] text-[#D4AF6A] font-semibold'
                      : 'bg-[#141414] border-[#2A2A2A] text-[#AAA] hover:text-white'
                  ]"
                >
                  {{ c }}
                </button>
              </div>
            </div>

            <!-- Quantity Selector -->
            <div class="flex items-center gap-4 pt-2">
              <span class="text-[11px] uppercase tracking-wider text-[#888]">Quantity:</span>
              <div class="flex items-center border border-[#333] bg-[#141414]">
                <button
                  @click="quantity = Math.max(1, quantity - 1)"
                  class="px-3 py-1 text-white hover:text-[#D4AF6A] text-sm cursor-pointer"
                >
                  -
                </button>
                <span class="px-4 py-1 text-xs text-white font-mono">{{ quantity }}</span>
                <button
                  @click="quantity++"
                  class="px-3 py-1 text-white hover:text-[#D4AF6A] text-sm cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            <!-- Primary Actions (Add to Bag, Wishlist, WhatsApp) -->
            <div class="space-y-3 pt-6 border-t border-[#1E1E1E]">
              <div class="flex gap-3">
                <!-- Add to Bag -->
                <button
                  @click="handleAddToCart"
                  class="flex-1 py-4 px-6 bg-[#D4AF6A] hover:bg-[#E8D5A8] text-[#0B0B0B] font-bold text-xs uppercase tracking-[0.25em] flex items-center justify-center gap-2 transition-all cursor-pointer select-none"
                >
                  <Check v-if="isAddedSuccess" class="w-4 h-4 text-emerald-900" />
                  <ShoppingBag v-else class="w-4 h-4" />
                  <span>{{ isAddedSuccess ? 'Added to Bag' : 'Add to Bag' }}</span>
                </button>

                <!-- Wishlist Toggle -->
                <button
                  @click="toggleWishlist(product.id)"
                  class="p-4 bg-[#141414] hover:bg-[#202020] border border-[#333] hover:border-[#D4AF6A] text-white flex items-center justify-center transition-colors cursor-pointer"
                  :aria-label="isInWishlist(product.id) ? 'Remove from wishlist' : 'Save to wishlist'"
                >
                  <Heart
                    :class="[
                      'w-5 h-5 transition-colors',
                      isInWishlist(product.id) ? 'fill-[#D4AF6A] text-[#D4AF6A]' : 'text-white'
                    ]"
                  />
                </button>
              </div>

              <!-- WhatsApp Enquiry Direct Button -->
              <button
                @click="handleWhatsAppEnquiry"
                class="w-full py-3.5 px-4 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 text-emerald-300 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle class="w-4 h-4" />
                <span>Enquire On WhatsApp</span>
              </button>

              <!-- In-Store Check Button -->
              <button
                @click="isStoreModalOpen = true"
                class="w-full py-3 px-4 bg-[#141414] hover:bg-[#1A1A1A] border border-[#2D2D2D] text-[#AAA] hover:text-white text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MapPin class="w-3.5 h-3.5 text-[#D4AF6A]" />
                <span>Check Availability in Chiplun Store</span>
              </button>
            </div>

            <!-- Boutique Assurance Badges -->
            <div class="grid grid-cols-2 gap-4 pt-6 border-t border-[#1C1C1C] text-[11px] text-[#888]">
              <div class="flex items-start gap-2.5">
                <ShieldCheck class="w-4 h-4 text-[#D4AF6A] shrink-0 mt-0.5" />
                <span>100% Genuine Handpicked Textiles</span>
              </div>
              <div class="flex items-start gap-2.5">
                <Sparkles class="w-4 h-4 text-[#D4AF6A] shrink-0 mt-0.5" />
                <span>Complimentary In-Store Fitting</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Products Section -->
      <div v-if="relatedProducts.length > 0" class="mt-24 pt-16 border-t border-[#1C1C1C]">
        <div class="text-center mb-10">
          <span class="text-[10px] tracking-[0.3em] uppercase text-[#D4AF6A] font-semibold block mb-2">
            CURATED PAIRINGS
          </span>
          <h2 class="font-serif text-2xl sm:text-3xl font-bold uppercase text-white">
            COMPLETE THE ENSEMBLE
          </h2>
        </div>

        <ProductGrid
          :products="relatedProducts"
          @quick-view="quickViewProduct = $event; isQuickViewOpen = true"
        />
      </div>
    </div>

    <!-- Not Found State -->
    <div v-else class="max-w-xl mx-auto text-center py-28 px-4">
      <h2 class="font-serif text-2xl font-bold text-white mb-3">PIECE NOT FOUND</h2>
      <p class="text-xs text-[#888] mb-6">
        This garment may have been archived or is no longer listed in the digital catalogue.
      </p>
      <PremiumButton to="/collection" variant="gold" size="md">
        Return to Collection
      </PremiumButton>
    </div>

    <!-- Store Availability Modal -->
    <Transition name="fade">
      <div
        v-if="isStoreModalOpen && product"
        class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        @click.self="isStoreModalOpen = false"
      >
        <div class="bg-[#121212] border border-[#333] p-6 sm:p-8 max-w-md w-full text-left space-y-4 shadow-2xl">
          <div class="flex items-center justify-between pb-3 border-b border-[#222]">
            <span class="text-[10px] tracking-[0.25em] uppercase text-[#D4AF6A] font-semibold">
              CHIPLUN STORE VERIFICATION
            </span>
            <button @click="isStoreModalOpen = false" class="text-[#777] hover:text-white">✕</button>
          </div>

          <h3 class="font-serif text-lg font-bold text-white">
            {{ product.name }}
          </h3>

          <p class="text-xs text-[#AAA] leading-relaxed">
            This design is in-stock at our Chiplun boutique at Parkar Complex. Sizes <strong class="text-white">{{ product.sizes.join(', ') }}</strong> can be tried on immediately in our trial suite.
          </p>

          <div class="p-3 bg-[#181818] border border-[#292929] text-xs text-[#888] space-y-1">
            <p><strong>Address:</strong> {{ brand.address.line2 }}, {{ brand.address.line1 }}, Chiplun</p>
            <p><strong>Hours:</strong> 10:00 AM – 10:00 PM (Every day, including Mondays)</p>
          </div>

          <div class="flex gap-2 pt-2">
            <button
              @click="handleWhatsAppEnquiry(); isStoreModalOpen = false"
              class="flex-1 py-2.5 bg-[#D4AF6A] text-[#0B0B0B] text-xs uppercase tracking-wider font-bold"
            >
              Ask Stylist on WhatsApp
            </button>
            <RouterLink
              to="/store"
              @click="isStoreModalOpen = false"
              class="px-4 py-2.5 bg-[#181818] border border-[#333] text-white text-xs uppercase tracking-wider text-center"
            >
              Store Info
            </RouterLink>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Quick View Modal for Related Products -->
    <ProductQuickView
      :product="quickViewProduct"
      :isOpen="isQuickViewOpen"
      @close="isQuickViewOpen = false"
    />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
