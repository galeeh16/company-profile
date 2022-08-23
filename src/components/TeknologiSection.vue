<template>
    <section id="teknologi" class="section">
        <div class="container">
            <div class="section-title" data-aos="fade-up">
                <h2 class="h2-title">Teknologi Terkini</h2>
                <p>Dalam membangun suatu system yang terintegrasi, kami menggunakan teknologi support yang memudahkan dalam pembuatan aplikasi, kemudahan dalam pemeliharaan dan pengembangannya.</p>
            
                <div class="d-flex justify-content-center flex-wrap mt-5">
                    <div class="me-4 mb-sm-4 mb-lg-0">
                        <img :src="ReactLogo" alt="react" style="width: 65px; height: auto;">
                    </div>
                    <div class="me-4 mb-sm-4 mb-lg-0">
                        <img :src="LaravelLogo" alt="laravel" style="width: 65px; height: auto;">
                    </div>
                    <div class="me-4 mb-sm-4 mb-lg-0">
                        <img :src="VueLogo" alt="vue" style="width: 65px; height: auto;">
                    </div>
                    <div class="me-4 mb-sm-4 mb-lg-0">
                        <img :src="NextLogo" alt="next" style="height: 65px;">
                    </div>
                    <div class="me-4 mb-sm-4 mb-lg-0">
                        <img :src="GatsbyLogo" alt="gatsby" style="height: 65px;">
                    </div>
                    <div class="mb-sm-4 mb-lg-0">
                        <img :src="FlutterLogo" alt="flutter" style="height: 65px;">
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import ReactLogo from '../assets/img/react.svg';
import LaravelLogo from '../assets/img/laravel.svg';
import VueLogo from '../assets/img/vue.svg';
import NextLogo from '../assets/img/nextjs.svg';
import GatsbyLogo from '../assets/img/gatsby.svg';
import FlutterLogo from '../assets/img/flutter.svg';
</script>
