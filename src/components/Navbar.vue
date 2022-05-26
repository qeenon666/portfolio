<template class="nav1">
    <nav>
        <div id="header">
        <v-toolbar >
            
            <v-app-bar-nav-icon @click.stop="drawer = !drawer " ></v-app-bar-nav-icon>
            <!-- <v-btn icon>
                <v-icon @click="main()">mdi-home</v-icon>
            </v-btn>
            <v-toolbar-title>Bae Seong Min</v-toolbar-title> -->
            <div id="headeritem">
                <a id="headeritemlist" href="/">Dashboard</a>
                <a id="headeritemlist" href="/Project">Project</a>
                <a id="headeritemlist" href="/Team">Team</a>
                <a id="headeritemlist" href="/About">About</a>
            </div>
            <!-- <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
                <v-textarea>Dashboard</v-textarea>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
                <v-text-field>Project</v-text-field>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
                <v-text-field>About</v-text-field>
            </v-btn> -->

        </v-toolbar>
        </div>
        <v-navigation-drawer v-model="drawer" absolute bottom temporary color ="grey" >
            <v-card
                class="cards mx-auto overflow-hidden"
                height="100vh"
                width="344"
                color="grey"
            >
                <v-layout column align-center>
                    <v-flex class="mt-4">
                        <v-avatar size="100">
                            <img src="1.jpg">
                        </v-avatar>
                        <p class="white--grey subheading pl--3 mt-3">Bae Seong Min</p>
                    </v-flex>
                    <v-flex class="mt-4 mb-5">
                        <Popup></Popup>
                    </v-flex>
                </v-layout>
                <v-list>
                    <v-list-item-group v-model="group" active-class="light-blue--text text--darken-4">
                        
                            <v-list-item v-for="(item, i) in items" :key="i" :href="item.router">
                            <!-- <v-list-item v-for="item in items" :key="item.title"> -->
                                <v-list-item-icon>
                                    <v-icon v-text="item.icon"></v-icon>
                                    <!-- <v-icon>{{item.icon}}</v-icon> -->
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title v-text="item.text"></v-list-item-title>
                                    <!-- <v-list-item-title>{{item.text}}</v-list-item-title> -->
                                </v-list-item-content>
                            </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-card>
        </v-navigation-drawer>
    </nav>
</template>

<script>
// import $ from 'jquery';
import Popup from './Popup.vue';
// window.onload = function(){ var lastScrollTop = 0, delta = 5; 
//     $(window).scroll(function(){ 
//         var st = $(this).scrollTop();
//         if(Math.abs(lastScrollTop - st) <= delta) 
//             return; 
//         // 스크롤값을 받아서 리턴한다. 
//         if ((st > lastScrollTop) && (lastScrollTop>0)) {
//             $("#header").css("top","0px");
//             $(".cards").css("top","-180px");
//             $('.btn_gotop').hide();
//              // 스크롤을 내렸을때 #header의 CSS 속성중 top 값을 -50px로 변경한다. 
//         }
//         else if(st<10){
//             $("#header").css("top","0px");
//             $(".cards").css("top","0px");
//             $('.btn_gotop').hide();
//         } else { 
//             $("#header").css("top","0px"); 
//             $(".cards").css("top",lastScrollTop-110+"px");
//             $('.btn_gotop').show();
//             // 스크롤을 올렸을때 #header의 CSS 속성중 top 값을 0px로 변경한다. 
//         } 
        
//         lastScrollTop = st; 
//     }); 
//     $('.btn_gotop').click(function(){
//         $('html, body').animate({scrollTop:0},1000);
//             return false;
//     });}
//point header fixed
// $(function(){
   
// });
export default {
  components: { Popup },
    data : () => ({
        drawer : false,
        group : null,
        items : [
            {icon:'mdi-hamburger', text:'Dashboard', router:'/'},
            {icon:'mdi-folder', text:'My Project', router:'/project'},
            {icon:'mdi-account-multiple', text:'Team', router: '/team'},
            {icon: 'mdi-school', text:'About', router: '/about'}
        ]
    }),
    watch: {
      group () {
        this.drawer = false
      },
    },
    methods : {
      main(){
         this.$router.push('/');
      }

    }
}
</script>
<style>
.nav1{
    height: auto;
    width: 100%;
    min-height: 100%;
}
#header{
    /* display: flex; */
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: fixed;
    top:0;
    /* height: 5rem; */
    z-index: 2;
    left: 0;
    right: 0;
    transition: All 0.2s ease; 
    -webkit-transition: All 0.2s ease; 
    -moz-transition: All 0.2s ease; 
    -o-transition: All 0.2s ease;
}
#headeritem{
    flex-grow: 4;
    width:100%;
    justify-content: space-between;
    display:flex;
}
#headeritemlist{
    width:40%;
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: black;
}
#headeritemlist:hover{
    color: grey;
}
</style>