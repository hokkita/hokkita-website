<template>
  <nav class="fixed top-0 left-0 w-full z-10 flex flex-col justify-center items-center bg-primary shadow-lg">
    <div class="w-full h-full max-w-container mx-auto flex p-0.5 justify-between items-center text-secondary">
      <div>
        <img class="h-[48px]" src="@/assets/img/hk-logo.png" alt="Hok Kita Logo">
      </div>
      <div class="hidden md:flex text-display-xs font-bebas gap-1">
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
      <!-- <div class="md:hidden">
        Mobile Menu Button
      </div> -->
    </div>
    <!-- <div>
      Expanded Mobile Menu
    </div> -->
  </nav>
</template>

<script>
export default {
  name: 'TopNavigation',
  props: [
    'navActive',
  ],
};
</script>
