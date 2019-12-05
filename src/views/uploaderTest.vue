<template>
  <div class="upload-test">
    <!-- <div>
      {{ error }}
      <div class="tips">这是单文件上传组件的例子</div>
     
      <uploader
        :size-limit="1024*1024"
        @error="error=$event"
        :file-list.sync="fileList"
        :parseResponse="parseResponse"
        accept="image/*"
        method="POST"
        action="http://127.0.0.1:3000/upload"
        name="file"
       
      >
        <g-button icon="upload">上传</g-button>
      </uploader>
    </div> -->



    <div style="margin-top:30px;border-top:1px solid red;">
      {{ error }}
      <div class="tips">这是多文件上传组件的例子</div>
      <!-- <uploader></uploader> -->
      <uploads
        :size-limit="1024*1024"
        @error="error=$event"
        :file-list.sync="fileList"
        :parseResponse="parseResponse"
        accept="image/*"
        method="POST"
        action="http://127.0.0.1:3000/upload"
        name="file"
      >
        <g-button icon="upload">上传</g-button>
      </uploads>
    </div>

  </div>
</template>
<script>
// 单文件上传组件
// import Uploader from '@/components/upload/upload'

// 多文件上传组件
import Uploads from '@/components/upload/uploads'


import GButton from '@/components/button/button'
export default {
  name: 'UploadDemo',
  components: {
    // Uploader,
    Uploads,
    GButton
  },
  data() {
    return {
      fileList: [],
      error: ''
    }
  },
  methods: {
    parseResponse(response) {
      // 反序列化：字符串 -> 对象
      let object = JSON.parse(response)
      let url = `http://127.0.0.1:3000/preview/${object.id}`
      return url
    }
  }
}
</script>
<style scoped>
.upload-test {
  padding: 30px;
}
.tips {
  margin-bottom: 20px;
}
</style>

