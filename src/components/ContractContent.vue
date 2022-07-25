<template>
  <div class="w-2/3" v-if="content">
    <img
      v-if="content.termList.length === 0 && content.subTerm.length === 0"
      src="../assets/belstar/img/img-1.png"
      class="pb-10"
    />
    <h5 class="text-lg text-black mb-2">{{ content.title }}</h5>
    <br />
    <div>
      <p
        class="text-gray-600 pb-4"
        v-for="(statementItem, statementIndex) in content.statement"
        :key="`statement${statementIndex}`"
      >
        {{ statementItem }}
      </p>
      <ol v-if="content.termList" class="list-decimal pl-8">
        <li
          class="text-gray-600 my-3"
          v-for="(termItem, termItemIndex) in content.termList"
          :key="`termItem${termItemIndex}`"
        >
          <span class="text-gray-600 pb-4">
            {{ termItem.title }}
          </span>
          <ul class="list-disc pl-4">
            <li
              class="text-gray-600"
              v-for="(termContent, termContentIndex) in termItem.content"
              :key="`termContent${termContentIndex}`"
            >
              {{ termContent }}
            </li>
          </ul>
        </li>
      </ol>
      <ol v-if="content.subTerm" class="list-decimal pl-8">
        <li
          class="text-gray-600 pb-4"
          v-for="(subTermItem, subTermIndex) in content.subTerm"
          :key="`subTermIndex${subTermIndex}`"
        >
          {{ subTermItem.title }}
          <ul v-if="subTermItem.statement" class="list-disc pl-4">
            <li
              class="text-gray-600"
              v-for="(subTermStatement,
              subTermStatementIndex) in subTermItem.statement"
              :key="`subTermStatement${subTermStatementIndex}`"
            >
              {{ subTermStatement }}
            </li>
          </ul>
          <ol v-if="subTermItem.termList" class="list-decimal pl-12">
            <li
              class="text-gray-600"
              v-for="(subTermTermList,
              subTermTermListIndex) in subTermItem.termList"
              :key="`subTermTermList${subTermTermListIndex}`"
            >
              {{ subTermTermList.title }}
            </li>
          </ol>
        </li>
      </ol>
    </div>
    <img
      v-if="content.termList.length > 0"
      src="../assets/belstar/img/img-2.png"
    />
    <img
      v-if="content.subTerm.length > 0"
      src="../assets/belstar/img/img-3.jpg"
    />
  </div>
</template>

<script>
export default {
  props: {
    content: Object
  },
  data() {
    return {};
  }
};
</script>
