<template>
  <div class="view-forum">
    <page-header
      title="Your Forum"
      sub-title="Make sure you create some posts"
      link="/dashboard"
      link-text="Go to Dashboard"
    />
    <!-- <forum-index /> -->
  </div>
</template>
<script lang="ts">
import { setting } from "@factor/api"
//import { standardForumIndex } from "@factor/plugin-forum"
export default {
  components: {
    pageHeader: () => import("./page-header.vue"),
    //standardForumIndex
  },
  data() {
    return {
      loading: true,
      bw: setting("forum.forumWrap")
    }
  },
  metaInfo() {
    return {
      title: "Forum Demo",
      description: "Forum plugin demo"
    }
  },
  methods: { setting }
}
</script>
<style lang="less">
</style>
