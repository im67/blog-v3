<script lang="ts" setup>

</script>

<template>
    <div class="w-screen h-screen">
        <div v-if="$slots['sidebar']">
            <slot name="sidebar">
                
            </slot>
        </div>
        <div>
            <slot name="main">4455</slot>
        </div>
    </div>
</template>