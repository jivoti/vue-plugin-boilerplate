<template>
  <div class="custom-plugin">
    <strong>{{text}}</strong> Vue plugin ...</div>
</template>

<script>
export default {
  name: 'VCustomPlugin',

  props: {
    tagName: {
      type: String,
      default: 'VCustomPlugin'
    },
    text: {
      type: String,
      default: 'Custom'
    }
  }
}
</script>

<style src="../styles/index.scss" lang="scss" />
