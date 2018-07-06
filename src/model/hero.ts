
export enum GENDER{
    MALE, FEMALE
}

export class Hero{
    constructor(id: number, name: string, date: string, gender: GENDER){
        this.id = id;
        this.name = name;
        this.birthday = date;
        this.gender = GENDER[gender];
        this.firstName = "Evil " + id;
        this.lastName = "God " + id;
    }
    
    private _id : number;
    public get id() : number {
        return this._id;
    }
    public set id(v : number) {
        this._id = v;
    }

    
    private _name : string;
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }
    
    
    private _firstName : string;
    public get firstName() : string {
        return this._firstName;
    }
    public set firstName(v : string) {
        this._firstName = v;
    }
    

    
    private _lastName : string;
    public get lastName() : string {
        return this._lastName;
    }
    public set lastName(v : string) {
        this._lastName = v;
    }
    
    
    private _birthday : string;
    public get birthday() : string {
        return this._birthday;
    }
    public set birthday(v : string) {
        this._birthday = v;
    }

    
    private _gender : string;
    public get gender() : string {
        return this._gender;
    }
    public set gender(v : string) {
        this._gender = v;
    }
    
    
    
}