<template>
    <layout-default>
        <div class="h-full -mt-[64px] -mb-[50px] pt-[64px]">
            <section class="w-full h-screen flex flex-wrap items-center justify-center">
                <div class="w-full max-w-container h-full">
                    <div class="h-full flex flex-col items-center justify-center gap-2">
                        <div>
                            <img class="h-[256px]" src="@/assets/3d-illustration/error-404-warning-sign.png" alt="Error 404 Warning Sign">
                        </div>
                        <div class="flex flex-col items-center text-center">
                            <div class="font-bebas text-display-lg">Error : Page not found</div>
                            <div class="text-md">Sorry, but we can’t seem to find the page you are looking for.</div>
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
        </div>
    </layout-default>
</template>

<script>
export default {
    name: 'PageNotFound',
}
</script>