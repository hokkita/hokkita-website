<template>
  <footer class="h-[50px] flex justify-center items-center bg-primary">
    <div class="text-center text-text-low text-label-mini font-semibold italic">
        {{ new Date().getFullYear() }} &copy; HokKita Sdn Bhd • All right reserved 
    </div>
  </footer>
</template>

<script>
export default {
  name: 'BottomFooter',
};
</script>
