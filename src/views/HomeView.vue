<template>
  <Navbar :currentSection="currentSection" />

  <HeroSection />
  <LayananSection />
  <PortfolioSection />
  <TeknologiSection />
  <ContactSection />
  <Footer />

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

</template>

<script setup>
import { 
  Navbar, 
  HeroSection, 
  LayananSection,
  ContactSection,
  TeknologiSection,
  PortfolioSection,
  Footer 
} from '../components';
import { onMounted, ref } from 'vue';

let currentSection = ref('hero');

onMounted(() => {
  const observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].intersectionRatio <= 0) return;

      entries.forEach(entry => {
        // intersectionRatio tells how much of the target element is currently visible in our bounds 
        if (entry.isIntersecting > 0) {
          currentSection.value = entry.target.getAttribute('id');
        }
        // observer.unobserve(entry.target)
        console.log(window.location.hash)
      });
    },
    {
      rootMargin: '50px -50px -90% 0px'
    }
  );
  
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    observer.observe(section);
  });
})
</script>
