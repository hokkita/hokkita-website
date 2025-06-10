<template>
    <main class="w-full bg-white text-text-high">
        <top-nav :navActive = "pageName"/>
        <slot />
        <bottom-footer />
    </main>
</template>

<script>
export default {
    name: "DefaultLayout",
    props: [
        "pageName",
    ],
};
</script>