<script>
import { ref } from "vue";
import TestDeep from "./TestDeep.vue";
export default {
  name: "MainApp",
  components: {
    TestDeep,
  },
  setup() {
    const message = ref("Hello Vue 2.7");
    return { message };
  },
}
</script>
<template>
  <div>
    <el-button>Hello</el-button>
    <h1>{{ message }}</h1>
    <TestDeep />
  </div>
</template>

<style lang="scss" scoped>

:deep() {
  .test-deep {
    color: greenyellow;
  }
}
</style>