<template>
  <nav class="fixed top-0 left-0 w-full z-10 flex flex-col justify-center items-center bg-primary shadow-lg">
    <div class="w-full h-full max-w-container mx-auto flex px-1 py-0.5 justify-between items-center text-secondary">
      <div>
        <img class="h-[48px]" src="@/assets/img/hk-logo.png" alt="Hok Kita Logo">
      </div>
      <div class="hidden md:flex text-display-sm font-bebas gap-1">
        <router-link
        to="/"
        :class="[
          'px-1 py-0.5 text-secondary hover:bg-red-800 rounded',
          navActive === 'Home'
            ? 'bg-red-900'
            : ''
        ]">
          Home
        </router-link>
        <router-link
        to="/about-us"
        :class="[
          'px-1 py-0.5 text-secondary hover:bg-red-800 rounded',
          navActive === 'About Us'
            ? 'bg-red-900'
            : ''
        ]">
          About Us
        </router-link>
        <router-link
        to="/our-services"
        :class="[
          'px-1 py-0.5 text-secondary hover:bg-red-800 rounded',
          navActive === 'Our Services'
            ? 'bg-red-900'
            : ''
        ]">
          Our Services
        </router-link>
        <router-link
        to="/contact-us"
        :class="[
          'px-1 py-0.5 text-secondary hover:bg-red-800 rounded',
          navActive === 'Contact Us'
            ? 'bg-red-900'
            : ''
        ]">
          Contact Us
        </router-link>
      </div>
      <div class="md:hidden text-secondary">
        <button
        v-if="showMobileMenu === false"
        @click="showMobileMenu = true">
          <icon-menu-rounded />
        </button>  
        <button
        v-if="showMobileMenu === true"
        @click="showMobileMenu = false">
          <icon-close-rounded />
        </button>   
      </div>
    </div>
    <div v-if="showMobileMenu" class="flex flex-col w-full px-1 py-0.5 gap-0.5 font-bebas text-center text-secondary text-display-sm md:hidden">
        <router-link
        to="/"
        :class="[
          'w-full px-1 py-0.5 hover:bg-red-800 rounded',
          navActive === 'Home'
            ? 'bg-red-900'
            : ''
        ]">
          Home
        </router-link>
        <router-link
        to="/about-us"
        :class="[
          'w-full px-1 py-0.5 hover:bg-red-800 rounded',
          navActive === 'About Us'
            ? 'bg-red-900'
            : ''
        ]">
          About Us
        </router-link>
        <router-link
        to="/our-services"
        :class="[
          'w-full px-1 py-0.5 hover:bg-red-800 rounded',
          navActive === 'Our Services'
            ? 'bg-red-900'
            : ''
        ]">
          Our Services
        </router-link>
        <router-link
        to="/contact-us"
        :class="[
          'w-full px-1 py-0.5 hover:bg-red-800 rounded',
          navActive === 'Contact Us'
            ? 'bg-red-900'
            : ''
        ]">
          Contact Us
        </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TopNavigation',
    data() {
        return {
        showMobileMenu: false, // Hide menu for movile view
        };
    },
  props: [
    'navActive',
    'showMobileNavigation',
  ],
};
</script>
