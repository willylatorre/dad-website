<script>
import GMenu from './GMenu'
export default {
  components: {
    GMenu
  },
  data() {
    return {
      showMenu: false
    }
  }
}
</script>

<template>
   
 <header >
      <nav class="flex justify-between">
        <div class="font-medium text-4xl">
          <g-link class="brand" to="/">{{ $static.metadata.siteName }}</g-link>
        </div>
          <!-- <button class="" @click="showMenu = true">Table of contents 🔎</button> -->
      </nav>
      <g-menu v-show="showMenu" @close="showMenu = false" />
    </header>
</template> 

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
