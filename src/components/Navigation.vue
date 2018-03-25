<template>
  <el-menu
    background-color="#222"
    text-color="#fff"
    active-text-color="#ffd04b"
    mode="horizontal"
    >
    <el-menu-item class="navLeft" index="lab-mu">Lab μ</el-menu-item>

    <template v-for="item in navItems">
      <el-submenu
        v-if="item.items"
        style="float: right"
        :key="item.title"
        :index="item.title">
        <template slot="title">{{ item.title }}</template>
        <el-menu-item v-for="subItem in item.items" :key="subItem.title" :index="subItem.title">
          {{ subItem.title }}
        </el-menu-item>
      </el-submenu>
      <el-menu-item
        v-else
        style="float: right"
        :key="item.title"
        :index="item.title">
        {{ item.title }}
      </el-menu-item>
    </template>
  </el-menu>
</template>

<style>
</style>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          title: 'About',
          href: '/about',
        },
        {
          title: 'Products',
          items: [
            {
              title: 'TUNet',
              href: '/products/tunet',
            },
            {
              title: 'Tsinghua Now',
              href: 'tsinghua-now',
            },
          ],
        },
        {
          title: 'Members',
          href: '/members',
        },
      ],
    };
  },
};
</script>
