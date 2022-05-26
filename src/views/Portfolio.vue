<template>
  <div class="portfolio mx-10 my-5">
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
          height="400"
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
            <img :src="`portfolio${n}.PNG`" alt="200x200" style="width: 100%; height: 50%; ">
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
      <div class="portfoliocontent">
        <h1>Vue & Vuetify</h1><br />
          <h2>Vuetify - 웹페이지 구현</h2><br />
          <p>
            기본적으로 Vue에 대해 공부 한 뒤 Vuetify를 이용해서 포트폴리오를 제작을 하고있으며<br />
            Css를 이용해서 텍스트 타이핑 효과를 적용했다.<br />
            계속해서 수정을 해서 완성할 예정이다.<br />
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
.portfolio .container{
  width: 80%;
  height: 100%;
  margin: 0 auto;
  margin-top: 10px;
}
.portfolio .portfoliocontent{
  padding-top: 15px;
  height: 350px;
  margin: 0 auto;
}
.portfolio .portfoliocontent h2{
  font-size: 15px;
  font-style: italic;
}
.portfolio .portfoliocontent p{
  font-size: 12px;
  padding-top: 10px;
}
.portfolio img{
  width: 100%;
  height: 330px;
}
.portfolio img:hover{
  transform: scale(0.9);
  transition: 0.2s;
  overflow: hidden;
}
</style>
