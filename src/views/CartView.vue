<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { Trash2, ShoppingBag, ArrowRight, MessageCircle, MapPin, ShieldCheck } from 'lucide-vue-next';
import { useCart } from '../composables/useCart';
import { useWhatsApp } from '../composables/useWhatsApp';
import PremiumButton from '../components/common/PremiumButton.vue';

const { cart, removeFromCart, updateQuantity, clearCart, cartTotal, totalItems } = useCart();
const { checkoutViaWhatsApp } = useWhatsApp();

const customerName = ref('');
const customerPhone = ref('');
const deliveryType = ref<'store_pickup' | 'home_delivery'>('store_pickup');
const customerNotes = ref('');

const handleWhatsAppCheckout = () => {
  if (cart.value.length === 0) return;
  checkoutViaWhatsApp(
    cart.value,
    cartTotal.value,
    customerName.value,
    customerPhone.value,
    deliveryType.value === 'store_pickup' ? 'Store Pickup at Parkar Complex, Chiplun' : 'Delivery / Courier'
  );
};
</script>

<template>
  <div class="bg-[#0B0B0B] text-[#F5F1E8] min-h-screen pt-28 pb-24">
    <!-- Header -->
    <div class="border-b border-[#1E1E1E] bg-[#0E0E0E] py-14 px-4 sm:px-6 lg:px-8 text-center mb-12">
      <div class="max-w-4xl mx-auto">
        <span class="text-[10px] tracking-[0.35em] uppercase text-[#D4AF6A] font-semibold block mb-2">
          CURATED SELECTION
        </span>
        <h1 class="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wider text-white">
          SHOPPING BAG ({{ totalItems }})
        </h1>
        <div class="w-16 h-0.5 bg-[#D4AF6A] mx-auto my-4" />
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Active Cart Grid -->
      <div v-if="cart.length > 0" class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <!-- Cart Items List (7 cols) -->
        <div class="lg:col-span-7 space-y-4 text-left">
          <div class="flex items-center justify-between pb-3 border-b border-[#222] text-xs text-[#888]">
            <span>GARMENTS IN BAG</span>
            <button @click="clearCart" class="text-xs text-red-400 hover:underline">
              Clear Bag
            </button>
          </div>

          <div
            v-for="item in cart"
            :key="`${item.product.id}-${item.selectedSize}-${item.selectedColor}`"
            class="p-4 sm:p-5 bg-[#121212] border border-[#222] flex gap-4 sm:gap-6 items-center"
          >
            <!-- Thumbnail -->
            <RouterLink
              :to="`/product/${item.product.slug}`"
              class="w-20 sm:w-24 aspect-[3/4] shrink-0 overflow-hidden bg-[#181818] border border-[#333]"
            >
              <img
                :src="item.product.images[0]"
                :alt="item.product.name"
                class="w-full h-full object-cover"
              />
            </RouterLink>

            <!-- Details -->
            <div class="flex-grow space-y-1 sm:space-y-2">
              <span class="text-[9px] uppercase tracking-wider text-[#888]">
                {{ item.product.category.replace('-', ' ') }}
              </span>

              <RouterLink
                :to="`/product/${item.product.slug}`"
                class="block font-serif text-sm sm:text-base font-bold text-white hover:text-[#D4AF6A] transition-colors"
              >
                {{ item.product.name }}
              </RouterLink>

              <div class="flex items-center gap-3 text-xs text-[#AAA]">
                <span>Size: <strong class="text-white">{{ item.selectedSize }}</strong></span>
                <span>•</span>
                <span>Tone: <strong class="text-white">{{ item.selectedColor }}</strong></span>
              </div>

              <!-- Price & Quantity -->
              <div class="flex items-center justify-between pt-2">
                <span class="font-sans text-sm sm:text-base font-bold text-white">
                  ₹{{ (item.product.price * item.quantity).toLocaleString('en-IN') }}
                </span>

                <!-- Quantity Controls -->
                <div class="flex items-center border border-[#333] bg-[#181818]">
                  <button
                    @click="updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity - 1)"
                    class="px-2.5 py-1 text-xs text-white hover:text-[#D4AF6A]"
                  >
                    -
                  </button>
                  <span class="px-3 py-1 text-xs text-white font-mono">{{ item.quantity }}</span>
                  <button
                    @click="updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity + 1)"
                    class="px-2.5 py-1 text-xs text-white hover:text-[#D4AF6A]"
                  >
                    +
                  </button>
                </div>

                <button
                  @click="removeFromCart(item.product.id, item.selectedSize, item.selectedColor)"
                  class="p-2 text-[#777] hover:text-red-400 transition-colors"
                  title="Remove"
                >
                  <Trash2 class="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Checkout & Summary Card (5 cols) -->
        <div class="lg:col-span-5 bg-[#111111] border border-[#242424] p-6 sm:p-8 space-y-6 text-left">
          <div>
            <h3 class="font-serif text-xl font-bold uppercase text-white mb-1">
              Order Summary
            </h3>
            <p class="text-xs text-[#888]">
              Reserve items for Chiplun store trial or direct WhatsApp ordering.
            </p>
          </div>

          <!-- Customer details form for seamless checkout -->
          <div class="space-y-3 pt-4 border-t border-[#222]">
            <div>
              <label class="block text-[10px] uppercase tracking-wider text-[#AAA] mb-1 font-medium">
                Your Name (Optional)
              </label>
              <input
                v-model="customerName"
                type="text"
                placeholder="e.g. Farhan Shaikh"
                class="w-full bg-[#181818] border border-[#333] px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF6A]"
              />
            </div>

            <div>
              <label class="block text-[10px] uppercase tracking-wider text-[#AAA] mb-1 font-medium">
                Phone Number (Optional)
              </label>
              <input
                v-model="customerPhone"
                type="tel"
                placeholder="e.g. +91 98000 00000"
                class="w-full bg-[#181818] border border-[#333] px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF6A]"
              />
            </div>

            <div>
              <label class="block text-[10px] uppercase tracking-wider text-[#AAA] mb-1 font-medium">
                Fulfillment Preference
              </label>
              <div class="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  @click="deliveryType = 'store_pickup'"
                  :class="[
                    'p-2.5 border text-center transition-colors cursor-pointer',
                    deliveryType === 'store_pickup'
                      ? 'bg-[#1F1F1F] border-[#D4AF6A] text-[#D4AF6A] font-medium'
                      : 'bg-[#161616] border-[#2A2A2A] text-[#888]'
                  ]"
                >
                  Store Pickup (Chiplun)
                </button>
                <button
                  type="button"
                  @click="deliveryType = 'home_delivery'"
                  :class="[
                    'p-2.5 border text-center transition-colors cursor-pointer',
                    deliveryType === 'home_delivery'
                      ? 'bg-[#1F1F1F] border-[#D4AF6A] text-[#D4AF6A] font-medium'
                      : 'bg-[#161616] border-[#2A2A2A] text-[#888]'
                  ]"
                >
                  Delivery Inquiry
                </button>
              </div>
            </div>
          </div>

          <!-- Total Calculation -->
          <div class="space-y-2 pt-4 border-t border-[#222] text-xs">
            <div class="flex justify-between text-[#AAA]">
              <span>Subtotal:</span>
              <span class="text-white font-medium">₹{{ cartTotal.toLocaleString('en-IN') }}</span>
            </div>
            <div class="flex justify-between text-[#AAA]">
              <span>Store Trial / Hold:</span>
              <span class="text-emerald-400 font-medium">Free of Charge</span>
            </div>
            <div class="flex justify-between text-base font-bold text-white pt-2 border-t border-[#222]">
              <span>Total Estimated:</span>
              <span class="text-[#D4AF6A] font-sans">₹{{ cartTotal.toLocaleString('en-IN') }}</span>
            </div>
          </div>

          <!-- Primary Checkout Button via WhatsApp -->
          <button
            @click="handleWhatsAppCheckout"
            class="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-[#0B0B0B] font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <MessageCircle class="w-4 h-4 text-[#0B0B0B]" />
            <span>Checkout Via WhatsApp</span>
          </button>

          <p class="text-[10px] text-[#777] text-center">
            Instantly sends your selected sizes and pieces to our store directors at Parkar Complex for immediate reservation.
          </p>
        </div>
      </div>

      <!-- Empty Cart State -->
      <div v-else class="text-center py-20 px-4 border border-[#1E1E1E] bg-[#0E0E0E] max-w-xl mx-auto space-y-6">
        <div class="w-16 h-16 rounded-full bg-[#181818] border border-[#2B2B2B] flex items-center justify-center mx-auto text-[#D4AF6A]">
          <ShoppingBag class="w-7 h-7" />
        </div>
        <h2 class="font-serif text-2xl font-bold uppercase text-white">
          YOUR BAG IS EMPTY
        </h2>
        <p class="text-xs text-[#888] max-w-sm mx-auto leading-relaxed">
          Discover our curated shirts, trousers, and luxury staples to build your signature wardrobe.
        </p>
        <PremiumButton to="/collection" variant="gold" size="md">
          Explore Collection
        </PremiumButton>
      </div>
    </div>
  </div>
</template>
