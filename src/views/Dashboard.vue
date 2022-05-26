<template>
    <div>
        <h1 class="subheading grey--text">Dashboard</h1>
        <div class="portdashboard">
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
                <v-card @click="s()" class="pa-2 grey lighten-4" flat v-for="project in projects" :key="project.title">
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
    </div>
</template>