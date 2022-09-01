<template>
  <div class="container">
    <div class="login-box">
      <d-form
        ref="formRef"
        label-align="end"
        :data="formData"
        :rules="rules"
        show-feedback
        message-type="text"
      >
        <d-form-item field="username" label="用户名">
          <d-input v-model="formData.username" />
        </d-form-item>
        <d-form-item field="userInfo" label="用户信息">
          <d-input v-model="formData.userInfo"></d-input>
        </d-form-item>
        <d-form-operation class="form-operation-wrap">
          <d-button variant="solid" @click="onClick">提交</d-button>
          <d-button @click="onReset">重置</d-button>
        </d-form-operation>
      </d-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const formRef = ref(null);
const formData = reactive({
  username: '',
  userInfo: '',
});
const rules = {
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' },
    {
      min: 3,
      max: 6,
      message: '用户名需不小于3个字符，不大于6个字符',
      trigger: 'change',
    },
  ],
  userInfo: [{ required: true, message: '用户信息不能为空', trigger: 'blur' }],
};

const onClick = () => {
  formRef.value.validate((isValid, invalidFields) => {
    console.log(isValid);
    console.log(invalidFields);
  });
};

const onReset = () => {
  formRef.value.resetFields();
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  .login-box {
    width: 60%;
    height: 100%;
    margin: 0 auto;
    background: #fff;
    padding: 20px;
  }
}
.form-operation-wrap > * {
  margin-right: 8px;
}
</style>
