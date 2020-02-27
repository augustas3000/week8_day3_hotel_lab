<template lang="html">
 <form v-on:submit="addBooking" class="" method="post">
   <h2>Add a booking</h2>
   <div class="">
     <label for="name">Name:</label>
     <input v-model="name" type="text" name="" id="name">
   </div>
   <div class="">
     <label for="email">Email:</label>
     <input v-model="email" type="text" name="" id="email">
   </div>
   <div class="">
     <label for="name">Status</label>
     <input type="radio" v-model="isCheckedIn" id="checkedIn" name="isCheckedIn" value="true">
     <label for="checkedIn">Checked in</label><br>
     <input type="radio" v-model="isCheckedIn" id="notCheckedIn" name="isCheckedIn" value="false" selected>
     <label for="notCheckedIn">Not checked in</label><br>

   </div>
<input type="submit" name="" value="Add Booking">
 </form>
</template>

<script>
import BookingService from '../services/BookingService.js';
import { eventBus } from '../main';

export default {
  name: 'bookings-form',
  data () {
    return {
      name: "",
      email: "",
      isCheckedIn: ""
    }
  },
  methods: {
    addBooking(e){
      e.preventDefault()
      // debugger;
      const booking = {
        name: this.name,
        email: this.email,
        isCheckedIn: this.isCheckedIn
      }

      BookingService.postBooking(booking)
      .then(res => eventBus.$emit('booking-added', res))
    }
  }

}
</script>




<style lang="css" scoped>
</style>
