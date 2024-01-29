<template>
  <nav class="h-nav fixed top-0 left-0 w-full z-10 flex justify-center items-center bg-purple-100 shadow">
    <div class="w-full h-full max-w-7xl mx-auto flex p-1 justify-between items-center">
      <div>
        <div class="font-sui uppercase space-x-0.25">
          <span class="text-red">Hok</span>
          <span class="text-purple">Kita</span>
        </div>
      </div>
      <div>
        <a href="https://api.whatsapp.com/send?phone=601127361770&text=Hai%20Small%20Empire" target="_blank" rel="noopener noreferrer">
          <div class="px-2 py-0.5 bg-purple hover:bg-red text-red hover:text-purple text-xs font-sui rounded-full">Hubungi Kami</div>
        </a>
      </div>
      <!-- <div class="hidden md:flex">
        Desktop Menu
      </div>
      <div class="md:hidden">
        Mobile Menu
      </div> -->
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TopNavigation',
};
</script>
