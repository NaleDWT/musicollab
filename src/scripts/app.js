console.info('coucou');

  //Sticky menu

  const nav = document.querySelector(".menu");
  const header = document.querySelector(".headcontainer");
  const sticky = nav.offsetTop;
  window.onscroll = function() {sticker()};
  function sticker() {
     if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky")
        header.classList.add("sticky")
     } else {
        nav.classList.remove("sticky");
        header.classList.remove("sticky");
     }
  }


  //tableau formulaire

  // Définition des questions et réponses
const questions = [
   {
     question: "De quel instrument joues-tu ?",
     responses: [
       "Guitare 20%",
       "Piano 15%",
       "Batterie 6%",
       "Basse 5%",
       "Trompette 4%",
       "Saxophone 1%",
       "Clarinette 1%",
       "Contrebasse 1%",
       "Instruments anciens 1%",
       "Euphonium 1%",
       "Autres 50%"
     ]
   },
   {
     question: "Comment t’organises-tu ?",
     responses: [
       "Ça dépend, je joue et aussi dirige dans plusieurs formations... les horaires de répétition sont fixes pour la plupart, sinon s'il faut préciser c'est un combo mail/sms/messenger, sachant que les plus âgés ne sont généralement pas adeptes des outils technologiques... pour les partitions, soit il y a un drive et les musiciens peuvent imprimer, soit il y en a un, en général le chef, qui s'occupe de tout.",
       "Bé c'est un peu vaste comme question. Avec le groupe, on se donne des rdv réguliers, souvent le même jour à peu près à la même heure chaque semaine. Et on ajuste en se parlant sur Whatsapp, ou pendant la répèt pour la répète suivante. Pour les partitions, on s'échange des fichiers GP, ... mais on fait aussi beaucoup à l'oreille, ou en enregistrant ce qu'on fait en répétition (pour s'en rappeler)",
       "Je me procure les partitions. Si il faut je les arranges et les retranscrits. Les horaires de cours sont fait en fonction de mes disponibilités et celles des professeurs. Les horaires sont rarement respectés, beaucoup de retard, très peu de temps. Beaucoup de frustration par rapport à cela. On disait l'exactitude est la politesse des rois , apparemment peu de personnes le savent ;-)",
       "Beaucoup de feuilles de paroles (pour le groupe, si elles sont pas dans l'ordre c'est la cata) et tous les autres morceaux pour les cours sont des partitions dans des fardes à chemises plastique (dans l'ordre, ouf)",
       "Conversation de groupe sur messenger, seul point commun entre nous tous. Horaires : soirs de semaine, on bosse tous. Pas de partitions, sauf exceptionnellement via recherche google (suffisant)."
     ]
   },
   {
     question: "Comment utilises-tu internet ou la technologie pour t'aider dans la musique ?",
     responses: [
       "Au niveau de l'apprentissage ou de la pratique musicale à proprement parler, je n'ai finalement recours à internet que dans de rares cas. Dans le cas de covers, je regarde parfois une vidéo lorsqu'un passage est particulièrement technique et ne peut pas forcément être facilement transcrit dans une tablature. Pour nos compositions, j'y ai surtout recours pour trouver des rimes pour l'écriture de textes en anglais (ou pour la correction de mes textes). J'utilise également Audacity (voir réponse suivante).",
       "écouter des groupes que je connais, en découvrir de nouveaux, faire des recherches sur telle ou telle danse (je joue beaucoup en bal folk), écouter des morceaux pour m'inspirer dans mes compositions, aller écouter le travail de tel ou tel musicien.ne, enregistrer sur Logic Pro, uploader sur soundcloud, faire une page facebook, un site internet pour mes projets, partager mes vidéos de concert , mes clips, etc.",
       "Ca va de l'écoute de nouveaux morceaux au décodage des lignes de guitare/basse, techniques vocales utilisées par les chanteurs, jusqu'à la recherche de partitions/tablatures, le visionnage de tutos youtube ou l'accès à des applications spécifiques. Je travaille aussi généralement en concert avec une tablette qui reprend les textes/grilles d'accords des morceaux que je joue (sauf exception).",
       "De temps en temps un tuto youtube pour la basse mais j'ai beaucoup appris par moi même. Musescore pour composer, pratique car il indique les tessitures des instruments. FL Studio pour enregistrer ou composer, avec carte son et micro statique, pour envoyer des audios à des élèves. Parfois on trouve des partitions librement sur internet aussi. J'oublie sûrement des choses.",
       "Je vais utiliser internet pour pouvoir jouer avec la musique en fond depuis chez moi. Ou alors télécharger des partitions pour pouvoir les jouer sur une tablette ou un PC",
       "Chercher des partitions (Google), écouter des versions (Spotify), trouver des bonnes idées (tutos Youtube), écrire des partitions (logiciels: Finale, Sibelius...), enregistrements (Audacity, Reaper...)",
     ]
   },
   {
      question: "Partages-tu des enregistrements avec d'autres musiciens ?",
      responses: [
        "Des vocaux jamais. Par contre des enregistrements très souvent. Durant chaque répète, je nous enregistre sur quelques morceaux afin de pouvoir nous réécouter et voir ce qu'il y a à améliorer. Je partage simplement les enregistrements avec le groupe via Whatsapp ou Signal.",
        "Drive commun au groupe, sinon soundcloud quand c’est un morceau ou 2, notre 1er album est disponible sur toutes les plateformes streaming (pour info, bandcamp est celle qui rémunère le mieux les artistes; spotify et consorts gardent presque tout pour eux…)",
        "Oui. Soit via YouTube, Facebook, Instagram ou encore via Dropbox pour les mettre en communs avec les autres musiciens des projets dans lesquels je suis actif.",
        "Oui des enregistrements de répétitions faits sur mon téléphone ou sur mon zoom. On les met sur un drive ou on se les envoie par whatsapp ou par mail.",
        "Notre chanteuse utilise son i-phone pour enregistrer et diffuser ; perso j'utilise un enregistreur numérique et j'envoie le fichier par mail.",
        "Oui, enregistrement sur ableton et transmis via messenger ou google drive",
        "Oui, mail, whatsapp ou wetransfer .. ça dépend de la taille !!!",
        "Oui via Messenger ou un cloud",
        "Oui sur Facebook, Messenger…"
      ]
    },
    {
      question: "Qu’est-ce que l’appli musicale parfaite ?",
      responses: [
        "Une application qui serait top, ce serait une application qui permette de partager avec les autres membres du groupe toutes les infos liées à son développement : les tablatures des chansons que nous jouons, les enregistrements audios et vidéos, le calendrier du groupe (dates de répètes, de concert), la liste de choses à faire pour la prochaine répète, un fil de discussion avec les membres, un inventaire du matériel à notre disposition (utile pour préparer un concert), etc. Et même pourquoi pas un réseau social de groupes de musique, sur le même modèle qu'un réseau social classique, sauf qu'il ne s'agit pas d'individus mais d'artistes. Cela permettrait d'améliorer la collaboration et les projets entre groupes amateurs ou semi-professionnels.",
        "Avoir une application avec la création de groupe possible, l'utilisation de sondage pour pouvoir avoir les disponibilité de chacun, avoir des musiques intégré à l'application (ou alors des liens vers les musiques), avoir des catégorie de musique ainsi que divers informations comme les compositeur des musiques ou peut-être une adresse de contact. Avoir la possibilité de voir les différents groupes et voir des vidéos ou bien des musiques que le groupe a fait.",
        "Avoir le tuto qui défile comme sur guitar hero avec les notes mais sans que j’ai à toucher mon téléphone ou ordi. En gros le piano serait relié au téléphone et on pourrait reculer la vidéo ou l’avancer au moment qui nous intéresse par commande vocale type « Alexa, remets la vidéo a 1m52 ». On pourrait aussi ajuster la vitesse de la vidéo, toujours par commande vocale.",
        "Ce serait bien un réseau social UNIQUEMENT dédiée au partage de partitions. Où on peut demander une partition avec des fichiers modifiables oar exemple. Et je dis bien UNIQUEMENT dédié à ça our qu'il ne dérive pas avec des réels ou je ne sais quels autres bêtises des réseaux sociaux actuels.",
        "Sans doute plein de trucs que d'autres font déjà, mais disons qu'il manque sans doute un grand site internet où TOUS les musiciens seraient inscrits et pourraient faire leur pub, actuellement c'est trop éparpillé entre plein de sites à mon sens.",
        "une plate forme d'accompagnement une fois avoir sonder le projet adapte un vrai parcours d' aide et de mise en actions pour avancer pas à pas dans le circuit.",
        "Envoyer via application les essais du jour, pouvoir organiser des répétitions partielles, échanger des partitions et faire un genre de dropbox."
      ]
    }
 ];
 
 // Variables de suivi de l'état actuel
 let currentQuestionIndex = 0;
 
 // Fonction pour mettre à jour l'affichage de la question et des réponses
 function updateQuestionAndAnswers() {
   const questionElement = document.getElementById("question");
   const answersElement = document.getElementById("answers");
   const currentQuestion = questions[currentQuestionIndex];
 
   questionElement.textContent = currentQuestion.question;

  answersElement.scrollTop = 0;
 
   // Supprimer toutes les réponses existantes
   while (answersElement.firstChild) {
     answersElement.removeChild(answersElement.firstChild);
   }
 
   // Ajouter les nouvelles réponses
   currentQuestion.responses.forEach(response => {
     const li = document.createElement("li");
     li.textContent = response;
     li.className = "formcontainer__rep";
     answersElement.appendChild(li);
   });

     // Mettre à jour la navigation des questions
  const questionNavItems = document.querySelectorAll(".formstates__el");

  questionNavItems.forEach((item, index) => {
    if (index === currentQuestionIndex) {
      item.classList.add("actif");
    } else {
      item.classList.remove("actif");
    }
  });
 }
 
 // Gestionnaire de clic pour le bouton "Suivant"
 document.getElementById("nextButton").addEventListener("click", function() {
   if (currentQuestionIndex < questions.length - 1) {
     currentQuestionIndex++;
     updateQuestionAndAnswers();
   }
 });
 
 // Gestionnaire de clic pour le bouton "Précédent"
 document.getElementById("backButton").addEventListener("click", function() {
   if (currentQuestionIndex > 0) {
     currentQuestionIndex--;
     updateQuestionAndAnswers();
   }
 });
 
 // Initialiser l'affichage avec la première question et ses réponses
 updateQuestionAndAnswers();


 //Animtation GSAP

 import { gsap } from "gsap";
 import { ScrollTrigger } from "gsap/ScrollTrigger";
 
 gsap.registerPlugin(ScrollTrigger);
 
 // Animation du SVG
 const vocalContainer = document.querySelector(".vocalcontainer");
 const vocals = document.querySelector(".vocalcontainer__vocals");
 
 gsap.to(vocals, {
   y: "-=180%",
   scrollTrigger: {
     trigger: vocalContainer,
     start: "top bottom-=10%",
     end: "bottom",
     scrub: true
   }
 });


 const screenOrange = document.querySelector("#screenOrange");
 const screenGrey = document.querySelector("#screenGrey");

 const sectionQuotidien = document.querySelector(".section--quotidien");
 
 
 const tl = gsap.timeline({
   repeat: -1,
 });
 
 tl.to(screenOrange, {
  scaleX: 0.7,
  duration: 1,
  delay: 0.5,
  transformOrigin: " right",
  ease: "power4",
})
tl.to(screenOrange, {
  scaleY: 1.5,
  duration: 1,
  delay: 0,
  transformOrigin: "bottom right",
  ease: "power4",
})
tl.to(screenOrange, {
  scaleX: 1,
  duration: 1,
  delay: 0.6,
  transformOrigin: "bottom right",
  ease: "power4",
})
tl.to(screenOrange, {
  scaleY: 1,
  duration: 1,
  delay: 0,
  transformOrigin: "bottom right",
  ease: "power4",
})



const tlGrey = gsap.timeline({
  repeat: -1,
});

tlGrey.to(screenGrey, {
 scaleX: 1.5,
 duration: 1,
 delay: 0.6,
 transformOrigin: " left",
 ease: "power4",
})
tlGrey.to(screenGrey, {
 scaleY: 0.6,
 duration: 1,
 delay: 0,
 transformOrigin: "bottom left",
 ease: "power4",
})
tlGrey.to(screenGrey, {
 scaleX: 1,
 duration: 1,
 delay: 0.5,
 transformOrigin: "bottom left",
 ease: "power4",
})
tlGrey.to(screenGrey, {
 scaleY: 1,
 duration: 1,
 delay: 0,
 transformOrigin: "bottom left",
 ease: "power4",
})



//faire tourner la nav


// Tableau des ID des potards
const potardIDs = ["potard1", "potard2", "potard3", "potard4", "potard5", "potard6"];

// Tableau des seuils de visibilité
const visibilityThresholds = [0.25, 0.25, 0.25, 0.25, 0.25, 0.25];

// Tableau pour stocker l'état des potards
const potardStates = {};

// Fonction pour effectuer la rotation d'un potard
function rotatePotard(potardID) {
  const potards = document.querySelectorAll(`#${potardID}`);
  potards.forEach((potard) => {
    gsap.to(potard, { rotation: 90, duration: 0.5 });
  });
  potardStates[potardID] = true;
}



// Fonction pour réinitialiser la position d'un potard
function resetPotardPosition(potardID) {
  const potards = document.querySelectorAll(`#${potardID}`);
  potards.forEach((potard) => {
    gsap.to(potard, { rotation: 0, duration: 0.5 });
  });
  potardStates[potardID] = false;
}

// Observer les sections correspondantes
const sectionHarmonie = document.querySelector('.section--harmonie');
const sectionAttaque = document.querySelector('.section--attaque');
const sectionSolution = document.querySelector('.section--solution');
const sectionConscience = document.querySelector('.section--conscience');
const sectionPassion = document.querySelector('.section--passion');

const sections = [sectionHarmonie, sectionAttaque, sectionQuotidien, sectionSolution, sectionConscience, sectionPassion];

// Fonction de gestion de la visibilité des sections
function handleSectionVisibility(entries) {
  entries.forEach((entry) => {
    const index = sections.indexOf(entry.target);
    const potardID = potardIDs[index];

    // Si la section atteint le seuil de visibilité
    if (entry.isIntersecting && entry.intersectionRatio >= visibilityThresholds[index]) {
      // Réinitialiser les potards
      potardIDs.forEach((id) => {
        if (id !== potardID && potardStates[id]) {
          resetPotardPosition(id);
        }
      });

      // Tourner les potards de la section active
      if (!potardStates[potardID]) {
        rotatePotard(potardID);
      }

      // Tourner les potards en double
      const potardDoubleID = potardID + "-double";
      if (!potardStates[potardDoubleID]) {
        rotatePotard(potardDoubleID);
      }
    } else if (!entry.isIntersecting && entry.intersectionRatio <= 0) {
      resetPotardPosition(potardID);
      const potardDoubleID = potardID + "-double";
      resetPotardPosition(potardDoubleID);
    }
  });
}

// Observer les sections
const observer = new IntersectionObserver(handleSectionVisibility, { threshold: visibilityThresholds });

sections.forEach((section) => {
  observer.observe(section);
});




const observere = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const h3Element = entry.target.querySelector('h3');

    if (entry.intersectionRatio >= 0.25) {
      // Lorsque la section atteint un quart de l'écran, définissez la variation de police à 700
      h3Element.style.fontVariationSettings = '"wght" 800';
    } else {
      // Sinon, définissez la variation de police à 200
      h3Element.style.fontVariationSettings = '"wght" 200';
    }
  });
}, { threshold: 0.25 });

// Parcourez toutes les sections et observez-les
sections.forEach(section => {
  observere.observe(section);
});




//Ancre modifiée

// Sélectionnez tous les liens d'ancrage
const listItems = document.querySelectorAll('li');

listItems.forEach((item, index) => {
  item.addEventListener('click', event => {
    event.preventDefault();

    const link = item.querySelector('a');
    if (link) {
      const targetId = link.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        let offset;
        if (index === 0) {
          offset = 55;
        } else {
          offset = 20;
        }

        const targetPosition = targetElement.offsetTop - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});






// pour lancer et splitter l'audio

const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');
const leftPlayer = document.getElementById('leftPlayer');
const rightPlayer = document.getElementById('rightPlayer');

let leftVolume = 0;
let rightVolume = 0;
let audioStarted = false;

function playAudio() {
  if (!audioStarted) {
    leftPlayer.play();
    rightPlayer.play();
    audioStarted = true;
  }
}

function toggleLeftVolume() {
  if (leftVolume === 0) {
    leftVolume = 1;
    rightVolume = 0;
  } else {
    leftVolume = 0;
  }
  leftPlayer.volume = leftVolume;
  rightPlayer.volume = rightVolume;
}

function toggleRightVolume() {
  if (rightVolume === 0) {
    rightVolume = 1;
    leftVolume = 0;
  } else {
    rightVolume = 0;
  }
  rightPlayer.volume = rightVolume;
  leftPlayer.volume = leftVolume;
}

leftButton.addEventListener('click', () => {
  toggleLeftVolume();
  playAudio();
});

rightButton.addEventListener('click', () => {
  toggleRightVolume();
  playAudio();
});





