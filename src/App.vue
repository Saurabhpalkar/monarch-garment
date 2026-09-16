<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './components/layout/Navbar.vue';
import Footer from './components/layout/Footer.vue';
import WhatsAppButton from './components/common/WhatsAppButton.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[#0B0B0B] text-[#F5F1E8] font-sans selection:bg-[#D4AF6A] selection:text-[#0B0B0B]">
    <!-- Persistent Luxury Navigation Header -->
    <Navbar />

    <!-- Dynamic Router Viewport with Clean Transition -->
    <main class="flex-grow">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <!-- Luxury Boutique Footer -->
    <Footer />

    <!-- Floating Concierge WhatsApp Action -->
    <WhatsAppButton />
  </div>
</template>

<style>
/* Page transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
