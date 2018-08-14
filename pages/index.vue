<template>
    <div>
       <v-toolbar app fixed>
        <v-toolbar-title> <img src="/logo.png" height="20px" width="auto">  META TV</v-toolbar-title>
      </v-toolbar>
      <YoutubePlayer />
      <v-footer app fixed height="10">
        <v-layout justify-start>
            <span class="footer--text">Built with lots of ❤️and 🤬in Tokyo.</span>
        </v-layout>
      </v-footer>
    </div>
</template>

<script>
import YoutubePlayer from '~/components/YoutubePlayer.vue'

export default {
  components: {
    YoutubePlayer,
  },
}
</script>

<style>
body {
  background-color: #35495e;
}

.footer--text {
  padding-left: 30px;
}

::-webkit-scrollbar { 
    display: none; 
}
</style>

