<script setup lang="ts">
import type { PropType } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import { type RouteRecordRaw } from 'vue-router'
/*
type routeProp = {
  routes: RouteRecordRaw[]
}
const props = defineProps<routeProp>();
*/
</script>

<script lang="ts">
  
  export default {
    props: {
      routes: {
         type: Array, //Array as PropType<RouteRecordRaw[]>,
        
         default: () => []
      }
    },
    methods: {
      alrt(){
        alert(this.routes);  
      }
    },
    setup(props){
      alert(props.routes?);
    },
  }
</script>
<template>
<!-- <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
</div> -->
<div>
<button target="_blank" @click="alrt">alert</button>
  <router-link v-for="route in routes" :key="route.path" :to="route.path">
    {{route.name}}
  </router-link>

<span>wtf</span>
</div>
<!--    <router-link to="/default1">default1</router-link>
    <router-link to="/default2">defaut2</router-link>
    <router-link to="/default3">default3</router-link> -->
 
<!--  <HelloWorld msg="Vite + Vue" /> -->
  <router-view></router-view>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
