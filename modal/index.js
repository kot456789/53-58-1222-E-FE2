.const modal_container = document.querySelector(".modal_container");
const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", () => {
  modal_container.classList.remove("close_status");
});

closeBtn.addEventListener("click", () => {
  modal_container.classList.add("close_status");
});




// ---------------#
// ---------------
// ---------------
.modal_container {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(128, 128, 128, 0.5);
    transition: transform, opacity;
    transition-duration: 0.5s;
  }
  
  .modal {
    position: absolute;
    left: 20px;
    top: 20px;
    right: 20px;
    bottom: 20px;
    background-color: aliceblue;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 2px 5px 10px 2px rgb(112, 112, 112);
  
  }
  
  .modal .close {
    position: absolute;
    top: 5px;
    right: 5px;
    color: teal;
    background: transparent;
    cursor: pointer;
    border: none;
  }
  
  .close_status {
    transform: scale(0);
    opacity: 0;
  }