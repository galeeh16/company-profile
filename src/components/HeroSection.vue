<template>
  <section id="hero" class="section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="fade-up">
          <div>
            <h1>Kami adalah Software House yang bergerak dalam pembuatan perangkat lunak</h1>
            <h2>Komitmen kami memberikan solusi lengkap untuk bisnis anda dalam lingkup konsultan, desain, penyedia aplikasi dan pemeliharaan dalam sistem teknologi informasi. Mengutamakan konsistensi dalam kualitas layanan sebagai bentuk hubungan jangka panjang yang berkelajutan bersama setiap klien kami.</h2>
            <!-- <a href="#layanan" class="btn-get-started scrollto">Get Started</a> -->
            <a href="#layanan" class="btn-get-started">Get Started</a>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">
          <img :src="HeroImage" class="img-fluid" alt="Hero Image">
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import HeroImage from '../assets/img/hero-img.png';
</script>
