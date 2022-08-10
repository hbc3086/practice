<template>
  <div class="app" :class="{ on_menu: $store.state.ui.menuState == true }">
    <Menu />
    <div class="wrap">
      <Header />
      <nuxt />
    </div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__bounceInDown"
      leave-active-class="animate__animated animate__bounceOutDown"
    >
      <Alert
        v-if="$store.state.ui.popAlertData.state == true"
        :key="$store.state.ui.popAlertData.state"
      />
    </transition>
  </div>
</template>

<script>
import Alert from "~/components/popup/Alert";

export default {
  components: {
    Alert,
  },
};
</script>
