<template>
    <div>
        书
    </div>
</template>
<script>
export default {
   created() {
       let obj = {
           title:"书籍",
           className:"book"
       }
       this.$emit("changeNav",obj)
   }, 
}
</script>
<style scoped>
   
</style>
