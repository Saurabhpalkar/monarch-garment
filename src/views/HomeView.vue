<script setup lang="ts">
import HeroSection from '../components/home/HeroSection.vue';
import BrandIntro from '../components/home/BrandIntro.vue';
import CategoryShowcase from '../components/home/CategoryShowcase.vue';
import FeaturedProducts from '../components/home/FeaturedProducts.vue';
import EditorialSection from '../components/home/EditorialSection.vue';
import WhyMonarch from '../components/home/WhyMonarch.vue';
import StoreExperience from '../components/home/StoreExperience.vue';
</script>

<template>
  <div class="bg-[#0B0B0B] text-[#F5F1E8]">
    <HeroSection />
    <BrandIntro />
    <CategoryShowcase />
    <FeaturedProducts />
    <EditorialSection />
    <WhyMonarch />
    <StoreExperience />
  </div>
</template>
