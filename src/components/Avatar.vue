<template>
  <div class="avatars">
    <div
      class="avatar"
      v-for="i in Number(count)"
      :key="i + '_avatar'"
    >
      <div
        class="img"
        v-bind:style="{
          'background': color
        }"
      />
      <div class="bio">
        <div class="name">
          <div
            class="text"
            v-bind:style="{
              'background': color,
              'flex-grow': nameWidth()
            }"
          />
          <div class="space" />
        </div>
        <div class="links">
          <div
            class="link"
            v-bind:style="{
              'background': color,
              'flex-grow': 1
            }"
          />
          <div
            class="link"
            v-bind:style="{
              'background': color
            }"
            v-for="link in linkCount()"
            :key="link + '_link'"
          />
          <div class="spacer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      default: function () {
        return 3
      }
    },
    count: {
      default: function () {
        return 1
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    linkCount () {
      //return Math.floor(Math.random() * this.links) + 1;
      return Number(this.links);
    },
    nameWidth () {
      return (Math.random() * 1) + .1;
    },
    emailWidth () {
      return Math.random() + .07;
    }
  }
}
</script>

<style scoped>
  .avatar {
    display: flex;
    margin-top: 25px;
  }

  .bio {
    flex-grow: 1;
  }

  .name {
    display: flex;
    flex-grow: 1;
  }

  .text {
    flex-grow: 1.5;
    height: 12px;
    border-radius: 6px;
  }

  .space {
    flex-grow: 1;
  }

  .img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    margin-right: 10px;
    display: inline-block;
  }

  .spacer {
    flex-grow: 1;
  }

  .links {
    flex-grow: 1;
    display: flex;
    padding-top: 10px;
  }

  .link {
    width: 20px;
    height: 8px;
    border-radius: 4px;
    margin-right: 15px;
  }
</style>
