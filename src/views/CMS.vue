<template>
  <div class="cms mx-10 my-5">
    <h1>CMS</h1>
    <div class="container">
      <v-card flat tile style="width:40%; margin-left:25%;">
        <v-window
          v-model="onboarding"
          reverse
        >
        <v-window-item
          v-for="n in length"
          :key="`card-${n}`"
        >
          <v-card
            color="white"
            height="500"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <h1
                style="font-size: 5rem;"
                class="white--text"
              >
              <img :src="`cms${n}.png`" alt="200x200" style="width: 100%; height: 50%; ">
              </h1>
            </v-row>
          </v-card>
        </v-window-item>
      </v-window>

      <v-card-actions class="justify-space-between">
        <v-btn
          text
          @click="prev"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-item-group
          v-model="onboarding"
          class="text-center"
          mandatory
        >
          <v-item
            v-for="n in length"
            :key="`btn-${n}`"
            v-slot="{ active, toggle }"
          >
            <v-btn
              :input-value="active"
              icon
              @click="toggle"
            >
              <v-icon>mdi-record</v-icon>
            </v-btn>
          </v-item>
        </v-item-group>
        <v-btn
          text
          @click="next"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>
      </v-card>
      <div>
        <div class="cmscontent">
          <h1>Angulr & NodeJs & Mongodb & Express</h1><br />
          <h2>Fullstack - Web Page, Back-end 제작</h2><br />
          <p>
            기본적으로 Angulr를 front-end를 제작했으며 NodeJs를 연결하기 위해 Express를 사용해서 구현 한 다음에<br />
            MongoDB를 사용해서 DB에 저장된 내용을 Rest API를 이용해서 내용을 불러오고 저장하는 웹 페이지를 제작했습니다.<br /><br />
            CMS 프로젝트는 간단하게 제작한 웹사이트이며 angulr와 nodejs의 기초에 대해 공부했습니다.<br />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data: () => ({
      length: 4,
      onboarding: 0,
    }),

    methods: {
      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      },
    },
  }
</script>
<style>
.cms .container{
  width: 80%;
  height: 100%;
  margin: 0 auto;
  margin-top: 10px;
}
.cms .cmscontent{
  padding-top: 15px;
  height: 350px;
  margin: 0 auto;
}
.cms .cmscontent h2{
  font-size: 15px;
  font-style: italic;
}
.cms .cmscontent p{
  font-size: 12px;
  padding-top: 10px;
}
.cms img{
  width: 100%;
  height: 330px;
}
.cms img:hover{
  transform: scale(0.8);
  transition: 0.2s;
  overflow: hidden;
}
</style>
