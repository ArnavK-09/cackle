<template>
    <div class="feed_post border-white-200 dark:border-gray-700 border-y">
        <!-- TITLE  -->
        <div class="flex p-3 select-none">
            <!-- author image  -->
            <div class="cursor-pointer hover:bg-md">
                <NuxtLink :to="'/@' + author.username">
                    <img
                        class="w-10 h-10 rounded-full"
                        :src="author.pfp"
                        alt="Author Image"
                    />
                </NuxtLink>
            </div>

            <!-- author name  -->
            <div class="ml-3">
                <span class="font-medium text-gray-800 dark:text-white select-text">
                    {{ author.name }}</span
                >

                <!-- author user name with post timestamp  -->
                <span class="ml-3 text-sm font-medium text-gray-400">
                    <NuxtLink
                        :to="'/@' + author.username"
                        class="cursor-pointer"
                    >
                        @<span class="hover:underline">{{
                            author.username
                        }}</span>
                    </NuxtLink>
                    • {{ tweet.timestamp }}
                </span>

                <!-- if reply post  -->
                <FeedPostOptionsForReply
                    v-if="tweet.replyTo"
                    :username="tweet.replyTo.username"
                    :post="tweet.replyTo.id"
                />
            </div>
        </div>

        <!-- CONTENT  -->
        <div class="p-3">
            <!-- text  -->
            <p
                class="flex-shrink font-normal text-gray-800 dark:text-white mb-1"
            >
                {{ tweet.content }}
            </p>

            <!-- media  -->
            <div class=" flex flex-wrap justify-center items-center">
                <div
                    class="m-2 "
                    v-for="image in tweet.mediaFiles"
                    :key="image.id"
                >
                    <img
                        :src="image.url"
                        class="border-2 rounded-2xl w-full"
                        :class="defaultBorderColor"
                        alt="Post Image"
                    />
                </div>
            </div>

            <!-- options for tweet  -->
            <FeedPostOptionsForTweet v-if="tweetOptions"/>
        </div>
    </div>
</template>

<script setup>
// border color
const { defaultBorderColor } = useAppConfig().theme;

// props
defineProps({
    author: {
        type: Object,
        required: false, // for testing
        default: {
            name: "Hiii",
            username: "username",
            pfp: "https://picsum.photos/200/200",
        },
    },
    tweetOptions: {
        type: Boolean,
        required: false, 
        default: false,
    },
    tweet: {
        type: Object,
        required: false, //todo
        default: {
            content:
                "Helloo tweetHelloo tweetHelloo tweetHelloo tweetHelloo tweetHelloo tweetHelloo tweetHelloo tweetHelloo tweetHelloo tweetHelloo tweetHelloo tweetHelloo tweetHelloo tweetHelloo tweetHelloo tweetHelloo tweetHelloo tweetHelloo tweetHelloo tweetHelloo tweetHelloo tweetHelloo tweetHelloo tweetHelloo tweet",
            timestamp: "2m ago",
            replyTo: null,
            mediaFiles: [
                {
                    url: "https://picsum.photos/200/200",
                },
                {
                    url: "https://picsum.photos/200/200",
                },
                {
                    url: "https://picsum.photos/200/200",
                },
                {
                    url: "https://picsum.photos/200/200",
                },
                {
                    url: "https://picsum.photos/200/200",
                },                {
                    url: "https://picsum.photos/200/200",
                },
            ],
        },
    },
});
</script>
