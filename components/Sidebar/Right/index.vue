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
                <SidebarRightCardTrendItem v-for="i in [1, 2, 3]" title="#Cackle" subtitle="34.5K" />
            </SidebarRightCard>


            <!-- leaderboard card  -->
            <SidebarRightCard heading="What's Trending?">
                <SidebarRightCardProfileItem v-for="i in [1, 2, 3]" name="Cackle User" username="cackleuser" />
            </SidebarRightCard>

        </section>
    </section>
</template>

<script setup>
const { defaultTransition, defaultBorderColor } = useTailwindTheme();

</script>