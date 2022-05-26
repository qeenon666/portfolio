
<template>
    <div class="project mx-10 my-5">
       <h1>Project</h1>

       <v-container>
           <v-expansion-panels>
               <v-expansion-panel v-for="project in project" :key="project.title">
                   <v-expansion-panel-header>
                       {{project.title}}
                   </v-expansion-panel-header>
                   <v-expansion-panel-content>
                       <div class="font-weight-bold">
                           Due by {{project.due}}
                       </div>
                       <div>
                           {{project.content}}
                       </div>
                       <div class="my-2">
                            <v-btn
                            small
                            color="primary"
                            dark
                            :href="`${project.title}`"
                            >
                            자세히 보기
                            </v-btn>
                        </div>
                   </v-expansion-panel-content>
               </v-expansion-panel>
           </v-expansion-panels>
       </v-container>
    </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import db from '../fb'

export default {
    data() {
        return{
            // projects : [
            //     {title:'JSP',person:'Bae Seong Min',due:'2019-09 ~ 2019-12',state:'complete',content:'Ecplise의 JSP를 이용해서 회원가입, 로그인 페이지를 만들고 voca test를 위한 페이지를 제작'},
            //     {title:'AI',person:'Bae Seong Min',due:'2020-10 ~ 2020-11',state:'complete',content:'Python의 TensorFlow를 이용한 마스크 착용 여부 확인 프로그램 제작'},
            //     {title:'CMS',person:'Bae Seong Min',due:'2021-03 ~ 2021-06',state:'complete',content:'Angulr Nodejs Mongodb Express - 풀스택을 사용해서 물품 관리 시스템 페이지 제작'},
            //     {title:'Portfolio',person:'Bae Seong Min',due:'2021-11 ~ ',state:'ongoing',content:'Vue, Vuetify를 이용해서 포트폴리오 만들기'}
            // ],
            project : []
        }
    },
    methods : {
      s(title){
        this.$router.push('/'+title);
      }
    },created : async function dbcreate(){
        const allprojects2=[];
      const querySnapshot = await getDocs(collection(db, "projects"));
      querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data()}`);
        //console.log(`${doc.data().title}`);
        const allproject = doc.data();
        //let allproject = `${doc.data().title}`;
        allprojects2.push(allproject);
      });
      this.project = allprojects2;
    //   console.log(this.project);
    }
}
</script>

<style>

</style>