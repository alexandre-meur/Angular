import {Genre} from './Genre';
import {Religion} from './Religion';
import {Boisson} from './Boisson';

export class Person{

    constructor(
        public prenom:string,
        public nom:string,
        public genre:Genre,
        private religion?:Religion
    ) {this.toString = toString};


    /**
     * Affiche la boisson et retourne si la personne peut la boire
     * @param boisson
     */
     boire(boisson:Boisson): boolean{
        console.log(boisson.nom,' : ',boisson.propriete.join(', '));
            return boisson.propriete.filter( p => p === 'alcool' || p === 'bio' ).length > 0;

    }

    /**
     * toString()
     */
    toString(): string{
        console.log('tostring()');
        return this.nom+' '+this.prenom;
    }
}