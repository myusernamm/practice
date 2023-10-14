<template>
  <ContentBase>
    <div class="row">
      <div class="col-3">
        <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user" />
        <UserProfileWrites @post_a_post="post_a_post" />
      </div>
      <div class="col-9">
        <UserProfilePosts :posts="posts" /><!--前一个是事件，后一个是函数-->
        <!--定义一个属性-->
      </div>
    </div>
  </ContentBase>
</template>

<script>
import ContentBase from "@/components/ContentBase.vue";
import UserProfileInfo from "../components/UserProfileInfo.vue";
import UserProfilePosts from "../components/UserProfilePosts.vue";
import UserProfileWrites from "../components/UserProfileWrites.vue";
import { reactive } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "UserProfile",
  components: {
    ContentBase,
    UserProfileInfo,
    UserProfilePosts,
    UserProfileWrites,
  },
  setup() {
    const route = useRoute();
    const userid = route.params.userid;
    const user = reactive({
      id: 1,
      username: "chenmegnyuan",
      lastname: "chen",
      firstname: "mengyuan",
      followercount: 0,
      is_followed: false,
    });
    const follow = () => {
      if (user.is_followed) return;
      user.is_followed = true;
      user.followercount++;
    };
    const unfollow = () => {
      if (!user.is_followed) return;
      user.is_followed = false;
      user.followercount--;
    };
    const posts = reactive({
      count: 3,
      posts: [
        {
          id: 1,
          userid: 1,
          content: "jintian",
        },
        {
          id: 2,
          userid: 2,
          content: "zuotian",
        },
        {
          id: 3,
          userid: 3,
          content: "mingtian",
        },
      ],
    });
    const post_a_post = (content) => {
      posts.count++;
      posts.posts.unshift({
        //在数组前插入新的元素
        id: posts.count,
        userid: 1,
        content: content,
      });
    };
    return {
      user,
      follow,
      unfollow,
      posts,
      post_a_post,
    };
  },
};
</script>

<style scoped></style>
