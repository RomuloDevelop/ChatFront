class Person {
  private id: string;
  private name: string;
  private room: string;
  public info: string;

  constructor(id:string, name:string, room:string, info?: string ) {
    this.id=id;
    this.name=name;
    this.room=room;
    this.info=info?info:"";
  }

  
  set Id(value: string) {
    if(value != null)
      this.id = this.id.trim();
  }

  get Id(): string {
    return this.id;
  }

  set Name(value: string) {
    if(value != null)
      this.name = this.name.trim();
  }

  get Name(): string {
    return this.name;
  }

  set Room(value: string) {
    if(value != null)
      this.room = this.room.trim();
  }

  get Room(): string {
    return this.room;
  }

  getDescription(){
    return {
      id: this.Id,
      name: this.Name,
      room: this.Room,
      info: this.info,
    }
  }
}

export default Person;
