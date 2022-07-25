<template>
  <div class="fixed">
    <div>
      <button
        @click="clickEvent"
        class="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-themeBackgroundGradient5 rounded-full focus:shadow-outline hover:bg-themeBackgroundGradient2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 fill-current"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
    <!-- <div class="bg-white shadow w-64 my-2"> -->
    <div class="bg-white shadow w-64 my-2" v-if="show">
      <ul class="list-reset">
        <li v-for="(item, index) in directory" :key="index">
          <a
            :href="`#${item.path}`"
            class="block p-4 text-grey-darker font-bold border-grey-lighter hover:border-purple-light hover:bg-grey-lighter border-r-4"
            >{{ item.name }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    directory: Array
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    clickEvent() {
      this.show = !this.show;
    }
  }
};
</script>
