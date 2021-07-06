<template>
  <header class="header">
    <slot name="left"></slot>
    <span class="header_title">
      <span class="header_title_text ellipsis">
        {{ title }}
      </span>
    </span>
    <slot name="right"></slot>
  </header>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  // .header
  //   position fixed
  //   background #02a774
  //   left 0
  //   top 0
  //   width 100%
  //   height 45px
  //   z-index 100
  //   color #fff
  //   .header_search
  //     position absolute
  //     left 15px
  //     top 50%
  //     transform translateY(-50%)
  //     width 10%
  //     height 50%
  //     i
  //       font-size 25px
  //   .header_title
  //     position absolute
  //     top 50%
  //     left 50%
  //     transform translate(-50%, -50%)
  //     width 50%
  //     color #fff
  //     text-align center
  //     margin-left -7px
  //     .header_title_text
  //       display block
  //       font-size 20px
  //   .header_login
  //     position absolute
  //     top 50%
  //     right 15px
  //     transform translateY(-50%)
  //     font-size 14px
    .header
      position fixed
      background #02a774
      top 0
      left 0
      height 45px
      width 100%
      color #fff
      .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        i
          font-size 25px
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        text-align center
        .header_title_text
          ellipsis()
          display block
          font-size 20px
      .header_login
        position absolute
        right  15px
        top 50%
        transform translateY(-50%)
        font-size 14px
</style>
