<template>
  <div id="nullPage">
    <div class="nullBox">
      <img src="./../assets/null/link.png" width="100%">
      <div>请在微信端打开~</div>
      <!-- <router-link :to="{name: 'brand'}">
        <van-tag
          style="border: 1px #ff504e solid;margin-top: 50px;"
          plain
          round
          color="#fff"
          text-color="#ff504e"
          type="danger"
        >返回首页</van-tag>
      </router-link> -->
    </div>
    <EazyNav type="brand"></EazyNav>
    
  </div>
</template>
<style lang="scss">
#nullPage {
  min-height: 100%;
  [class*="van-hairline"]:after {
    border: none;
  }
}
</style>

<script>
export default {
  methods: {
    relink() {
      window.location.reload();
    }
  }
};
</script>
