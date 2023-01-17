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
                {{ trendingList }}
                <SafeSection>
                    <SidebarRightCardTrendItem v-for="trend in trendingList" :title="trend.title" :subtitle="trend.total" />
                </SafeSection>
            </SidebarRightCard>


            <!-- leaderboard card  -->
            <SidebarRightCard heading="What's Trending?">
                <SidebarRightCardProfileItem v-for="i in [1, 2, 3]" name="Cackle User" username="cackleuser" />
            </SidebarRightCard>

        </section>
    </section>
</template>

<script setup>
const { getTrending } = useBackend()
const trendingList = ref([])
onMounted(async () => {
    trendingList.value = await getTrending()
})


</script>