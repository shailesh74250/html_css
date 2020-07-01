function toggleSidebar(toggle) {
  let sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('sidebar');
  sidebar.classList.toggle('sidebar-hide');
  let main = document.getElementById('main');
  main.classList.toggle('main');
  main.classList.toggle('main-show');
} 
