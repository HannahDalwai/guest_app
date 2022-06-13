<template>
 <header>
   <h1 class="display2">My Booking</h1>
 </header>
 <main>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card">bookings</div>
        </div>
        <div class="col">
          <div class="card">keys</div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card">bookings</div>
        </div>
        <div class="col">
          <div class="card">keys</div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card">bookings</div>
        </div>
        <div class="col">
          <div class="card">keys</div>
        </div>
      </div>
</div>
 </main>
</template>
<style scoped>
.card{
    width:100%;
    height: 100px;
    padding-top:30px;
}
.card:nth-child(1){
     background-image: url("https://i.postimg.cc/DwhKprn2/janan-lagerwall-Oo-W1-DMDCV1-Y-unsplash.jpg"), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
    background-blend-mode: overlay;
    background-attachment: fixed;
    padding: 0;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
}
</style>