<template src="./HomeView.html"></template>
<style src="./HomeView.css"></style>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import LogoTextComponent from '@/components/LogoTextComponent/LogoTextComponent.vue';
import MainSearchComponent from '@/components/MainSearchComponent/MainSearchComponent.vue';

export default {
    name: 'HomeView',
    components: {
        HelloWorld,
        LogoTextComponent,
        MainSearchComponent
    },
    data() {
        return {
            msg: 'Привет, мир!<br>Как дела?',
        }        
    },
}
</script>
