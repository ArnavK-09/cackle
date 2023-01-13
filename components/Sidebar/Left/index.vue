<template>
  <div class="flex h-screen flex-col">
    <!-- logo -->
    <div
      :class="defaultTransition"
      class="rounded-full mt-2 ml-5 p-2 mb-2 hover:bg-dim-500/10 dark:hover:bg-white/30 w-min"
    >
      <NuxtLink to="/">
        <div class="w-10 h-10">
          <AppLogo />
        </div>
      </NuxtLink>
    </div>

    <!-- icons -->
    <div class="mt-6 space-y-2">
      <SidebarLeftLink
        v-for="link in sidebarLinks"
        :title="link.title"
        :icon="link.icon"
        :active="link.active"
        :href="link.href"
      />
    </div>
  </div>
</template>

<script setup>
import { HomeIcon } from "@heroicons/vue/24/solid";
import { InboxIcon, Cog8ToothIcon, UserGroupIcon } from "@heroicons/vue/24/outline";

const { defaultTransition } = useTailwindTheme();
// all links
const sidebarLinks = [
  {
    title: "Home",
    icon: HomeIcon,
    active: true,
  },
      {
    title: "Trending",
    icon: UserGroupIcon,
    active: false,
    href: 'trending'
  },
    {
    title: "Explore",
    icon: UserGroupIcon,
    active: false,
    href: 'explore'
  },
  
  {
    title: "Messages",
    icon: InboxIcon,
    active: false,
    href: 'messages'
  },
  {
    title: "More...",
    icon: Cog8ToothIcon,
    active: false,
    href: '@username'
  },
];
</script>
