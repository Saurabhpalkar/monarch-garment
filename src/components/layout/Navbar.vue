<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-vue-next';
import MobileMenu from './MobileMenu.vue';
import { useCart } from '../../composables/useCart';
import { useWishlist } from '../../composables/useWishlist';

const router = useRouter();
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const isSearchOpen = ref(false);
const searchQuery = ref('');

const { itemCount, openCart } = useCart();
const { wishlistCount } = useWishlist();

const handleScroll = () => {
  if (typeof window !== 'undefined') {
    isScrolled.value = window.scrollY > 40;
  }
};

const handleSearchSubmit = () => {
  if (searchQuery.value.trim()) {
    router.push({ path: '/collection', query: { q: searchQuery.value.trim() } });
    isSearchOpen.value = false;
    searchQuery.value = '';
  }
};

onMounted(() => {
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
      isScrolled
        ? 'bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#222222] py-3.5 shadow-2xl'
        : 'bg-gradient-to-b from-[#0B0B0B]/80 via-[#0B0B0B]/30 to-transparent py-5'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Left: Monarch Brand Logo -->
        <RouterLink to="/" class="flex items-center gap-3 group">
          <!-- Monarch Royal Crown SVG -->
          <div class="relative w-9 h-9 flex items-center justify-center">
            <svg class="w-8 h-8 text-[#D4AF6A] group-hover:scale-105 transition-transform" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 12L63 38L88 28L78 68H22L12 28L37 38L50 12Z" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round" fill="none" />
              <circle cx="50" cy="12" r="3.5" fill="currentColor" />
              <circle cx="88" cy="28" r="3.5" fill="currentColor" />
              <circle cx="12" cy="28" r="3.5" fill="currentColor" />
              <path d="M28 76H72M34 84H66" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
              <text x="50" y="56" text-anchor="middle" font-family="'Playfair Display', Georgia, serif" font-size="22" font-weight="700" fill="currentColor">M</text>
            </svg>
          </div>
          
          <div class="flex flex-col text-left">
            <span class="font-serif text-lg sm:text-xl font-bold tracking-[0.25em] text-white leading-none">
              MONARCH
            </span>
            <span class="text-[8px] tracking-[0.38em] text-[#D4AF6A] uppercase font-sans font-medium mt-1">
              MENS WEAR • CHIPLUN
            </span>
          </div>
        </RouterLink>

        <!-- Center: Desktop Navigation Links -->
        <nav class="hidden lg:flex items-center space-x-7 text-[11px] tracking-[0.22em] uppercase font-medium">
          <RouterLink
            to="/"
            class="text-[#CCC] hover:text-[#D4AF6A] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF6A] hover:after:w-full after:transition-all"
            active-class="text-[#D4AF6A] after:w-full"
          >
            HOME
          </RouterLink>

          <RouterLink
            to="/collection"
            class="text-[#CCC] hover:text-[#D4AF6A] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF6A] hover:after:w-full after:transition-all"
            active-class="text-[#D4AF6A] after:w-full"
          >
            COLLECTION
          </RouterLink>

          <RouterLink
            to="/collection?filter=new"
            class="text-[#CCC] hover:text-[#D4AF6A] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF6A] hover:after:w-full after:transition-all"
          >
            NEW ARRIVALS
          </RouterLink>

          <RouterLink
            to="/about"
            class="text-[#CCC] hover:text-[#D4AF6A] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF6A] hover:after:w-full after:transition-all"
            active-class="text-[#D4AF6A] after:w-full"
          >
            ABOUT
          </RouterLink>

          <RouterLink
            to="/store"
            class="text-[#CCC] hover:text-[#D4AF6A] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF6A] hover:after:w-full after:transition-all"
            active-class="text-[#D4AF6A] after:w-full"
          >
            STORE
          </RouterLink>

          <RouterLink
            to="/contact"
            class="text-[#CCC] hover:text-[#D4AF6A] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF6A] hover:after:w-full after:transition-all"
            active-class="text-[#D4AF6A] after:w-full"
          >
            CONTACT
          </RouterLink>
        </nav>

        <!-- Right: Actions (Search, Wishlist, Cart, Mobile Toggle) -->
        <div class="flex items-center space-x-3 sm:space-x-4">
          <!-- Search Button -->
          <button
            @click="isSearchOpen = !isSearchOpen"
            class="p-2 text-[#CCC] hover:text-[#D4AF6A] transition-colors cursor-pointer"
            aria-label="Search Collection"
          >
            <Search class="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <!-- Wishlist Link -->
          <RouterLink
            to="/wishlist"
            class="p-2 text-[#CCC] hover:text-[#D4AF6A] transition-colors relative"
            aria-label="Saved Looks"
          >
            <Heart class="w-4 h-4 sm:w-5 sm:h-5" />
            <span
              v-if="wishlistCount > 0"
              class="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#D4AF6A] text-[#0B0B0B] text-[9px] font-bold flex items-center justify-center leading-none"
            >
              {{ wishlistCount }}
            </span>
          </RouterLink>

          <!-- Cart Link -->
          <RouterLink
            to="/cart"
            class="p-2 text-[#CCC] hover:text-[#D4AF6A] transition-colors relative cursor-pointer"
            aria-label="Shopping Bag"
          >
            <ShoppingBag class="w-4 h-4 sm:w-5 sm:h-5" />
            <span
              v-if="itemCount > 0"
              class="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#D4AF6A] text-[#0B0B0B] text-[9px] font-bold flex items-center justify-center leading-none"
            >
              {{ itemCount }}
            </span>
          </RouterLink>

          <!-- Mobile Hamburger Menu Button -->
          <button
            @click="isMobileMenuOpen = true"
            class="p-2 text-[#CCC] hover:text-white lg:hidden border border-[#333] hover:border-[#D4AF6A] transition-colors"
            aria-label="Open Navigation Menu"
          >
            <Menu class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Expandable Search Overlay -->
      <Transition name="slide-down">
        <div
          v-if="isSearchOpen"
          class="mt-3 py-3 border-t border-[#222] bg-[#0E0E0E]/95 px-3 rounded-sm"
        >
          <form @submit.prevent="handleSearchSubmit" class="flex items-center gap-3">
            <Search class="w-4 h-4 text-[#D4AF6A] shrink-0" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search printed shirts, trousers, selvedge denim, linen..."
              class="w-full bg-transparent text-sm text-white placeholder-[#777] focus:outline-none"
              autofocus
            />
            <button
              type="submit"
              class="text-[10px] uppercase font-semibold text-[#D4AF6A] hover:text-white px-2 py-1"
            >
              Search
            </button>
            <button
              type="button"
              @click="isSearchOpen = false"
              class="text-[#777] hover:text-white p-1"
            >
              <X class="w-4 h-4" />
            </button>
          </form>
        </div>
      </Transition>
    </div>

    <!-- Full-screen Mobile Menu Component -->
    <MobileMenu :isOpen="isMobileMenuOpen" @close="isMobileMenuOpen = false" />
  </header>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.25s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
