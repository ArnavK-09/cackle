<template>
    <section class="flex h-screen flex-col">
        <!-- logo -->
        <NuxtLink to="/" aria-label="Cackle">
            <div
                :class="defaultTransition"
                class="rounded-full mr-2 mt-2 ml-1 lg:ml-5 p-2 mb-2 hover:bg-cackle-500/10 dark:hover:bg-white/30 w-min"
            >
                <AppLogo />
            </div>
        </NuxtLink>

        <!-- all icons -->
        <div class="mt-6 space-y-2">
            <SidebarLeftLink
                v-for="link in sidebarLinks"
                :title="link.title"
                :icon="link.icon"
                :activeURL="link.activeURL"
                :href="link.href"
                :activeIcon="link.activeIcon"
            />
        </div>

        <!-- user logged in profile  -->
        <SidebarLeftUserProfile
            username="JoneDoe"
            handle="johndoe.1"
            image="https://picsum.photos/200/200"
        />
    </section>
</template>

<script setup>
// icons for active state
import {
    HomeIcon as HomeIconSolid,
    InboxIcon as InboxIconSolid,
    Cog8ToothIcon as Cog8ToothIconSolid,
    UserGroupIcon as UserGroupIconSolid,
    TagIcon as TagIconSolid,
    BookmarkSquareIcon as BookmarkSquareIconSolid,
} from "@heroicons/vue/24/solid";
// icons for non active state
import {
    HomeIcon,
    InboxIcon,
    Cog8ToothIcon,
    UserGroupIcon,
    TagIcon,
    BookmarkSquareIcon,
} from "@heroicons/vue/24/outline";

// theme transition
const { defaultTransition } = useAppConfig().theme;

// all sidebar links with icons and url
const sidebarLinks = [
    {
        title: "Home",
        icon: HomeIcon,
        activeURL: "/",
        activeIcon: HomeIconSolid,
    },
    {
        title: "Trending",
        activeIcon: TagIconSolid,
        icon: TagIcon,
        activeURL: "trending",
        href: "trending",
    },
    {
        title: "Explore",
        icon: UserGroupIcon,
        activeIcon: UserGroupIconSolid,
        activeURL: "explore",
        href: "explore",
    },
    {
        title: "Bookmarks",
        icon: BookmarkSquareIcon,
        activeIcon: BookmarkSquareIconSolid,
        activeURL: "bookmarks",
        href: "bookmarks",
    },
    {
        title: "Messages",
        icon: InboxIcon,
        activeIcon: InboxIconSolid,
        activeURL: "messages",
        href: "messages",
    },
    {
        title: "More...",
        icon: Cog8ToothIcon,
        activeIcon: Cog8ToothIconSolid,
        activeURL: "settings",
        href: "@username",
    },
];
</script>
