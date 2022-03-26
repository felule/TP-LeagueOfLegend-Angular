export class Champion {
    name?: string;
    img?: ArrayBuffer | string | null;
    id?: string;

    constructor(name: string, id: string){
        this.name = name;
        this.id = id;
    }
}