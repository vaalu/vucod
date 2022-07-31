<template>
<div class="flex justify-center">
  <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm dark:bg-gray-700">
    <h5 class="text-xl leading-tight font-medium mb-2 text-slate-400">Card title</h5>
    <p class="text-gray-700 text-base mb-4 dark:text-gray-100">
      Some quick example text to build on the card title and make up the bulk of the card's
      content.
    </p>
    <ButtonComp :property="btnObj" :name="btnObj.name" :cls="btnObj.cls"/>
  </div>
</div>
</template>
<script>
import ButtonComp from '@/components/ButtonComp.vue'
export default {
  data(){
    return {
      btnObj:{name: "Primary",cls:"bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800"}
    }
  },
  components:{ButtonComp},
  mounted() {
    console.log(this.btnObj)
  }
}
</script>
