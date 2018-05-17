<template>
  <transition name="intro">
    <div
      class="intro"
      @click="showContent = false"
      v-if="showIntro"
    >
      <transition name="content">
        <div class="content" v-if="showContent">
          <h1>
            <span>{{version}}</span>
            {{title}}
          </h1>
          <div class="text">
            <slot>
              <p>
                Imagine your job title is {A} while working for company {B}.
                This prototype explores a solution for problem {C}.
              </p>
              <p>
                Please take it for a test run. Then we'd like to know if you're
                excited about this direction and if you've got any feedback or ideas.
              </p>
              <p>
                Thanks for your input!
              </p>
            </slot>
          </div>
          <div class="action">
            <button @click="showContent = false">{{button}}</button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Testing Feature {X}'
    },
    version: {
      type: String,
      default: 'v1'
    },
    button: {
      type: String,
      default: 'Got it!'
    }
  },
  data () {
    return {
      showContent: false,
      showIntro: true
    }
  },
  watch: {
    showContent () {
      if (!this.showContent) {
        setTimeout(() => {
          this.showIntro = false;
        }, 310);
      }
      //console.log(this.show);
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.showContent = true;
    })
  }
}
</script>

<style scoped>
  .intro {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,5,10,.85);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
  }

  .content {
    display: inline-block;
    padding: 0;
    background: #fff;
    border-radius: 3px;
    text-align: left;
    width: 40vw;
    position: relative;
  }

  .content h1 {
    border-bottom: 2px solid #eee;
    margin: 0;
    padding: 0 25px;
    font-size: 18px;
    line-height: 48px;
    position: relative;
  }

  .content h1 span {
    float: right;
    color: #999;
    font-size: 14px;
  }

  .text {
    padding: 25px;
  }

  .action {
    text-align: center;
    padding: 25px;
  }

  button {
    border: 2px solid #222;
    color: #222;
    background: transparent;
    height: 34px;
    line-height: 34px;
    border-radius: 5px;
    padding: 0 30px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    text-transform: uppercase;
    box-sizing: content-box;
  }

  button:focus {
    outline: none;
  }

  .intro-enter-active, .intro-leave-active {
    transition: all .3s ease-in-out;
  }
  .intro-enter, .intro-leave-to {
    opacity: 0;
  }

  .content-enter-active, .content-leave-active {
    transition: all .3s ease-in-out;
  }
  .content-enter, .content-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
