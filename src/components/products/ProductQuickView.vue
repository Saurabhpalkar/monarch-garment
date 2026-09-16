<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import { X, Heart, ShoppingBag, MessageCircle, Check, ArrowRight } from 'lucide-vue-next';
import { Product } from '../../types';
import { useCart } from '../../composables/useCart';
import { useWishlist } from '../../composables/useWishlist';
import { useWhatsApp } from '../../composables/useWhatsApp';

interface Props {
  product: Product | null;
  isOpen: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'close'): void;
}>();

const { addToCart } = useCart();
const { isInWishlist, toggleWishlist } = useWishlist();
const { sendProductEnquiry } = useWhatsApp();

const selectedSize = ref('');
const selectedColor = ref('');
const activeImage = ref('');
const quantity = ref(1);
const addedSuccess = ref(false);

watch(
  () => props.product,
  (newProduct) => {
    if (newProduct) {
      selectedSize.value = newProduct.sizes[0] || 'M';
      selectedColor.value = newProduct.colors[0] || 'Standard';
      activeImage.value = newProduct.images[0] || '';
      quantity.value = 1;
      addedSuccess.value = false;
    }
  },
  { immediate: true }
);

const handleAddToCart = () => {
  if (!props.product) return;
  addToCart(props.product, selectedSize.value, selectedColor.value, quantity.value);
  addedSuccess.value = true;
  setTimeout(() => {
    addedSuccess.value = false;
  }, 2000);
};

const handleWhatsAppEnquiry = () => {
  if (!props.product) return;
  sendProductEnquiry(props.product, selectedSize.value, selectedColor.value);
};
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isOpen && product"
      class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      @click.self="emit('close')"
    >
      <div class="relative w-full max-w-4xl bg-[#111111] border border-[#2B2B2B] shadow-2xl my-8 overflow-hidden">
        <!-- Close button -->
        <button
          @click="emit('close')"
          class="absolute top-4 right-4 z-20 p-2 bg-[#0B0B0B]/80 text-[#AAA] hover:text-white border border-[#333] hover:border-[#D4AF6A] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X class="w-5 h-5" />
        </button>

        <div class="grid grid-cols-1 md:grid-cols-2">
          <!-- Image Column -->
          <div class="relative bg-[#161616] p-6 flex flex-col justify-between aspect-[3/4] md:aspect-auto">
            <div class="w-full h-full max-h-[460px] overflow-hidden flex items-center justify-center">
              <img
                :src="activeImage"
                :alt="product.name"
                class="w-full h-full object-cover object-center"
              />
            </div>

            <!-- Mini Thumbnails if multiple -->
            <div v-if="product.images.length > 1" class="flex gap-2 pt-4 justify-center">
              <button
                v-for="(img, idx) in product.images"
                :key="idx"
                @click="activeImage = img"
                :class="[
                  'w-12 h-16 border overflow-hidden transition-opacity cursor-pointer',
                  activeImage === img ? 'border-[#D4AF6A]' : 'border-[#333] opacity-60 hover:opacity-100'
                ]"
              >
                <img :src="img" class="w-full h-full object-cover" />
              </button>
            </div>
          </div>

          <!-- Product Details Column -->
          <div class="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <span class="text-[10px] tracking-[0.3em] uppercase text-[#D4AF6A] font-semibold block mb-1">
                {{ product.category.replace('-', ' ') }}
              </span>

              <h2 class="font-serif text-xl sm:text-2xl font-bold text-white leading-snug">
                {{ product.name }}
              </h2>

              <div class="flex items-baseline gap-3 my-3">
                <span class="font-sans text-xl font-bold text-white tracking-wide">
                  ₹{{ product.price.toLocaleString('en-IN') }}
                </span>
                <span
                  v-if="product.originalPrice && product.originalPrice > product.price"
                  class="text-xs text-[#777] line-through"
                >
                  ₹{{ product.originalPrice.toLocaleString('en-IN') }}
                </span>
              </div>

              <p class="text-xs text-[#AAA] leading-relaxed line-clamp-3 font-light">
                {{ product.description }}
              </p>
            </div>

            <!-- Options: Sizes & Colors -->
            <div class="space-y-4 pt-4 border-t border-[#222]">
              <!-- Size selector -->
              <div>
                <div class="flex justify-between text-xs mb-2">
                  <span class="text-[#888] uppercase tracking-wider text-[10px]">Select Size</span>
                  <span class="text-[#D4AF6A] font-medium text-[11px]">Selected: {{ selectedSize }}</span>
                </div>
                <div class="flex flex-wrap gap-2">
                  <button
                    v-for="s in product.sizes"
                    :key="s"
                    @click="selectedSize = s"
                    :class="[
                      'w-10 h-10 flex items-center justify-center text-xs border uppercase transition-colors cursor-pointer',
                      selectedSize === s
                        ? 'bg-[#D4AF6A] text-[#0B0B0B] border-[#D4AF6A] font-bold'
                        : 'bg-[#181818] text-[#DDD] border-[#333] hover:border-[#555]'
                    ]"
                  >
                    {{ s }}
                  </button>
                </div>
              </div>

              <!-- Color selector -->
              <div v-if="product.colors.length > 0">
                <div class="flex justify-between text-xs mb-2">
                  <span class="text-[#888] uppercase tracking-wider text-[10px]">Tone / Color</span>
                  <span class="text-white text-[11px]">{{ selectedColor }}</span>
                </div>
                <div class="flex flex-wrap gap-2">
                  <button
                    v-for="c in product.colors"
                    :key="c"
                    @click="selectedColor = c"
                    :class="[
                      'px-3 py-1.5 text-xs border transition-colors cursor-pointer',
                      selectedColor === c
                        ? 'bg-[#252525] border-[#D4AF6A] text-[#D4AF6A] font-medium'
                        : 'bg-[#181818] border-[#333] text-[#AAA] hover:text-white'
                    ]"
                  >
                    {{ c }}
                  </button>
                </div>
              </div>
            </div>

            <!-- Actions -->
            <div class="space-y-3 pt-4 border-t border-[#222]">
              <div class="flex gap-3">
                <!-- Add to Bag -->
                <button
                  @click="handleAddToCart"
                  class="flex-1 py-3.5 px-4 bg-[#D4AF6A] hover:bg-[#E8D5A8] text-[#0B0B0B] text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Check v-if="addedSuccess" class="w-4 h-4 text-emerald-900" />
                  <ShoppingBag v-else class="w-4 h-4" />
                  <span>{{ addedSuccess ? 'Added to Bag' : 'Add to Bag' }}</span>
                </button>

                <!-- Wishlist Toggle -->
                <button
                  @click="toggleWishlist(product.id)"
                  class="p-3.5 bg-[#181818] hover:bg-[#222] border border-[#333] hover:border-[#D4AF6A] text-white flex items-center justify-center transition-colors cursor-pointer"
                  :aria-label="isInWishlist(product.id) ? 'Remove from wishlist' : 'Save to wishlist'"
                >
                  <Heart
                    :class="[
                      'w-4 h-4',
                      isInWishlist(product.id) ? 'fill-[#D4AF6A] text-[#D4AF6A]' : 'text-white'
                    ]"
                  />
                </button>
              </div>

              <!-- WhatsApp Enquiry Direct Button -->
              <button
                @click="handleWhatsAppEnquiry"
                class="w-full py-3 px-4 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle class="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </button>

              <RouterLink
                :to="`/product/${product.slug}`"
                @click="emit('close')"
                class="block text-center text-xs text-[#888] hover:text-[#D4AF6A] uppercase tracking-wider pt-1 transition-colors"
              >
                View Complete Product Details <ArrowRight class="w-3 h-3 inline-block ml-1" />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
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
