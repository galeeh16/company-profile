<template>
  <section id="contact" class="services section">
    <div class="container">
			<div class="section-title" data-aos="fade-up">
        <h2 class="h2-title">Kontak Kami</h2>
			</div>

			<div class="row">
				<div class="col-md-6 col-sm-12 p-5">
					<img :src="ContactUs" alt="Contact Us" style="width: 100%">
				</div>

				<div class="col-md-6 col-sm-12 p-5">
					<form @submit.prevent="handleSubmit" method="post" spellcheck="false" autocomplete="off">
						<div class="mb-4">
							<label for="nama">Nama</label>
							<input type="text" class="form-control px-3 py-2" />
						</div>

						<div class="mb-4">
							<label for="email">Email</label>
							<input type="email" class="form-control px-3 py-2" />
						</div>

						<div class="mb-4">
							<label for="subjek">Subjek</label>
							<input type="text" class="form-control px-3 py-2" />
						</div>

						<div class="mb-4">
							<label for="pesan">Pesan</label>
							<textarea name="pesan" class="form-control px-3 py-2" rows="5" style="resize: none;"></textarea>
						</div>

						<div class="mb-4">
							<button type="submit" class="btn btn-primary w-100 py-2">Kirim</button>
						</div>

					</form>
				</div>
			</div>
    </div>
  </section>
</template>

<style>
	.form-control:focus {
		box-shadow: none !important;
	}
	.btn-primary {
		color: #111;
		background-color: #FFAF04;
		border: 1px solid #FFAF04;
	}
	.btn-primary:hover,
	.btn-primary:active,
	.btn-primary:focus {
		color: #111;
		background-color: #e79f06;
		border: 1px solid #e79f06;
		box-shadow: none !important;
	}
</style>

<script setup>
import ContactUs from '../assets/img/contact_us.svg';
import { ref } from 'vue';

const handleSubmit = () => {
	console.log('submitted')
}

</script>
