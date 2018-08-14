<template>
 <v-content>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs9>
    <no-ssr placeholder="Loading...">
      <div style="position:relative; width:100%; height:0px; padding-bottom:56.25%;">
        <youtube style="position:absolute; left:0; top:0; width:100%; height:100%" ref="player" :video-id="videoId" @ready="startInterval" :player-width="'100%'" :player-height="'100%'" frameborder="0" allowfullscreen></youtube>
      </div>
    </no-ssr>
        </v-flex>
        <v-flex fill-height xs3 class="scroll">
          <submit-comment/>
          <!-- Current Time: {{convertSecondsToMinutes(this.$store.state.currentTime)}} -->
          <div flat class="message" v-for="message in reversedMessages" v-bind:key="message.videoTimestamp">
            <v-card v-if="currentTime > message.videoTimestamp">
              <v-card-title class="card--timestamp">{{convertSecondsToMinutes(message.videoTimestamp)}}</v-card-title>
              <v-card-text class="card--text">{{message.text}}</v-card-text>
            </v-card>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
 </v-content>
</template>

<script>
import Vue from "vue";
import VueYouTubeEmbed from 'vue-youtube-embed';
import { getIdFromURL, getTimeFromURL, getCurrentTime } from 'vue-youtube-embed';
import axios from 'axios';

Vue.use(VueYouTubeEmbed);

import SubmitComment from './SubmitComment'

export default {
 computed: {
    currentTime() {
      return this.$store.state.currentTime;
    },
    reversedMessages() {
      const copy = [...this.$store.state.comments.messages]
      return copy.sort(function(a, b) {
        return b.videoTimestamp - a.videoTimestamp;
      });
    },
    videoId() {
      return getIdFromURL("https://www.youtube.com/watch?v=78nt0rINauw");
    },
    startTime() {
      return getTimeFromURL("https://www.youtube.com/watch?v=78nt0rINauw");
    }
  },
   methods: {
    startInterval () {
      setInterval(() => this.$store.commit("incrementTime", String(this.$refs.player.player.getCurrentTime())), 1000)
    },
    convertSecondsToMinutes (time) {
      const hr = ~~(time / 3600);
      const min = ~~((time % 3600) / 60);
      const sec = time % 60;
      let sec_min = "";
      if (hr > 0) {
          sec_min += "" + hrs + ":" + (min < 10 ? "0" : "");
      }
      sec_min += "" + min + ":" + (sec < 10 ? "0" : "");
      sec_min += "" + sec;
      return sec_min+ " min";
    },
  },
  components: {
    'submit-comment': SubmitComment,
  }
}
</script>

<style>
.video-container {
  width: 80%; 
  max-width: 600px; 
  height: 100%; 
  margin: 0 auto; 
  background: #CCC;
}

.message {
  margin: 10px 0;
}

.card--timestamp {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgb(207, 207, 207);
  margin-bottom: -25px; 
}

.card--text {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.1em;
}

.scroll {
  height: 100%;
  position: absolute;
  top: 10px;
  bottom: 0;
  right: 0;
  left: 74.5%;
  overflow: auto;
}
</style>
