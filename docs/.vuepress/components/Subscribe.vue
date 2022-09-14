<template>
  <el-empty description="还没有内容"/>
</template>
<script setup>
import {ElNotification} from 'element-plus';
import {global} from '../config/index';

if (!global.subscribe.close) {
  global.subscribe = ElNotification({
    title: '诚邀您参与文档编写小组',
    offset: 70,
    dangerouslyUseHTMLString: true,
    message: '<div>添加好友请备注<label>WxJava Docs</label></div><img src="https://platform-wxmall.oss-cn-beijing.aliyuncs.com/wx.png" class="img100"/>',
    duration: 0,
    onClose() {
      global.subscribe = {}
    }
  })
}
</script>