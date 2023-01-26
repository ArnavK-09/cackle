<template>
  <section class="flex h-screen flex-col">
    <!-- logo -->
    <div :class="defaultTransition"
      class="rounded-full mr-2  mt-2 ml-1 lg:ml-5 p-2 mb-2 hover:bg-cackle-500/10 dark:hover:bg-white/30 w-min">
      <NuxtLink to="/">
        <div>
          <AppLogo />
        </div>
      </NuxtLink>
    </div>

    <!-- icons -->
    <div class="mt-6 space-y-2">
      <SidebarLeftLink v-for="link in sidebarLinks" :title="link.title" :icon="link.icon" :activeURL="link.activeURL"
        :href="link.href" :activeIcon="link.activeIcon" />
    </div>


    <!-- profilezone  -->
    <SidebarLeftUserProfile username="JoneDoe" handle="johndoe.1" image="https://picsum.photos/200/200" />
  </section>
</template>

<script setup>
import { HomeIcon as HomeIconSolid, InboxIcon as InboxIconSolid, Cog8ToothIcon as Cog8ToothIconSolid, UserGroupIcon as UserGroupIconSolid, TagIcon as TagIconSolid, BookmarkSquareIcon as BookmarkSquareIconSolid } from "@heroicons/vue/24/solid";
import { HomeIcon, InboxIcon, Cog8ToothIcon, UserGroupIcon, TagIcon, BookmarkSquareIcon } from "@heroicons/vue/24/outline";

const { defaultTransition } = useTailwindTheme();

// all links
const sidebarLinks = [
  {
    title: "Home",
    icon: HomeIcon,
    activeURL: '/',
    activeIcon: HomeIconSolid,
  },
  {
    title: "Trending",
    activeIcon: TagIconSolid,
    icon: TagIcon,
    activeURL: 'trending',
    href: 'trending'
  },
  {
    title: "Explore",
    icon: UserGroupIcon,
    activeIcon: UserGroupIconSolid,
    activeURL: 'explore',
    href: 'explore'
  },
  {
    title: "Bookmarks",
    icon: BookmarkSquareIcon,
    activeIcon: BookmarkSquareIconSolid,
    activeURL: 'bookmarks',
    href: 'bookmarks'
  },
  {
    title: "Messages",
    icon: InboxIcon,
    activeIcon: InboxIconSolid,
    activeURL: 'messages',
    href: 'messages'
  },
  {
    title: "More...",
    icon: Cog8ToothIcon,
    activeIcon: Cog8ToothIconSolid,
    activeURL: 'settings',
    href: '@username'
  },
];
</script>
