const oculto = true;
const visible = false;

var precios = {
    M:[" 120.000 COP", " 198.000 COP", " 280.000 COP"],
    T:[" 135.000 COP", " 240.000 COP", " 300.000 COP"],
    R:[" 310.000 COP", " 220.000 COP", " 330.000 COP"],
    E:[" 240.000 COP", " 470.000 COP", " 310.000 COP"],
    F:[" 230.000 COP", " 220.000 COP"]
};
var textoInfo = {
    masajeRelajante:["<em>Incluye exfoliación de manos</em> <br>Un masaje personalizado que combina las técnicas y presión para relajar el cuerpo. Enfocado en aliviar la tensión y dolor muscular, personalice el tratamiento, la presión así como los aceites corporales para su tratamiento. Una experiencia que le dejará completamente relajado. <br> <h4>Disfruta de media hora de masajes</h4>",
                    "<em>Incluye exfoliación de manos y pies</em> <br>Un masaje personalizado que combina las técnicas y presión para relajar el cuerpo. Enfocado en aliviar la tensión y dolor muscular, personalice el tratamiento, la presión así como los aceites corporales para su tratamiento. Una experiencia que le dejará completamente relajado. <br> <h4>Disfruta de una hora de masajes</h4>",
                    "<em>Incluye exfoliación de manos y pies</em> <br>Un masaje personalizado que combina las técnicas y presión para relajar el cuerpo. Enfocado en aliviar la tensión y dolor muscular, personalice el tratamiento, la presión así como los aceites corporales para su tratamiento. Una experiencia que le dejará completamente relajado. <br> <h4>Disfruta de una hora y media de masajes</h4>"],
    tejidoProfundo:["<em>Incluye exfoliación de manos</em> <br>Un masaje profundo diseñado para aliviar la tensión crónica y dolor agudo de los músculos de espalda, cuello y hombros así como del cuerpo en general.", 
    "<em>Incluye exfoliación de manos y pies</em> <br>Un masaje profundo diseñado para aliviar la tensión crónica y dolor agudo de los músculos de espalda, cuello y hombros así como del cuerpo en general.",
    "<em>Incluye exfoliación de manos y pies</em> <br>Un masaje profundo diseñado para aliviar la tensión crónica y dolor agudo de los músculos de espalda, cuello y hombros así como del cuerpo en general."],
    ritualInfo:["epresentando uno de los más grandes secretos ancestrales de nuestras leyendas, nos hemos inspirado en las maravillas del universo y los beneficios infinitos del sol y las piedras preciosas. Divinidad, fascinación, inmortalidad, energía, todo en un maravilloso ritual cosmético que provee a la piel gran luminosidad.",
    "Luzca una piel radiante con esta aromática exfoliación de sales combinadas con aceites esenciales que nutrirán y suavizarán la piel. Un tratamiento perfecto por si solo o como complemento para cualquiera de los masajes. Para pieles sensibles se aplicará un exfoliante suave.",
    "Una exfoliación completa y envoltura corporal de algas y sales marinas. Mientras recibes un masaje craneal, finaliza con la hidratación de la piel a través de un masaje corporal con aceite de aromaterapia de elección que restaura y revitaliza, aportando sensación de bienestar."],
    especialInfo:["Comparte con tus amigas una experiencia inolvidable, disfruta junto a ellas momentos de confort y relax en agradable ambiente.incluye: 15 min en jacuzzi acompañado con copa de champagne.Exfoliación corporal.Envoltura con crema de algas.Masaje corporal  y concluimos con una ensalada de frutas.",
    "Experiencia romántica, es ideal para celebrar tus fechas especiales.<br>Incluye:<br>Decoración con pétalos y velas.<br>15 Min de jacuzzi con fresas achocolatadas y copa de vino. <br>Exfoliación corporal. <br> Envoltura con crema de algas.<br>Masaje corporal.<br>Masaje craneal.<br>Finalizamos con fresas achocolatadas o torta de chocolate", 
    "Es un tratamiento integral de relajación y belleza, el cual tiene como fin renovar el cuerpo y limpiar la piel de todas las impurezas y nutrirla."],
    facial:["Consiste en una serie de pasos que se realizan en la piel del rostro para eliminar células muertas y mantener un cutis hidratado.",
    "Es un tratamiento para la cara que tiene por objetivo mejorar el aspecto de nuestra piel. Está basado en limpieza, exfoliación, mascarilla, tonificación, relajación e hidratación."]
}
var parrafo;

const contenedorS = {
    selectM : document.getElementById("contenedorM"),
    selectT : document.getElementById("contenedorT"),
    selectR : document.getElementById("contenedorR"),
    selectE : document.getElementById("contenedorE"),
    selectH : document.getElementById("contenedorH")
};
    contenedorS.selectM.hidden=oculto;
    contenedorS.selectT.hidden=oculto;
    contenedorS.selectR.hidden=oculto;
    contenedorS.selectE.hidden=oculto;
    contenedorS.selectH.hidden=oculto;

const encabezados = {
    M : "MASAJE ",
    T: "TEJIDO PROFUNDO ",
    R: "RITUAL ",
    E: "ESPECIAL ",
    F: "TIPO "
};
    
const variables = {
    else: ["RELAJANTE No ha seleccionado tiempo : ", " no ha seleccionado tiempo : ", " no seleccionado  : "],
    tiempo : ["DE 30 MINUTOS ", "DE 60 MINUTOS + EXFOLIACIÓN DE MANOS Y PIES", "DE 90 MINUTOS + EXFOLIACIÓN DE MANOS Y PIES" ],
    ritual: ["DEL ORO", "EFECTO SATINADO", "MAR DE ANTILLAS", "BAÑO DE NOVIA" ],
    especial: ["SPA DE AMIGAS", "SPA ROMANTICO","BAÑO DE NOVIA"],
    facial: ["HIGIENE FACIAL", "HIDRATACIÓN FACIAL"]
}

var price = document.getElementById("valor");
var timeSelect="0";
var cuerpo = document.getElementById("body");
var Total = document.getElementById("precio");
cuerpo.hidden=oculto;
Total.hidden=oculto;
var formReserv = document.getElementById("reserva");
formReserv.hidden = true;
var botonReserv = document.getElementById("botonReserva");
    botonReserv.hidden=oculto;

    const pedirServicio = document.getElementById("reservaAncore");

function elegido(){


    var selectMasaje = document.getElementById("servicioM");
    var selectValueM = selectMasaje.value;
    let link="";
    

        switch(selectValueM){
            case "0" :
                timeSelect  = variables.else[0] + alert("Por favor elige el tiempo");
            break;
            case "30":
                timeSelect  =variables.tiempo[0];
                parrafo = textoInfo.masajeRelajante[0];
                price = precios.M[0];
                scrollY += 320;
                link="https://api.whatsapp.com/send?phone=573053784470&text=hola%20vengo%20de%20su%20plataforma%20web%20y%20estoy%20interesado/a%20en%20el%20*Masaje%20Relajante*%20de%20*30%20min.*";
            break;
            case "60":
                timeSelect =variables.tiempo[1];
                parrafo = textoInfo.masajeRelajante[1];
                price = precios.M[1];
                scrollY += 320;
                link="https://api.whatsapp.com/send?phone=573053784470&text=hola%20vengo%20de%20su%20plataforma%20web%20y%20estoy%20interesado/a%20en%20el%20*Masaje%20Relajante*%20de%20*60%20min.*"
            break;
            case "90":
                timeSelect =variables.tiempo[2];
                parrafo = textoInfo.masajeRelajante[2];
                price = precios.M[2];
                scrollY += 320;
                link="https://api.whatsapp.com/send?phone=573053784470&text=hola%20vengo%20de%20su%20plataforma%20web%20y%20estoy%20interesado/a%20en%20el%20*Masaje%20Relajante*%20de%20*90%20min.*"
            break;
        }
       
        cuerpo.hidden=visible;
        Total.hidden=visible;
        document.getElementById("header").innerHTML = encabezados.M + timeSelect;
        cuerpo.innerHTML = parrafo;
        document.getElementById("valor").innerHTML = price;
        botonReserv.hidden=visible;
        document.getElementById("reserva").hidden=oculto;
        document.getElementById("HyB").scrollIntoView({ behavior: 'smooth' });
        pedirServicio.href=link;

        
    }

function elegidoT(){

    var selectTejido = document.getElementById("servicioT");
    var selectValueT = selectTejido.value;
    let link="";

    switch(selectValueT){
        case "0" :
            timeSelect  =variables.else[1] + alert("Por favor elige el tiempo");
        break;
        case "30":
            timeSelect  =variables.tiempo[0];
            parrafo = textoInfo.tejidoProfundo[0];
            price = precios.T[0];
            link="https://api.whatsapp.com/send?phone=573053784470&text=hola%20vengo%20de%20su%20plataforma%20web%20y%20estoy%20interesado/a%20en%20el%20*Tejido%20Profundo*%20de%20*30%20min.*";
        break;
        case "60":
            timeSelect =variables.tiempo[1];
            parrafo = textoInfo.tejidoProfundo[1];
            price = precios.T[1];
            link="https://api.whatsapp.com/send?phone=573053784470&text=hola%20vengo%20de%20su%20plataforma%20web%20y%20estoy%20interesado/a%20en%20el%20*Tejido%20Profundo*%20de%20*60%20min.*";
        break;
        case "90":
            timeSelect =variables.tiempo[2];
            parrafo = textoInfo.tejidoProfundo[2];
            price = precios.T[2];
            link="https://api.whatsapp.com/send?phone=573053784470&text=hola%20vengo%20de%20su%20plataforma%20web%20y%20estoy%20interesado/a%20en%20el%20*Tejido%20Profundo*%20de%20*90%20min.*";
        break;
    }
    cuerpo.hidden=visible;
    Total.hidden=visible;
    document.getElementById("header").innerHTML = encabezados.T + timeSelect;
    cuerpo.innerHTML = parrafo;
    document.getElementById("valor").innerHTML = price;
    botonReserv.hidden=visible;
    document.getElementById("reserva").hidden=oculto;
    document.getElementById("HyB").scrollIntoView({ behavior: 'smooth' });
    pedirServicio.href=link;


}

function elegidoR(){

    var selectRitual = document.getElementById("servicioR");
    var selectValueR = selectRitual.value;
    let link="";

    switch(selectValueR){
        case "0" :
            timeSelect  =variables.else[2] + alert("Por favor elige un ritual");
        break;
        case "30":
            timeSelect  =variables.ritual[0];
            parrafo = textoInfo.ritualInfo[0];
            price = precios.R[0];
            link="https://api.whatsapp.com/send?phone=573053784470&text=hola%20vengo%20de%20su%20plataforma%20web%20y%20estoy%20interesado/a%20en%20el%20*Ritual%20del%20Oro.*";
        break;
        case "60":
            timeSelect =variables.ritual[1];
            parrafo = textoInfo.ritualInfo[1];
            price = precios.R[1];
            link="https://api.whatsapp.com/send?phone=573053784470&text=hola%20vengo%20de%20su%20plataforma%20web%20y%20estoy%20interesado/a%20en%20el%20*Efecto%20Satinado.*";
        break;
        case "90":
            timeSelect =variables.ritual[2];
            parrafo = textoInfo.ritualInfo[2];
            price = precios.R[2];
            link="https://api.whatsapp.com/send?phone=573053784470&text=hola%20vengo%20de%20su%20plataforma%20web%20y%20estoy%20interesado/a%20en%20el%20*Mar%20de%20Antillas.*";
        break;
    }
    cuerpo.hidden=visible;
    Total.hidden=visible;
    document.getElementById("header").innerHTML = encabezados.R + timeSelect;
    cuerpo.innerHTML = parrafo;
    document.getElementById("valor").innerHTML = price;
    botonReserv.hidden=visible;
    document.getElementById("reserva").hidden=oculto;
    document.getElementById("HyB").scrollIntoView({ behavior: 'smooth' });
    pedirServicio.href=link;


}

function elegidoE() {

    var selectEspecial = document.getElementById("servicioE");
    var selectValueE = selectEspecial.value;
    let link="";

    switch(selectValueE){
        case "0" :
            timeSelect  =variables.else[2] + alert("Por favor elige un masaje especial");
        break;
        case "1":
            timeSelect  =variables.especial[0];
            parrafo = textoInfo.especialInfo[0];
            price = precios.E[0];
            link="https://api.whatsapp.com/send?phone=573053784470&text=hola%20vengo%20de%20su%20plataforma%20web%20y%20estoy%20interesado/a%20en%20el%20*Spa%20de%20Amigas.*";
        break;
        case "2":
            timeSelect =variables.especial[1];
            parrafo = textoInfo.especialInfo[1];
            price = precios.E[1];
            link="https://api.whatsapp.com/send?phone=573053784470&text=hola%20vengo%20de%20su%20plataforma%20web%20y%20estoy%20interesado/a%20en%20el%20*Spa%20Romantico.*";
        break;
        case "3":
            timeSelect =variables.especial[2];
            parrafo = textoInfo.especialInfo[2];
            price = precios.E[2];
            link="https://api.whatsapp.com/send?phone=573053784470&text=hola%20vengo%20de%20su%20plataforma%20web%20y%20estoy%20interesado/a%20en%20el%20*Baño%20de%20Novia.*";
        break;
        
    }
    cuerpo.hidden=visible;
    Total.hidden=visible;
    document.getElementById("header").innerHTML = encabezados.E + timeSelect;
    cuerpo.innerHTML = parrafo;
    document.getElementById("valor").innerHTML = price;
    botonReserv.hidden=visible;
    document.getElementById("reserva").hidden=oculto;
    document.getElementById("HyB").scrollIntoView({ behavior: 'smooth' });
    pedirServicio.href=link;


}

function elegidoH() {

    var selectEspecial = document.getElementById("servicioH");
    var selectValueH = selectEspecial.value;
    let link ="";

    switch(selectValueH){
        case "0" :
            timeSelect  =variables.else[2] + alert("Por favor elige un tipo de facial");
        break;
        case "1":
            timeSelect  =variables.facial[0];
            parrafo = textoInfo.facial[0];
            price = precios.F[0];
            link="https://api.whatsapp.com/send?phone=573053784470&text=hola%20vengo%20de%20su%20plataforma%20web%20y%20estoy%20interesado/a%20en%20el%20*Servicio%20de%20Higiene%20Facial.*";
        break;
        case "2":
            timeSelect =variables.facial[1];
            parrafo = textoInfo.facial[1];
            price = precios.F[1];
            link="https://api.whatsapp.com/send?phone=573053784470&text=hola%20vengo%20de%20su%20plataforma%20web%20y%20estoy%20interesado/a%20en%20el%20*Servicio%20de%20Hidratación%20Facial.*";
        break;
        case "3":
            timeSelect =variables.facial[2];
            parrafo = textoInfo.facial[2];
            price = precios.F[2];
            link="";
        break;
        
    }
    cuerpo.hidden=visible;
    Total.hidden=visible;
    document.getElementById("header").innerHTML = encabezados.F + timeSelect;
    cuerpo.innerHTML = parrafo;
    document.getElementById("valor").innerHTML = price;
    botonReserv.hidden=visible;
    document.getElementById("reserva").hidden=oculto;
    document.getElementById("HyB").scrollIntoView({ behavior: 'smooth' });
    pedirServicio.href=link;


}
function mostrarSelectM()
    {
        contenedorS.selectM.hidden=visible;
        contenedorS.selectT.hidden=oculto;
        contenedorS.selectR.hidden=oculto;
        contenedorS.selectE.hidden=oculto;
        contenedorS.selectH.hidden=oculto;
    }
function mostrarSelectT()
    {
        contenedorS.selectM.hidden=oculto;
        contenedorS.selectT.hidden=visible;
        contenedorS.selectR.hidden=oculto;
        contenedorS.selectE.hidden=oculto;
        contenedorS.selectH.hidden=oculto;
    }
function mostrarSelectR()
    {
        contenedorS.selectM.hidden=oculto;
        contenedorS.selectT.hidden=oculto;
        contenedorS.selectR.hidden=visible;
        contenedorS.selectE.hidden=oculto;
        contenedorS.selectH.hidden=oculto;
    }
function mostrarSelectE()
    {
        contenedorS.selectM.hidden=oculto;
        contenedorS.selectT.hidden=oculto;
        contenedorS.selectR.hidden=oculto;
        contenedorS.selectE.hidden=visible;
        contenedorS.selectH.hidden=oculto;
    }
function mostrarSelectH()
    {
        contenedorS.selectM.hidden=oculto;
        contenedorS.selectT.hidden=oculto;
        contenedorS.selectR.hidden=oculto;
        contenedorS.selectE.hidden=oculto;
        contenedorS.selectH.hidden=visible;
    }
function onformReserv()
    {
        document.getElementById("reserva").hidden=visible;
    }
    
function scrollToServices(){

    document.getElementById("services").scrollIntoView({ behavior:'smooth' });
}
scrollToServices();

