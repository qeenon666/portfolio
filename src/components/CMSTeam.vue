<template>
    <div class="team">

       <v-container>
           <v-row wrap>
               <v-col cols="12" sm="4" md="3" v-for="person in team" :key="person.name">
                   <v-card flat outlined class="text-center ma-3">
                       <v-responsive class="pt-6">
                           <v-avatar size="100">
                               <!-- 이미지 영역 -->
                               <img :src="person.avatar">
                           </v-avatar>
                       </v-responsive>
                       <v-card-text>
                            <div class="subheading">{{person.name}}</div>
                            <div class="grey--text">{{person.role}}</div>
                       </v-card-text>
                   </v-card>
               </v-col>
           </v-row>
       </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            team : [
                {name : '배성민', role: 'all', avatar: '1.jpg'}
            ]
        }
    }
}
</script>

<style>

</style>