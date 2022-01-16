<template>
  <div class="date-today-todo">
                      <p class="day">{{ currentDateDay() }}</p>
                      <div class="month-year">
                          <span>{{ currentDateMonth()}}</span>
                          <p>{{ currentDateYear()}}</p>
                      </div>
                  </div>
</template>

<script>
export default {
    name:'Date',
    methods: {
    currentDateDay() {
      const current = new Date();
      const date = current.getDate()+' ';
      
      const dateTime = date ;
      
      return dateTime;
    },
    currentDateMonth() {
      let  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let d = new Date();
      let monthName=months[d.getMonth()]; 
      
      
      return monthName;
    },
    currentDateYear(){
        const current = new Date();
        const date = current.getFullYear();

        const dateTime = date;
        return dateTime;
    }
  }
}
</script>

<style>

</style>