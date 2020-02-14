
<template>
  <div class="layout">
    <g-header />
    <slot/>
  </div>
</template>



<style lang="scss">
body {
  font-family: LM-Math, Roboto, "Helvetica Neue", Arial, sans-serif;
  font-display: swap;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 840px;
  margin: 0 auto;
  padding: 20px;
}



</style>
