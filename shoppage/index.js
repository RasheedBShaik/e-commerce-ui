function setGrid() {
  const container = document.getElementById("card_container");
  container.classList.add("grid_view");
  container.classList.remove("list_view");

  const photo_desc = document.getElementsByClassName("image_details");
  for (i = 0; i < photo_desc.length; i++) {
    photo_desc[
      i
    ].innerHTML = `<div class="images_card_name"> Vel elit euismod </div>
            <div>
              <img
                style="margin-top: 8px; margin-bottom: 15px"
                src="images/imagecards/Group 44.png"
                alt="" />
            </div>
            <div
              style="
                display: flex;
                /* background-color: blue; */
                gap: 10px;
                justify-content: center;
              ">
              $26.00
              <div style="color: #fb2e86"> $42.00 </div>
              
            </div>`;
  }
}

function setList() {
  const container = document.getElementById("card_container");
  container.classList.add("list_view");
  container.classList.remove("grid_view");

  const photo_desc = document.getElementsByClassName("image_details");
  for (i = 0; i < photo_desc.length; i++) {
    photo_desc[
      i
    ].innerHTML = `<div class="images_card_name"> Vel elit euismod </div>
            <div>
              <img
                style="margin-top: 8px; margin-bottom: 15px"
                src="images/imagecards/Group 44.png"
                alt="" />
            </div>
            <div
              style="
                display: flex;
                /* background-color: blue; */
                gap: 10px;
                justify-content: center;
              ">
              $26.00
              <div style="color: #fb2e86"> $42.00 </div>
              <br>
            </div>
            <div 
            style="
            padding:20px;
            text-align:left;
            "
            > This modern chair offers support and a sleek design.
Perfect for home to rest and blending comfort with style.</div>`;
  }
}
