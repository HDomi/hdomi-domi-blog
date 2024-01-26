<template>
  <div class="page-wrap">
    <div class="portfolio-wrap-inner scrollBar">
      <div class="category-folder-wrap">
        <div
          v-for="(item, i) in pfCategory"
          :key="`Category ${i}`"
          class="folder-wrap"
          @click="getPortfolioDetail(item.id)"
        >
          <div
            :class="`folder ${
              currentCategoryId === item.id && pageState ? 'open' : ''
            }`"
          ></div>
          <div class="category-name">{{ item.name }}</div>
        </div>
      </div>

      <div v-if="pageState" class="portfolio-list-wrap">
        <p class="thums-title">{{ getTitle() }}</p>
        <WorkProjectThums :currentCategoryId="currentCategoryId" />
      </div>
      <div v-else class="portfolio-list-wrap plw-center">
        폴더를 눌러 포트폴리오를 불러와주세요!
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapMutations } from "vuex";
import { portFolioCategory } from "@/data/PortfolioList";
import WorkProjectThums from "@/components/portfolioThums/WorkProjectThums.vue";
export default {
  components: { WorkProjectThums },
  mixins: [],
  props: {},
  data() {
    return {
      currentCategoryId: "toy",
      fromCateId: "toy",
      pageState: true,
    };
  },
  async created() {},
  computed: {
    pfCategory() {
      return portFolioCategory;
    },
  },
  methods: {
    ...mapMutations("layout", ["setLoading"]),

    clearState() {
      this.fromCateId = "";
      this.currentCategoryId = "";
      this.pageState = false;
      this.$router.push({ query: {} });
    },

    getPortfolioDetail(id: string) {
      this.setLoading(true);
      if (this.fromCateId !== id || !this.pageState) {
        try {
          this.pageState = true;
          this.fromCateId = id;
          this.currentCategoryId = id;
        } catch (error) {
          console.log(error);
        } finally {
          this.setLoading(false);
        }
      } else {
        this.clearState();
        this.setLoading(false);
      }
    },

    getTitle() {
      return (
        portFolioCategory.find(
          (item: any) => item.id === this.currentCategoryId
        )?.name ?? ""
      );
    },
  },
};
</script>

<style scoped lang="scss">
.portfolio-wrap-inner {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  align-items: center;
  .portfolio-list-wrap {
    width: 100%;
    height: 100%;
    max-width: 800px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .thums-title {
      font-size: 25px;
    }
    &.plw-center {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .portfolio-item {
      margin-top: 15px;
      cursor: pointer;
      .pf-item-inner {
        width: 100%;
        height: 100%;
        display: flex;
        padding: 25px;
        justify-content: space-between;
        flex-direction: row;
        border: 1px solid rgba(22, 22, 117, 0.15);
        border-radius: 12px;
        background-color: rgb(49, 49, 53);
        box-shadow: rgb(0 0 0 / 10%) 0px 1px 2px, rgb(0 0 0 / 15%) 0px 0px 1px;
        .pf-item-text {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .pf-item-date {
            margin-left: 10px;
          }
          .pf-item-desc {
            word-break: keep-all;
            color: rgb(102, 138, 255);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
  .category-folder-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .folder-wrap {
      cursor: pointer;
      margin: 10px;
      .folder {
        background-image: var(--folder);
        height: 100px;
        width: 100px;
        &.open {
          background-image: var(--folder-open) !important;
        }
      }
      .category-name {
        font-size: 15px;
      }
    }
  }
}
</style>
