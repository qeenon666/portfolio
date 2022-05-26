<template>
  <div class="ai mx-10 my-5">
    <h1>Nike</h1>
    <div class="container">
    <v-card flat tile class="vcard">
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
            <img src="nike.png" alt="200x200" style="width: 100%; height: 50%; ">
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
      <div class="Aicontent">
        <h1>Vue</h1><br />
          <h2>Vue&vuetify</h2><br />
          <p>
            Vue를 이용해서 나이키 페이지를 리뉴얼해서 제작했으며 스크롤을 내리고 위로 올리면 네비바가 나타나도록 제작했다.<br />
          </p>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
    data: () => ({
      length: 1,
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
.ai .container{
  width: 80%;
  height: 100%;
  margin: 0 auto;
  margin-top: 10px;
}
.ai .Aicontent{
  height: 100%;
  padding-bottom: 100px;
}
.ai .Aicontent h2{
  font-size: 15px;
  font-style: italic;
}
.ai .Aicontent p{
  font-size: 12px;
  padding-top: 10px;
}
.ai img{
  width: 100%;
  height: 330px;
}
.ai img:hover{
  transform: scale(0.8);
  transition: 0.2s;
  overflow: hidden;
}
.vcard{
  width:40%;
  margin-left:25%;
  border-width: thin;
}
</style>
