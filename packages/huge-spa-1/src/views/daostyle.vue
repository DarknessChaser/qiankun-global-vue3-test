<template>
  <div id="container">
    <div>
      <h1>Button</h1>
      <dao-button color="blue">
        white one
      </dao-button>
      <dao-button :disabled="true">
        button
      </dao-button>
      <dao-button :block="true">
        button
      </dao-button>
    </div>

    <div>
      <h1>Checkbox</h1>
      <dao-checkbox :disabled="true">
        checkbox
      </dao-checkbox>
      <dao-checkbox-group :vertical="false">
        <dao-checkbox>checkbox1</dao-checkbox>
        <dao-checkbox>checkbox2</dao-checkbox>
      </dao-checkbox-group>
    </div>

    <div>
      <h1>Dialog</h1>
      <dao-button
        color="blue"
        @click="openDialog"
      >
        Open Dialog
      </dao-button>
      <!-- #region preview -->
      <dao-dialog
        :model-value="isShow"
        :show-close="false"
        header="Basic Dialog"
        @cancel="hideDialog"
        @confirm="hideDialog"
      >
        <div class="body">
          Some contents...
        </div>
      </dao-dialog>
    </div>

    <div>
      <h1>Dropdown</h1>
      <dao-dropdown placement="bottom-start">
        <dao-button>Trigger</dao-button>
        <template #menu>
          <dao-dropdown-menu>
            <dao-dropdown-item type="title">
              Title
            </dao-dropdown-item>
            <dao-dropdown-item>View</dao-dropdown-item>
            <dao-dropdown-item :disabled="true">
              Edit
            </dao-dropdown-item>
            <dao-dropdown-item type="divider" />
            <dao-dropdown-item color="red">
              Delete
            </dao-dropdown-item>
          </dao-dropdown-menu>
        </template>
      </dao-dropdown>
    </div>

    <div>
      <h1>Form</h1>
      <dao-form>
        <dao-form-item
          label="label"
        >
          <div>
            This is content
          </div>
        </dao-form-item>
      </dao-form>
    </div>

    <div>
      <h1>Input</h1>
      <dao-input
        v-model="input"
      />
    </div>

    <div>
      <h1>Progress</h1>
      <dao-progress
        :value="80"
        fill="pink"
        bg-color="rgb(82, 196, 26)"
      />
    </div>

    <div>
      <h1>Radio</h1>
      <dao-radio-group>
        <dao-radio
          v-model="radio"
          label="radio1"
        >
          radio1
        </dao-radio>
        <dao-radio
          v-model="radio"
          label="radio2"
        >
          radio2
        </dao-radio>
      </dao-radio-group>
    </div>

    <div>
      <h1>Select</h1>
      <dao-select v-model="gender">
        <dao-option
          label="boy"
          :value="true"
        />
        <dao-option
          label="girl"
          :value="false"
        />
      </dao-select>
    </div>

    <div>
      <h1>Switch</h1>
      <dao-switch
        v-model="value"
        size="sm"
        :disabled="false"
        :show-text="true"
        text-on="switch开启"
        text-off="switch关闭"
      />
    </div>

    <div>
      <h1>Tab</h1>
      <p>当前所在标签 {{ curTab }}</p>
      <dao-tabs
        v-model="curTab"
      >
        <dao-tab-item
          value="profile"
          label="介绍"
        >
          <p>profile 的内容</p>
        </dao-tab-item>
        <dao-tab-item
          value="detail"
          label="详情"
        >
          <p>detail 的内容</p>
        </dao-tab-item>
      </dao-tabs>
    </div>

    <div>
      <h1>Popover</h1>
      <div>
        <dao-popover
          content="top"
          placement="top"
          :class="top"
        >
          <div class="placement-box">
            top
          </div>
        </dao-popover>
      </div>
    </div>

    <div>
      <h1>Tooltip</h1>
      <dao-tooltip
        content="This is the contents"
        placement="top-start"
      >
        <dao-button>Hover Here!</dao-button>
      </dao-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DaoStyleUseComponent',
  data() {
    return {
      isShow: false,
      input: '',
      radio: 'radio1',
      gender: false,
      value: true,
      curTab: 'detail',
    }

  },
  mounted() {
    this.$test = { a: 123 };
    console.log('show dao style');
  },
  methods: {
    openDialog() {
      this.isShow = true;
    },
    hideDialog() {
      this.isShow = false;
    }
  },
};
</script>

<style scoped>
.placement-box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  font-weight: 800;
  color: #fff;
  background-color: #3b82f6;
  border-radius: 0.375rem;
}
</style>