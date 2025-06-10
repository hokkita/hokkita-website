<template>
    <section class="w-full h-screen flex flex-wrap items-center justify-center">
        <div class="w-full max-w-container h-full">
            <div class="h-full flex flex-col items-center justify-center gap-2">
                <div>
                    <img class="h-[256px]" src="@/assets/3d-illustration/software-developer.png" alt="Software Developer">
                </div>
                <div class="flex flex-col items-center text-center">
                    <div class="font-bebas text-display-lg">Page under development</div>
                    <div class="text-md">We’re making lots of improvements and will be back soon.</div>
                </div>
                <div @click="$router.go(-1)">
                    <hk-button 
                        label="Back to previous page"
                        type="primary"
                        size="big"
                    />
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'UnderDevelopment',
}
</script>