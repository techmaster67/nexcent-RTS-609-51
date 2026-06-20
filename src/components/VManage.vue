<script setup>
// import Swiper and modules styles 123
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { onMounted, ref } from 'vue';
const manageCards = ref([
  {
    title: 'Membership Organisations',
    subtitle: 'Our membership management software provides full automation of membership renewals and payments',
    imageUrl: '/src/assets/img/manage-1.svg'
  },
  {
    title: 'National Associations',
    subtitle: 'Our membership management software provides full automation of membership renewals and payments',
    imageUrl: '/src/assets/img/manage-2.svg'
  },
  {
    title: 'Clubs & Groups',
    subtitle: 'Our membership management software provides full automation of membership renewals and payments',
    imageUrl: '/src/assets/img/manage-3.svg'
  }
])

onMounted(() => {
  // init Swiper:
  const swiper = new Swiper('.manage-swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      576: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

})
</script>


<template>
  <section class="manage">
    <div class="container">
      <h2>Manage your entire community <br> in a single system</h2>
      <p class="manage__subtitle">Who is Nextcent suitable for?</p>
      <!-- Slider main container -->
      <div class="swiper manage-swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide" v-for="(item, id) in manageCards" :key="id">
            <div class="manage__card p-4 h-100">
              <div class="manage__card-icon">
                <img :src="item.imageUrl" alt="">
              </div>
              <h4>{{item.title}}</h4>
              <p>{{item.subtitle}}</p>
            </div>
          </div>
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
