<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">
        <div class="nav-left">
          <g-link class="brand" to="/">{{ $static.metaData.siteName }}</g-link>
          <div class="tabs">
            <g-link class="nav__link" to="/">Home</g-link>
            <g-link class="nav__link" to="/research">Research</g-link>
          </div>
        </div>
        <div class="nav-right">
          <a class="button outline">Button</a>
        </div>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">
body {
  font-family: LM-Math, Roboto, "Helvetica Neue", Arial, sans-serif;
  font-display: swap;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

p {
  text-align: justify;
}

.nav {
  width: 100%;

  &__link {
    margin-left: 20px;
  }
}

.brand {
  width: 200px;
}
</style>
