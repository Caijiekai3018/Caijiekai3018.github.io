var dropdownBtn = document.querySelector('.dropdown-btn');
var dropdownMenu = document.querySelector('.dropdown-menu');

dropdownBtn.addEventListener('click', function() {
  dropdownMenu.classList.toggle('show');  /* 切换下拉菜单的显示状态 */
});

dropdownBtn.addEventListener('blur', function() {
  dropdownMenu.classList.remove('show');  /* 当按钮失去焦点时，隐藏下拉菜单 */
});