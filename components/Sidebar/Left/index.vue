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
    <div
      class="flex flex-row items-center justify-center px-2 py-2 mx-auto mt-auto mb-5 rounded-full cursor-pointer w-14 xl:w-full hover:bg-gray-100 dark:hover:bg-dim-800"
      :class="defaultTransition">

      <div class="flex flex-row">
        <img src="https://picsum.photos/200/200" class="w-10 h-10 rounded-full">
        <div class="flex-col hidden ml-2 xl:block">
          <h1 class="text-sm font-bold text-gray-800 dark:text-white">
            Username
          </h1>
          <p class="text-sm text-gray-400">
            handle
          </p>
        </div>

      </div>
      <!-- ICON -->
      <div class="hidden ml-auto xl:block">
        <div class="w-6 h-6">
          <Bars3Icon />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { HomeIcon as HomeIconSolid, InboxIcon as InboxIconSolid, Cog8ToothIcon as Cog8ToothIconSolid, UserGroupIcon as UserGroupIconSolid, TagIcon as TagIconSolid } from "@heroicons/vue/24/solid";
import { Bars3Icon, HomeIcon, InboxIcon, Cog8ToothIcon, UserGroupIcon, TagIcon } from "@heroicons/vue/24/outline";

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
