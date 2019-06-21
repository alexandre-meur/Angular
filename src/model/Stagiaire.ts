import {Person} from "./Person";
import {Certification} from "./Certification";
import {Genre} from "./Genre";
import {Religion} from "./Religion";

export class Stagiaire extends Person{

    constructor(public certifications:Array<Certification>,
                prenom:string,
                nom:string,
                genre:Genre,
                religion?:Religion){
        super(prenom, nom, genre, religion);
    }

    /**
     * toString()
     */
    toString(): string{
        console.log('tostring()');
        return this.nom+' '+this.prenom;
    }
}