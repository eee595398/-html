const checkbox = document.getElementById('public');
const label = document.querySelector('.custom-checkbox');

label.addEventListener('click', function() {
  if (checkbox.checked) {
    checkbox.checked = false;
    label.classList.remove('checked');
  } else {
    checkbox.checked = true;
    label.classList.add('checked');
  }
});


// 태그 리스트 모달창

 var btn = document.getElementById("tag-btn");
 var modal = document.getElementById("modal-overlay");
 var span = document.getElementsByClassName("close")[0];

 btn.onclick = function() {
  modal.style.display = "block";
  event.preventDefault();
  // window.location.href = event.target.href; 이벤트를 막은걸 다시 수행해서 페이지 이동을 가능하게 해줌 

}

span.onclick = function() {
  modal.style.display = "none";
}




window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}