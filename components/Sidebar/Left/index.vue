<template>
  <section class="flex h-screen flex-col">
    <!-- logo -->
    <div :class="defaultTransition"
      class="rounded-full mt-2 ml-5 p-2 mb-2 hover:bg-cackle-500/10 dark:hover:bg-white/30 w-min">
      <NuxtLink to="/">
        <div class="w-10 h-10">
          <AppLogo />
        </div>
      </NuxtLink>
    </div>

    <!-- icons -->
    <div class="mt-6 space-y-2">
      <SidebarLeftLink v-for="link in sidebarLinks" :title="link.title" :icon="link.icon" :active="link.active"
        :href="link.href" :activeIcon="link.activeIcon" />
    </div>
  </section>
</template>

<script setup>
import { HomeIcon as HomeIconSolid, InboxIcon as InboxIconSolid, Cog8ToothIcon as Cog8ToothIconSolid, UserGroupIcon as UserGroupIconSolid, ArrowTrendingUpIcon as ArrowTrendingUpIconSolid } from "@heroicons/vue/24/solid";
import { HomeIcon, InboxIcon, Cog8ToothIcon, UserGroupIcon, ArrowTrendingUpIcon } from "@heroicons/vue/24/outline";

const { defaultTransition } = useTailwindTheme();
const route = useRoute()
const willThisLinkBeActive = (routeName) => {
  return route.path.includes(routeName)
}
// all links
const sidebarLinks = [
  {
    title: "Home",
    icon: HomeIcon,
    active: route.path == '/' ,
    activeIcon: HomeIconSolid,
  },
  {
    title: "Trending.",
    activeIcon: ArrowTrendingUpIconSolid,
    icon: ArrowTrendingUpIcon,
    active: willThisLinkBeActive('trending'),
    href: 'trending'
  },
  {
    title: "Explore",
    icon: UserGroupIcon,
    activeIcon: UserGroupIconSolid,
    active: ref(willThisLinkBeActive('explore')),
    href: 'explore'
  },

  {
    title: "Messages",
    icon: InboxIcon,
    activeIcon: InboxIconSolid,
    active: willThisLinkBeActive('messages'),
    href: 'messages'
  },
  {
    title: "More...",
    icon: Cog8ToothIcon,
    activeIcon: Cog8ToothIconSolid,
    active: willThisLinkBeActive('settings'),
    href: '@username'
  },
];
</script>
