const phrases = [
  "Putin e un patriot",
  "Cea mai prosperă afacere în lumea asta este industria calului",
  "Tot ce înseamnă nanocipuri, intră în tine ca într-un laptop",
  "5G este extrem de periculos pentru viața omului",
  "Nașterea prin cezariană este o tragedie",
  "Zic unii că a ajuns omul pe Lună, eu sunt sigur că nu a fost așa, este o altă manipulare",
  "Șansa României este înțelepciunea rusească",
  "Iar referitor la NATO, dacă lucrurile continuă în felul ăsta, evident că nu ne interesează, de ce să stai într-un club care nu acordă siguranță țării tale?",
  "Femeia are un alt rol în societate, nu de președinte, nu are cum să facă față",
  "Chimioterapia este un acid",
  "Oare apa este chiar H2O?",
  "Gaza se numește Gaza de la gaz",
  "Mihai Eminescu a fost cel mai periculos om după Iisus Hristos",
  "Pentru mine este o mare onoare că nu am intrat în Schengen",
  "Cine va construi prima conductă de apă din lume va câștiga... și asta poate să o facă Romania",
  "Locuitorii de pe Marshall Islands trăiau între 180 și 200 de ani înainte de prezența americanilor",
  "Tu nu ai cum să vorbești de Matrix dacă nu ai fost acolo",
  "Omul că să fie fericit ... este hrană apă energie",
  "Nu produc eolienele energie",
  "Eolienele au un efect foarte nociv secundar: Radiațiile!",
  "Omul nu are libertatea de a lucra unde vrea",
  "Am primit țara de la Dumnezeu prin puterea iubirii",
  "Vibrația cuvântului care duce la măreția omului de a fi demn",
  "România va face prima conductă de apă din lume",
  "Apa va fi pe primul loc, cucerim lumea",
  "În 2-3 ani petrolul va fi sub apă iar apa va fi măreață",
  "Noi în momentul ăsta putem să dăm șah-mat la tot ce există internațional",
  "Acum 2000 de ani Decebal a întrebat ... Ce facem?",
  "Toată lumea a acceptat că există covid. Nu există nimica, n-a fost văzut niciun virus",
  "Singura știință care există în lume este Iisus Hristos",
  "Lucian Blaga este unul din principalii interziși în România",
  "Pe mine mă interesează partea practică a lui Octavian Goga",
  "Pot să vă spun anumite lucruri dar nu pot să vă spun detalii",
  "Mihai Viteazu așa a zis: de-acum înainte așa va fi limba română!",
  "Îl cunosc pe Alexander Dughin. L-am cunoscut (..) o singură dată (..) cred că de două ori (..) cred că de trei ori.",
  "Europa astăzi își datorează libertatea poporului român",
  "Noi nu mai producem nimic",
  "Da! Nu iau întrebări!",
  "Sunt membru în biroul executiv al Clubului de la Roma",
  "Am lucrat cu guvernatorul BNR Mugur Isărescu",
  "Nu există est sau vest, există doar România",
  "Amintiți-vă de perioada... Eu îi spun plandemie",
  "Am trăit în Austria, Elveția. Nu ai ce să mănânci acolo",
  "E motiv de mare mândrie (că România are cei mai puțini vaccinați din Europa)",
  "Capitalismul este egal cu comunismul",
  "Poporul dac trăieşte acum pe altă vibraţie",
  "Văd și piramidele egiptene care încă nu au fost folosite",
  "Gripa aviară, gripa porcină... La fel ca și covidul: Niște minciuni!",
  "Acolo este informație. De aia-ți vine în PET de plastic, ca să nu mai fie informație",
  "Oamenii sunt într-un 'alfabetism' emoțional crunt",
  "Fiecare (om de pe planetă) strigă mi-e frică",
  "Planeta este înconjurată de energie (..) de geometrie sacră",
  "Poporul român este în primul rând distrus sufletește",
  "Vlad Țepeș nu a fost ceea ce au spus alții fals... A fost Vlad Dragul, pentru că le era drag poporului român",
  "Țăranul român nu vindea ca să aibă bani, vindea pentru că vedea bucuria în ochii tai",
  "Poporul român nu are puterea de a discerne binele de rău",
  "Lumea este condusă astăzi prin educație, care este o non-educație, este condusă prin medicină, alimente și media",
  "Exact cum a făcut Hristos: El ne-a condamnat la nemurire, noi l-am condamnat la moarte",
  "Nu a fost nicio revoluție",
  "Iisus Hristos a fost cel mai mare rebel,",
  "Schimbările climatice sunt absolut naturale și ele vin în mod special datorită soarelui",
  "În 2020 vor fi unul din trei sau din patru oameni bolnavi de cancer, faţă de câteva sute în 1960",
  "Sensul vieţii este să trăieşti",
  "Factorul determinant al universului – conştiinţa",
  "Universul este conștient",
  "Conştiinţa este misterul, miracolul universului, altarul pe care spiritul construieşte o viaţă demnă şi sacră",
  "Totul este energie, vibrație, undă, spirit",
  "Conştiinţa e legătura între microcosmos şi macrocosmos",
  "Materia este o iluzie pe care o trăim la scară umană",
  "Energia este manifestarea intenţiei universului faţă de noi",
  "Iubirea este o forţă cosmică care trece prin noi",
  "Universul este în armonie, toţi suntem o mare familie",
  "Ne naştem din iubire şi intrăm într-o cruntă manipulare",
  "Da (pentru armata obligatorie)",
  "Sunt mecanisme viclene create de societate și biserică, ca tu să nu știi cine ești",
  "De asta se tem toate religiile lumii: să afli cine ești",
  "Cea mai mare manipulare a lumii: principiul materiei",
  "Noi nu avem bănci românești",
  "Numai din deșeuri noi putem să trăim energetic",
  "Sunt sate... în care oamenii au un rinichi, celălalt l-au vândut.",
  "Am fost acuzat că mă sprijină pușcăriași, foști interlopi (..) Foarte bine! (..) Care e problema? Sunt onorat!",
  "Cânepa îți dă informație",
  "Mă gândesc așa la o pasăre, nu? Este foarte frumoasă, nu-i așa? Ați văzut-o că se duce la un salon de înfrumusețare?"
  ];

const sources = [
  "https://hotnews.ro/putin-e-un-patriot-a-spus-calin-georgescu-intr-un-interviu-acordat-zilele-acestea-presei-britanice-1850077",
  "https://youtu.be/bKkNCLUvcfg?si=e5Eea713ritYJzz2&t=1493",
  "https://www.youtube.com/watch?v=6O9EBawIQz4",
  "https://www.tiktok.com/@c0smey/video/7441558794770877718",
  "https://youtu.be/3U0ACLtXMJA?si=Lj6mspGyC2sE8vvt&t=133",
  "https://youtu.be/TOMcErkWalI?si=1Fclzfyd5kHyXvhN&t=791",
  "https://youtu.be/RcBjGlbg3xk?si=Fn4hZwaU99SomH-N&t=525",
  "https://youtu.be/RcBjGlbg3xk?si=mW5mtyMAEZispilD&t=545",
  "https://youtu.be/RcBjGlbg3xk?si=NFVbH0aRRfIP0c-p&t=650",
  "https://youtu.be/zlo5oq8XMT8?si=9AR6vYXiPgemadqw&t=1804",
  "https://youtu.be/TOMcErkWalI?si=0137WPZ_Zy0j-Aq5&t=2272",
  "https://www.tiktok.com/@efectiv_momente/video/7442667549663186208",
  "https://www.youtube.com/watch?v=ICokxk9hsxo",
  "https://www.tiktok.com/@releveumirceanudoarme/video/7441277819197443350",
  "https://youtu.be/CyzowI3iyBk?feature=shared&t=2710",
  "https://www.youtube.com/watch?v=ctwNUYShvL0&t=1964s",
  "https://youtu.be/wF8YQCAyu9w?si=D5x7-J3whGcYLyc3&t=429",
  "https://youtu.be/wF8YQCAyu9w?si=qAVoC4kgn_jYP5I6&t=886",
  "https://youtu.be/wF8YQCAyu9w?si=ThfwffLo_k3hJWT2&t=903",
  "https://youtu.be/wF8YQCAyu9w?si=WZWN1TYkhSfBSG38&t=964",
  "https://youtu.be/wF8YQCAyu9w?si=tTCj9PtgX6VBqP_c&t=1489",
  "https://youtu.be/CyzowI3iyBk?si=k_vNnkigatbWUgv9&t=1025",
  "https://youtu.be/CyzowI3iyBk?si=AGHZ_qzuXr_Ci_Pf&t=2565",
  "https://youtu.be/CyzowI3iyBk?si=81taI61F1bL6k--8&t=2707",
  "https://youtu.be/CyzowI3iyBk?si=81taI61F1bL6k--8&t=2707",
  "https://youtu.be/CyzowI3iyBk?si=81taI61F1bL6k--8&t=2707",
  "https://youtu.be/cd6lf1aWyi4?si=PNW22DEdMQ9x9-oz&t=947",
  "https://youtu.be/cd6lf1aWyi4?si=PRlCSxCrSj5v0PG5&t=1833",
  "https://youtu.be/cd6lf1aWyi4?si=j8tz5zmVaO29yLOK&t=2069",
  "https://youtu.be/cd6lf1aWyi4?si=eA_rgJeI3YkW0aLx&t=2123",
  "https://youtu.be/cd6lf1aWyi4?si=OGotuhFvLTs6pV5W&t=2880",
  "https://youtu.be/cd6lf1aWyi4?si=t1gtNbnfuoi9iyeU&t=2917",
  "https://youtu.be/cd6lf1aWyi4?si=YrK35CI6yWQYKS7e&t=4553",
  "https://youtu.be/cd6lf1aWyi4?si=0coojP6azePJ_3Re&t=7044",
  "https://youtu.be/cd6lf1aWyi4?si=MTlWFUEcbMUO6Goj&t=7578",
  "https://youtu.be/ymKBqMVbr7E?si=rD_xCveCPT41lCM6&t=253",
  "https://youtu.be/ymKBqMVbr7E?si=3Ro6VLQeUWnNrTu-&t=612",
  "https://youtu.be/4hMneWJtV1k?si=Je6olWnnJ5dW-cH3&t=60",
  "https://youtu.be/hO87q1sZQZg?si=XMlRm-Kw-2ETJUHv&t=279",
  "https://youtu.be/hO87q1sZQZg?si=WgmpDLbzW8WSd5I1&t=255",
  "https://www.youtube.com/live/RxGECqaAeFg?si=KTfJdlwLVdC8D68Y&t=337",
  "https://youtu.be/wF8YQCAyu9w?si=tlQscobZAcdGot3T&t=525",
  "https://youtu.be/wF8YQCAyu9w?si=6CFogdpW8TUqQpla&t=512",
  "https://youtu.be/wF8YQCAyu9w?si=XuUQZYuAy2NhVwCo&t=546",
  "https://youtu.be/wF8YQCAyu9w?si=DKp4IEMqJ9oy5GZ0&t=2286",
  "https://web.archive.org/web/20170707100717/https://www.argumentesifapte.ro/2017/07/03/haplea-vorbeste-la-universitatea-de-vest/",
  "https://youtu.be/H44CS5KVA8g?si=KH5EroI0tem9aN4q&t=906",
  "https://youtu.be/TOMcErkWalI?si=AtkYU0y6C_9gGnPW&t=2127",
  "https://youtu.be/TOMcErkWalI?si=KrsP7MS26DJflzJ0&t=2285",
  "https://youtu.be/ClHCAX2Y5ik?si=dLLsf9gGHBl81GKh&t=138",
  "https://youtu.be/ClHCAX2Y5ik?si=-ayU9COaSyFyWodR&t=182",
  "https://youtu.be/ClHCAX2Y5ik?si=oTHILtGgB5yoc5AB&t=332",
  "https://youtu.be/ClHCAX2Y5ik?si=hBgVVdUDs7Agj_aG&t=794",
  "https://youtu.be/9jBchoCHN0o?si=kp03No7BmEbFhRKm&t=266",
  "https://youtu.be/ClHCAX2Y5ik?si=71fcZPfwdu1c0bUR&t=962",
  "https://youtu.be/ClHCAX2Y5ik?si=FeL0l7KRWoKgI7WM&t=1140",
  "https://youtu.be/ClHCAX2Y5ik?si=UHgWkAOc5mLEA59G&t=1373",
  "https://youtu.be/ClHCAX2Y5ik?si=2AX13s7evIblSa3z&t=1475",
  "https://youtu.be/vJlAh0zz3LA?si=lGbaj5PlkGIleyof&t=1871",
  "https://youtu.be/vJlAh0zz3LA?si=wSck8V7-ASLt1Rp5&t=1904",
  "https://youtu.be/QHyEdqyXrM0?si=-Kus3x4o2OSSv11e&t=906",
  "https://youtu.be/zlo5oq8XMT8?si=tQMtB9EAPumc4yly&t=1764",
  "https://youtu.be/zlo5oq8XMT8?si=gJzem95fJVFVgoGs&t=90",
  "https://youtu.be/zlo5oq8XMT8?si=OlWa-aTDNb7tFGo6&t=287",
  "https://youtu.be/zlo5oq8XMT8?si=Wz8zH9vU4Sh4h_He&t=303",
  "https://youtu.be/zlo5oq8XMT8?si=wUGEhTputCkC8b6x&t=338",
  "https://youtu.be/zlo5oq8XMT8?si=Fq3XSkWniclR6rkB&t=362",
  "https://youtu.be/zlo5oq8XMT8?si=wUGEhTputCkC8b6x&t=338",
  "https://youtu.be/zlo5oq8XMT8?si=Ixay3-5QdGCrNBO6&t=397",
  "https://youtu.be/zlo5oq8XMT8?si=N2B_E1hNKhj1cVUO&t=400",
  "https://youtu.be/zlo5oq8XMT8?si=N2B_E1hNKhj1cVUO&t=420",
  "https://youtu.be/zlo5oq8XMT8?si=XJGL-Crfo_Sd9hHY&t=448",
  "https://youtu.be/zlo5oq8XMT8?si=ke1afx98yUL3rrtx&t=1027",
  "https://www.youtube.com/shorts/gQ93c40U5q4",
  "https://youtu.be/zlo5oq8XMT8?si=EXh52EqAiST1xJDt&t=1294",
  "https://youtu.be/zlo5oq8XMT8?si=j-Dhey1cV690_ow_&t=1306",
  "https://youtu.be/zlo5oq8XMT8?si=QHG5DtIX5IXdCobz&t=1687",
  "https://youtu.be/1NwlV8xQSzM?si=HXmiF4x-61VjkzQ-&t=1924",
  "https://youtu.be/1NwlV8xQSzM?si=QwIE4Z3v6FHNvasM&t=2037",
  "https://youtu.be/1NwlV8xQSzM?si=LkF4yfV4iEgz08R_&t=1512",
  "https://youtu.be/1NwlV8xQSzM?si=EEdH1g8bSNHeRZ_D&t=2785",
  "https://www.facebook.com/watch/?v=1109736524230228&t=21",
  "https://www.youtube.com/watch?v=h2l9mGKRlfA"
];

// Function to generate a random phrase
function generatePhrase() {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  const phraseBox = document.getElementById("phraseBox");
  phraseBox.textContent = phrases[randomIndex];
  phraseBox.setAttribute('data-source', sources[randomIndex]); // Set source link as a custom data attribute
}

// Function to open the source link
function openSource() {
  const phraseBox = document.getElementById("phraseBox");
  const source = phraseBox.getAttribute('data-source');

  // Track phrase click event
  gtag('event', 'phrase_click', {
    event_category: 'interaction',
    event_label: 'Phrase Click/Popout',
  });

  if (source) {
    window.open(source, '_blank'); // Open the source in a new tab
  }
}

function trackButtonClick() {
  gtag('event', 'button_click', {
    event_category: 'interaction',
    event_label: 'Generate New Phrase Button',
  });
}

// Verifică dacă utilizatorul a acceptat cookie-urile
function checkCookies() {
  const cookiesAccepted = localStorage.getItem('cookiesAccepted');
  if (!cookiesAccepted) {
    document.getElementById('cookieBanner').style.display = 'block';
  }
}

// Salvează preferința utilizatorului și ascunde bannerul
function acceptCookies() {
  localStorage.setItem('cookiesAccepted', 'true');
  document.getElementById('cookieBanner').style.display = 'none';
}

// Rulează funcțiile la încărcarea paginii
window.onload = function() {
  generatePhrase();
  checkCookies();
};