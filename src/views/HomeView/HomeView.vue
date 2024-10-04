<template src="./HomeView.html"></template>
<style src="./HomeView.css"></style>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'HomeView',
    components: {
        HelloWorld
    },
    data() {
        return {
            msg: 'Привет, мир!<br>Как дела?',
        }        
    },
}
</script>
