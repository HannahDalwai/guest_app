<template>
  <main>
      <form action="" > <h1 class="display-2"> Find My Booking</h1>
      <h5 class="bref">Booking Reference</h5>
      <input type="text">
      <h5 class="lname">Last Name</h5>
      <input type="text"> <br>
      <button>Search</button>
    </form>
  </main>
  <div class="socials d-flex justify-content-between">
    <i class='bx bxl-facebook' data-bs-toggle="tooltip" data-bs-placement="top" title="On Arrival"></i>
    <i class='bx bxl-instagram'  data-bs-toggle="tooltip" data-bs-placement="top" title="During the stay"></i>
    <i class='bx bxl-linkedin' data-bs-toggle="tooltip" data-bs-placement="top" title="On Departure"></i>
    <i class='bx bxl-youtube' data-bs-toggle="tooltip" data-bs-placement="top" title="My Booking"></i>

  </div>
</template>
<style scoped>
main {
    background-image: url("https://i.postimg.cc/DwhKprn2/janan-lagerwall-Oo-W1-DMDCV1-Y-unsplash.jpg"), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
    background-blend-mode: overlay;
    background-attachment: fixed;
    background-position: center;
    padding: 0;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    width: 100vw;
    height: 89vh;
}
.display-2{
    color: white;
}
h5{
    color: white;
    margin-left: 0;
    text-align: left;
    padding-left:10% ;
}
h1{
    padding-top: 10%;
}
input{
    border-radius:15px ;
    border-color: rgba(250, 235, 215, 0);
    width: 80%;
    height:34px;
}
 .bref{
    margin-top:30%;
}
.lname{
margin-top:20px;
}

/************* button *****************/
button{
    color: white;
    background: #2F2931;
    border-radius: 50px;
    border-color: rgba(240, 248, 255, 0);
    position: absolute;
    width: 150px;
    height: 61px;
    left: 104px;
    margin-top: 20%;
}

/************* icons *****************/
.socials{
    padding:10px 10px 10px 10px;
}
.bx{
    background-color: #2F2931;
    color: white;
    padding:15px 15px 15px 15px;
    border-radius: 50%;
}

</style>