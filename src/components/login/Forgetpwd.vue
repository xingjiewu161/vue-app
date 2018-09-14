<template>
    <div>
        <t-templateLogo></t-templateLogo>
        <div class="back">back</div>
        <input id="forgetpwd" type="text">
        <button>忘记密码</button>
    </div>
</template>

<script>
import TemplateLogo from './../common/TempLogo.vue'
export default {
  name: "Forgetpwd",
  components: {
    't-templateLogo': TemplateLogo
  }
};
</script>
