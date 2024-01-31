<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <p class="title">
        <slot name="heading"></slot>
      </p>
      <div class="contents">
        <slot name="contents"></slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  width: 100%;
  display: flex;
  position: relative;
  &:hover {
    i {
      color: #9588e7;
      &::before {
        top: 36px;
        height: 10%;
      }
    }
    .details {
      .title {
        color: #9588e7;
      }
    }
  }
  i {
    display: flex;
    place-items: center;
    place-content: center;
    width: 32px;
    height: 32px;
    transition: 0.2s;
    &::before {
      position: absolute;
      content: "";
      left: 13.5px;
      bottom: 0;
      width: 2px;
      height: calc(100% - 34px);
      transition: 0.2s;
      background: var(--main-gradient);
      background-size: 400% 400%;
      animation: var(--main-gradient-animation);
    }
  }
  .details {
    width: 100%;
    margin-left: 1rem;
    p.title {
      padding: 0;
      margin: 4px 0 15px 0;
      font-weight: bold;
      text-align: left;
      font-size: 20px;
      transition: 0.2s;
    }
    .contents {
      width: 100%;
      text-align: left;
    }
  }
}
</style>
