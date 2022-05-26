<template>
  <div class="Dashboard">
    <div class="maindashboard">
      <div class="textboard">
      <div class="text">BAE SEONG MIN<br></div>
      <div class="text2">BACK-END DEVELOPER</div>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="portdashboard">
      <h1 class="subheading grey--text ml-15">Dashboard<v-btn class="morebtn" href="/project" small >더보기</v-btn></h1>
      <v-content>
          <v-container class="my-3">
            <v-row class="mb-3 ml-2">
                <v-btn small plain @click="sortby('title')">
                <v-icon dark class="mr-3">mdi-code-json</v-icon>
                <span>my project name </span>
                </v-btn>
                <v-btn small plain @click="sortby('person')">
                <v-icon dark class="mr-3">mdi-account-multiple</v-icon>
                <span>my person </span>
                </v-btn>
            </v-row>
            <v-card :href="`${project.title}`" class="pa-2 grey lighten-4" flat v-for="project in p" :key="project.title">
                <v-row class="my-1" no-gutters :class="`pa-3 project ${project.state} `">
                <v-col cols="12" md="6">
                    <div class="caption grey--text">Project Title</div>
                    <div :class="`${project.title} title`" >{{ project.title }}</div>
                </v-col>
                <v-col cols="4" md="2" sm="4">
                    <div class="caption grey--text">Person</div>
                    <div>{{ project.person }}</div>
                </v-col>
                <v-col cols="8" md="2" sm="5">
                    <div class="caption grey--text">Due</div>
                    <div>{{ project.due }}</div>
                </v-col>
                <v-col cols="4" md="2" sm="3">
                    <div class="caption grey--text">State</div>
                    <div :class="`${project.state} state`">{{ project.state }}</div>
                </v-col>
                </v-row>
                <v-divider></v-divider>
            </v-card>
          </v-container>
      </v-content>
    </div>
    <v-divider></v-divider>
    <div class="addvue">
    <div class="completness">
      <h1 class="subheading grey--text mb-5 ml-15">COMPLETENESS</h1>
      <div class="subcompletness my-3" v-for="project in p" :key="project.title">
        <h4 class="subheading grey--text">{{project.title}}</h4>
        <v-progress-linear
          :color="`${project.color}`"
          height="25"
          :buffer-value="`${project.completeness }`"
          stream
        >
          <template >
            <strong>{{project.completeness}}%</strong>
          </template>
        </v-progress-linear>
        <br>
      </div>
    </div>
    <div class="rightcontact">
        <h1 class="subheading grey--text mb-5 ml-15">CONTACT<v-btn class="morebtn" href="/about" small >더보기</v-btn></h1>
        
        <div class="rightsub">
          <h4 class="subheading grey--text">E-mail</h4>
          <div class="righttext">qeenon666@naver.com</div>
          <h4 class="subheading grey--text">Phone</h4>
          <div class="righttext">+82 (0)10 - 9243 - 1425</div>
          <h4 class="subheading grey--text">Git-hub</h4>
          <div class="righttext"><a class="alink" href="https://www.github.com/qeenon666">github/qeenon666</a></div>
          <h4 class="subheading grey--text">Youtube</h4>
          <div class="righttext"><a class="alink" href="https://www.youtube.com/channel/UCwp5IDzPzx9xkKkgbW9mmDw">Youtube</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import db from '../fb'

// async function aa(){ 
//   const querySnapshot = await getDocs(collection(db, "projects"));
//   querySnapshot.forEach((doc) => {
//     let allproject = {};
//     //console.log(`${doc.id} => ${doc.data()}`);
//     //console.log(`${doc.data().title}`);
//     allproject = doc.data();
//     allprojects.push(allproject);
//     // console.log(allprojects);
//     return allprojects;
//   });
//   //console.log(allprojects[1]);
// }
// let b = aa().allprojects;
// console.log(aa());
  export default {

    data (){
      return{
        // projects : [
        //   {title:"p[1]",person:'Bae Seong Min',due:'2019-09 ~ 2019-12',state:'complete',completeness:'100',color:'red'}
        //   // {title:'AI',person:'Bae Seong Min',due:'2020-10 ~ 2020-11',state:'complete',completeness:'100',color:'blue'},
        //   // {title:'CMS',person:'Bae Seong Min',due:'2021-03 ~ 2021-06',state:'complete',completeness:'100',color:'black'},
        //   // {title:'Portfolio',person:'Bae Seong Min',due:'2021-11 ~ ',state:'ongoing',completeness:'80',color:'yellow'}
        // ],
        p : []
      }
    },
    methods : {
      sortby(prop){
        this.p.sort((a,b) => a[prop] < b[prop] ? -1 : 1 )
      },
      s(title){
         this.$router.push('/'+title);
         
      }
    },
    created : async function a() {
      const allprojects=[];
      const querySnapshot = await getDocs(collection(db, "projects"));
      querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data()}`);
        //console.log(`${doc.data().title}`);
        const allproject = doc.data();
        //let allproject = `${doc.data().title}`;
        allprojects.push(allproject);
      });
      this.p = allprojects;
      console.log(this.p);
    }// },function b(){
    //   var imagesRef = storageRef.child('images');
    // }
  }


</script>

<style>
.Dashboard{
  /* max-height: 100%; */
  width: 100%;
  height: auto;
  min-height: 100%;
}
.Dashboard .maindashboard{
  height: 100vh;
  margin: 0 auto;
  /* background-color: grey; */
}
.textboard{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
}
.Dashboard .portdashboard{
  width: 100%;
  padding-left: 15px;
  padding-top: 50px;
  min-height: 100%;
}
.text{
width: 14ch;
font-size: 50px;
overflow: hidden; 
white-space: nowrap;
border-right: .05em solid black;
animation: typing 2s steps(25), blink .2s;
animation-iteration-count: infinite;
}
.text2{
  width: 20ch;
  font-size: 50px;
  overflow: hidden; 
  white-space: nowrap;
  border-right: .05em solid black;
  animation: typing 2s steps(25), blink .2s;
  animation-iteration-count: infinite;
}
@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}
.completness{
  width: 50%;
  padding-left: 15px;
  padding-top: 50px;
  padding-bottom: 20px;
  float: left;
}
.subcompletness{
  padding-left: 100px;
}
.rightcontact{
  width: 50%;
  padding-bottom: 20px; 
  padding-left: 15px;
  padding-top: 50px;
  float: left;
}
.morebtn{
  float: right;
  margin-top: 10px;
  margin-right: 50px;
}
.rightsub{
  padding-left: 100px;
}
.righttext{
  font-size: 20px;
  padding-top: 5px;
  padding-bottom: 15px;
}
.rightsub .alink{
  text-decoration: none;
  color: #000000;
  font-size: 20px;
}
.rightsub .alink:hover{
  color: grey;
}
  .project.complete {
    border-left: 5px solid #adadad;
  }
  .project.ongoing {
    border-left: 5px solid green;
  }
  .state.complete {
    color: #adadad;
  }
  .state.ongoing{
    color : green;
  }
  .addvue{
    width: 100%;
    min-height: 100%;
  }
</style>