export default {
  forum: {
    indexRoute: "/",
    postRoute: "/topic",
    indexLimit: 20,
    title: "Factor Forum",
    notify: {
      newTopic: ["example@example.com"],
      newReply: ["example@example.com"],
    },
    categories: ["news", "discussion", "apps", "tutorials"],
    // components: {
    //   forumIndex: (): Promise<any> => import("./v-index.vue"),
    // },
    metatags: {
      index: {
        title: "Factor Forum",
        description: "Help and discussion about Factor JS",
      },
    },
    // returnLinkText: "All thangs",
    // title: "Forum",
    // features: {
    //   topicSubscribe: true,
    //   tagging: true,
    // },
    // metatags: {
    //   index: {
    //     title: "Forum",
    //     description: "Start a new discussion",
    //   },
    //   newTopic: {
    //     title: "New Topic",
    //     description: "Start a new topic discussion on the forum",
    //   },
    //   editTopic: {
    //     title: "Edit Topic",
    //     description: "Edit a forum topic",
    //   },
    // },
    // notify: {
    //   newTopic: [],
    //   newReply: [],
    // },
    // text: {
    //   newTopic: "Start A Discussion",
    //   listAll: "All Discussions",
    //   topicLocked: "This topic is locked.",
    //   loginToReply: "You need to login to reply.",
    //   subscribeOnReply: "Subscribe to updates?",
    //   notifySubscribers: "Notify Subscribers?",
    //   login: "Login &rarr;",
    //   save: "Save &uarr;",
    //   postReply: "Post Reply &uarr;",
    //   viewTopic: "View Topic &rarr;",
    //   newTopicHeader: "Create New Topic",
    //   editTopicHeader: "Edit Topic",
    //   postTopicButton: "Post Topic &rarr;",
    //   editTopicButton: "Save Changes &rarr;",
    //   notifyNewTopic: "New topic created",
    //   notifyTopicEdited: "Topic edited successfully",
    //   backToAll: "&larr; All Discussions",
    // },
    // notFound: {
    //   title: "No Topics",
    //   subTitle: "Couldn't find any forum topics.",
    // },
    // layout: {
    //   index: ["topicIndex"],
    //   single: ["topicSingle"],
    // },
    // categories: [],
  },
}
