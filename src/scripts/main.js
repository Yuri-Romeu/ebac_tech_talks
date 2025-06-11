AOS.init();

const dataDoEvento = new Date('Dec 25, 2025 20:00:00');
const timeStampDoEvento = dataDoEvento.getTime();

const contaTempo = setInterval(() => {
     const agora = new Date();
     const timeStampAtual = agora.getTime();

     const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

     const diasEmMs = 1000 * 60 * 60 * 24;
     const horasEmMs = 1000 * 60 * 60;
     const minutosEmMs = 1000 * 60;

     const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
     const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horasEmMs);
     const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMs);
     const segundosAteOEVento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);

     console.log(
          `${diasAteOEvento} - ${horasAteOEvento} - ${minutosAteOEvento} - ${segundosAteOEVento}`,
     );

     document.getElementById(
          'contador',
     ).innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEVento}s`;

     if (distanciaAteOEvento < 0) {
          clearInterval(contaTempo);
          document.getElementById('contador').innerHTML('Evento Expirado');
     }
}, 1000);
