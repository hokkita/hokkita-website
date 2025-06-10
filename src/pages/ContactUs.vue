<template>
    <layout-default pageName = "Contact Us">
        <div class="h-full min-h-screen -mb-[50px] pt-[64px]">

            <section class="w-full max-w-container mx-auto px-1 py-2">
                <div class="w-full h-banner flex flex-col items-center justify-center bg-[url('@/assets/img/hero-banner/call-center.png')] bg-local bg-center bg-cover rounded-lg text-text-low">
                    <div class="text-center font-bebas text-display-xl">Contact Us</div>
                </div>
            </section>

            <section class="w-full max-w-container mx-auto px-1 py-2 mb-[50px]">
                <div class="w-full flex flex-col items-center gap-1.5">
                    <div class="w-full flex flex-col items-center text-center">
                        <div class="font-bebas text-display-lg">Let us help you</div>
                        <div class="text-md max-w-[600px]">Contact us today to get any of our services and best solution for your personal or business needs.</div>
                    </div>
                    <div class="flex flex-wrap mx-auto justify-center gap-1">
                        <div class="p-1 w-card h-[300px] bg-red-50 shadow-sm hover:shadow-lg rounded flex flex-col items-center justify-center gap-0.5">
                            <div>
                                <img class="h-[128px]" src="@/assets/3d-illustration/iphone.png" alt="iPhone">
                            </div>
                            <div class="text-md font-bold">Call us</div>
                            <div class="text-md text-center">+6011 6134 3830</div>
                        </div>
                        <div class="p-1 w-card h-[300px] bg-yellow-50 shadow-sm hover:shadow-lg rounded flex flex-col items-center justify-center gap-0.5">
                            <div>
                                <img class="h-[128px]" src="@/assets/3d-illustration/mail.png" alt="Mail">
                            </div>
                            <div class="text-md font-bold">Email to us</div>
                            <div class="text-md text-center">support@hokkita.com</div>
                        </div>
                        <div class="p-1 w-card h-[300px] bg-red-50 shadow-sm hover:shadow-lg rounded flex flex-col items-center justify-center gap-0.5">
                            <div>
                                <img class="h-[128px]" src="@/assets/3d-illustration/location.png" alt="Location">
                            </div>
                            <div class="text-md font-bold">Visit our office</div>
                            <div class="text-md text-center">PT1882, Tingkat Atas, Perkedaian KP Perdana, Kubang Parit, 20050, Kuala Terengganu, Terengganu.</div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </layout-default>
</template>

<script>
export default {
    name: 'ContactUs',
}
</script>