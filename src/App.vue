<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    let aosScript = document.createElement('script');
    aosScript.setAttribute('src', '/aos.js');
    document.body.appendChild(aosScript);

    let mainScript = document.createElement('script');
    mainScript.setAttribute('src', '/main.js');
    document.body.appendChild(mainScript);
});
</script>