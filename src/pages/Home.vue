<template>
    <layout-default pageName = "Home">
        <div class="h-full pt-[64px]">

            <section class="w-full max-w-container mx-auto px-1 py-2">
                <div 
                class="w-full h-banner flex flex-col items-center justify-center bg-local bg-center bg-cover rounded-lg text-text-low"
                :style="{ backgroundImage: `url(${drawBridge})` }">
                    <div class="text-center font-bebas text-display-xl">HokKita Sdn Bhd</div>
                    <div class="text-center text-h2 italic font-thin">Your needs, our priority.</div>
                </div>
            </section>

            <section class="w-full max-w-container mx-auto px-1 py-2">
                <div class="w-full flex flex-col items-center gap-1.5">
                    <div class="w-full flex flex-col items-center text-center">
                        <div class="font-bebas text-display-lg">What we do</div>
                        <div class="text-md max-w-[600px]">We are the solution provider across multiple industries, encompassing trade, technology, services and human capital development.</div>
                    </div>
                    <div class="flex flex-wrap mx-auto justify-center gap-1">
                        <div class="p-1 w-card bg-red-50 shadow-sm rounded flex flex-col items-center gap-0.5">
                            <div>
                                <img class="h-[128px]" src="@/assets/3d-illustration/software-developer.png" alt="Software Developer">
                            </div>
                            <div class="text-md font-bold">Mobile Apps & Web Development</div>
                        </div>
                        <div class="p-1 w-card bg-yellow-50 shadow-sm rounded flex flex-col items-center gap-0.5">
                            <div>
                                <img class="h-[128px]" src="@/assets/3d-illustration/wall-calendar.png" alt="Wall Calendar">
                            </div>
                            <div class="text-md font-bold">Event Management</div>
                        </div>
                        <div class="p-1 w-card bg-red-50 shadow-sm rounded flex flex-col items-center gap-0.5">
                            <div>
                                <img class="h-[128px]" src="@/assets/3d-illustration/data-scientist.png" alt="Data Scientist">
                            </div>
                            <div class="text-md font-bold">Office & Household Equipment</div>
                        </div>
                        <div class="p-1 w-card bg-yellow-50 shadow-sm rounded flex flex-col items-center gap-0.5">
                            <div>
                                <img class="h-[128px]" src="@/assets/3d-illustration/dining-plate.png" alt="Dining Plate">
                            </div>
                            <div class="text-md font-bold">Cultery & Dinnerware Supplies</div>
                        </div>
                        <div class="p-1 w-card bg-red-50 shadow-sm rounded flex flex-col items-center gap-0.5">
                            <div>
                                <img class="h-[128px]" src="@/assets/3d-illustration/engineer.png" alt="Engineer">
                            </div>
                            <div class="text-md font-bold">General Contracting & Trading</div>
                        </div>
                        <div class="p-1 w-card bg-yellow-50 shadow-sm rounded flex flex-col items-center gap-0.5">
                            <div>
                                <img class="h-[128px]" src="@/assets/3d-illustration/desk-organiser.png" alt="Desk Organiser">
                            </div>
                            <div class="text-md font-bold">Educational Kits & Learning Tools</div>
                        </div>
                        <div class="p-1 w-card bg-red-50 shadow-sm rounded flex flex-col items-center gap-0.5">
                            <div>
                                <img class="h-[128px]" src="@/assets/3d-illustration/cv.png" alt="CV">
                            </div>
                            <div class="text-md font-bold">Manpower Supply</div>
                        </div>
                        <div class="p-1 w-card bg-yellow-50 shadow-sm rounded flex flex-col items-center gap-0.5">
                            <div>
                                <img class="h-[128px]" src="@/assets/3d-illustration/gardening-kit.png" alt="Gardening Kit">
                            </div>
                            <div class="text-md font-bold">Agriculture Business</div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section class="w-full max-w-container mx-auto px-1 py-2">
                <div class="w-full flex flex-col items-center text-center gap-1.5">
                    <div class="w-full flex flex-col items-center text-center">
                        <div class="font-bebas text-display-lg">Featured projects</div>
                        <div class="text-md max-w-[600px]">Browse through our project list showcasing diverse, innovative solutions and client successes.</div>
                    </div>
                    <div class="flex flex-wrap  mx-auto justify-center gap-1">
                        <div class="flex flex-col w-full md:w-[450px] h-[300px] bg-red-50 shadow-sm overflow-clip rounded">
                            <div class="w-full h-[200px] bg-[url('@/assets/img/featured-projects/stock-trade.png')] bg-local bg-center bg-cover">
                                <!-- imageplaceholder -->
                            </div>
                            <div class="justify-center flex flex-col h-[100px] px-2 py-1 gap-0.5">
                                <div class="text-md font-bold">Briefcase</div>
                                <div class="text-label-mini">A mobile game based on the simulation of stock investment using real data location.</div>
                            </div>
                        </div>
                        <div class="flex flex-col w-full md:w-[450px] h-[300px] bg-yellow-50 shadow-sm overflow-clip rounded">
                            <div class="w-full h-[200px] bg-[url('@/assets/img/featured-projects/bizstart-hub.png')] bg-local bg-center bg-cover">
                                <!-- imageplaceholder -->
                            </div>
                            <div class="justify-center flex flex-col h-[100px] px-2 py-1 gap-0.5">
                                <div class="text-md font-bold">BizStart Hub</div>
                                <div class="text-label-mini">Support service for new business owners & side hustlers.</div>
                            </div>
                        </div>
                        <div class="flex flex-col w-full md:w-[450px] h-[300px] bg-red-50 shadow-sm overflow-clip rounded">
                            <div class="w-full h-[200px] bg-[url('@/assets/img/featured-projects/kitakahwin-2025.png')] bg-local bg-center bg-cover">
                                <!-- imageplaceholder -->
                            </div>
                            <div class="justify-center flex flex-col h-[100px] px-2 py-1 gap-0.5">
                                <div class="text-md font-bold">Kitakahwin 2025 Campaign</div>
                                <div class="text-label-mini">360º wedding solution with flexible packages.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="w-full max-w-container mx-auto px-1 py-2">
                <card-contact-us />
            </section>
        </div>
    </layout-default>
</template>

<script>
import drawBridge from '@/assets/img/hero-banner/drawbridge.png';

export default {
    name: 'Home',
    data() {
        return {
        drawBridge
        }
    },
}
</script>