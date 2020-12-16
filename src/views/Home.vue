<template>
  <div>
    <div class="topNav">
      <div class="logo">Logo</div>
      <ul class="menu">
        <li>Menu#1</li>
        <li>Menu#2</li>
      </ul>
    </div>
    <div class="banner">
      <h1>Drwing UI</h1>
      <h2>A UI Framework From Ricky Drwing Tech Inc.</h2>
      <p class="actions">
        <a href="">GitHub</a>
        <a href="">Begin</a>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.topNav{
  border: 1px solid red;
  background: pink;
  padding: 16px;
  > .logo{
    max-width: 6em;
    margin-right: auto;
  }
  .menu{
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li{
      margin: 0 1em;
    }
  }
}
</style>