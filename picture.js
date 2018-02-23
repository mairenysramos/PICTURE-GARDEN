let dmg = document.querySelector('#dmg');
dmg.addEventListener("mouseover", e => {
    console.log("dmg");
    dmg.setAttribute("src","https://vignette.wikia.nocookie.net/yugioh/images/0/00/ExodiustheUltimateForbiddenLord-TF04-JP-VG.jpg/revision/latest?cb=20120510191156");
    });
    
dmg.addEventListener("mouseout", e => {
        console.log("dmg");
        dmg.setAttribute("src", "https://vignette.wikia.nocookie.net/yugioh/images/d/d0/DarkMagicianGirl-TF04-JP-VG.jpg/revision/latest?cb=20111008200538");
    });
    
let bls = document.querySelector('#bls')
bls.addEventListener("mouseover", e => {
    bls.setAttribute("src", "https://vignette.wikia.nocookie.net/yugiohenespanol/images/f/f5/Foto_destrucci%C3%B3n_del_destino.jpg/revision/latest?cb=20120512103204&path-prefix=es");
    });

bls.addEventListener("mouseout", e =>{
    bls.setAttribute("src", "https://vignette.wikia.nocookie.net/yugioh/images/2/2d/BlackLusterSoldierEnvoyoftheBeginning-TF04-JP-VG.jpg/revision/latest?cb=20111008193921");
});
    
let dmc = document.querySelector('#bmc');
dmc.addEventListener("mouseover", e => {
    dmc.setAttribute("src", "https://vignette.wikia.nocookie.net/yugioh/images/b/b5/SpellReproduction-TF04-EN-VG.jpg/revision/latest?cb=20121008184636");
});

dmc.addEventListener("mouseout", e => {
    dmc.setAttribute("src", "https://vignette.wikia.nocookie.net/yugioh/images/9/98/DarkMagicianofChaos-TF04-JP-VG.png/revision/latest?cb=20111008200614"); 
});

let rel = document.querySelector('#rel');
rel.addEventListener("mouseover", e=> {
    rel.setAttribute("src", "https://vignette.wikia.nocookie.net/yugioh/images/8/81/GoldSarcophagus-TF04-JP-VG.png/revision/latest?cb=20120526024101");
});

rel.addEventListener("mouseout", e=> {
    rel.setAttribute("src", "https://vignette.wikia.nocookie.net/yugiohenespanol/images/d/d3/Foto_renunciado.jpg/revision/latest?cb=20120401034239&path-prefix=es");
});

let red = document.querySelector('#red');
    red.addEventListener("mouseover", e =>{
    red.setAttribute("src", "https://vignette.wikia.nocookie.net/yugioh/images/9/91/LightforceSword-TF04-JP-VG.jpg/revision/latest?cb=20120715202100");
    });
    
    red.addEventListener("mouseout", e => {
        red.setAttribute("src", "https://vignette.wikia.nocookie.net/yugioh/images/4/42/RedEyesBDragon-TF05-JP-VG.jpg/revision/latest?cb=20120303052237");
    });
    
    let exod = document.querySelector("#exod");
    exod.addEventListener("mouseover", e=> {
        exod.setAttribute("src", "https://vignette.wikia.nocookie.net/yugioh/images/a/a6/Polymerization-TF04-JP-VG-2.jpg/revision/latest?cb=20120928204324");
    });
    
 
  exod.addEventListener("mouseout", e => {
      exod.setAttribute("src", "https://vignette.wikia.nocookie.net/yugioh/images/c/c0/ExodiatheForbiddenOne-TF04-JP-VG.jpg/revision/latest?cb=20120420185052");
  });
  
  let cyber = document.querySelector("#cyber");
  cyber.addEventListener("mouseover", e => {
      cyber.setAttribute("src", "https://vignette.wikia.nocookie.net/yugioh/images/7/76/NEX-TF02-VG.png/revision/latest?cb=20101111151112");
  });
  
  cyber.addEventListener("mouseout", e => {
      cyber.setAttribute("src", "https://vignette.wikia.nocookie.net/yugioh/images/1/18/MaleficCyberEndDragon-TF06-JP-VG.png/revision/latest?cb=20111002010443");
  });
  
  let chaos = document.querySelector("#chaos");
  chaos.addEventListener("mouseover", e => {
      chaos.setAttribute("src", "https://vignette.wikia.nocookie.net/yugioh/images/e/ed/ArchfiendofGilfer-TF04-JP-VG.jpg/revision/latest?cb=20120424192349");
  });
  
  chaos.addEventListener("mouseout", e => {
      chaos.setAttribute("src", "https://vignette.wikia.nocookie.net/yugioh/images/e/e9/ElementalHEROChaosNeos-TF04-JP-VG.jpg/revision/latest?cb=2012043017312");
  });