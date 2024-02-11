let light =  document.querySelector('#light'),
dark = document.querySelector('#dark');

function darkMode(){
  document.documentElement.style.setProperty('--body','#111');
  document.documentElement.style.setProperty('--main','#f9ca24');
  document.documentElement.style.setProperty('--text','#eee');
  document.documentElement.style.setProperty('--heading','#fff');
  document.documentElement.style.setProperty('--icon','#000');
  document.documentElement.style.setProperty('--box','#333');
  document.documentElement.style.setProperty('--header','#1a1a1a');
}

function lightMode(){ 
  document.documentElement.style.setProperty('--body','#f6e6d6');
  document.documentElement.style.setProperty('--main','#E38528');
  document.documentElement.style.setProperty('--text','#333');
  document.documentElement.style.setProperty('--heading','#000');
  document.documentElement.style.setProperty('--icon','#000');
  document.documentElement.style.setProperty('--box','#fff');
  document.documentElement.style.setProperty('--header','#e0c7ad');
  }



light.onclick = () => {
light.classList.remove('show'),
light.classList.add('haid'),
dark.classList.add("show")
lightMode()
}  

dark.onclick = () => {
dark.classList.remove('show'),
dark.classList.add('haid'),
light.classList.add("show")
darkMode()
}  