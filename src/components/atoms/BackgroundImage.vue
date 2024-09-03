<template>
  <div class="background"></div>
</template>

<style>
.background {
  position: relative;
}

.background:before {
  content: " ";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 350px;
  opacity: 0.6;
  background: url(../../assets/images/header.jpeg) no-repeat;
  background-size: cover;
}
</style>
