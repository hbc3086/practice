<template>
  <div class="cont">
    <button class="btn" @click="fnOpenPop(1)">click</button>
    <button class="btn" @click="fnOpenPop(2)">click</button>
  </div>
</template>

<script>
import "animate.css";

export default {
  methods: {
    fnOpenPop(num) {
      if (num == 1) {
        console.log(this.$store.state.ui.PopAlertData);
        let data = {
          state: true,
          type: "alert",
          title: "Alert",
          msg: "경고창",
          btn: {
            name: "확인",
          },
        };
        this.$store.dispatch("ui/setPopAlertData", data);
        console.log(this.$store.state.ui.popAlertData);
      } else {
        let data = {
          state: true,
          type: "confirm",
          title: "Confirm",
          msg: "확인창",
          btn: {
            name: "save",
          },
        };
        this.$store.dispatch("ui/setPopAlertData", data);
      }
    },
  },
};
</script>

<style>
.cont {
  margin: 0 0 50px;
  box-sizing: border-box;
}
.btn {
  display: inline-block;
  min-width: 48px;
  padding: 8px 15px;
  border-radius: 5px;
  background: linear-gradient(
    to bottom,
    #b4ddb4 0%,
    #83c783 17%,
    #52b152 33%,
    #008a00 67%,
    #005700 83%,
    #002400 100%
  );
  color: white;
  text-align: center;
  vertical-align: middle;
  font-weight: bold;
  border: 1px solid blue;
}
</style>
