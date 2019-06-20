import {Stagiaire} from "./model/Stagiaire";
import {Certification} from "./model/Certification";
import {Genre} from "./model/Genre";
import {Religion} from "./model/Religion";


function main(){

    let alex = new Stagiaire(
        [new Certification('java 8',2019)],
        'alexandre',
        'meur',
        Genre.H,
        Religion.Atheist
    );

    console.log(alex.toString());
}

main();