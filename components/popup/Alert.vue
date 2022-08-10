<template>
  <div
    class="popup"
    v-if="data !== null"
    :class="data.type !== undefined ? data.type : 'alert'"
  >
    <div class="p_wrap">
      <div class="p_top">
        <h3 v-if="data.title !== undefined" v-html="data.title"></h3>
        <button class="btn_close" @click="fnClosePop">닫기</button>
      </div>
      <div class="p_container">
        <div class="msg" v-html="data.msg"></div>
      </div>
      <div class="p_bottom" v-if="data.type === 'alert'">
        <button
          v-if="data.btn.link == undefined"
          @click="fnClosePop"
          class="btn"
        >
          <b>{{ data.btn.name }}</b>
        </button>
        <nuxt-link v-else :to="data.btn.link" class="btn"
          ><b>{{ data.btn.name }}</b></nuxt-link
        >
      </div>
      <div class="p_bottom" v-else>
        <button
          v-if="data.btn.link == undefined"
          @click="fnClosePop"
          class="btn"
        >
          <b>{{ data.btn.name }}</b>
        </button>
        <nuxt-link v-else :to="data.btn.link" class="btn"
          ><b>{{ data.btn.name }}</b></nuxt-link
        >
        <!-- <nuxt-link :to="data.btn.link == undefined?'':data.btn.link" class="button"><b>{{data.btn.name}}</b></nuxt-link> -->
        <!-- <nuxt-link :to="data.btn.link" class="btn"><b>{{data.btn.name}}</b></nuxt-link> -->
        <button @click="fnClosePop" class="btn dark"><b>Close</b></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
    };
  },
  components: {},
  mounted() {
    this.data = this.$store.state.ui.popAlertData;
    //라우터 전환될 때 이벤트
    $nuxt.$router.beforeEach((to, from, next) => {
      this.fnClosePop();
      next();
    });
  },
  methods: {
    fnClosePop() {
      this.$store.dispatch("ui/setPopAlertData", {
        state: false,
        type: null,
        title: null,
        msg: null,
        btn: {
          link: "",
          name: null,
        },
      });
    },
  },
};
</script>

<style>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  overflow-y: auto;
  color: black;
  opacity: 1;
  animation-duration: 0.5s;
}
.p_wrap {
  position: fixed;
  width: 90%;
  max-width: 450px;
  min-height: 170px;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  background: white;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 150ms;
  align-content: space-between;
  border: 1px solid #dedede;
  border-radius: 10px;
}
.p_top {
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dedede;
}
.p_container {
  padding: 20px;
  min-height: 80px;
}
.p_bottom {
  border-top: 1px solid #dedede;
  justify-content: flex-end;
  align-items: center;
  padding: 0 17.5px 0 20px;
}
.p_bottom .btn {
  margin: 0 2.5px;
}
</style>
