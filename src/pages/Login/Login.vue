<template>
  <div class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_login">硅谷外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" class="on">短信登录</a>
          <a href="javascript:;">密码登录</a>
        </div>
      </div>

      <div class="login_content">
        <form>
          <div class="on">
            <div class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号">
              <button disabled="disabled" class="get_verification">获取验证码</button>
            </div>
            <div class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码">
            </div>
            <div class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </div>
          </div>
          <button class="login_submit" @click="testGet">登录</button>
        </form>
         <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
  </div>
</template>

<script>
import {reqAddress} from '../../api/index.js'
export default {
  methods: {
    testGet: function () {
      console.log(reqAddress('40.10038,116.36867'))
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.loginContainer
  position relative
  width 100%
  height 100%
  background #fff
  overflow hidden
  .loginInner
    padding-top 60px
    margin 0 auto
    width 80%
    .login_header
      height 105px
      text-align center
      .login_login
        font-size 40px
        font-weight bold
        color #02a774
      .login_header_title
        padding-top 40px
        font-size 14px
        a
          margin 0 20px
          padding-bottom 4px
          &.on
            font-weight 700
            color #02a774
            border-bottom 2px solid #02a774
    .login_content
      form
        input
          box-sizing border-box
          height 48px
          width 100%
          border 1px solid #ddd
          border-radius 4px
          font 400 14px Arial
          outline 0
          padding-left 10px
          margin 8px 0px
        .login_message
          position relative
          .get_verification
            position absolute
            right 10px
            top 50%
            transform translateY(-50%)
            border 0
            background transparent
            color #ccc
        .login_hint
          margin-top 8px
          font-size 14px
          color #999
          line-height 20px
          a
            color #02a774
        .login_submit
          width 100%
          color #fff
          background #4cd96f
          height 42px
          border 0px
          border-radius  4px
          margin-top 30px
          font-size 16px
      .about_us
        font-size 12px
        margin-top 20px
        text-align center
        display block
        color #999
    .go_back
      position absolute
      top 5px
      left 5px
      i
        font-size 20px
        color #999
</style>
