export const portFolioCategory = [
  {
    id: "toy",
    name: "토이 프로젝트",
  },
  {
    id: "work",
    name: "작업 프로젝트",
  },
];
export const portFolioArr = [
  {
    id: "toy-blog",
    category: "toy",
    projectName: "Domi Blog",
    desc: `한창 VUE를 공부하던 시기에, 블로그를 만들어보고 싶었습니다.\n
    그래서 처음으로 만들어본 블로그 입니다.\n
    게시글 부분을 어떻게 처리할까 하다, md파일을 이용하여 게시글을 작성하고,\n
    github api를 이용하여, 다른 repository에 있는 md파일을 불러와서 게시글을 볼 수 있도록 하였습니다.`,
    useLanguage: ["vue", "typescript", "scss"],
    time: "2022.12 ~ 2023.01, 2024.01 ~ 2024.01",
    manPower: ["1명", "100%"],
    imgCount: 4,
    href: null,
    githubHref: "https://github.com/HDomi/hdomi.github.io",
  },
  {
    id: "toy-music-player",
    category: "toy",
    projectName: "뮤직 플레이어",
    desc: `사내에서 휴대폰 + 블루투스 스피커로 노래를 틀곤 하는데, 노래를 변경 하려면,\n
    휴대폰이 있는 위치까지 가서 변경해야하는 불편함이 있었습니다. 그래서\n
    vue + firebase를 이용하여 노래를 추가하고, 노래를 변경할 수 있는 웹앱을 만들었습니다.\n
    핸드폰으로 이 웹에 들어가 특정 비밀번호를 입력하면 노래재생 ui가 나오고,\n
    비밀번호가 틀리면 노래를 추가할 수 있는 ui로 이동하도록 하여\n
    노래재생 타이밍이 꼬이는 것을 방지하였습니다.`,
    useLanguage: ["vue", "firebase", "scss"],
    time: "2023.07 ~ 2023.08",
    manPower: ["1명", "100%"],
    imgCount: 2,
    href: "https://hdomi.github.io/DomiMusicPlayer/#/addMusic",
    githubHref: "https://github.com/HDomi/DomiMusicPlayer",
  },
  {
    id: "toy-utils",
    category: "toy",
    projectName: "Utils for Developer",
    desc: `처음 시작은 자격증 공부를 위해 예상문제들을 직접 풀어볼 수 있는 환경을 만들고 싶었습니다.\n
    그렇게 Dump Tester를 만들었고, 이를 통해 자격증을 취득하였습니다.\n
    하지만, 이렇게 만든 환경을 다른 사람들도 사용할 수 있게 만들고 싶었습니다.\n
    그리고 그 김에 또 다른 유용한 기능들을 추가하여, 개발자들이 자주 사용하는 유틸리티를 만들었습니다.`,
    useLanguage: ["vue", "typescript", "firebase", "scss"],
    time: "2023.09 ~ 2021.09",
    manPower: ["1명", "100%"],
    imgCount: 3,
    href: "https://util-for-developer.netlify.app/utils",
    githubHref: "https://github.com/HDomi/UtilsForDev",
  },
  {
    id: "toy-copilot",
    category: "toy",
    projectName: "Copilot Guide",
    desc: `코파일럿을 사용하면서, 코파일럿의 기능들을 정리하고, 사용법을 정리하고 싶었습니다.\n
    그래서 코파일럿 가이드를 만들었습니다. 이는 사원들의 업무능률 향상을 위해 전사 차원으로 전달되었고\n
    업무능률 향상을 기대하고 있습니다.`,
    useLanguage: ["react", "typescript", "docusaurs", "scss"],
    time: "2024.01 ~ 2021.01",
    manPower: ["1명", "100%"],
    imgCount: 3,
    href: "https://copilot-guide.netlify.app/",
    githubHref: "https://github.com/HDomi/vscode-copilot-guide",
  },
  {
    id: "works-accu",
    category: "work",
    projectName: "Accu insight",
    desc: `이 프로젝트는 빅데이터, 데이터 모델링, 데이터를 종합하고, 통계, 분석을 내기 위한 프로젝트입니다.\n
    해당 프로젝트의 프론트 부분을 맡았으며, vue를 처음 써볼때라 많이 부족하고, 프로젝트 자체에도\n
    생소한 용어들이 많아 힘들었지만, 각종 이슈처리를 하고 새로운 기능들을 접하기도 했고\n
    큰 프로젝트 였던만큼 많은 걸 배웠고 성장할 수 있었습니다.`,
    useLanguage: ["vue", "typescript", "graph-ql", "scss"],
    time: "2022.10 ~ 2023.12",
    manPower: ["4명", "40%"],
    imgCount: 3,
    href: null,
  },
  {
    id: "works-vas",
    category: "work",
    projectName: "Aiden VAS",
    desc: `이 프로젝트는 카메라로 사람의 동선을 인식하거나, 드론을 통해 주요자재들의 위치를 파악하여\n
    저장하는 프로젝트였습니다. 해당 프로젝트의 프론트 부분을 맡았으며, vue를 통해 퍼블리싱 및 api연결을 제외한\n
    모든 기능을 구현하였습니다.`,
    useLanguage: ["vue", "typescript", "scss"],
    time: "2022.11 ~ 2023.01",
    manPower: ["4명", "35%"],
    imgCount: 3,
    href: null,
  },
  {
    id: "works-giddy",
    category: "work",
    projectName: "Giddy",
    desc: `처음으로 react-native를 사용하여 진행한 프로젝트였습니다.\n
    퍼블리싱 부분을 진행했지만, 생각보다 개발적인 요소들도 많았습니다.\n
    리액트와는 비슷하면서 엄청 다른부분이 많이 존재하고, 안드로이드에는 가능하지만, ios에는 불가능한 기능들이 많았습니다.\n
    그것들을 하나하나 찾아가면서 해결해 나가는 과정이 힘들었지만, 그만큼 성장할 수 있었던 프로젝트 였습니다.`,
    useLanguage: ["react-native", "typescript"],
    time: "2023.08 ~ 2023.09",
    manPower: ["4명", "35%"],
    imgCount: 4,
    href: null,
  },
  {
    id: "works-r-issue",
    category: "work",
    projectName: "R-Issue",
    desc: `국립재난연구원 관련 프로젝트로, 깔끔한 ui를 구현하고, 데이터를 시각화하여 보여주는 프로젝트였습니다.\n
    해당 프로젝트의 프론트 부분을 맡았으며, react 통해 퍼블리싱 및 api연결을 제외한\n
    모든 기능을 구현하였습니다. 클라이언트 측에서 큰 TV화면에 띄울 수 있는 UI를 제시하였기에\n
    화면 크기가 달라도 같은 비율의 UI를 보여줄 수 있도록 반응형을 중점적으로 다루었습니다.`,
    useLanguage: ["react", "scss"],
    time: "2023.09 ~ 2023.09",
    manPower: ["1명", "100%"],
    imgCount: 3,
    href: null,
  },
  {
    id: "works-gigamec",
    category: "work",
    projectName: "GigaMEC",
    desc: `데이터를 시각화 하는 프로젝트로, 각 지점에 있는 물리적 데이터 창고에 대한 데이터를 시각적으로 보고\n
    정리할 수 있는 프로젝트였습니다. 해당 프로젝트의 프론트 부분을 맡았으며, react를 통해 퍼블리싱 및 api연결을 제외한\n
    모든 기능을 구현하였습니다.`,
    useLanguage: ["react", "scss"],
    time: "2023.11 ~ 2023.11",
    manPower: ["1명", "100%"],
    imgCount: 4,
    href: null,
  },
  {
    id: "works-web-binar",
    category: "work",
    projectName: "Web Binar",
    desc: `처음으로 React를 실 업무에 투입하여 진행하는 프로젝트 였습니다.\n
    기존에 많이 작업했던 Vue와는 다르게, React는 귀찮은 부분이 많았지만,\n
    그만큼 더 성장할 수 있었던 프로젝트 였습니다.`,
    useLanguage: ["react", "typescript", "scss"],
    time: "2023.09 ~ 2023.09",
    manPower: ["1명", "100%"],
    imgCount: 3,
    href: null,
  },
  {
    id: "works-aia",
    category: "work",
    projectName: "AIA 홍보용",
    desc: `급하게 퍼블리싱 부분만을 맡아서 진행한 프로젝트 였습니다.\n
    이벤트 랜딩페이지 부분이어서 크게 어려움 없이 진행할 수 있었습니다.`,
    useLanguage: ["html", "css", "javascript"],
    time: "2023.08 ~ 2023.08",
    manPower: ["1명", "100%"],
    imgCount: 2,
    href: null,
  },
  {
    id: "works-wannabe-ad",
    category: "work",
    projectName: "성형앱 어드민",
    desc: `프로젝트 설계부터 참여하여 진행한 프로젝트 였습니다.\n
    퍼블리싱 부터 프론트 개발까지 모두 맡아서 진행하였으며, api연결까지 모두 진행했습니다.\n
    api 통신 에러처리를 중요하게 생각해, 에러처리를 중점적으로 다뤘던 프로젝트 였습니다.\n
    기능이 하나하나 완성되는 모습을 보며 보람을 크게 느낄 수 있었던 프로젝트 였습니다.`,
    useLanguage: ["react", "typescript", "scss"],
    time: "2023.11 ~ 2023.12",
    manPower: ["3명", "60%"],
    imgCount: 4,
    href: null,
  },
  {
    id: "works-ecogram",
    category: "work",
    projectName: "에코그램-앱",
    desc: `에코그램 모바일 웹앱에 기능 추가를 맡아서 진행했습니다.\n
    연결된 디바이스로부터 db로 정보가 전달되게 되고, 프론트에서는 api 통신을 통해 리스트를 뿌리고,\n
    해당 디바이스의 연결을 끊거나, 삭제하는 동작을 추가하였습니다.\n
    어렵거나 복잡한 기능이 아니라 빠르게 진행 했습니다.`,
    useLanguage: ["react", "typescript"],
    time: "2023.11 ~ 2023.12",
    manPower: ["4명", "25%"],
    imgCount: 3,
    href: null,
  },
  {
    id: "works-ecogram-admin",
    category: "work",
    projectName: "에코그램-어드민",
    desc: `에코그램 모바일 웹앱과 연동되는 웹 어드민 페이지입니다.\n
    작성된 식물 성장일지의 게시여부를 변경하고 관리할 수 있는 페이지 및 동작을 추가했습니다.\n
    백엔드와 협업하여 문제 없이 빠르게 진행되었던 기억이 있습니다.\n
    앱과 연동되는 사항들이 있어서 교차 체크하며 문제를 수정해나갔습니다.\n
    디테일한 디자인이 없는 부분인게 아쉬웠지만, 최대한 기존 디자인과 비슷하게 구현하였습니다.`,
    useLanguage: ["react", "typescript"],
    time: "2023.11 ~ 2023.12",
    manPower: ["1명", "100%"],
    imgCount: 2,
    href: null,
  },
];
