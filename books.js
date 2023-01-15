//event listeners for images on hover to display text
let images = document.querySelectorAll(".container figure img");
images.forEach(images => {
  images.addEventListener("mouseover", event => {
    let imageHovered = document.querySelectorAll(".container figure img:hover");
    printText(imageHovered);
  });
});
images.forEach(images => {
  images.addEventListener("mouseleave", deleteText); // brackets after function means that the function is not called AFTER event listener
});


function deleteText() {
  document.getElementById("figcaption-space").textContent  = "";
}

// print text for different images
function printText(obj) {
  let imageID = obj[0].id;
  if (imageID == "kaz")
    {
      document.getElementById("figcaption-space").textContent = "Kaz Brekker is the leader of the Dregs - a well-known gang in Ketterdam. Known for being an increadibly skilled thief, he will always manage to get revenge on whoever does him harm, whatever the cost. As he has built his reputation, when people spot his infamous cane, they know they should turn the other way immediately.";
    }
  else if (imageID == "inej")
    {
      document.getElementById("figcaption-space").textContent  = "Inej Ghafa is a member of the Dregs, and is in fact their designated spy. Her stealth and quickness earned her the nickname 'The Wraith', and her bravery saves the gang multiple times throughout the duology.";
    }
  else if (imageID == "jesper")
    {
      document.getElementById("figcaption-space").textContent  = " Jesper Fahey is a sharpshooter and member of the Dregs, known for never missing a single shot. It is later revealed that he is a Fabrikator, thus explaining his outstanding aim. Though he is reluctant to accept this fact at first, he later learns to use it to his advantage.";
    }
  else if (imageID == "nina")
    {
      document.getElementById("figcaption-space").textContent = "Nina Zenik is a Grisha, specifically a Corporalnik. She was captured by the Fjerdan hunters, but managed to escape. Later, she was recruited by Kaz Brekker, and sacrifices herself by taking jurda parem, which has power-altering effects on her later on in the duology after her withdrawl.";
    }
  else if (imageID == "wylan")
    {
      document.getElementById("figcaption-space").textContent  = "Wylan Van Eck is recruited by Kaz as their designated 'bomb expert' and also created the map that allowed them to break into the Ice Court. Though underestimated at first, he proves himself to be an essential asset of the team throughout the duology.";
    }
  else if (imageID == "matthias")
    {
      document.getElementById("figcaption-space").textContent  = "Matthias Helvar used to be a prisoner in Hellgate, until he was broken out by Kaz and Nina. He was originally a druskelle, known for hunting innocent Grisha and imprisoning them, but his mindset slowly changes as the duology goes on, and he experiences great character development.";
    }
  else if (imageID == "scarlets")
    {
      document.getElementById("figcaption-space").textContent  = "The Scarlets, meant to stand in as the Capulets, consist of three main characters as well; Juliette Cai, daughter, and heir, of the Scarlet gang, Kathleen Lang, Juliette's cousin, and her twin, Rosalind Lang.";
    }
  else if (imageID == "whiteflowers")
    {
      document.getElementById("figcaption-space").textContent  = "The White Flowers, meant to stand in as the Montagues, consist of three main characters. Roma Montagov, the heir of The White Flowers, Benedikt Montagov, Roma's cousin, and their close friend, Marshall Seo.";
    }
  else if (imageID == "nico")
    {
      document.getElementById("figcaption-space").textContent  = "The first character we are introduced to is Nico De Varona. He is a physicist - can control matter and atoms - and secretly cares for the people he loves, even though he doesnt show it.";
    }
   else if (imageID == "libby")
    {
      document.getElementById("figcaption-space").textContent  = "Libby Rhodes, along with Nico, is a physicist, and definitely smarter than she looks. They attended the same university prior to being invited to the Alexandrian Society. Despite being stubborn at times, she manages to put aside her grudge against Nico and agree to work with him in an alliance of sorts.";
    }
   else if (imageID == "tristan")
    {
      document.getElementById("figcaption-space").textContent  = "Tristan Caine is supposed to be an illusionist. However, the Society pushes him to see that there is more to his power than simple illusion, but he will have to learn how to properly use it on his own.";
    }
   else if (imageID == "parisa")
    {
      document.getElementById("figcaption-space").textContent  = "Parisa Kamali is a Telepath, and a very skillful one at that. She knows how to not only use her power, but manipulate and weaken her targets in order to obtain the exact information she is looking for with minimal effort.";
    }
   else if (imageID == "reina")
    {
      document.getElementById("figcaption-space").textContent  = "Reina Mori is a Naturalist. Rather quiet, she prefers to keep to herself and is rather reluctant of her power, which makes her debate whether to accet the offer at first.";
    }
   else if (imageID == "callum")
    {
      document.getElementById("figcaption-space").textContent  = "Callum Nova is an Empath, which is ironic because he does not feel one bit of simpathy throughout the entire book. Though he is a well written character, he will get on your nerves very often in very little time.";
    }
   else
    {
      document.getElementById("figcaption-space").textContent  = "";
    }
}

// script to change the font weight and style of labels when pressed
//as well as appearence of submit button when all elements are checked
let question = document.querySelectorAll("input");
question.forEach(question => {
  question.addEventListener("click", event => {
    let array1 = document.querySelectorAll('input:checked');
     for (let i = 0; i < array1.length; i++) {
            array1[i].parentElement.style.fontWeight = "900";
            array1[i].parentElement.style.fontStyle = "italic";
          }
    if (array1.length == 5)
      {
        document.getElementById("book-button").style.display = "inline";
      }
    let array = document.querySelectorAll('input:not(:checked)');
      for (let i = 0; i < array.length; i++) {
        array[i].parentElement.style.fontWeight = "normal";
        array[i].parentElement.style.fontStyle = "normal";
            
      }
  });
});

// script that calculates the number of yes and no to display final result
let bookButton = document.getElementById("book-button");
bookButton.addEventListener("click", function(){
  let array1 = document.querySelectorAll('input:checked');
  let yes = 0;
  let no = 0;
  for (let i = 0; i < array1.length; i++)
    {
      if (array1[i].value == "yes")
        {
          yes++;
        }
      else
        {
          no++;
        }
    }
  if (yes > no)
    {
      document.getElementById("read").style.display = "block";
      document.getElementById("not-read").style.display = "none";
      document.getElementById("book-button").style.display = "none";
    }
  else
    {
      document.getElementById("not-read").style.display = "block";
      document.getElementById("read").style.display = "none";
      document.getElementById("book-button").style.display = "none";
    }
});
