<template>
    <div class="">
      <div class="flex space-x-2 justify-center">
        <ButtonComp :property="c" :name="c.name" :cls="c.cls" v-for="c in btnList" :key="c.name"/>
      </div>

      <div class="mt-6 flex space-x-2 justify-center">
        <ButtonPrimary v-for="(c,i) in btnList" :key="c.name">{{i}}</ButtonPrimary>
      </div>
    </div>
</template>
<script>
import ButtonComp from '@/components/ButtonComp.vue'
import '../assets/styles/styles.css'
export default {
  data(){
    return {
      btnList:[
        {name: "Primary",cls:"bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800"},
        {name: "Secondary",cls:"bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800"},
        {name: "Success",cls:"bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700"},
        {name: "Danger",cls:"bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800"},
        {name: "Warning",cls:"bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700"},
        {name: "Info",cls:"bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600"},
        {name: "Light",cls:"bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400"},
        {name: "Dark",cls:"bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900"},
        {name: "Link",cls:"bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200"},
      ]
    }
  },
  components:{ButtonComp},
  mounted() {
  }
}
</script>
