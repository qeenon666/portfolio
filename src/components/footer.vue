
<template>
  <footer>
      <v-card color="grey" dark class="footer1 text-center pt-5" width="100%">
        <v-card-text class="footertext pt-0">
          <a title="Dashboard" data-click-name="Dashboard" class="Dashboard" href="/">Dashboard</a>
          <a title="Project" data-click-name="Project" class="Project" href="/Project"> ㆍ  Project</a>
          <a title="Team" data-click-name="Team" class="Team" href="/Team"> ㆍ  Team</a>
          <a title="About" data-click-name="About" class="About" href="/About"> ㆍ  About</a>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="black--text">
          <strong>Copyright </strong>{{ new Date().getFullYear() }} — <strong> Seongmin All right reserved</strong>
        </v-card-text>
      </v-card>
    </footer>
</template>
<style>
.footer1{
  /* min-height: 100%; */
  width: 100%;
  height: auto;
  bottom: 0;
  position : relative;
  /* transform : translateY(-100%); */
}
.footer1 .footertext a{
  font-size: 15px;
  text-decoration: none;
  color: black;
}
.footer1 .footertext a:hover{
  color: grey;
}
</style>