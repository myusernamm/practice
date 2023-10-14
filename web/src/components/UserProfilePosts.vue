<template>
  <div class="card">
    <div class="card-body">
      <div v-for="post in posts.posts" :key="post.id">
        <!--第一个posts是对象，第二个posts才是数组-->
        <div class="card single-card">
          <div class="card-body">
            {{ post.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfilePosts",
  props: {
    posts: Object,
    required: true,
  },
};
</script>

<style scoped>
.single-card {
  margin-top: 10px;
}
</style>
