<template>
  <div
    class="rounded p-1 font-semibold text-center"
    :class="[
        type === 'primary'
            ? 'bg-red-600 hover:bg-red-900 text-white shadow-md'
            : '',
        type === 'primary-outline'
            ? 'hover:bg-red-100 text-red-600 border border-red-600 hover:shadow-md'
            : '',
        type === 'primary-ghost'
            ? 'hover:bg-red-100 text-red-600 hover:shadow-md'
            : '',
        type === 'secondary'
            ? 'bg-yellow-500 hover:bg-yelllow-900 text-text-high hover:text-white shadow-md'
            : '',
        type === 'secondary-outline'
            ? 'hover:bg-yellow-100 text-yellow-800 hover:text-yellow-900 border border-yellow-800 hover:border-yellow-900 hover:shadow-md'
            : '',
        type === 'secondary-ghost'
            ? 'hover:bg-yellow-100 text-yellow-800 hover:text-yellow-900 hover:shadow-md'
            : '',
        size === 'big'
            ? 'text-lg min-w-[300px]'
            : '',
        size === 'small'
            ? 'text-md'
            : '',
    ]"
  >
    {{ label }}
  </div>
</template>

<script>
export default {
  name: 'HkButton',
  props: [
    'label', 
    'type',
    'size', 
  ],
};
</script>
