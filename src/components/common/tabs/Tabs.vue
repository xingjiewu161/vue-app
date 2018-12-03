<template>
  <div class="flex content">
      <ul class="item-group fl-1" ref="navigation">
        <li class="tabs-tab"
            v-for="(tab, i) in tabs"
            :key="i"
            v-show="tab.isVisible"
            :class="{ 'is-active': tab.isActive, 'is-disabled': tab.isDisabled }">
            <a class="tab-component-link"
              v-html="tab.header"
              @click="selectTab(tab.hash,$event)"
              :href="tab.hash"></a>
        </li>
        <span class="scroll-bar" ref="scroll"></span>
      </ul>
      <div class="tabs-content-panles">
        <slot />
      </div>
  </div>
</template>

<script>
import expiringStorage from "./../../../core/tool/expiringStorage.js"
export default {
  name: "Tabs",
  props: {
    cacheLifetime: {
      default: 5
    },
    options: {
      type: Object,
      required: false,
      default: () => ({
        useUrlFragment: true,
        defaultTabHash: null
      })
    }
  },
  computed: {
    storageKey() {
      return `vue-tabs-component.cache.${window.location.host}${window.location.pathNam}`;
    }
  },
  data: () => ({
    tabs: [],
    activeTabHash: "",
    activeTabIndex: 0,
    lastActiveTabHash: "",
    isLoading: true
  }),
  created () {
    this.tabs = this.$children;
  },
  mounted () {
    if (this.options.defaultTabHash !== null && this.findTab("#" + this.options.defaultTabHash)) {
      this.selectTab("#" + this.options.defaultTabHash);
      return;
    }
    if (this.tabs.length) {
      this.selectTab(this.tabs[0].hash);
    }
  },
  methods: {
    findTab(hash) {
      return this.tabs.find(tab => tab.hash === hash);
    },
    selectTab(selectedTabHash, event) {
      if (event && !this.options.useUrlFragment) {
        event.preventDefault();
        let left = `${event.srcElement.offsetLeft}px`
        let right = `calc(100% - ${Math.abs(+event.srcElement.offsetLeft + 125)}px)`
        this.$refs.scroll.style = `left: ${left}; right: ${right}`
      }
      const selectedTab = this.findTab(selectedTabHash);
      if (!selectedTab) {
        return;
      }
      if (selectedTab.isDisabled) {
        event.preventDefault();
        return;
      }
      if (this.lastActiveTabHash === selectedTab.hash) {
        this.$emit("clicked", { tab: selectedTab });
        return;
      }
      this.tabs.forEach(tab => {
        tab.isActive = tab.hash === selectedTab.hash;
      });
      this.activeTabHash = selectedTab.hash;
      this.activeTabIndex = this.getTabIndex(selectedTabHash);
      this.$emit("changed", { tab: selectedTab, index: this.activeTabIndex });
      this.lastActiveTabHash = this.activeTabHash = selectedTab.hash;
      expiringStorage.set(this.storageKey, selectedTab.hash, this.cacheLifetime);
    },
    setTabVisible(hash, visible) {
      const tab = this.findTab(hash);
      if (!tab) return;
      tab.visible = visible;
      if (tab.isActive) {
        tab.isVisible = visible;
        this.tabs.every((tab, index, array) => {
          if (tab.isVisible) {
            tab.isActive = true;
            return false;
          }
          return true;
        });
      }
    },
    getTabIndex(hash) {
      const tab = this.findTab(hash);
      return this.tabs.indexOf(tab);
    },
    getTabHash(index) {
      const tab = this.tabs.find(tab => this.tabs.indexOf(tab === index));
      if (!tab) {
        return;
      }
      return tab.hash;
    },
    getActiveTab() {
      return this.findTab(this.activeTabHash);
    },
    getActiveTabIndex() {
      return this.getTabIndex(this.activeTabHash);
    }
  }
};
</script>
<style lang="scss" scoped>
  .content {
    flex-flow: column nowrap;
    ul {
      position: relative;
      display: flex;
      list-style: none;
      justify-content: space-around;
      padding: 0;
      margin: 0;
      li {
        display: flex;
        flex: auto;
        justify-content: center;
        font-size: .9rem;
        a {
          width: 100%;
          padding-top: 10px;
          padding-bottom: 10px;
          color: rgba(0,0,0,.7);
          color: var(--md-theme-demo-light-text-primary-on-background,rgba(0,0,0,.7));
        }
        a:not(.md-button):hover {
          text-decoration: none;
        }
      }
      .is-active {
        a {
        color: #448aff;
        }
      }
      .scroll-bar {
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #448aff;
        background-color: var(--md-theme-demo-light-primary-on-background,#448aff);
        right: calc(100% - 125px);
        transition: left .3s cubic-bezier(.4,0,.2,1), right .35s cubic-bezier(.4,0,.2,1);
        will-change: left,right;
      }
    }
    .tabs-content-panles {
      position: relative;
    }
  }
</style>
