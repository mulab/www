<template>
  <div
    class="footer"
    :style="{ backgroundColor: backgroundColor, color: textColor }"
    >
    <el-row>
      <el-col class="footer-text" :xl="24" :sm="12">
        <span>Created by Lab μ with all the love from world</span>
      </el-col>
      <el-col class="footer-text" :xl="24" :sm="12">
        <span>Copyright © 2018 清华大学学生Lab μ校园极客社</span>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.footer {
  font-size: 14px;
  text-align: center;
  width: 100%;
  padding: 16px 0;
  margin: 0;
}
.footer-text {
  line-height: 12px;
  margin: 5px 0;
}
</style>

<script>
export default {
  props: {
    backgroundColor: String,
    textColor: String,
  },
};
</script>

