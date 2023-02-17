<template>
    <section class="flex flex-col">
        <!-- search bar  -->
        <div>
            <SidebarRightSearch />
        </div>

        <!-- cards  -->
        <section class="cards">
            <!-- trending card  -->
            <SidebarRightCard heading="What's Trending?" seeMoreHref="trending">
                <SafeSection
                    :isLoading="
                        trendingList.length == 0 &&
                        (trendingList.error == false ||
                            trendingList.error == undefined)
                    "
                >
                    <SidebarRightCardTrendItem
                        v-for="trend in trendingList.data"
                        :title="trend.title"
                        :subtitle="trend.total"
                        :err="
                            trendingList.error
                                ? getCardErrMsg(trendingList)
                                : getCardErrMsg(false)
                        "
                    />
                </SafeSection>
            </SidebarRightCard>

            <!-- leaderboard card  -->
            <SidebarRightCard heading="Who's On Top?" seeMoreHref="explore">
                <SafeSection
                    :isLoading="
                        lbList.length == 0 &&
                        (lbList.error == false || lbList.error == undefined)
                    "
                >
                    <SidebarRightCardProfileItem
                        v-for="user in lbList.data"
                        :name="user.name"
                        :username="user.username"
                        :err="
                            lbList.error
                                ? getCardErrMsg(lbList)
                                : getCardErrMsg(false)
                        "
                    />
                </SafeSection>
            </SidebarRightCard>
        </section>
    </section>
</template>

<script setup >
// importing fuctions
const { getTrending, getLeaderboard } = useBackend();

// variables
const trendingList = ref([]);
const lbList = ref([]);

// helper func
const getCardErrMsg = (list) => {
    return list == false
        ? { status: false }
        : { status: list.error, message: list.errorMsg };
};


// get data on mount  //TODO: CHANGE
onMounted(async () => {
    try {
        trendingList.value = await getTrending();
    } catch (e) {
        trendingList.value = { error: true, errorMsg: e };
    }

    try {
        lbList.value = await getLeaderboard();
    } catch (e) {
        lbList.value = { error: true, errorMsg: e };
    }
});
</script>
