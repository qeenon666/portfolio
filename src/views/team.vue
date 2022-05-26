<template>
    <div class="team mx-10 my-5">
       <h1>Team</h1>
        <br />
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
// import storage from '../ime'
// import { ref,listAll } from 'firebase/storage';



// const url = 'gs://nike-project-e21ed.appspot.com';
export default {
    
    data() {
        return {
            team : [
                {name : '배성민', role: 'all', avatar: '1.jpg'},
                {name : '박시현', role: 'front-end', avatar: ''}
            ]
        }
    }
    // ,created : async function a(){
    //     const storageRef = ref(storage, "/1");
    //     console.log(storageRef);
    //     listAll().then(res => {
    //     res.items.forEach(item => {
    //         // console.log( item.name ); 
    //         item.getDownloadURL().then(function (url) {
    //             console.log(url);
    //         });
    // });
//})
        // const downloadURL = await getDownloadURL(storageRef);
        // const storage = db.storage("gs://my-custom-bucket");
        // console.log(storage);
        // // console.log(bucket);
        // storage.ref().child(`1.png`).getDownloadURL().then( function(url) {
        //     console.log("storage image URL: " + url);
        // }).catch(function(error) {
        //     console.log(error);
        // });
        // var gsReference = storage.bucket('gs://nike-project-e21ed.appspot.com/1')
        // console.log(gsReference);
        // // this.avatar = a;
}
</script>

<style>

</style>