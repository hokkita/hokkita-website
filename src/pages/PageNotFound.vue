<template>
    <layout-blank>
        <section 
        class="bg-local bg-center h-full w-full bg-cover" 
        :style="{ backgroundImage: `url(${drawBridge})` }">
            <div class="backdrop-blur bg-black bg-opacity-75 h-full">
                <div class="h-full flex flex-wrap items-center justify-center">
                    <div class="flex flex-col items-center text-white text-center space-y-1">
                        <h1 class="text-title font-extrabold">404</h1>
                        <h1 class="text-h1 font-extrabold">Page Not Found</h1>
                        <p class="text-xl">Seems you entered the wrong URL or the page never exists in the first place.</p>
                        <a @click="$router.go(-1)" class="text-secondary-light underline cursor-pointer">Go Back</a>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
    </layout-blank>
</template>
  
<script>
import drawBridge from '@/assets/img/terengganu-drawbridge.jpg';

export default {
    name: 'PageNotFound',
    data() {
        return {
        drawBridge
        }
    },
}
</script>