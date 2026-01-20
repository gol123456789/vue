<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>
<script lang="ts">
export default {
  emits: {
    interact(payload: string): string{
    // perform runtime validation
    if (payload) {
      return payload;
    }  
    return 'emitted';
    },
    methods: {
  
      emitStr() {
    // Triggering the event with the required payload
        console.log(this);
      /*  this.$emit('interact', { 
          typeOfInteract: 'clicked' 
      })*/}
    },
  }
}
</script>
<template>
  <h1>{{ msg }}</h1>
  <button  @click="this.$emit('interact', 'from temp')">emitted</button>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
