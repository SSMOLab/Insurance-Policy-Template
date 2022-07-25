<template>
  <div>
    <div class="flex flex-no-wrap h-full" v-if="!isPaged">
      <!-- Sidebar starts -->
      <!-- Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] -->
      <div
        v-if="isShowSidebar"
        class="w-64 absolute z-50 sm: bg-themeBackgroundMain shadow md:h-full flex-col justify-between hidden sm:flex"
      >
        <div class="px-8">
          <div class="h-16 w-full flex items-center">
            <img src="../assets/belstar/img/SSMOLab-RGB.png" />
          </div>
          <ul class="mt-12">
            <li
              v-for="(item, index) in itemList"
              :key="index"
              class="flex w-full justify-between text-themeTextSidebar hover:text-themeTextHover cursor-pointer items-center mb-6"
            >
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  v-if="item.svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    :d="item.svg"
                  />
                </svg>

                <a class="text-sm ml-2" :href="`#${item.id}`">{{
                  item.name
                }}</a>
              </div>
              <!-- <div
              class="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs"
            >
              5
            </div> -->
            </li>
          </ul>
          <!--  -->
          <div class="flex justify-center mt-48 mb-4 w-full">
            <div class="relative"></div>
          </div>
          <!--  -->
        </div>
        <label
          for="sideMenu-active"
          id="sidebar-label"
          class="h-screen flex absolute w-5	bg-themeBackgroundGradient1"
          @click="isShowSidebar = !isShowSidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 m-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </label>
      </div>
      <div
        v-else
        class="w-0 absolute sm: bg-themeBackgroundMain shadow md:h-full flex-col justify-between hidden sm:flex"
      >
        <label
          for="sideMenu-active"
          id="sidebar-label"
          class="h-screen flex absolute w-5	bg-themeBackgroundGradient1"
          @click="isShowSidebar = !isShowSidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 m-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </label>
      </div>
      <!-- Sidebar ends -->
      <!-- Remove class [ h-64 ] when adding a card block -->
      <div
        id="htmlContent"
        class=" mx-auto py-10 md:w-4/5 w-11/12 px-6 h-full max-h-screen overflow-scroll "
      >
        <!-- content -->
        <slot name="appContent"></slot>
      </div>
    </div>
    <div v-else>
      <slot name="appContent"></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // isPaged: this.$store.state.isPaged || false,
      isPaged: false,
      isShowSidebar: true,
      itemList: [
        {
          id: "main",
          name: "保險單",
          svg:
            "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z",
        },
        {
          id: "worth",
          name: "現金價值及減少保額表",
          svg:
            "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
        },
        {
          id: "term",
          name: "保險條款",
          svg:
            "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
        },
        {
          id: "paste",
          name: "批注、保險費發票粘貼頁",
          svg:
            "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
        },
        {
          id: "warmprompt",
          name: "溫馨提示",
          svg:
            "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
        },
        {
          id: "electronicpolicy",
          name: "電子投保告知書",
          svg:
            "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
        },
        {
          id: "invoice",
          name: "保險費統一收據",
          svg:
            "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        },
        {
          id: "receipt",
          name: "保險契約簽收回執",
          svg:
            "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
        },
        {
          id: "instruction",
          name: "客戶服務指南",
          svg:
            "M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z",
        },
      ],
    };
  },
  mounted() {
    if (window.PagedPolyfill) {
      this.isPaged = true;
    } else {
      this.isPaged = false;
    }
  },
};
</script>
<style scoped>
#sidebar-label {
  height: 80px;
  color: #686666;
  right: -1.25rem;
  top: 30%;
  margin: auto;
  text-align: center;
  border-radius: 0 5px 5px 0;
  box-shadow: 5px 0 5px rgba(23, 23, 54, 0.6);
}
#htmlContent {
  left: 10rem;
}
</style>
