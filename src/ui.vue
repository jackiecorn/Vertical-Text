<template lang="pug">
div
	button.button.button--primary {{msg}}
</template>

<script>
import { dispatch, handleEvent } from "./uiMessageHandler";
// import "./figma-ui/js/selectMenu";
// import "./figma-ui/js/iconInput";
// import "./figma-ui/js/disclosure";

export default {
  data() {
    return {
      msg: "Hello"
    };
  },
  mounted() {
    handleEvent("preview", buffer => {});
  }
};
</script>

<style lang='scss'>
@import "./figma-ui/figma-plugin-ds";
</style>