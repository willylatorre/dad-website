<script>
export default {};
</script>


<template>
  <div
    class="h-full w-full bg-white flex flex-col  p-10 fixed top-0 left-0 text-4xl"
  >

    <div class="wrapper">
       <h2>Index</h2>

    <div class="absolute top-0 right-0 cursor-pointer" @click="$emit('close')"> X </div>
    <ul class="pl-6">
      <li>
        <g-link>
          <div class="flex items-bottom">
            <span>Home</span>
            <div class="dots flex-1 my-4 mx-3" />
            <span>1</span>
          </div>
        </g-link>
      </li>
       <li>
        <g-link>
          <div class="flex items-bottom">
            <span>Research</span>
            <div class="dots flex-1 my-4 mx-3" />
            <span>2</span>
          </div>
        </g-link>
      </li>
    </ul>
    </div>
   
  </div>
</template>

<style lang="scss" scoped>
.dots {
  background-image: linear-gradient(to right, black 33%, rgba(255,255,255,0) 0%);
background-position: bottom;
background-size: 14px 1px;
background-repeat: repeat-x;
}

.wrapper {
  max-width: 1024px;
  margin: 40px auto;
  width: 100%;
  position: relative;
}
</style>