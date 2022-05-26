<template>
    <v-dialog
      v-model="dialog"
      max-width="600"
      :eager="true"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="black lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Add New Project
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
            <span class="text-h5">Add New Project</span>
        </v-card-title>
        <v-card-text>
            <v-form class="px-3">
                <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder"></v-text-field>
                <v-textarea label="Information" v-model="content" prepend-icon="mdi-comment-text"></v-textarea>
                <v-text-field label="completeness" v-model="completeness" prepend-icon="mdi-check-circle-outline" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" maxlength="3"></v-text-field>
                <!-- <v-text-field label="color" v-model="color" prepend-icon="mdi-comment-text"></v-text-field> -->
                
            </v-form>
            <v-text-field v-model="color2" v-mask="mask" hide-details class="ma-0 pa-0" prepend-icon="mdi-invert-colors">
              <template v-slot:append>
                <v-menu v-model="menu3" 
                    top nudge-bottom="105"
                    nudge-left="16"
                     :close-on-content-click="false">
                  <template v-slot:activator="{ on }">
                    <div :style="swatchStyle" v-on="on" />
                  </template>
                  <v-card>
                    <v-card-text class="pa-0">
                      <v-color-picker v-model="color2" flat />
                    </v-card-text>
                  </v-card>
                </v-menu>
              </template>
            </v-text-field>
                <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="date"
                        label="Picker without buttons"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-date-picker
                    v-model="date"
                    @input="menu2 = false"
                    ></v-date-picker>
                    
                </v-menu>
                <v-btn class="sucess mx-0 mt-3" @click="submit">Add Project</v-btn>
                <v-spacer></v-spacer>
        </v-card-text>

        <v-divider></v-divider>
      </v-card>
    </v-dialog>
</template>
<script>
import { addDoc, collection } from "firebase/firestore";
import db from '../fb'

export default {
  data(){
        return{
            color2: '#000000',
            mask: '!#XXXXXXXX',
            title:'',
            content:'',
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menu3: false,
            menu2: false
        }
  },
  methods: {
      async submit(){
            // console.log(this.title,this.content, this.date, this.color);
            const project = {
              title: this.title,
              content : this.content,
              due : this.date,
              completeness: this.completeness,
              color: this.color2,
              person : 'Bae Seong Min',
              state: 'ongoing'
            };
            // console.log(project);
            // this.$firestore.collection('projects').add(project);
            try {
              const docRef = await addDoc(collection(db, "projects"), {
                title: project.title,
                content: project.content,
                due: project.due,
                person: project.person,
                state: project.state,
                completeness: project.completeness,
                color: project.color
              });
              console.log("Document written with ID: ", docRef.id);
            } catch (e) {
              console.error("Error adding document: ", e);
            }
      //       const r = await this.$firebase.collection("projects").add({
      //   title: project.title, content: project.content,due:project.due
      // })
      // console.log(r);
            // db2.collection('asd').add({title:project.title, content : project.content,
            //   due : project.due,
            //   person : project.person,
            //   state: project.state})
            // .then(() => {
            //     console.log("Document successfully written!");
            // })
            // .catch((error) => {
            //     console.error("Error writing document: ", error);
            // });
            // this.$router.go();
            window.location.reload(true);
            window.close();
      }
  },
  computed: {
    swatchStyle() {
      const { color2, menu3 } = this
      return {
        backgroundColor: color2,
        cursor: 'pointer',
        height: '30px',
        width: '30px',
        borderRadius: menu3 ? '50%' : '4px',
        transition: 'border-radius 200ms ease-in-out'
      }
    }
  }
}
</script>