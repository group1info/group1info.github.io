var CuongbokAvt = document.getElementById('avt');
  var CuongbokName = document.getElementById('name');
  var CuongbokNickname = document.getElementById('nickname');
  var CuongbokBio = document.getElementById('bio');
  var CuongbokLinkFb = document.getElementById('linkFb');
  var CuongbokLinkMes = document.getElementById('linkMes');
  var CuongbokLinkTiktok = document.getElementById('linkTiktok');
  
  if(avt.length == 0){avt='https://scontent.xx.fbcdn.net/v/t1.15752-9/276976514_723499662140056_4991654531229047191_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_ohc=L-pvAQXO_o4AX9A9hFa&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVK0quc-NeUyPJtfBkMea6Jd1O594W59bRYno8R_HIvctg&oe=626B90A8'}

var listSocial = document.getElementsByClassName('listSocial');
if( linkFb.length == 0){ listSocial[0].style.display = 'none'; listSocial[1].style.width = '50%'; listSocial[2].style.width = '50%'}
if( linkMes.length == 0){ listSocial[1].style.display = 'none'; listSocial[0].style.width = '50%'; listSocial[2].style.width = '50%'}
if( linkTiktok.length == 0){ listSocial[2].style.display = 'none'; listSocial[0].style.width = '50%'; listSocial[1].style.width = '50%'}
  if( linkFb.length == 0 && linkMes.length == 0){listSocial[2].style.width = 'inherit';}
  if( linkMes.length == 0 && linkTiktok.length == 0){listSocial[0].style.width = 'inherit';}
  if( linkTiktok.length == 0 && linkFb.length == 0){listSocial[1].style.width = 'inherit';}
  
  CuongbokAvt.src = avt;
  CuongbokName.innerText = name;
  CuongbokNickname.innerText = nickname;
  CuongbokBio.innerText = bio;
  CuongbokLinkFb.href = linkFb;
  CuongbokLinkMes.href = linkMes;
  CuongbokLinkTiktok.href = linkTiktok;