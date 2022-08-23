<template>
  <section id="hero" class="section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="fade-up">
          <div>
            <h2>Begitu banyak para pelaku usaha saat ini yang sudah menerapkan teknologi IT untuk membantu operasional agar lebih efisien dan lebih praktis dalam menjalankan usahanya. Beberapa tahun yang lalu mungkin IT ini tidak begitu diminati karena banyak yang masih awam dalam manfaatnya. Maka perlu perusahaan memiliki konsultan IT dalam memberi masukan dan saran terkait efektifitas operasional dan keuangan.</h2>          
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
