import { Injectable } from '@angular/core';

@Injectable()
export class FootyService {

  // Durations are in minutes

  tasks : any[] = [
    {
      'name':'Write for Envato Tuts+',
      'duration':120
    },
    {
      'name':'Work out',
      'duration':60
    },
    {
      'name':'Procrastinate on Duolingo',
      'duration':240
    }
  ];

  constructor() { }


  sayHello(): string {
    return "Hello";
  }

  public getTasks() : any[] {
    return this.tasks;
  }

  public getTaskNames() : String[] {
    return this.tasks.map((task) => task.name );
  }

}
