<template>
    <section class="flex flex-col">


        <!-- search bar  -->
        <div>
            <SidebarRightSearch />
        </div>

        <!-- cards  -->
        <section class="cards">
            <!-- trending card  -->
            <SidebarRightCard heading="What's Trending?">
                <SafeSection :isLoading="trendingList.length == 0">
                    <SidebarRightCardTrendItem v-for="trend in trendingList" :title="trend.title"
                        :subtitle="trend.total" />
                </SafeSection>
            </SidebarRightCard>


            <!-- leaderboard card  -->
            <SidebarRightCard heading="Who's On Top?">
                <SafeSection :isLoading="lbList.length == 0">
                    <SidebarRightCardProfileItem v-for="user in lbList" :name="user.name" :username="user.username" />
                </SafeSection>
            </SidebarRightCard>

        </section>
    </section>
</template>

<script setup>
const { getTrending, getLeaderboard } = useBackend()
const trendingList = ref([])
const lbList = ref([])
onMounted(async () => {
    trendingList.value = await getTrending()
    lbList.value = await getLeaderboard()
})


</script>