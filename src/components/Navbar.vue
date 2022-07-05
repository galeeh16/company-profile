<template>
  <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center">

      <div class="logo me-auto">
        <p>
          <a href="/">
            <img :src="Logo" alt="Logo" style="border-radius: 50%;">
            <span class="ms-2 logo-text">PT. Karya Utama Teknologi</span>
          </a>
        </p>
      </div>

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="nav-link scrollto" href="#hero" :class="{ active: currentSection === 'hero'}">Beranda</a></li>
          <li><a class="nav-link scrollto" href="#layanan" :class="{ active: currentSection === 'layanan'}">Layanan</a></li>
          <li><a class="nav-link scrollto" href="#contact" :class="{ active: currentSection === 'contact'}">Kontak Kami</a></li>
          {{ currentSection}}
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  </header>
</template>

<script setup>
import Logo from '../assets/img/logo.png';

defineProps({
  currentSection: {
    type: String,
    require: true,
    default: 'hero'
  }
})
</script>