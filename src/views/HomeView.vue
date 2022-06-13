<template>
  <main>
      <form action=""> <h1 class="display-2"> Find My Booking</h1>
      <h6>Booking Reference</h6>
      <input type="text">
      <h6>Last Name</h6>
      <input type="text"> <br>
      <button>Search</button>
    </form>
    
  </main>
  <div class="socials d-flex justify-content-between">
    <i class='bx bxl-facebook'></i>
    <i class='bx bxl-instagram'></i>
    <i class='bx bxl-linkedin'></i>
    <i class='bx bxl-youtube'></i>
  </div>
</template>


<style scoped>
main {
    background-image: url("https://i.postimg.cc/DwhKprn2/janan-lagerwall-Oo-W1-DMDCV1-Y-unsplash.jpg"), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
    background-blend-mode: overlay;
    background-attachment: fixed;
    padding: 0;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    width: 100vw;
    height: 70vh;
}
.display-2{
    color: white;
}
h6{
    color: white;
}
input{
    border-radius:15px ;
    border-color: rgba(250, 235, 215, 0);
}
 
/************* button *****************/
button{
    color: white;
    background: #2F2931;
    border-radius: 50px;
    border-color: rgba(240, 248, 255, 0);
    position: absolute;
    width: 152px;
    height: 61px;
    left: 104px;
    top: 455px;
}
/************* icons *****************/
.socials{
    padding:20px 20px 20px 20px;
}
.bx{
    background-color: #2F2931;
    color: white;
    padding:15px 15px 15px 15px;
    border-radius: 50%;
}

</style>