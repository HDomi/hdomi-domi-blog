<template>
  <div :class="`thums-wrap ${currentItemId !== '' ? 'opened' : ''}`">
    <div
      v-for="(item, idx) in workProjectItems"
      :key="`item-${idx}`"
      :class="`thums-item bg-img flex-col ${item.id} ${
        currentItemId !== '' ? 'no-clicked' : ''
      }`"
      @click="changeCurrentItemId(item.id)"
    >
      <p>{{ item.projectName }}</p>
    </div>
    <!-- <Transition name="slide-fade"> -->
    <div v-if="currentItemId !== ''" class="opened-item flex-col">
      <div class="item-label-wrap flex-row">
        <div :class="`item-label flex-col ${currentItemId}`">
          <p>{{ getCurrentName(currentItemId) }}</p>
        </div>
        <button @click="clearIdQuery()" class="close-btn">목록으로</button>
      </div>
      <div class="item-detail-wrap flex-col">
        <button
          v-if="currentPortfolioItem?.href"
          :class="`btn-href flex-col ${
            !currentPortfolioItem?.href ? 'disabled' : ''
          }`"
          @click="goHrefNewTab(currentPortfolioItem?.href)"
        >
          <p>바로가기</p>
        </button>
        <button
          v-if="currentPortfolioItem?.githubHref"
          :class="`btn-href github-btn flex-row ${
            !currentPortfolioItem?.githubHref ? 'disabled' : ''
          }`"
          @click="goHrefNewTab(currentPortfolioItem?.githubHref)"
        >
          <font-awesome-icon icon="fa-brands fa-github" />
          <p>Github</p>
        </button>
        <div class="label pr-title">
          <span>프로젝트 명</span>
          <p>{{ currentPortfolioItem?.projectName }}</p>
        </div>
        <div class="label pr-use-language">
          <span>사용 언어</span>
          <LanguageIconList :iconList="currentPortfolioItem?.useLanguage" />
        </div>
        <div class="label pr-time">
          <span>기간</span>
          <p>{{ currentPortfolioItem?.time }}</p>
        </div>
        <div class="label pr-man-power">
          <span>참여인원 / 기여도</span>
          <div class="flex-row">
            <div class="fa-user" />
            <p>{{ currentPortfolioItem?.manPower[0] }}</p>
            /
            <ProgressBar :percent="currentPortfolioItem?.manPower[1]" />
          </div>
        </div>
        <div class="label pr-desc">
          <span>간단 설명</span>
          <p v-html="formatDescription(currentPortfolioItem?.desc)"></p>
        </div>
        <PortfolioImageSlider :currentItemId="currentItemId" />
      </div>
    </div>
    <!-- </Transition> -->
  </div>
</template>

<script lang="ts">
import { portFolioArr } from "@/data/PortfolioList";
import PortfolioImageSlider from "@/components/portfolioImageSlider/PortfolioImageSlider.vue";
import LanguageIconList from "@/components/LanguageIconList.vue";
import ProgressBar from "@/components/ProgressBar.vue";
export default {
  components: { PortfolioImageSlider, LanguageIconList, ProgressBar },
  mixins: [],
  props: { currentCategoryId: String },
  data() {
    return {};
  },
  async created() {},
  computed: {
    currentPortfolioItem() {
      if (this.currentItemId === "") return null;
      return portFolioArr.filter(
        (item: any) => item.id === this.currentItemId
      )[0];
    },
    workProjectItems() {
      return portFolioArr
        .filter((item: any) => item.category === this.currentCategoryId)
        .map((item: any) => ({
          id: item.id,
          projectName: item.projectName,
        }));
    },
    currentItemId() {
      return (this.$route.query.id as string) || "";
    },
  },
  presets: {},
  watch: {
    currentCategoryId(id: string) {
      this.clearIdQuery();
    },
  },
  mounted() {},
  methods: {
    clearIdQuery() {
      this.$router.push({ query: {} });
    },
    changeCurrentItemId(id: any) {
      this.$router.push({ query: { id } });
    },
    getCurrentName(id: any) {
      const project = this.workProjectItems.find((item) => item.id === id);
      return project ? project.projectName : "";
    },
    displayNoneItem(id: any) {
      if (this.$route.query.id === "") return false;
      if (id !== this.$route.query.id) return true;
      return false;
    },
    goHrefNewTab(url: any) {
      window.open(url, "_blank");
    },
    formatDescription(desc: any) {
      return desc ? desc.replaceAll(/\n/g, "<br>") : "";
    },
  },
};
</script>
<style scoped lang="scss">
.fa-user {
  content: url(../../assets/images/icons/fa-user.svg);
}

.thums-wrap {
  z-index: 99;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;
  &.opened {
    height: 100%;
  }
  .opened-item {
    width: 100%;
    height: 100%;
    position: relative;
    gap: 10px;
    .item-detail-wrap {
      width: 100%;
      height: calc(100% - 160px);
      border-radius: 10px;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 15px;
      .label {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        text-align: left;
        &.pr-use-language {
          width: 100%;
        }
        &.pr-man-power {
          width: 100%;
          .flex-row {
            width: 100%;
            padding-left: 22px;
            p {
              padding: 0;
              margin: 10px;
            }
            .fa-user {
              width: 17px;
            }
          }
        }
        span {
          font-weight: bold;
          font-size: 20px;
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          &::before {
            content: "●";
            margin-right: 10px;
            display: block;
            font-size: 15px;
            color: #fff;
          }
        }
        p {
          margin: 0;
          padding-left: 22px;
        }
      }
      .btn-href {
        cursor: pointer;
        border-radius: 10px;
        width: 100%;
        height: 50px;
        background: #3a5cfb;
        &.github-btn {
          justify-content: center;
          background: #000;
          color: #fff;
          font-size: 17px;
          font-weight: bold;
          .fa-github {
            margin-right: 10px;
          }
          &:hover {
            background: #00000022;
          }
        }
        p {
          color: #fff;
          font-size: 17px;
          font-weight: bold;
        }
        &:hover {
          background: #668aff;
        }
        &.disabled {
          pointer-events: none;
          opacity: 0.5;
          cursor: not-allowed;
        }
      }
    }
    .item-label-wrap {
      width: 100%;
      height: 150px;
      overflow: hidden;
      gap: 10px;
      .item-label {
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;
        border-radius: 10px;
        flex: 1;
        position: relative;
        height: 100%;
        font-size: 20px;
        &::before {
          border-radius: 10px;
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 7;
        }
        p {
          position: relative;
          z-index: 9;
        }
      }
    }
    .close-btn {
      width: 150px;
      height: 150px;
      cursor: pointer;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      font-size: 17px;
      font-weight: bold;
      &:hover {
        background: #00000022;
      }
    }
  }

  .thums-item {
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    height: 150px;
    position: relative;
    overflow: hidden;
    transition: 0.3s;
    &.no-clicked {
      display: none;
    }
    &.bg-img {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 7;
      }
    }
    p {
      position: relative;
      z-index: 9;
      font-size: 20px;
    }
  }
}
@media (max-width: 600px) {
  .item-label-wrap {
    flex-direction: column;
    height: 300px !important;
    max-height: 300px;
    .item-label {
      width: 100%;
    }
    .close-btn {
      width: 100% !important;
      height: 50px !important;
    }
  }
}

//toy
.toy-music-player {
  background-image: url(/assets/images/toys/toy-music-player.png);
}
.toy-utils {
  background-image: url(/assets/images/toys/toy-utils.png);
}
.toy-copilot {
  background-image: url(/assets/images/toys/toy-copilot.png);
}

.toy-blog {
  background-image: url(/assets/images/toys/toy-blog.png);
}

//works
.works-accu {
  background-image: url(/assets/images/works/works-accu.png);
}
.works-vas {
  background-image: url(/assets/images/works/works-vas.png);
}
.works-giddy {
  background-position: center !important;
  background-image: url(/assets/images/works/works-giddy2.png);
}
.works-r-issue {
  background-image: url(/assets/images/works/works-r-issue.png);
}
.works-gigamec {
  background-image: url(/assets/images/works/works-gigamec.png);
}
.works-web-binar {
  background-image: url(/assets/images/works/works-web-binar.png);
}
.works-aia {
  background-image: url(/assets/images/works/works-aia.png);
}
.works-wannabe-ad {
  background-image: url(/assets/images/works/works-wannabe-ad.png);
}
.works-ecogram {
  background-position: center !important;
  background-image: url(/assets/images/works/works-ecogram.png);
}
.works-ecogram-admin {
  background-image: url(/assets/images/works/works-ecogram-admin.png);
}
</style>
