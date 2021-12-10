<template>
    <div id="vue"></div>
</template>
<script>
import { start } from 'qiankun'
export default {
    mounted() {
        if (!window.qiankunStarted) {
            window.qiankunStarted = true;
            start({
                sandbox: { strictStyleIsolation: true }
            })
        }
    }
}
</script>