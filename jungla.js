function jungla() {
    let jaguar = 104;
    let mono = 116;
    let tucan = mono;
    let serpiente = 112;
    let liana = 58;
    let rio = 47;
    let arbol = rio;
    let cocodrilo = 48;
    let tigre = 99;
    let caiman = 51;
    let loro = 108;
    let pantera = cocodrilo;
    let rana = mono;
    let anaconda = 52;
    let perezoso = serpiente;
    let mariposa = mono;
    let helecho = 46;
    let selva = 115;
    let guacamayo = 105;
    let iguana = mono;
    let lianaGrande = 101;
    let rioGrande = rio;

    let sonidosDeLaJungla = [
        jaguar, mono, tucan, serpiente, liana, rio, arbol, cocodrilo, tigre, caiman, loro, pantera, rana, anaconda, perezoso, mariposa, helecho, selva, guacamayo, iguana, lianaGrande, rioGrande
    ];

    let exploracion = sonidosDeLaJungla.map(animal => String.fromCharCode(animal)).join('');
    console.log(exploracion);
}

jungla();
