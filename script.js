//loading page
let loadingPage = document.querySelector("#loading");

window.setTimeout(finishLoading, 1000);

function finishLoading()
{
  loadingPage.style.display = "none";  
}





//switch mode 
const modeButton = document.querySelector("header button");
const sun = "🌞";
const moon = "🌙";
const lightModeSheet = "styles/light_mode.css";
const darkModeSheet = "styles/dark_mode.css";
modeButton.addEventListener ("click", function(event){
  
  if (modeButton.textContent === moon)
    {
      document.getElementsByTagName("link")[0].href = lightModeSheet;
      modeButton.textContent = sun;
      sessionStorage.setItem(modeButton, sun);
    }
  else
    {
      document.getElementsByTagName("link")[0].href = darkModeSheet;
      modeButton.textContent = moon;
      sessionStorage.setItem(modeButton, moon);
    }
});

let modeText = sessionStorage.getItem(modeButton);

if (modeText === sun)
{
  document.getElementsByTagName("link")[0].href = lightModeSheet;
  modeButton.textContent = sun;
}
else
{
document.getElementsByTagName("link")[0].href = darkModeSheet;
modeButton.textContent = moon;
} 




//scrolling effect
const hidden_flyIn = document.querySelectorAll(".hidden-fly");

const fly_options = {
	threshold: 0.7,
	rootMargin: "0px",
}

const observer_fly = new IntersectionObserver (function(entries, observer_fly){
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.toggle("in");
		}
		else{
			entry.target.classList.remove("in");
		}
	});
}, fly_options);

hidden_flyIn.forEach(hidden_flyIn => {
	observer_fly.observe(hidden_flyIn);
});


const hidden_zoomIn = document.querySelectorAll(".hidden-zoom");

const zoom_options = {
	threshold: 0,
	rootMargin: "-49%",
}

const observer_zoom = new IntersectionObserver (function(entries, observer_zoom){
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.toggle("in");
		}
		else{
			entry.target.classList.remove("in");
		}
	});
}, zoom_options);

hidden_zoomIn.forEach(hidden_zoomIn => {
	observer_zoom.observe(hidden_zoomIn);
});