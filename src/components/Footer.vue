<template>
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="footer-info">
              <h3>
                <img :src="Logo" alt="Logo Footer" style="width: 40px; max-width: 40px; height: auto; border-radius: 50%;"/>
              </h3>
              <p class="poppins d-flex">
                <i class="poppins bi bi-pin-map me-2"></i>
                <span>Griya Maleber Indah Cluster No. 1<br>
                RT. 001 RW. 001, Kab. Cianjur, Jawa Barat.</span>
              </p>
              <p class="d-flex poppins mt-2">
                <i class="poppins bi bi-envelope me-2"></i>
                <span><a href="mailto:karyautamateknologi@gmail.com" class="text-original">karyautamateknologi@gmail.com</a></span>
              </p>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              <input type="email" name="email"><input type="submit" value="Subscribe">
            </form>

          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>PT. Karya Utama Teknologi</span></strong>. All Rights Reserved
      </div>
    </div>
  </footer>
</template>

<script setup>
import Logo from '../assets/img/logo.png';
</script>