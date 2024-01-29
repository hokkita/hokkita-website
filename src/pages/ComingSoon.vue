<template>
    <layout-blank>
        <section 
        class="bg-local bg-center h-full w-full bg-cover" 
        :style="{ backgroundImage: `url(${drawBridge})` }">
            <div class="backdrop-blur bg-black bg-opacity-75 h-full">
                <div class="h-full flex flex-wrap items-center justify-center">
                    <div class="p-[1rem] flex flex-col items-center text-white text-center space-y-1">
                        <img class="max-h-[128px]" src="@/assets/img/hk-logo.png" alt="Small Empire Logo">
                        <h1 class="font-sui text-h2 md:text-h1 uppercase">We're Coming Soon</h1>
                        <div class="text-lg md:text-xl">
                            <div>We are working very hard on the new version of our website!</div>
                            <div>Thank you for your patience and stay tuned!</div>
                        </div>
                        <!-- <div class="flex flex-col items-center justify-center gap-0.5">
                            <div class="text-2xl font-bold">
                                Follow our social media:
                            </div>
                            <div class="flex items-center justify-center gap-4">
                                <a href="https://www.facebook.com/smallempiresb" target="_blank" rel="noopener noreferrer">
                                    <img class="max-w-[6rem]" src="@/assets/img/3d-icon/facebook.png" alt="Facebook">
                                </a>
                                <a href="https://www.tiktok.com/@smallempiresb" target="_blank" rel="noopener noreferrer">
                                    <img class="max-w-[6rem]" src="@/assets/img/3d-icon/tiktok.png" alt="Tik Tok">
                                </a>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </section>
    </layout-blank>
</template>
  
<script>
import drawBridge from '@/assets/img/terengganu-drawbridge.jpg';

export default {
    name: 'ComingSoon',
    data() {
        return {
        drawBridge
        }
    },
}
</script>