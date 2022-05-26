<template>

  <v-app id="app">
    <Navbar></Navbar>
   <v-content>
     <router-view>
     </router-view>
   </v-content>
   <Footer>
   </Footer>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/footer'

export default {
  components : {
    Navbar,
    Footer
  },
  data: () => ({

  })
};
</script>
<style>
</style>
