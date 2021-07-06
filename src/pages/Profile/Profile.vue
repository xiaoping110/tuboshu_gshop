<template>
  <div class="profile">
    <HeaderTop title="我的" />
    <div class="profile-number">
      <router-link to="/login" class="profile-link">
        <div class="profile_img">
          <i class="iconfont icon-person"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top">登录/注册</p>
          <p>
            <span class="user-icon">
              <i class="iconfont icon-shouji icon-mobile"></i>
            </span>
            <span class="icon-mobile-number">暂无绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-jiantou1"></i>
        </span>
      </router-link>
      <div class="profile_info_data border-1px">
        <ul class="info-data-list">
          <li class="info_data_link">
            <a href="javascript:">
              <span class="info_data_top"><span class="info_data_top_count1">0.00</span>元</span>
              <span class="info_data_bottom">我的余额</span>
            </a>
          </li>
          <li class="info_data_link">
            <a href="javascript:">
              <span class="info_data_top"><span class="info_data_top_count2">0</span>个</span>
              <span class="info_data_bottom">我的优惠</span>
            </a>
          </li>
          <li class="info_data_link">
            <a href="javascript:">
              <span class="info_data_top"><span class="info_data_top_count3">0</span>分</span>
              <span class="info_data_bottom">我的积分</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="profile-my-order">
        <a href="javascript:;" class="my_order">
          <span>
            <i class="iconfont icon-order-s"></i>
          </span>
          <div class="my_order-div">
            <span>我的订单</span>
            <span class="my_order_icon">
              <i class="iconfont icon-jiantou1"></i>
            </span>
          </div>
        </a>
        <a href="javascript:;" class="my_order">
          <span>
            <i class="iconfont icon-jifen"></i>
          </span>
          <div class="my_order-div">
            <span>积分商城</span>
            <span class="my_order_icon">
              <i class="iconfont icon-jiantou1"></i>
            </span>
          </div>
        </a>
        <a href="javascript:;" class="my_order">
          <span>
            <i class="iconfont icon-vip"></i>
          </span>
          <div class="my_order-div">
            <span>硅谷外卖会员卡</span>
            <span class="my_order_icon">
              <i class="iconfont icon-jiantou1"></i>
            </span>
          </div>
        </a>
      </div>
      <div class="profile-my-order">
        <a href="javascript:;" class="my_order">
          <span>
            <i class="iconfont icon-fuwu"></i>
          </span>
          <div class="my_order-div">
            <span>服务中心</span>
            <span class="my_order_icon">
              <i class="iconfont icon-jiantou1"></i>
            </span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
  components: {
    HeaderTop
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.profile
  overflow hidden
  .profile-number
    margin-top 45.5px
    .profile-link
      clearFix()
      position relative
      display block
      padding 20px 10px
      background #02a774
      .profile_img
        float left
        width 60px
        height 60px
        border-radius 50%
        overflow hidden
        vertical-align top
        .icon-person
          background #e4e4e4
          font-size 62px
      .user-info
        float left
        margin-top 8px
        margin-left 15px
        p
          font-weight 700
          font-size 18px
          color #fff
          &.user-info-top
            padding-bottom 8px
          .user-icon
            display inline-block
            margin-left -15px
            margin-right 5px
            width 20px
            height 20px
            .icon-mobile
              font-size 30px
              vertical-align text-top
          .icon-mobile-number
            font-size 14px
      .arrow
        position absolute
        width 12px
        height 12px
        right 15px
        top 40%
        .icon-jiantou1
          font-size 14px
          color #fff
    .profile_info_data
      bottom-border-1px(#e4e4e4)
      background #fff
      width 100%
      overflow hidden
      .info-data-list
        clearFix()
        .info_data_link
          float left
          width 33%
          text-align center
          border-right 1px solid #f1f1f1
          &:last-child
            border-right none
          a
            display block
            height 80px
            display flex
            flex-direction column
            justify-content center
          .info_data_top
            font-size 14px
            color #333
            padding 15px 5px 10px 10px
            span
              font-size 30px
              font-weight 700
              line-height 30px
            .info_data_top_count1
              color #f90
            .info_data_top_count2
              color #ff5f3e
            .info_data_top_count3
              color #6ac20b
          .info_data_bottom
              font-size 14px
              color #666
              font-weight 400px
              padding-bottom 10px
    .profile-my-order
      margin-top 10px
      background #fff
      .my_order
        height 53px
        display flex
        line-height 53px
        padding 0px 15px
        >span
          .iconfont
            font-size 30px
            margin-left -10px
          .icon-order-s
            color #02a774
          .icon-jifen
            color #ff5f3e
          .icon-vip
            color #f90
          .icon-fuwu
            color #02a774
        .my_order-div
          bottom-border-1px(#e4e4e4)
          display flex
          width 100%
          justify-content space-between
          span
            font-size 16px
            color #333
          .my_order_icon
            font-size 10px
            color #bbb

</style>
