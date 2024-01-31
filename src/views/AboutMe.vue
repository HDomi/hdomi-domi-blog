<template>
  <div class="page-wrap">
    <div class="about-me-inner flex-col">
      <div class="top-sec flex-row">
        <div class="top-left">
          <img src="../assets/images/my_photo.jpg" />
        </div>
        <div class="top-right flex-col">
          <AboutMeItem>
            <template #icon>
              <HeartIcon />
            </template>
            <template #heading>슬로건</template>
            <template #contents>
              기업의 이익과 동시에 자신의 능력 향상을 추구합니다.
            </template>
          </AboutMeItem>

          <AboutMeItem>
            <template #icon>
              <ToolingIcon />
            </template>
            <template #heading>간략 자기소개</template>
            <template #contents>
              안녕하세요. 황재영입니다.<br />
              지난 1년간 웹디자인/퍼블리셔로 근무하다 본격적으로<br />
              프론트엔드의 길로 가기 위해 공부중에 있습니다.<br />
              HTML5와 CSS3, 간단한 Javascript등에는 자신이 있으나<br />
              Vue, Ts부분은 아직 많이 미흡하고 부족합니다.<br /><br />
              하지만 지금 이 페이지를 만드는 것 처럼<br />꾸준히 노력하고
              공부중입니다. 감사합니다.
            </template>
          </AboutMeItem>

          <AboutMeItem>
            <template #icon>
              <IconCube />
            </template>
            <template #heading>기술스택</template>
            <template #contents>
              <LanguageIconList :iconList="iconList" :isAboutMe="true" />
            </template>
          </AboutMeItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapMutations } from "vuex";
import AboutMeItem from "@/components/AboutMeItem.vue";
import HeartIcon from "@/components/icons/IconHeart.vue";
import IconCube from "@/components/icons/IconCube.vue";
import ToolingIcon from "@/components/icons/IconTooling.vue";
import LanguageIconList from "@/components/LanguageIconList.vue";
export default {
  components: {
    AboutMeItem,
    HeartIcon,
    IconCube,
    ToolingIcon,
    LanguageIconList,
  },
  mixins: [],
  props: {},
  data() {
    return {
      iconList: [
        "html",
        "css",
        "vue",
        "react-native",
        "react-js",
        "typescript",
        "firebase",
        "docusaurs",
        "graphql",
        "scss",
      ],
    };
  },
  async created() {},
  computed: {},
  presets: {},
  watch: {},
  mounted() {},
  methods: {
    ...mapMutations("layout", ["setLoading"]),
  },
};
</script>

<style scoped lang="scss">
.about-me-inner {
  width: 100%;
  z-index: 99;
  padding-bottom: 200px;
  .top-sec {
    width: 100%;
    margin-top: 50px;
    gap: 50px;
    justify-content: center;
    .top-left {
      img {
        width: 300px;
        border-radius: 15px;
      }
    }
    .top-right {
      align-items: flex-start;
      gap: 20px;
    }
  }
}
@media (max-width: 850px) {
  .top-sec {
    flex-direction: column;
  }
}
@media (max-width: 600px) {
  .stack_wrap {
    zoom: 0.8;
  }
}
</style>
