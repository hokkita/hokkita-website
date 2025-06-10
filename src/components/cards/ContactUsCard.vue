<template>
    <div 
    class="w-full h-hero-banner flex flex-col gap-2 items-center justify-center bg-local bg-center bg-cover rounded-lg"
    :style="{ backgroundImage: `url(${callCenter})` }">
        <div class="flex flex-col items-center p-1 text-text-low">
            <div class="text-center font-bebas text-display-xl">Let us help you</div>
            <div class="text-center text-md">Contact us today to get any of our services and best solution for your personal or business needs.</div>
        </div>
        <router-link to="/contact-us">
            <hk-button 
                label="Contact Us"
                type="primary"
                size="small"
            />
        </router-link>
    </div>
</template>
  
<script>
import callCenter from '@/assets/img/hero-banner/call-center.png';

export default {
    name: 'ContactUsCard',
    data() {
        return {
        callCenter
        }
    },
}
</script>