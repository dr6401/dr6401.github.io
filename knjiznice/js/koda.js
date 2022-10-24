const TEACHING_API_BAZA = "dr6401";
const SENSEI_RACUN = "TO SPREMENITE NA VAŠ JAVNI KLJUČ (NASLOV DENARNICE)";

let SENSEI_BC_RPC_URL = "https://sensei.lavbic.net:8546";
let TEACHING_API_BASE_URL =
  "https://teaching.lavbic.net/api/OIS/baza/" + TEACHING_API_BAZA + "/podatki/";

/**
 * Generator podatkov za novega uporabnika, ki bo uporabljal aplikacijo. Pri
 * generiranju podatkov je potrebno najprej kreirati nov scenarij s specifičnimi
 * podatki, ki se nanašajo na scenarij.
 *
 * @param stScenarija zaporedna številka scenarija (1, 2 ali 3)
 * @return scenarijId generiranega scenarija
 */
//Funkcije "scenarijo1","scenarijo2" in "scenarijo3" predstavljajo funkcijo generirajScenarij(stScenarija)*
function scenarijo1(){
  noviID = "1ST-CASE";
    var podatki = {
      ime: "Lojze",
      priimek: "Primanič",
      starost: "34",
      preference: {
        jeVerna: "",
        jePoliticna: "political",
        jeRasisticna: "",
        jeSeksisticna: "",
        jeEksplicitna: "explicit",
        jeNSFW: "",
      
        jeProgramerska: "Programming",
        jeTemniHumor: "",
        jeBesednaIgra: "",
        jeStrasljiva: "",
        jeBozicna: "",
      
        jeKategorijaSale: "Programming",
        jeDolzinaSale: "single"
        }
    }
    
    
    console.log(podatki);
$.ajax({
  url: TEACHING_API_BASE_URL + "azuriraj?kljuc=" + noviID + "&elementTable=false",
  type: "PUT",
  contentType: "application/json",
  data: JSON.stringify(podatki),
  success: function(data){
    $("#kreirajSporocilo").html(
      "<div class='alert alert-success alert-dismissible fade show mt-3 mb-0'>" +
        "Uspešno kreiran Racun <b>" +
        noviID +
        "</b>." +
        "<button type='button' class='btn-close' data-bs-dismiss='alert'></button>" +
        "</div>" 
    );
    console.log("PUT SUCCESSFUL!")
  }

})
$.ajax({
  url: "https://teaching.lavbic.net/api/OIS/baza/dr6401/podatki/vrni/1ST-CASE",
  type: "GET",
  contentType: "application/json",
  data: JSON.stringify(podatki),
  success: function(data){
    $("#kreirajIme").html(
      "<div class='alert alert-success alert-dismissible fade show mt-3 mb-0'>" +
        podatki.ime +
        "</b>." +
        "<button type='button' class='btn-close' data-bs-dismiss='alert'></button>" +
        "</div>" + 
        console.log("GET SUCCESSFUL!")
    );

    var jeVerna = "";
    var salaJeVerna = false;
    var jePoliticna = "political";
    var salaJePoliticna = true
    var jeRasisticna = "";
    var salaJeRasisticna = false
    var jeSeksisticna = "";
    var salaJeSeksisticna = false
    var jeEksplicitna = "explicit";
    var salaJeEksplicitna = true
    var jeNSFW = ""
    var salaJeNSFW = false
    
    var jeProgramerska = "Programming"
    var salaJeProgramerska = true
    var jeTemniHumor = "";
    var salaJeTemniHumor = false
    var jeBesednaIgra = "";
    var salaJeBesednaIgra = false
    var jeStrasljiva = "";
    var salaJeStrasljiva = false
    var jeBozicna = "";
    var salaJeBozicna = false
    
    var salaKategorija = "Programming"
    var salaJeDolzina = "single"
    var lahkoGeneriram = false;
    var jeDolzinaSale = "single"
    var jeKategorijaSale = "Programming"
    var dolgaSala = document.querySelector("#lcodeSelect")



    if (jeVerna == "religious"){
      if (salaJeVerna == false){
    document.querySelector("#blf-cb1").click();
    console.log("Verna Je prizgana")
  }
  }
  if (jeVerna == ""){
    if (salaJeVerna == true){
      document.querySelector("#blf-cb1").click();
    console.log("Verna je ugasnjena")
    }
  }

  if (jePoliticna == "political"){
      if (salaJePoliticna == false){
    document.querySelector("#blf-cb2").click();
    console.log("Politicna Je prizgana")
  }
  }
  if (jePoliticna == ""){
    if (salaJePoliticna == true){
      document.querySelector("#blf-cb2").click();
    console.log("Politicna je ugasnjena")
    }
  }

  if (jeRasisticna == "racist"){
      if (salaJeRasisticna == false){
    document.querySelector("#blf-cb3").click();
    console.log("Rasisticna Je prizgana")
  }
  }
  if (jeRasisticna == ""){
    if (salaJeRasisticna == true){
      document.querySelector("#blf-cb3").click();
    console.log("Rasisticna je ugasnjena")
    }
  }

    if (jeSeksisticna == "sexist"){
      if (salaJeSeksisticna == false){
    document.querySelector("#blf-cb4").click();
    console.log("Seksisticna Je prizgana")
  }
  }
  if (jeSeksisticna == ""){
    if (salaJeSeksisticna == true){
      document.querySelector("#blf-cb4").click();
    console.log("Seksisticna je ugasnjena")
    }
  }

    if (jeEksplicitna == "explicit"){
      if (salaJeEksplicitna == false){
    document.querySelector("#blf-cb5").click();
    console.log("Eksplicitna Je prizgana")
  }
  }
  if (jeEksplicitna == ""){
    if (salaJeEksplicitna == true){
      document.querySelector("#blf-cb5").click();
    console.log("Eksplicitna je ugasnjena")
    }
  }

  if (jeNSFW == "nfsw"){
    if (salaJeNSFW == false){
  document.querySelector("#blf-cb6").click();
  console.log("NSFW Je prizgana")
}
}
if (jeNSFW == ""){
  if (salaJeNSFW == true){
    document.querySelector("#blf-cb6").click();
  console.log("NSFW je ugasnjena")
  }
}

  //KATEGORIJE
if (jeKategorijaSale == "Programming"){
  document.querySelector("#programGumb").click();
  reRenderProgramerska();
  //console.log("kategorija je" + jeKategorijaSaleObjekt)
}
if (jeKategorijaSale == "Dark"){
  document.querySelector("#temniHumorGumb").click();
  reRenderTemniHumor();
  //console.log("kategorija je" + jeKategorijaSaleObjekt)
}
if (jeKategorijaSale == "Pun"){
  document.querySelector("#besednaIgraGumb").click();
  reRenderBesednaIgra();
 // console.log("kategorija je" + jeKategorijaSaleObjekt)
}
if (jeKategorijaSale == "Spooky"){
  document.querySelector("#strasljivaGumb").click();
  reRenderStrasljiva();
 // console.log("kategorija je" + jeKategorijaSaleObjekt)
}
if (jeKategorijaSale == "Christmas"){
  document.querySelector("#bozicnaGumb").click();
  reRenderBozicna();
  //console.log("kategorija je" + jeKategorijaSaleObjekt)
}
if (jeKategorijaSale == "Any"){
  document.querySelector("#katerakoliGumb").click();
  reRenderAny();
 // console.log("kategorija je" + jeKategorijaSaleObjekt)
}

if(jeDolzinaSale == "single"){
  document.querySelector("#lcodeSelect").click();
  dolgaSala.selectedIndex = 1;
}
if(jeDolzinaSale == "twopart"){
  document.querySelector("#lcodeSelect").click();
  dolgaSala.selectedIndex = 2;
}
if(jeDolzinaSale == "0"){
  document.querySelector("#lcodeSelect").click();
  dolgaSala.selectedIndex = 0;
}


    document.querySelector("#blf-cb2").click();
    console.log("Politična je prižgana")
    document.querySelector("#blf-cb5").click();
    console.log("Eksplicitna Je prizgana")
    reRenderProgramerska();
    
    document.querySelector("#kreirajIme").value = "Lojze"
    document.querySelector("#kreirajPriimek").value = "Primanič"
    document.querySelector("#kreirajStarost").value = "34"

    document.querySelector("#mojID").value = "1ST-CASE"
  }

}


)
}


function scenarijo2(){
  noviID = "2ND-CASE";
    var podatki = {
      ime: "Ana",
      priimek: "Kljun",
      starost: "47",
      preference: {
        jeVerna: "religious",
        jePoliticna: "political",
        jeRasisticna: "",
        jeSeksisticna: "sexist",
        jeEksplicitna: "explicit",
        jeNSFW: "",
      
        jeProgramerska: "",
        jeTemniHumor: "Dark",
        jeBesednaIgra: "",
        jeStrasljiva: "",
        jeBozicna: "",
      
        jeKategorijaSale: "Dark",
        jeDolzinaSale: "twopart"
        }
    }
    
    
    console.log(podatki);
$.ajax({
  url: TEACHING_API_BASE_URL + "azuriraj?kljuc=" + noviID + "&elementTable=false",
  type: "PUT",
  contentType: "application/json",
  data: JSON.stringify(podatki),
  success: function(data){
    $("#kreirajSporocilo").html(
      "<div class='alert alert-success alert-dismissible fade show mt-3 mb-0'>" +
        "Uspešno kreiran Racun <b>" +
        noviID +
        "</b>." +
        "<button type='button' class='btn-close' data-bs-dismiss='alert'></button>" +
        "</div>" 
    );
    console.log("PUT SUCCESSFUL!")
  }

})
$.ajax({
  url: "https://teaching.lavbic.net/api/OIS/baza/dr6401/podatki/vrni/2ND-CASE",
  type: "GET",
  contentType: "application/json",
  data: JSON.stringify(podatki),
  success: function(data){
    $("#kreirajIme").html(
      "<div class='alert alert-success alert-dismissible fade show mt-3 mb-0'>" +
        podatki.ime +
        "</b>." +
        "<button type='button' class='btn-close' data-bs-dismiss='alert'></button>" +
        "</div>" + 
        console.log("GET SUCCESSFUL!")
    );

    var jeVerna = "religious";
    var salaJeVerna = true;
    var jePoliticna = "political";
    var salaJePoliticna = true
    var jeRasisticna = "";
    var salaJeRasisticna = false
    var jeSeksisticna = "sexist";
    var salaJeSeksisticna = true
    var jeEksplicitna = "explicit";
    var salaJeEksplicitna = true
    var jeNSFW = ""
    var salaJeNSFW = false
    
    var jeProgramerska = ""
    var salaJeProgramerska = false
    var jeTemniHumor = "Dark";
    var salaJeTemniHumor = true
    var jeBesednaIgra = "";
    var salaJeBesednaIgra = false
    var jeStrasljiva = "";
    var salaJeStrasljiva = false
    var jeBozicna = "";
    var salaJeBozicna = false
    
    var salaKategorija = "Dark"
    var salaJeDolzina = "twopart"
    var lahkoGeneriram = false;
    var jeDolzinaSale = "twopart"
    var jeKategorijaSale = "Dark"
    var dolgaSala = document.querySelector("#lcodeSelect")



    if (jeVerna == "religious"){
      if (salaJeVerna == false){
    document.querySelector("#blf-cb1").click();
    console.log("Verna Je prizgana")
  }
  }
  if (jeVerna == ""){
    if (salaJeVerna == true){
      document.querySelector("#blf-cb1").click();
    console.log("Verna je ugasnjena")
    }
  }

  if (jePoliticna == "political"){
      if (salaJePoliticna == false){
    document.querySelector("#blf-cb2").click();
    console.log("Politicna Je prizgana")
  }
  }
  if (jePoliticna == ""){
    if (salaJePoliticna == true){
      document.querySelector("#blf-cb2").click();
    console.log("Politicna je ugasnjena")
    }
  }

  if (jeRasisticna == "racist"){
      if (salaJeRasisticna == false){
    document.querySelector("#blf-cb3").click();
    console.log("Rasisticna Je prizgana")
  }
  }
  if (jeRasisticna == ""){
    if (salaJeRasisticna == true){
      document.querySelector("#blf-cb3").click();
    console.log("Rasisticna je ugasnjena")
    }
  }

    if (jeSeksisticna == "sexist"){
      if (salaJeSeksisticna == false){
    document.querySelector("#blf-cb4").click();
    console.log("Seksisticna Je prizgana")
  }
  }
  if (jeSeksisticna == ""){
    if (salaJeSeksisticna == true){
      document.querySelector("#blf-cb4").click();
    console.log("Seksisticna je ugasnjena")
    }
  }

    if (jeEksplicitna == "explicit"){
      if (salaJeEksplicitna == false){
    document.querySelector("#blf-cb5").click();
    console.log("Eksplicitna Je prizgana")
  }
  }
  if (jeEksplicitna == ""){
    if (salaJeEksplicitna == true){
      document.querySelector("#blf-cb5").click();
    console.log("Eksplicitna je ugasnjena")
    }
  }

  if (jeNSFW == "nfsw"){
    if (salaJeNSFW == false){
  document.querySelector("#blf-cb6").click();
  console.log("NSFW Je prizgana")
}
}
if (jeNSFW == ""){
  if (salaJeNSFW == true){
    document.querySelector("#blf-cb6").click();
  console.log("NSFW je ugasnjena")
  }
}

  //KATEGORIJE
if (jeKategorijaSale == "Programming"){
  document.querySelector("#programGumb").click();
  reRenderProgramerska();
  //console.log("kategorija je" + jeKategorijaSaleObjekt)
}
if (jeKategorijaSale == "Dark"){
  document.querySelector("#temniHumorGumb").click();
  reRenderTemniHumor();
  //console.log("kategorija je" + jeKategorijaSaleObjekt)
}
if (jeKategorijaSale == "Pun"){
  document.querySelector("#besednaIgraGumb").click();
  reRenderBesednaIgra();
 // console.log("kategorija je" + jeKategorijaSaleObjekt)
}
if (jeKategorijaSale == "Spooky"){
  document.querySelector("#strasljivaGumb").click();
  reRenderStrasljiva();
 // console.log("kategorija je" + jeKategorijaSaleObjekt)
}
if (jeKategorijaSale == "Christmas"){
  document.querySelector("#bozicnaGumb").click();
  reRenderBozicna();
  //console.log("kategorija je" + jeKategorijaSaleObjekt)
}
if (jeKategorijaSale == "Any"){
  document.querySelector("#katerakoliGumb").click();
  reRenderAny();
 // console.log("kategorija je" + jeKategorijaSaleObjekt)
}

if(jeDolzinaSale == "single"){
  document.querySelector("#lcodeSelect").click();
  dolgaSala.selectedIndex = 1;
}
if(jeDolzinaSale == "twopart"){
  document.querySelector("#lcodeSelect").click();
  dolgaSala.selectedIndex = 2;
}
if(jeDolzinaSale == "0"){
  document.querySelector("#lcodeSelect").click();
  dolgaSala.selectedIndex = 0;
}


    document.querySelector("#blf-cb2").click();
    console.log("Politična je prižgana")
    document.querySelector("#blf-cb5").click();
    console.log("Eksplicitna Je prizgana")
    document.querySelector("#blf-cb1").click();
    console.log("Verna Je prizgana")
    document.querySelector("#blf-cb4").click();
    console.log("Seksisticna je ugasnjena")
    document.querySelector("#temniHumorGumb").click();
    reRenderTemniHumor();

    document.querySelector("#kreirajIme").value = "Ana"
    document.querySelector("#kreirajPriimek").value = "Kljun"
    document.querySelector("#kreirajStarost").value = "47"

    document.querySelector("#mojID").value = "2ND-CASE"
  }

}


)
}

function scenarijo3(){
  noviID = "3RD-CASE";
    var podatki = {
      ime: "Branko",
      priimek: "Kralj",
      starost: "18",
      preference: {
        jeVerna: "",
        jePoliticna: "",
        jeRasisticna: "racist",
        jeSeksisticna: "",
        jeEksplicitna: "explicit",
        jeNSFW: "nsfw",
      
        jeProgramerska: "",
        jeTemniHumor: "",
        jeBesednaIgra: "Pun",
        jeStrasljiva: "",
        jeBozicna: "",
      
        jeKategorijaSale: "Pun",
        jeDolzinaSale: "single"
        }
    }
    
    
    console.log(podatki);
$.ajax({
  url: TEACHING_API_BASE_URL + "azuriraj?kljuc=" + noviID + "&elementTable=false",
  type: "PUT",
  contentType: "application/json",
  data: JSON.stringify(podatki),
  success: function(data){
    $("#kreirajSporocilo").html(
      "<div class='alert alert-success alert-dismissible fade show mt-3 mb-0'>" +
        "Uspešno kreiran Racun <b>" +
        noviID +
        "</b>." +
        "<button type='button' class='btn-close' data-bs-dismiss='alert'></button>" +
        "</div>" 
    );
    console.log("PUT SUCCESSFUL!")
  }

})
$.ajax({
  url: "https://teaching.lavbic.net/api/OIS/baza/dr6401/podatki/vrni/3RD-CASE",
  type: "GET",
  contentType: "application/json",
  data: JSON.stringify(podatki),
  success: function(data){
    $("#kreirajIme").html(
      "<div class='alert alert-success alert-dismissible fade show mt-3 mb-0'>" +
        podatki.ime +
        "</b>." +
        "<button type='button' class='btn-close' data-bs-dismiss='alert'></button>" +
        "</div>" + 
        console.log("GET SUCCESSFUL!")
    );

    var jeVerna = "";
    var salaJeVerna = false;
    var jePoliticna = "";
    var salaJePoliticna = false
    var jeRasisticna = "racist";
    var salaJeRasisticna = true
    var jeSeksisticna = "";
    var salaJeSeksisticna = false
    var jeEksplicitna = "explicit";
    var salaJeEksplicitna = true
    var jeNSFW = "nfsw"
    var salaJeNSFW = true
    
    var jeProgramerska = ""
    var salaJeProgramerska = false
    var jeTemniHumor = "";
    var salaJeTemniHumor = false
    var jeBesednaIgra = "Pun";
    var salaJeBesednaIgra = true
    var jeStrasljiva = "";
    var salaJeStrasljiva = false
    var jeBozicna = "";
    var salaJeBozicna = false
    
    var salaKategorija = "Pun"
    var salaJeDolzina = "single"
    var lahkoGeneriram = false;
    var jeDolzinaSale = "single"
    var jeKategorijaSale = "Pun"
    var dolgaSala = document.querySelector("#lcodeSelect")



    if (jeVerna == "religious"){
      if (salaJeVerna == false){
    document.querySelector("#blf-cb1").click();
    console.log("Verna Je prizgana")
  }
  }
  if (jeVerna == ""){
    if (salaJeVerna == true){
      document.querySelector("#blf-cb1").click();
    console.log("Verna je ugasnjena")
    }
  }

  if (jePoliticna == "political"){
      if (salaJePoliticna == false){
    document.querySelector("#blf-cb2").click();
    console.log("Politicna Je prizgana")
  }
  }
  if (jePoliticna == ""){
    if (salaJePoliticna == true){
      document.querySelector("#blf-cb2").click();
    console.log("Politicna je ugasnjena")
    }
  }

  if (jeRasisticna == "racist"){
      if (salaJeRasisticna == false){
    document.querySelector("#blf-cb3").click();
    console.log("Rasisticna Je prizgana")
  }
  }
  if (jeRasisticna == ""){
    if (salaJeRasisticna == true){
      document.querySelector("#blf-cb3").click();
    console.log("Rasisticna je ugasnjena")
    }
  }

    if (jeSeksisticna == "sexist"){
      if (salaJeSeksisticna == false){
    document.querySelector("#blf-cb4").click();
    console.log("Seksisticna Je prizgana")
  }
  }
  if (jeSeksisticna == ""){
    if (salaJeSeksisticna == true){
      document.querySelector("#blf-cb4").click();
    console.log("Seksisticna je ugasnjena")
    }
  }

    if (jeEksplicitna == "explicit"){
      if (salaJeEksplicitna == false){
    document.querySelector("#blf-cb5").click();
    console.log("Eksplicitna Je prizgana")
  }
  }
  if (jeEksplicitna == ""){
    if (salaJeEksplicitna == true){
      document.querySelector("#blf-cb5").click();
    console.log("Eksplicitna je ugasnjena")
    }
  }

  if (jeNSFW == "nfsw"){
    if (salaJeNSFW == false){
  document.querySelector("#blf-cb6").click();
  console.log("NSFW Je prizgana")
}
}
if (jeNSFW == ""){
  if (salaJeNSFW == true){
    document.querySelector("#blf-cb6").click();
  console.log("NSFW je ugasnjena")
  }
}

  //KATEGORIJE
if (jeKategorijaSale == "Programming"){
  document.querySelector("#programGumb").click();
  reRenderProgramerska();
  //console.log("kategorija je" + jeKategorijaSaleObjekt)
}
if (jeKategorijaSale == "Dark"){
  document.querySelector("#temniHumorGumb").click();
  reRenderTemniHumor();
  //console.log("kategorija je" + jeKategorijaSaleObjekt)
}
if (jeKategorijaSale == "Pun"){
  document.querySelector("#besednaIgraGumb").click();
  reRenderBesednaIgra();
 // console.log("kategorija je" + jeKategorijaSaleObjekt)
}
if (jeKategorijaSale == "Spooky"){
  document.querySelector("#strasljivaGumb").click();
  reRenderStrasljiva();
 // console.log("kategorija je" + jeKategorijaSaleObjekt)
}
if (jeKategorijaSale == "Christmas"){
  document.querySelector("#bozicnaGumb").click();
  reRenderBozicna();
  //console.log("kategorija je" + jeKategorijaSaleObjekt)
}
if (jeKategorijaSale == "Any"){
  document.querySelector("#katerakoliGumb").click();
  reRenderAny();
 // console.log("kategorija je" + jeKategorijaSaleObjekt)
}

if(jeDolzinaSale == "single"){
  document.querySelector("#lcodeSelect").click();
  dolgaSala.selectedIndex = 1;
}
if(jeDolzinaSale == "twopart"){
  document.querySelector("#lcodeSelect").click();
  dolgaSala.selectedIndex = 2;
}
if(jeDolzinaSale == "0"){
  document.querySelector("#lcodeSelect").click();
  dolgaSala.selectedIndex = 0;
}


    document.querySelector("#blf-cb3").click();
    console.log("Rasisticna Je prizgana")
    document.querySelector("#blf-cb5").click();
    console.log("Eksplicitna Je prizgana")
    document.querySelector("#blf-cb6").click();
    console.log("NSFW Je prizgana")
    reRenderBesednaIgra();

    document.querySelector("#kreirajIme").value = "Branko"
    document.querySelector("#kreirajPriimek").value = "Kralj"
    document.querySelector("#kreirajStarost").value = "18"

    document.querySelector("#mojID").value = "3RD-CASE"
  }

}


)
}


// TODO: Tukaj implementirate funkcionalnosti, ki jo podpira vaša aplikacija

function generirajID() {
  var ID = Math.floor(Math.random() * 1232415241441747);
  return ID;
}

function kreirajRacun(){
  var imeUporabnika = $("#kreirajIme").val();
  var priimekUporabnika = $("#kreirajPriimek").val();
  var starostUporabnika = $("#kreirajStarost").val();

  var verna = salaJeVerna;
  var politicna = salaJePoliticna;
  var rasisticna = salaJeRasisticna;
  var seksisticna = salaJeSeksisticna;
  var eksplicitna = salaJeEksplicitna;
  var nsfw = salaJeNSFW;

  var programerska = salaJeProgramerska;
  var temniHumor = salaJeTemniHumor;
  var besednaIgra = salaJeBesednaIgra;
  var strasljiva = salaJeStrasljiva;
  var bozicna = salaJeBozicna;

  var kategorijaSale = salaKategorija;
  var dolzina = valueDolzine;

  var ID = document.querySelector("#mojID").value;

  var preferi = {
    jeVerna: verna,
    jePoliticna: politicna,
    jeRasisticna: rasisticna,
    jeSeksisticna: seksisticna,
    jeEksplicitna: eksplicitna,
    jeNSFW: nsfw,
  
    jeProgramerska: programerska,
    jeTemniHumor: temniHumor,
    jeBesednaIgra: besednaIgra,
    jeStrasljiva: strasljiva,
    jeBozicna: bozicna,
  
    jeKategorijaSale: kategorijaSale,
    jeDolzinaSale: dolzina
  }

  var ID = document.querySelector("#mojID").value;

  if (
    !imeUporabnika ||
    !priimekUporabnika ||
    !starostUporabnika ||
    imeUporabnika.trim().length == 0 ||
    priimekUporabnika.trim().length == 0 ||
    starostUporabnika.trim().length == 0
  ) {
    $("#kreirajSporocilo").html(
      "<div class='alert alert-warning alert-dismissible fade show mt-3 mb-0'>" +
        "Prosim vnesite zahtevane podatke!" +
        "<button type='button' class='btn-close' data-bs-dismiss='alert'></button>" +
        "</div>"
    )
    console.log(imeUporabnika + " " + priimekUporabnika + " " + starostUporabnika);
    kekID = generirajID;
    console.log(kekID);
  }
  else{

    noviID = generirajID();
    var podatki = {
      ime: imeUporabnika,
      priimek: priimekUporabnika,
      starost: starostUporabnika,
      preference: {
        jeVerna: verna,
        jePoliticna: politicna,
        jeRasisticna: rasisticna,
        jeSeksisticna: seksisticna,
        jeEksplicitna: eksplicitna,
        jeNSFW: nsfw,
      
        jeProgramerska: programerska,
        jeTemniHumor: temniHumor,
        jeBesednaIgra: besednaIgra,
        jeStrasljiva: strasljiva,
        jeBozicna: bozicna,
      
        jeKategorijaSale: kategorijaSale,
        jeDolzinaSale: dolzina
        }
    }
    
    
    console.log(podatki);
$.ajax({
  url: TEACHING_API_BASE_URL + "azuriraj?kljuc=" + noviID + "&elementTable=false",
  type: "PUT",
  contentType: "application/json",
  data: JSON.stringify(podatki),
  success: function(data){
    $("#kreirajSporocilo").html(
      "<div class='alert alert-success alert-dismissible fade show mt-3 mb-0'>" +
        "Uspešno kreiran Racun <b>" +
        noviID +
        "</b>." +
        "<button type='button' class='btn-close' data-bs-dismiss='alert'></button>" +
        "</div>"
    );
  }

})}
}



//IME -> SALA


const requestJoke = async (firstName, lastName) => {

  var firstName = document.querySelector("#kreirajIme").value;
  var lastName = document.querySelector("#kreirajPriimek").value;
  const response = await fetch("https://api.icndb.com/jokes/random?firstName=" + firstName +"&lastName=" + lastName);
  const jsonResponse = await response.json();
  $("#mojaSala").html(
    "<div class='alert alert-success alert-dismissible fade show mt-3 mb-0'>" +
      jsonResponse.value.joke +
      "<button type='button' class='btn-close' data-bs-dismiss='alert'></button>" +
      "</div>"
  );
  console.log(jsonResponse.value.joke);
}

//PREFERENCE

var jeVerna = false;
var salaJeVerna = ""
var jePoliticna = false;
var salaJePoliticna = ""
var jeRasisticna = false;
var salaJeRasisticna = ""
var jeSeksisticna = false;
var salaJeSeksisticna = ""
var jeEksplicitna = false;
var salaJeEksplicitna = ""
var jeNSFW = false;
var salaJeNSFW = ""

var jeProgramerska = false;
var salaJeProgramerska = ""
var jeTemniHumor = false;
var salaJeTemniHumor = ""
var jeBesednaIgra = false;
var salaJeBesednaIgra = ""
var jeStrasljiva = false;
var salaJeStrasljiva = ""
var jeBozicna = false;
var salaJeBozicna = ""

var salaKategorija = "any"
var salaJeDolzina = ""
var lahkoGeneriram = false;
var valueDolzine = "0"

function reRenderVerna(){
  jeVerna = !jeVerna;
  console.log("Verna: " + jeVerna);
  if(jeVerna == true){
  salaJeVerna = "religious"
  }
  else{
    salaJeVerna = ""
  }
  console.log("Ali je sala verna?" + salaJeVerna)
}
function reRenderPoliticna(){
  jePoliticna = !jePoliticna;
  console.log("Politicna: " + jePoliticna);
  if(jePoliticna == true){
    salaJePoliticna = "political"
    }
    else{
      salaJePoliticna = ""
    }
    console.log(salaJePoliticna)
}
function reRenderRasisticna(){
  jeRasisticna = !jeRasisticna;
  console.log("Rasisticna: " + jeRasisticna);
  if(jeRasisticna == true){
    salaJeRasisticna = "racist"
    }
    else{
      salaJeRasisticna = ""
    }
    console.log(salaJeRasisticna)
}
function reRenderSeksisticna(){
  jeSeksisticna = !jeSeksisticna;
  console.log("Seksisticna: " + jeSeksisticna);
  if(jeSeksisticna == true){
    salaJeSeksisticna = "sexist"
    }
    else{
      salaJeSeksisticna = ""
    }
    console.log(salaJeSeksisticna)
}

function reRenderEksplicitna(){
  jeEksplicitna = !jeEksplicitna;
  console.log("Eksplicitna: " + jeEksplicitna);
  if(jeEksplicitna == true){
    salaJeEksplicitna = "explicit"
    }
    else{
      salaJeEksplicitna = ""
    }
    console.log(salaJeEksplicitna)
}
function reRenderNSFW(){
  jeNSFW = !jeNSFW;
  console.log("NSFW: " + jeNSFW);
  if(jeNSFW == true){
    salaJeNSFW = "nsfw"
    }
    else{
      salaJeNSFW = ""
    }
    console.log(salaJeNSFW)
}

function reRenderProgramerska(){
  salaKategorija = "Programming"
  jeProgramerska = true;
  jeTemniHumor = false;
  salaJeTemniHumor = "";
  jeBesednaIgra = false;
  salaJeBesednaIgra = "";
  jeStrasljiva = false;
  salaJeStrasljiva = "";
  jeBozicna = false;
  salaJeBozicna = "";
  console.log("Programerska: " + jeProgramerska);
  salaJeProgramerska = "Programming";
  console.log(salaJeProgramerska)
  lahkoGeneriram = true
  $("#temaSale").html(
    "<div class='alert alert-success alert-dismissible fade show mt-3 mb-0'>" +
      "Tema vaše šale je Programerska!<b>" +
      "<button type='button' class='btn-close' data-bs-dismiss='alert'></button>" +
      "</div>"
  );
}
function reRenderTemniHumor(){
  salaKategorija = "Dark"
  jeTemniHumor = true;
  jeProgramerska = false;
  salaJeProgramerska = "";
  jeBesednaIgra = false;
  salaJeBesednaIgra = "";
  jeStrasljiva = false;
  salaJeStrasljiva = "";
  jeBozicna = false;
  salaJeBozicna = "";
  console.log("Temni Humor: " + jeTemniHumor);
  salaJeTemniHumor = "Dark";
  console.log(salaJeTemniHumor);
  lahkoGeneriram = true
  $("#temaSale").html(
    "<div class='alert alert-success alert-dismissible fade show mt-3 mb-0'>" +
      "Tema vaše šale je Temni Humor!<b>" + 
      "<button type='button' class='btn-close' data-bs-dismiss='alert'></button>" +
      "</div>"
  );
}
function reRenderBesednaIgra(){
  salaKategorija = "Pun"
  jeBesednaIgra = true;
  jeProgramerska = false;
  salaJeProgramerska = "";
  jeTemniHumor = false;
  salaJeTemniHumor = "";
  jeStrasljiva = false;
  salaJeStrasljiva = "";
  jeBozicna = false;
  salaJeBozicna = "";
  console.log("Besedna Igra: " + jeBesednaIgra);
  salaJeBesednaIgra = "Pun";
  console.log(salaJeBesednaIgra);
  lahkoGeneriram = true
  $("#temaSale").html(
    "<div class='alert alert-success alert-dismissible fade show mt-3 mb-0'>" +
      "Tema vaše šale je Besedna Igra!<b>" + 
      "<button type='button' class='btn-close' data-bs-dismiss='alert'></button>" +
      "</div>"
  );
}
function reRenderStrasljiva(){
  salaKategorija = "Spooky"
  jeStrasljiva = true;
  jeProgramerska = false;
  salaJeProgramerska = "";
  jeTemniHumor = false;
  salaJeTemniHumor = "";
  jeBesednaIgra = false;
  salaJeBesednaIgra = "";
  jeBozicna = false;
  salaJeBozicna = "";
  console.log("Strasljiva: " + jeStrasljiva);
  salaJeStrasljiva = "Spooky";
  console.log(salaJeStrasljiva);
  lahkoGeneriram = true
  $("#temaSale").html(
    "<div class='alert alert-success alert-dismissible fade show mt-3 mb-0'>" +
      "Tema vaše šale je Srhljiva!<b>" + 
      "<button type='button' class='btn-close' data-bs-dismiss='alert'></button>" +
      "</div>"
  );
}
function reRenderBozicna(){
  salaKategorija = "Christmas"
  jeBozicna = true;
  jeProgramerska = false;
  salaJeProgramerska = "";
  jeTemniHumor = false;
  salaJeTemniHumor = "";
  jeBesednaIgra = false;
  salaJeBesednaIgra = "";
  jeStrasljiva = false;
  salaJeStrasljiva = "";
  console.log("Bozicna: " + jeBozicna);
  salaJeBozicna = "Christmas";
  console.log(salaJeBozicna);
  lahkoGeneriram = true
  $("#temaSale").html(
    "<div class='alert alert-success alert-dismissible fade show mt-3 mb-0'>" +
      "Tema vaše šale je Božična!<b>" + 
      "<button type='button' class='btn-close' data-bs-dismiss='alert'></button>" +
      "</div>"
  );
}

function reRenderDolzina(){
  valueDolzine =  $("#lcodeSelect").val()
  console.log(valueDolzine)
}

function reRenderAny(){
  salaKategorija  = "Any"
  jeProgramerska = false;
  salaJeProgramerska = ""
  jeTemniHumor = false;
  salaJeTemniHumor = "";
  jeBesednaIgra = false;
  salaJeBesednaIgra = "";
  jeStrasljiva = false;
  salaJeStrasljiva = "";
  jeBozicna = false;
  console.log(salaKategorija);
  salaJeBozicna = "";$("#temaSale").html(
    "<div class='alert alert-success alert-dismissible fade show mt-3 mb-0'>" +
      "Za temo šale vam je vseeno!<b>" + 
      "<button type='button' class='btn-close' data-bs-dismiss='alert'></button>" +
      "</div>"
  );
}

function zapomniSmiselMojegaHumorja(){
  var verna = salaJeVerna;
  var politicna = salaJePoliticna;
  var rasisticna = salaJeRasisticna;
  var seksisticna = salaJeSeksisticna;
  var eksplicitna = salaJeEksplicitna;
  var nsfw = salaJeNSFW;


  var kategorijaSale = salaKategorija;
  var dolzina = valueDolzine;

  var ID = document.querySelector("#mojID").value;

  var preference = {
  jeVerna: verna,
  jePoliticna: politicna,
  jeRasisticna: rasisticna,
  jeSeksisticna: seksisticna,
  jeEksplicitna: eksplicitna,
  jeNSFW: nsfw,


  jeKategorijaSale: kategorijaSale,
  jeDolzinaSale: dolzina
  }


 $.ajax({
    url: TEACHING_API_BASE_URL + "azuriraj?kljuc=" + ID + "&elementTable=false",
    type: "PUT",
    contentType: "application/json",
    data: JSON.stringify(preference),
    success: function(data){
      $("#preberiSporocilo").html(
        "<div class='alert alert-success alert-dismissible fade show mt-3 mb-0'>" +
          "Uspešno zapomnjen humor uporabnika <b>" +
          ID +
          "</b>." +
          "<button type='button' class='btn-close' data-bs-dismiss='alert'></button>" +
          "</div>"
      );
    }
})
 }

 const izpolniPodatke = async () => {
  var ID = document.querySelector("#mojID").value;
  const response = await fetch(TEACHING_API_BASE_URL + "vrni/" + ID, {
    method: "GET",
    headers: {
      accept: "text/plain"
    }
  })
    const jsonResponse = await response.text();
    const myObject = JSON.parse(jsonResponse);
    mojeIme = myObject.ime
    jeVernaObjekt = myObject.jeVerna
    jePoliticnaObjekt = myObject.jePoliticna
    jeRasisticnaObjekt = myObject.jeRasisticna
    jeSeksisticnaObjekt = myObject.jeSeksisticna
    jeEksplicitnaObjekt = myObject.jeEksplicitna
    jeNSFWObjekt = myObject.jeNSFW
  
    jeKategorijaSaleObjekt = myObject.jeKategorijaSale
    jeDolzinaSaleObjekt = myObject.jeDolzinaSale

    var dolgaSala = document.querySelector("#lcodeSelect")

    /*$("#kreirajIme").html(
      "<div class='alert alert-success alert-dismissible fade show mt-3 mb-0'>" +
        myObject.ime +
        "</b>." +
        "<button type='button' class='btn-close' data-bs-dismiss='alert'></button>" +
        "</div>"
    );*/

    document.querySelector("#kreirajIme").innerHTML = myObject.ime

    /*if(document.querySelector("#mojID") == ""){
      $("#mojID").html(
        "<div class='alert alert-success alert-dismissible fade show mt-3 mb-0'>" +
        "Prosim vnesite Pravilni ID!" + 
          "<button type='button' class='btn-close' data-bs-dismiss='alert'></button>" +
          "</div>"
      );
    }*/

  //  else{

    if (jeVernaObjekt == "religious"){
        if (jeVerna == false){
      document.querySelector("#blf-cb1").click();
      console.log("Verna Je prizgana")
    }
    }
    if (jeVernaObjekt == ""){
      if (jeVerna == true){
        document.querySelector("#blf-cb1").click();
      console.log("Verna je ugasnjena")
      }
    }

    if (jePoliticnaObjekt == "political"){
        if (jePoliticna == false){
      document.querySelector("#blf-cb2").click();
      console.log("Politicna Je prizgana")
    }
    }
    if (jePoliticnaObjekt == ""){
      if (jePoliticna == true){
        document.querySelector("#blf-cb2").click();
      console.log("Politicna je ugasnjena")
      }
    }

    if (jeRasisticnaObjekt == "racist"){
        if (jeRasisticna == false){
      document.querySelector("#blf-cb3").click();
      console.log("Rasisticna Je prizgana")
    }
    }
    if (jeRasisticnaObjekt == ""){
      if (jeRasisticna == true){
        document.querySelector("#blf-cb3").click();
      console.log("Rasisticna je ugasnjena")
      }
    }

      if (jeSeksisticnaObjekt == "sexist"){
        if (jeSeksisticna == false){
      document.querySelector("#blf-cb4").click();
      console.log("Seksisticna Je prizgana")
    }
    }
    if (jeSeksisticnaObjekt == ""){
      if (jeSeksisticna == true){
        document.querySelector("#blf-cb4").click();
      console.log("Seksisticna je ugasnjena")
      }
    }

      if (jeEksplicitnaObjekt == "explicit"){
        if (jeEksplicitna == false){
      document.querySelector("#blf-cb5").click();
      console.log("Eksplicitna Je prizgana")
    }
    }
    if (jeEksplicitnaObjekt == ""){
      if (jeEksplicitna == true){
        document.querySelector("#blf-cb5").click();
      console.log("Eksplicitna je ugasnjena")
      }
    }

    if (jeNSFWObjekt == "nfsw"){
      if (jeNSFW == false){
    document.querySelector("#blf-cb6").click();
    console.log("NSFW Je prizgana")
  }
  }
  if (jeNSFWObjekt == ""){
    if (jeNSFW == true){
      document.querySelector("#blf-cb6").click();
    console.log("NSFW je ugasnjena")
    }
  }

  console.log(jeKategorijaSaleObjekt)
    //KATEGORIJE
  if (jeKategorijaSaleObjekt == "Programming"){
    document.querySelector("#programGumb").click();
    reRenderProgramerska();
    console.log("kategorija je" + jeKategorijaSaleObjekt)
  }
  if (jeKategorijaSaleObjekt == "Dark"){
    document.querySelector("#temniHumorGumb").click();
    reRenderTemniHumor();
    console.log("kategorija je" + jeKategorijaSaleObjekt)
  }
  if (jeKategorijaSaleObjekt == "Pun"){
    document.querySelector("#besednaIgraGumb").click();
    reRenderBesednaIgra();
    console.log("kategorija je" + jeKategorijaSaleObjekt)
  }
  if (jeKategorijaSaleObjekt == "Spooky"){
    document.querySelector("#strasljivaGumb").click();
    reRenderStrasljiva();
    console.log("kategorija je" + jeKategorijaSaleObjekt)
  }
  if (jeKategorijaSaleObjekt == "Christmas"){
    document.querySelector("#bozicnaGumb").click();
    reRenderBozicna();
    console.log("kategorija je" + jeKategorijaSaleObjekt)
  }
  if (jeKategorijaSaleObjekt == "Any"){
    document.querySelector("#katerakoliGumb").click();
    reRenderAny();
    console.log("kategorija je" + jeKategorijaSaleObjekt)
  }
  
  if(myObject.jeDolzinaSale == "single"){
    document.querySelector("#lcodeSelect").click();
    dolgaSala.selectedIndex = 1;
  }
  if(myObject.jeDolzinaSale == "twopart"){
    document.querySelector("#lcodeSelect").click();
    dolgaSala.selectedIndex = 2;
  }
  if(myObject.jeDolzinaSale == "0"){
    document.querySelector("#lcodeSelect").click();
    dolgaSala.selectedIndex = 0;
  }

  console.log(myObject.jeDolzinaSale)
  console.log(jsonResponse)
  console.log(myObject.jeVerna)
    }


    const generirajSalo = async () => {
      jeKategorijaSale = salaKategorija
  
      reRenderDolzina();

      valueDolzineSale = valueDolzine
  
      if(jeProgramerska){
        salaKategorija = "Programming"
      }
      if(jeTemniHumor){
        salaKategorija = "Dark"
      }
      if(jeBesednaIgra){
        salaKategorija = "Pun"
      }
      if(jeStrasljiva){
        salaKategorija = "Spooky"
      }
      if(jeBozicna){
        salaKategorija = "Christmas"
      }
  
  //NSFW
      if (jeNSFW && (
        jeVerna ||
        jePoliticna ||
        jeRasisticna ||
        jeSeksisticna ||
        jeEksplicitna
        )){
          salaJeNSFW = "nsfw,"
        }
      if (jeNSFW && !jeVerna && !jePoliticna && !jeRasisticna && !jeSeksisticna && !jeEksplicitna){
          salaJeNSFW = "nsfw"
        }
      if (!jeNSFW){
        salaJeNSFW = "";
      }
  
  //VERNA
      if(jeVerna && (
        jePoliticna ||
        jeRasisticna ||
        jeSeksisticna ||
        jeEksplicitna
      )){
        salaJeVerna = "religious,"
      }
      if(jeVerna && !jePoliticna && !jeRasisticna && !jeSeksisticna && !jeEksplicitna){
        salaJeVerna = "religious"
      }
      if(!jeVerna){
        salaJeVerna = "";
      }
  
  //POLITICNA
      if(jePoliticna && (
        jeRasisticna ||
        jeSeksisticna ||
        jeEksplicitna
      )){
        salaJePoliticna = "political,"
      }
      if(jePoliticna && !jeRasisticna && !jeSeksisticna && !jeEksplicitna){
        salaJePoliticna = "political"
      }
      if(!jeVerna){
        salaJeVerna = "";
      }
  
  //RASISTICNA
      if(jeRasisticna && (
        jeSeksisticna ||
        jeEksplicitna
      )){
        salaJeRasisticna = "racist,"
      }
      if(jeRasisticna && !jeSeksisticna && !jeEksplicitna){
        salaJeRasisticna = "racist"
      }
      if(!jeRasisticna){
        salaJeRasisticna = ""
      }
  
  //SEKSISTICNA
      if(jeSeksisticna && jeEksplicitna){
        salaJeSeksisticna = "sexist,"
      }
      if(jeSeksisticna && !jeEksplicitna){
        salaJeSeksisticna = "sexist"
      }
      if(!jeSeksisticna){
        salaJeSeksisticna = ""
      }
  
  //EKSPLICITNA
      if(jeEksplicitna){
        salaJeEksplicitna = "explicit"
      }
      if(!jeEksplicitna){
        salaJeEksplicitna = ""
      }
  
      if(lahkoGeneriram == false){
        $("#generirajSalo").html(
          "<div class='alert alert-success alert-dismissible fade show mt-3 mb-0'>" +
            "Niste Izbrali Teme Šale!" +
            "<button type='button' class='btn-close' data-bs-dismiss='alert'></button>" +
            "</div>"
        );
      }
  
  
      else{
  
      /*  if(valueDolzineSale == "0"){
          $("#generirajSalo").html(
            "<div class='alert alert-success alert-dismissible fade show mt-3 mb-0'>" +
              "Niste izbrali dolzine sale!" +
              "<button type='button' class='btn-close' data-bs-dismiss='alert'></button>" +
              "</div>"
          );
        }*/
          //else{
      console.log("https://v2.jokeapi.dev/joke/" + jeKategorijaSale + "?blacklistFlags=" + salaJeNSFW + salaJeVerna + salaJePoliticna + salaJeRasisticna + salaJeSeksisticna + salaJeEksplicitna + "&format=txt&type=" + valueDolzineSale)
      const response = await fetch("https://v2.jokeapi.dev/joke/" + jeKategorijaSale + "?blacklistFlags=" + salaJeNSFW + salaJeVerna + salaJePoliticna + salaJeRasisticna + salaJeSeksisticna + salaJeEksplicitna + "&format=txt&type=" + valueDolzineSale, {
        method: "GET",
        headers: {
          accept: "plain/text"
        }
      })
      const textResponse = await response.text();
      $("#generirajSalo").html(
        "<div class='alert alert-success alert-dismissible fade show mt-3 mb-0'>" +
          textResponse +
          "<button type='button' class='btn-close' data-bs-dismiss='alert'></button>" +
          "</div>"
      );


      console.log(textResponse);
      console.log("salaJeNSFW: " + jeNSFW + " salaJeVerna: " + jeVerna + " salaJePoliticna: " + jePoliticna + " salaJeRasisticna: " + jeRasisticna +  " salaJeSeksisticna: " + jeSeksisticna + " salaJeEksplicitna: " + jeEksplicitna)
      console.log(jeKategorijaSale);
      console.log(valueDolzineSale);
    }
   }

    /*$("#generirajSalo").html(
      "<div class='alert alert-success alert-dismissible fade show mt-3 mb-0'>" +
        GrafNaret +
        "<button type='button' class='btn-close' data-bs-dismiss='alert'></button>" +
        "</div>"
    );
   }*/

   /*function narediGraf(){
   $.ajax({
    url: `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=10&api_key=1be4d50ebdd1bd9b2184423c17f3747b&format=json`,
    type: "GET",
    contentType: "application/json",
  success: function (topTracks) {
    let podatkiZaGraf = [];
    for (let i = 0; i < 10; i++) {
      podatkiZaGraf[i] = {
        label: topTracks.tracks.track[i].name,
        x: i + 1,
        y: parseInt(topTracks.tracks.track[i].playcount),
      };
    }
    console.log("Graf Narisan")
    //console.log(podatkiZaGraf)
    var chart = new CanvasJS.Chart("chartContainer", {
      title:{
        text: "Top hits"              
      },
      axisX: {
        labelPlacement: "inside",
        tickPlacement: "inside",
        labelMaxWidth: 400
      },
      data: [              
      {
        type: "bar",
        dataPoints: podatkiZaGraf
      }
      ]
    });
    chart.render();
  },
  error: function (err) {
    alert("ERR")
  }
  })
}*/