<template>
    <div class="wrapper">
        <slot />
    </div>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>

<style>
    .wrapper {
        max-width: 1310px;
        margin: 0 auto;
    }
</style>
