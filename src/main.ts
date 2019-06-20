import {Trailer} from './model/Trailer';
import {Film} from './model/Film';

function main(){

    let trailer = new Trailer(
        "Mon, 27 Jul 2015 00:00:00 -0700",
        "/trailers/lions_gate/12rounds3lockdown/",
        "Trailer",
        false,
        true
    );

    let film = new Film(
        "12 Rounds 3: Lockdown",
        "Fri, 11 Sep 2015 00:00:00 -0700",
        "Lionsgate",
        "http://trailers.apple.com/trailers/lions_gate/12rounds3lockdown/images/poster.jpg",
        "/trailers/lions_gate/12rounds3lockdown/",
        "R",
        ["Action and Adventure"],
        "Stephen Reynolds",
        [
            "Dean Ambrose",
            "Roger Cross",
            "Daniel Cudmore",
            "Lochlyn Munro",
            "Ty Olsson",
            "Sarah Smyth"
        ],
        [trailer]
    );

    console.log(film);

}

main();