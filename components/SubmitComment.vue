<template>
  <div style="padding-top: 10px;" v-if="this.$store.state.postView">
    <v-card>
        <v-form v-if="!this.posted">
          <v-card-title class="timeStamp">To appear at: {{convertSecondsToMinutes(this.$store.state.currentTime)}}</v-card-title>
          <v-card-text>
            <v-textarea rows=1 flat v-model="comment" placeholder="Impress us, Senpai!" auto-grow></v-textarea>
          </v-card-text>
          <div class="text-xs-center">
            <v-btn class="post" outline color="white" @click="post">Post</v-btn>
          </div>
        </v-form>
        <v-container v-if="this.posted" grid-list-md  text-xs-center>
          <v-layout container wrap>
          <v-flex xs12>
            <img src="http://static3.gamespot.com/uploads/square_medium/1551/15516851/2941772-lfs21.png" width="auto" height="80px" alt="">
          </v-flex>
          <v-flex xs12 class="teemo--success" > SUCCESS! </v-flex>
          </v-layout>
        </v-container>
    </v-card>
  </div>  
</template>

<script>
import axios from 'axios';

export default {
  computed: {
    comment: {
      get() {
        return ""
      },
      set(value) {
        return this.inputComment = value
      }
    },
    visible: {
      get() {
        return Number(this.$store.state.comments.messages[this.$store.state.comments.messages.length - 1].videoTimestamp) > (Number(this.$store.state.currentTime - 2))
      },
    }
  },
  data: () => ({
    inputComment: "",
    posted: false,
  }),
  methods: {
    convertSecondsToMinutes (time) {
      const hr = ~~(time / 3600);
      const min = ~~((time % 3600) / 60);
      const sec = time % 60;
      let sec_min = "";
      if (hr > 0) {
          sec_min += "" + hr + ":" + (min < 10 ? "0" : "");
      }
      sec_min += "" + min + ":" + (sec < 10 ? "0" : "");
      sec_min += "" + sec;
      return sec_min+ " min";
    },
    async post (event) {
      await axios.post('/api/messages', {
        videoTimestamp: this.$store.state.currentTime,
        text: this.inputComment
      })
      this.posted = true;
      this.$store.commit("insertComment", {
        videoTimestamp: this.$store.state.currentTime,
        text: this.inputComment
      })
    }
  }
}
</script>

<style scoped>
.timeStamp {
  font-size: 16px;
  color: rgb(238, 238, 238);
  margin-bottom: -25px;
}

.post {
  margin: -10px 0 20px 0; 
  width: 94%;
}

.teemo--success {
  font-size: 26px;
  margin: auto;
  font-weight: bold;
  color: rgb(78, 221, 174)
}
</style>
