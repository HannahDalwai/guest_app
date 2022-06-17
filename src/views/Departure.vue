<template>
 <header>
   <h1 class="display2">My Booking</h1>
 </header>
 <main>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card mystay"><h5>My Stay</h5></div>
        </div>
        <div class="col">
          <div class="card keys"><h5>Keys</h5></div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card My-Accounts"><h5>My Accounts</h5></div>
        </div>
        <div class="col">
          <div class="card Guests"><h5>Guests</h5></div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card Booking-Details"><h5>Booking Details</h5></div>
        </div>
        <div class="col">
          <div class="card Maintence"><h5>Maintence</h5></div>
        </div>
      </div>
        <div class="row">
        <div class="col">
          <div class="card House-Keeping"><h5>House Keeping</h5></div>
        </div>
        <div class="col">
          <div class="card Check-Out"><h5>Check Out</h5></div> 
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
button{
    background: #2F2931;
    border-radius: 50px;
    border-color: rgba(240, 248, 255, 0);
    position: absolute;
    width: 150px;
    height: 61px;
    left: 104px;
    margin-top: 20%;
}
a{
  color: white;
  text-decoration: none;
}
h5{
    color: white;
}
/*************** each card****************/
.mystay{
    background-image: url("https://i.postimg.cc/T3k5S3f1/matt-halls-7k-Yfhku6-X2w-unsplash.jpg"), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.keys{
    background-image: url("https://i.postimg.cc/GmtbLZ4g/filip-szalbot-Pxi-Ac1a-El-FQ-unsplash.jpg"), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.My-Accounts{
  background-image: url("https://i.postimg.cc/L5BYkrRF/john-moeses-bauan-LU2-BLho-Lkb-Y-unsplash.jpg"), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.Guests{
      background-image: url("https://i.postimg.cc/L5BYkrRF/john-moeses-bauan-LU2-BLho-Lkb-Y-unsplash.jpg"), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.Booking-Details{
  background-image: url("https://i.postimg.cc/L5BYkrRF/john-moeses-bauan-LU2-BLho-Lkb-Y-unsplash.jpg"), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.Maintence{
  background-image: url("https://i.postimg.cc/L5BYkrRF/john-moeses-bauan-LU2-BLho-Lkb-Y-unsplash.jpg"), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.House-Keeping{
  background-image: url("https://i.postimg.cc/L5BYkrRF/john-moeses-bauan-LU2-BLho-Lkb-Y-unsplash.jpg"), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.Check-Out{
  background-image: url("https://i.postimg.cc/L5BYkrRF/john-moeses-bauan-LU2-BLho-Lkb-Y-unsplash.jpg"), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>