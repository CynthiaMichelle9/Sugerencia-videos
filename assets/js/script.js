const ModuloVideo = (function() {
    function insertarVideo(urlVideo, idIframe) {
        const iframe = document.getElementById(idIframe);
        iframe.setAttribute("src", urlVideo);
    }

    return {
        insertarVideo: insertarVideo
    };
})();

class Multimedia {
    constructor(url) {
        this._url = url; 

        this.getUrl = function() {
            return this._url;
        };

        this.setInicio = function() {
            return 'Este método es para realizar un cambio en la URL del video';
        };
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }

    playMultimedia() {
        const url = this.getUrl();
        ModuloVideo.insertarVideo(url, this._id);
    }

    setInicio(tiempo) {
        const url = `${this.getUrl()}?start=${tiempo}`;
        ModuloVideo.insertarVideo(url, this._id);
    }
}

// Instancia para música
const reproductorMusica = new Reproductor("https://www.youtube.com/embed/B1DGKaZRDMA", "musica");

// Instancia para película
const reproductorPelicula = new Reproductor("https://www.youtube.com/embed/Ua3PLSNGVBE", "peliculas");

// Instancia para serie
const reproductorSerie = new Reproductor("https://www.youtube.com/embed/mogSbMD6EcY", "series");

// Invocar al método playMultimedia para cada instancia
reproductorMusica.playMultimedia();
reproductorPelicula.playMultimedia();
reproductorSerie.playMultimedia();

// Modificar el tiempo de inicio para la instancia de la película
reproductorPelicula.setInicio(3); // Establece el tiempo de inicio en 3 segundos
