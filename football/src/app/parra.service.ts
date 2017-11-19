import { Injectable } from '@angular/core';
import { KeyValuePair, Player } from './parra.model';

@Injectable()
export class ParraService {


  tasks: KeyValuePair[] = [
    {
      key: 'abc',
      value: '120'
    },
    {
      key: 'def',
      value: '240'
    },
    {
      key: 'ghi',
      value: '240'
    }
  ];

  player: Player = {
    firstName: 'joe',
    lastName: 'bloggs',
    stats: this.tasks
  };

  players: Player[] = [
    {
      firstName: 'tim', lastName: 'mannah',
      stats: [
        { key: 'position', value: 'prop' },
        { key: 'age', value: '27' },
        { key: 'ghi', value: '240' }
      ]
    },
    {
      firstName: 'Daniel', lastName: 'Alvaro',
      stats: [
        { key: 'position', value: 'prop' },
        { key: 'age', value: '24' },
        { key: 'ghi', value: '240' }
      ]
    },
    {
      firstName: 'jimmy', lastName: 'jones',
      stats: [
        { key: 'position', value: 'halfback' },
        { key: 'age', value: '24' },
        { key: 'ghi', value: '240' }
      ]
    }

  ];


  constructor() { }

  sayHello(): string {
    return "Hello";
  }

  public getTasks(): KeyValuePair[] {
    return this.tasks;
  }

  public getTaskByKey(key: string): KeyValuePair {
    return this.tasks.filter(task => task.key === key)[0];
  }

  public getTaskByValue(value: string): KeyValuePair[] {
    return this.tasks.filter(task => task.value === value);
  }

  public getKV(): KeyValuePair {
    let kv: KeyValuePair = {
      key: 'abc',
      value: 'zzz'
    }
    return kv;
  }

  public getPlayer(): Player {
    return this.player;
  }

  public getPlayers(): Player[] {
    return this.players;
  }

  public getPlayersByFirstName(firstName: string): Player[] {
    return this.players.filter(player => player.firstName === firstName);
  }


  public getPlayerPosition(player : Player ): String {
    return player.stats.filter(stat => stat.key === 'position')[0].value;
  }

  getPlayerAge( player : Player ): string {
    let value : string = player.stats.filter(stat => stat.key === 'age')[0].value;
    return value;
  }

  public getPlayersByPosition(position: string): Player[] {
    let filteredItems: any[] = new Array();
    this.players.forEach(function (player) {
      let stats: KeyValuePair[] = player.stats;
      let stat = stats.filter(stat => stat.key === 'position')[0];
      if (stat.value === position) {
        filteredItems.push(player);
      }
    });
    return filteredItems;
  }

  public filterPlayersByKeyValue(kv : KeyValuePair ): Player[] {
    let filteredItems: any[] = new Array();
    this.players.forEach(function (player) {
      let stats: KeyValuePair[] = player.stats;
      let stat = stats.filter(stat => stat.key === kv.key)[0];
      if (stat.value === kv.value) {
        filteredItems.push(player);
      }
    });
    return filteredItems;
  }
}
