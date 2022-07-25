<template>
  <div>
    <a4-page v-for="(term, i) in termList" :key="i">
      <!-- 條款 -->
      <template slot="content">
        <div v-for="(item, index) in term.data.policies" :key="index">
          <div class="content">
            <div class="text-center font-bold text-lg mt-5">
              {{ item.page[0].policyTitle }}
            </div>
            <div class="text-center text-lg py-5">閱讀指引</div>
            <div class="text-center text-xs py-5">
              條款是保險契約的重要內容，為充分保障您的權益，請您仔細閱讀本條款。
            </div>
            <div class="text-center text-xs">
              本閱讀指引有助於您理解條款，對本附加契約的解釋以條款為準。
            </div>
            <div
              v-for="(it1, i1) in item.page[0].instructions"
              :key="i1"
              class="mt-8"
            >
              <div
                class="bg-themeBackgroundMain text-white text-center text-xs text-bold"
              >
                {{ it1.attentionTitle }}
              </div>
              <ul class="instructions bg-themeBackgroundTerm px-3 text-xs">
                <li v-for="(it2, i2) in it1.attentionList" :key="i2">
                  <div v-if="it2.contentNo.length == 1" class="justify-between">
                    <span>{{ it2.content }}</span>
                    <!-- <div>{{circle}}</div> -->
                    <span v-for="(it3, i3) in it2.contentNo" :key="i3">
                      【{{ it3 }}】
                    </span>
                  </div>
                  <div
                    v-else
                    style="display: block;"
                    class="text-right bg-themeBackgroundTerm"
                  >
                    <div class="text-left">{{ it2.content }}</div>
                    <!-- <span>{{circle.slice(0,40)}}</span> -->
                    <span v-for="(it3, i3) in it2.contentNo" :key="i3"
                      >【{{ it3 }}】</span
                    >
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="content">
            <div class="text-center font-bold pt-5">
              {{ item.page[1].title }}
            </div>
            <div class="text-xs ml-20 w-4/5 pb-10">
              {{ item.page[1].statement }}
            </div>
            <div
              v-for="(item1, index1) in item.page[1].termCategory"
              :key="index1"
            >
              <div
                class="font-bold bg-themeBackgroundMain w-40 text-center text-sm py-3 mt-5"
              >
                {{ index1 + 1 }}&emsp;{{ item1.title }}
              </div>
              <table width="100%" cellspacing="0">
                <tr v-for="(item2, index2) in item1.term" :key="index2">
                  <td v-if="item2.subTerm.length == 0">
                    <table width="100%" cellspacing="0" class="table">
                      <tr class="unbreakable">
                        <td width="13%" class="font-bold text-right pr-2">
                          {{ index1 + 1 }}.{{ index2 + 1 }}
                        </td>
                        <td width="10%" class="font-bold">{{ item2.title }}</td>
                        <td>
                          <div class="bracket"></div>
                        </td>
                        <td width="70%">
                          <div
                            v-if="
                              item2.statement.length > 0 ||
                                item2.termList.length > 0
                            "
                            class="bg-themeBackgroundTerm p-2"
                          >
                            <p
                              v-for="(item3, i3) in item2.statement"
                              :key="i3"
                              class=""
                            >
                              {{ item3 }}
                            </p>
                            <div
                              v-if="item2.termList.length > 0"
                              class="bg-themeBackgroundTerm p-2"
                            >
                              <div
                                v-for="(item4, i4) in item2.termList"
                                :key="i4"
                              >
                                <div>（{{ i4 + 1 }}）{{ item4.title }}</div>
                                <p
                                  v-for="(item5, i5) in item4.content"
                                  :key="i5"
                                >
                                  {{ item5 }}
                                </p>
                                <div v-if="item4.hasList.length > 0">
                                  <div
                                    v-for="(item10, i10) in item4.hasList"
                                    :key="i10"
                                  >
                                    <div>
                                      <span class="circle">{{ i10 + 1 }}</span
                                      >{{ item10.title }}
                                    </div>
                                    <div
                                      v-if="item10.content.length > 0"
                                      class="bg-themeBackgroundTerm p-2"
                                    >
                                      <p
                                        v-for="(item11, i11) in item10.content"
                                        :key="i11"
                                      >
                                        {{ item11 }}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td v-else-if="item2.subTerm.length > 0">
                    <table width="100%" cellspacing="0" class="table">
                      <tr class="unbreakable">
                        <td width="13%" class="font-bold text-right pr-2">
                          {{ index1 + 1 }}.{{ index2 + 1 }}
                        </td>
                        <td width="10%" class="font-bold">{{ item2.title }}</td>
                        <td>
                          <div class="bracket"></div>
                        </td>
                        <td width="70%">
                          <div
                            v-if="
                              item2.statement.length > 0 ||
                                item2.termList.length > 0
                            "
                            class="bg-themeBackgroundTerm p-2"
                          >
                            <p
                              v-for="(item3, i3) in item2.statement"
                              :key="i3"
                              class=""
                            >
                              {{ item3 }}
                            </p>
                            <div v-if="item2.termList.length > 0">
                              <div
                                v-for="(item4, i4) in item2.termList"
                                :key="i4"
                                class="bg-themeBackgroundTerm p-2"
                              >
                                <div>（{{ i4 + 1 }}）{{ item4.title }}</div>
                                <p
                                  v-for="(item5, i5) in item4.content"
                                  :key="i5"
                                >
                                  {{ item5 }}
                                </p>
                                <div
                                  v-if="item4.hasList.length > 0"
                                  class="bg-themeBackgroundTerm p-2"
                                >
                                  <div
                                    v-for="(item10, i10) in item4.hasList"
                                    :key="i10"
                                  >
                                    <div>{{ item10.title }}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr
                        v-for="(item6, i6) in item2.subTerm"
                        :key="i6"
                        class="unbreakable"
                      >
                        <td width="13%" class=" text-right pr-2">
                          {{ index1 + 1 }}.{{ index2 + 1 }}.{{ i6 + 1 }}
                        </td>
                        <td width="10%">{{ item6.title }}</td>
                        <td>
                          <div class="bracket"></div>
                        </td>
                        <td width="70%">
                          <!-- <div v-if="item6.statement.length>0" class="termContent">
                        <p v-for="(item7,i7) in item6.statement" :key="i7">
                          {{item7}}
                        </p>
                      </div> -->
                          <div
                            v-if="
                              item6.statement.length > 0 ||
                                item6.termList.length > 0
                            "
                            class="bg-themeBackgroundTerm p-2"
                          >
                            <p v-for="(item7, i7) in item6.statement" :key="i7">
                              {{ item7 }}
                            </p>
                            <div v-if="item6.termList.length > 0">
                              <div
                                v-for="(item8, i8) in item6.termList"
                                :key="i8"
                              >
                                <div>（{{ i8 + 1 }}）{{ item8.title }}</div>
                                <p
                                  v-for="(item9, i9) in item8.content"
                                  :key="i9"
                                >
                                  {{ item5 }}
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- <ul class="termCategory">
            <li v-for="(item2,index2) in item1.term" :key="index2">
              <div v-if="item2.subTerm.length==0">
                <p>{{index1+1}}.{{index2+1}}</p>
                <div class="title">
                &emsp;{{item2.title}}</div>
                <div v-if="item2.statement.length>0 || item2.termList.length>0" class="termContent">
                  <p v-for="(item3,i3) in item2.statement" :key="i3">{{item3}}</p>
                  <div v-if="item2.termList.length>0">
                    <div v-for="(item4,i4) in item2.termList" :key="i4" class="termContent">
                      <div>（{{i4+1}}）{{item4.title}}</div>
                      <p v-for="(item5,i5) in item4.content" :key="i5">
                        {{item5}}
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
              <div v-else-if="item2.subTerm.length>0" style="display: block;">
              <div style="display: flex;">
                <p>{{index1+1}}.{{index2+1}}</p>
                <div class="title">
                &emsp;{{item2.title}}</div>
                <div v-if="item2.statement.length>0 || item2.termList.length>0" class="termContent">
                  <p v-for="(item3,i3) in item2.statement" :key="i3">{{item3}}</p>
                  <div v-if="item2.termList.length>0">
                    <div v-for="(item4,i4) in item2.termList" :key="i4" class="termContent">
                      <div>（{{i4+1}}）{{item4.title}}</div>
                      <p v-for="(item5,i5) in item4.content" :key="i5">
                        {{item5}}
                      </p>
                    </div>
                  </div>
                </div>
                </div>
                <div v-for="(item6,i6) in item2.subTerm" :key="i6" style="display: flex;">
                  <p>{{index1+1}}.{{index2+1}}.{{i6+1}}</p>
                  <div class="title">
                  &emsp;{{item6.title}}
                  </div>
                  <div v-if="item6.statement.length>0"  class="termContent">
                    <p v-for="(item7,i7) in item6.statement" :key="i7">
                      {{item7}}
                    </p>
                  </div>
                </div>
            </div>
            </li>
          </ul> -->
            </div>
          </div>
        </div>
      </template>
    </a4-page>
  </div>
</template>

<script>
// import data from '../data/term.json'
import a4Page from "../../../../layout/a4Page.vue";
export default {
  data() {
    return {
      // data: data.data,
      circle:
        ".................................................................................................."
    };
  },
  components: {
    a4Page
  },
  mounted() {},
  props: ["termList"]
};
</script>

<style scoped>
* {
  padding: 0;
  box-sizing: border-box;
}

.page {
  height: 100%;
}

.content {
  flex: 1;
  position: relative;
}

.circle {
  display: inline-block;
  border-radius: 50%;
  border: 1px solid #000;
  font-size: 10px;
  width: 13px;
  height: 13px;
  line-height: 13px;
  text-align: center;
}

p {
  margin: 0;
}

table.table tr td {
  padding-top: 20px;
  vertical-align: top;
  @apply text-xs;
}

table.table tr td div,
p {
  line-height: 18px;
}

ul > li {
  list-style: none;
}

ul.termCategory > li > div {
  display: flex;
  line-height: 18px;
}

ul.termCategory > li p {
  margin: 0;
  padding: 0;
}

ul.termCategory > li div.title {
  width: 88px;
}

ul.instructions > li > div {
  margin: 0;
  line-height: 0.9cm;
  display: flex;
}

ul.instructions > li > div > div {
  flex: 1;
  overflow: hidden;
}

@media print {
  .page-1 {
    box-shadow: none;
    page-break-before: always;
  }
}
</style>
