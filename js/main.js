function resetf() {
    document.getElementById("myform").reset();
  }
  function back() {
    document.getElementById("mnt").style.display = "none";
  }
  function oran() {
    document.getElementById("mnt").style.display = "inline-block";
  }
  const stindam = (even) => {
    even.children[0].style.fontSize = "26px";
    even.children[1].style.fontWeight = "Bold";
    document.querySelectorAll(".item1").forEach((element) => {
      if (even !== element) {
        element.children[0].style.fontWeight = "19px";
        element.children[1].style.fontWeight = "Normal";
      }
    });
  };
  const sm = (even) => {
      let mf = document.getElementById("myform");
    if (mf["fname"].value === "") {
      document.getElementsByTagName("input")[0].style.border = "1px solid red";
    }
    if (mf["lname"].value === "") {
      document.getElementsByTagName("input")[1].style.border = "1px solid red";
    }
    if (mf["email"].value === "") {
      document.getElementsByTagName("input")[2].style.border = "1px solid red";
    }
    if (mf["address"].value === "") {
      document.getElementsByTagName("input")[3].style.border = "1px solid red";
    }
    if (mf["contact"].value === "") {
      document.getElementsByTagName("input")[4].style.border = "1px solid red";
    }
    return false;
  };
  const regex1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  document.getElementById("vld1").style.display = "none";
  document.getElementById("vld2").style.display = "none";
  const chkem = even =>{
      if(regex1.test(document.getElementById("email").value)){
          document.getElementById("vld1").style.display = "inline-block";
          document.getElementById("vld2").style.display = "none";
          // document.getElementById("email").style.borderColor = "currentColor";
      }else{
          document.getElementById("vld2").style.display = "inline-block";
          document.getElementById("vld2").style.backgroundColor = "red";
          document.getElementById("email").style.borderColor = "red";
          document.getElementById("vld1").style.display = "none";
      }
  }



  const token = localStorage.getItem('token')
  const userinfo = JSON.parse(localStorage.getItem('userinfo'))
  const id = userinfo.id

  fetch(`https://dummyjson.com/users/${id}`)
      .then(res => res.json())
      .then(json => {
          document.getElementById("fname").value = userinfo.firstName;
          document.getElementById("lname").value = userinfo.lastName;
          document.getElementById("email").value = userinfo.email;

  })



