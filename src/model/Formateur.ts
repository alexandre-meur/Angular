import { Person } from './Person';
import { Connaissance} from "./Connaissance";
import {Genre} from "./Genre";
import {Religion} from "./Religion";

export class Formateur extends Person{

    constructor(private connaissances:Array<Connaissance>,
                prenom:string,
                nom:string,
                genre:Genre,
                religion?:Religion) {
        super(prenom, nom, genre, religion);
    };

    /**
     * Renvoie les connaissances avec 2 années ou plus d'expériences
     */
    canTeach(){
        return this.connaissances.filter( con => con.anneeExperience >= 2);
    }
}