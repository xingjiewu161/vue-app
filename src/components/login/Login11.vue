<template>
    <div class="container">
      <header>
          <img :src="src" alt="user image" id="uploadImg">
      </header>
      <article>
        <div class="title">研发中心2018年度大会报名</div>
        <div class="sub-content text-center">
          <el-form :model="loginForm" :rules="rules" status-icon ref="loginForm" class="login-form">
            <div class="input-group">
              <el-form-item prop="cellphone">
                <el-input v-model="loginForm.cellphone" placeholder="请输入手机号" prefix-icon="el-icon-mobile-phone" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="loginForm.password" placeholder="请输入姓名" prefix-icon="el-icon-edit" auto-complete="off"></el-input>
              </el-form-item>
              <div class="flex upload">
                <el-form-item prop="department" >
                    <el-select v-model="loginForm.department" placeholder="请选择部门">
                    <el-option label="研发一部" value="研发一部"></el-option>
                    <el-option label="研发二部" value="研发二部"></el-option>
                    <el-option label="研发三部" value="研发三部"></el-option>
                    <el-option label="研发四部" value="研发四部"></el-option>
                    <el-option label="研发五部" value="研发五部"></el-option>
                    <el-option label="研发六部" value="研发六部"></el-option>
                    <el-option label="测试部" value="测试部"></el-option>
                    <el-option label="研发管理部" value="研发管理部"></el-option>
                    <el-option label="综合管理部" value="综合管理部"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item prop="uploadFile">
                  <el-button type="primary" v-on:click="imgClick()"><i class="fa fa-camera mg-r5"></i>靓照</el-button>
                  <input class="uploadInfo" type="file" id='uploadFile' accept="image/*" v-on:change="readLocalFile()" />
                </el-form-item>
              </div>
            </div>
            <div>
                <el-button @click="login()" class="wf" type="primary" size="medium" :loading="loading">一键报名</el-button>
                <div class="info">
                  <div style="text-align: left; padding-top: 10px;">来自程序猿的友情提醒:</div>
                  <div style="padding-top: 4px;">&nbsp;&nbsp;&nbsp;&nbsp;不要过度美颜，如果非要化妆，请确保与25日入场时妆容一致；请使用真实照片，有可能会被抽中特写...</div>
                </div>
            </div>
          </el-form>
        </div>
      </article>
    </div>
</template>

<script>
import TemplateLogo1 from "./../common/TempLogo1.vue";
import { Message, MessageBox } from 'element-ui'
import EXIF from 'exif-js'
export default {
  name: "Login",
  components: {
    "t-templateLogo": TemplateLogo1
  },
  created() {},
  beforeDestory() {},
  data() {
    let validateUsername = (rule, value, callback) => {
      !/^\d+$/.test(value)
        ? callback(new Error("手机号只能输入数字！"))
        : callback();
    };
    let validatorPassword = (rule, value, callback) => {
      !/^.{0,12}$/.test(value)
        ? callback(new Error("密码最大长度 不超过12个字符"))
        : callback();
    };
    return {
      initImage: null,
      loading: false,
      src: './../../../static/images/WeChat.png',
      loginForm: {
        cellphone: "",
        password: "",
        department: "",
        remeber: false
      },
      rules: {
        cellphone: [
          { required: true, message: "请输入手机号", trigger: "change" },
          { validator: validateUsername, trigger: "change" }
        ],
        password: [
          { required: true, message: "请输入姓名", trigger: "change" },
          { validator: validatorPassword, trigger: "change" }
        ],
        department: [
          { required: true, message: '请选择部门', trigger: 'change' }
        ]
      },
      newsListShow: []
    };
  },
  methods: {
    login() {
      this.$refs["loginForm"].validate(valid => {
        if (valid) {
          if (this.initImage) {
            this.loading = true;
            this.$store
              .dispatch("Login", {...this.loginForm, uploadinfo: this.initImage})
              .then(v => {
                console.log(v)
                if (v.data.code === '0000') {
                  this.pushMsg('报名成功，25日会场刷脸签到即可', 'success')
                  this.loading = false;
                  this.$refs['loginForm'].resetFields();
                  this.src = './../../../static/images/WeChat.png'
                  // this.$router.push({ path: `basic` });
                  window.localStorage.setItem('baseUrl', v.data.qrcodeUrl)
                } else {
                  this.loading = false;
                  MessageBox.confirm(v.data.msg, '报名失败', {
                    cancelButtonText: '取消',
                    type: 'warning'
                  })
                }
                // this.loading = false;
                // this.$router.push({ path: "basic" });
                // this.$store.state.login.token
                //   ? this.$router.replace({ path: "basic" })
                //   : this.$message("Current user infomation exception ");
              })
              .catch(e => {
                this.loading = false;
              });
          } else {
            this.pushInfo('请点击靓照按钮，上传本人面部照片');
            return false;
          }
        } else return false;
      });
    },
    pushMsg(msg, type) {
      Message({
        message: msg,
        type: type,
        duration: 5 * 1000
      });
    },
    gotoForgetPwd($event) {
      event.preventDefault();
      this.$router.push({ path: "/forgetpwd" });
    },
    imgClick() {
      document.getElementById("uploadFile").click();
    },
    pushInfo (str) {
      const h = this.$createElement;
      this.$message({
        message: h('p', { style: 'textAlign: center' }, [
          h('span', null, str),
          h('i', { style: 'color: teal' })
        ])
      });
    },
    readLocalFile () {
      let picVal = document.getElementById("uploadFile").files[0];
      this.imgPreview(picVal);
    },
    imgPreview (file) {
      let _this = this;
      let Orientation;
      // 去获取拍照时的信息，解决拍出来的照片旋转问题
      EXIF.getData(file, function() {
        Orientation = EXIF.getTag(this, 'Orientation');
      });
      // 看支持不支持FileReader
      if (!file || !window.FileReader) return;
      if (/^image/.test(file.type)) {
        // 创建一个reader
        let reader = new FileReader();
        // 将图片2将转成 base64 格式
        reader.readAsDataURL(file);
        // 读取成功后的回调
        reader.onloadend = function () {
          let result = this.result;
          let img = new Image();
          img.src = result;
          // 判断图片是否大于100K,是就直接上传，反之压缩图片
          if (this.result.length <= (100 * 1024)) {
            _this.src = this.result;
          } else {
            img.onload = function () {
              let data = _this.compress(img, Orientation);
              console.log(data)
              _this.src = data;
              _this.initImage = data;
            }
          }
        }
      }
    },
    compress (img, Orientation) {
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext('2d');
      // 瓦片canvas
      let tCanvas = document.createElement("canvas");
      let tctx = tCanvas.getContext("2d");
      let initSize = img.src.length;
      let width = img.width;
      let height = img.height;
      // 如果图片大于四百万像素，计算压缩比并将大小压至400万以下
      let ratio;
      if ((ratio = width * height / 4000000) > 1) {
        console.log("大于400万像素")
        ratio = Math.sqrt(ratio);
        width /= ratio;
        height /= ratio;
      } else {
        ratio = 1;
      }
      canvas.width = width;
      canvas.height = height;
      // 铺底色
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // 如果图片像素大于100万则使用瓦片绘制
      let count;
      if ((count = width * height / 1000000) > 1) {
        console.log("超过100W像素");
        count = ~~(Math.sqrt(count) + 1); // 计算要分成多少块瓦片
        // 计算每块瓦片的宽和高
        let nw = ~~(width / count);
        let nh = ~~(height / count);
        tCanvas.width = nw;
        tCanvas.height = nh;
        for (let i = 0; i < count; i++) {
          for (let j = 0; j < count; j++) {
            tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
            ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
          }
        }
      } else {
        ctx.drawImage(img, 0, 0, width, height);
      }
      // 修复ios上传图片的时候 被旋转的问题
      if (Orientation !== "" && Orientation !== 1) {
        switch (Orientation) {
        case 6: // 需要顺时针（向左）90度旋转
          this.rotateImg(img, 'left', canvas);
          break;
        case 8: // 需要逆时针（向右）90度旋转
          this.rotateImg(img, 'right', canvas);
          break;
        case 3: // 需要180度旋转
          this.rotateImg(img, 'right', canvas); // 转两次
          this.rotateImg(img, 'right', canvas);
          break;
        }
      }
      // 进行最小压缩
      let ndata = canvas.toDataURL('image/jpeg', 0.2);
      console.log(ndata)
      console.log('压缩前：' + initSize);
      console.log('压缩后：' + ndata.length);
      console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + "%");
      tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
      return ndata;
    },
    rotateImg (img, direction, canvas) {
      // 最小与最大旋转方向，图片旋转4次后回到原方向
      let min = 0;
      let max = 3;
      if (img == null) return;
      // img的高度和宽度不能在img元素隐藏后获取，否则会出错
      let height = img.height;
      let width = img.width;
      let step = 2;
      if (step == null) step = min;
      if (direction === 'right') {
        step++;
        // 旋转到原位置，即超过最大值
        step > max && (step = min);
      } else {
        step--;
        step < min && (step = max);
      }
      // 旋转角度以弧度值为参数
      let degree = step * 90 * Math.PI / 180;
      let ctx = canvas.getContext('2d');
      switch (step) {
      case 0:
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0);
        break;
      case 1:
        canvas.width = height;
        canvas.height = width;
        ctx.rotate(degree);
        ctx.drawImage(img, 0, -height);
        break;
      case 2:
        canvas.width = width;
        canvas.height = height;
        ctx.rotate(degree);
        ctx.drawImage(img, -width, -height);
        break;
      case 3:
        canvas.width = height;
        canvas.height = width;
        ctx.rotate(degree);
        ctx.drawImage(img, -width, 0);
        break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
body {
  background: #f6f6f6;
}
.content,
.title,
.text-center {
  text-align: center;
}
.title {
  font-size: 1rem;
  font-weight: 700;
  padding: 0 40px 10px 40px;
}
.wf {
  width: 100%;
}
.flex {
  display: flex;
}
.uploadInfo {
  display: none;
}
img {
  height: 200px !important;
}
header {
  padding: 40px 10px 5px;
  height: 250px;
  overflow: hidden;
}
.info {
  color: red;
}
.upload {
  justify-content: space-between;
}
.jc-bwt {
  justify-content: space-between;
}
.al-cen {
  align-items: center;
}
article {
  padding: 0 25px 25px;
}
.sub-content {
  margin-top: 10px;
  margin-bottom: 0;
}
.el-form-item {
  margin-bottom: 20px;
}
.el-input__inner {
  background-color: #f6f6f6;
}
</style>
