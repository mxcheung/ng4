import { TestBed, inject } from '@angular/core/testing';

import { ParraService } from './parra.service';
import { KeyValuePair, Player } from './parra.model';

fdescribe('ParraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParraService]
    });
  });

  it('should be created', inject([ParraService], (service: ParraService) => {
    expect(service).toBeTruthy();
  }));

  it('should say Hello', (inject([ParraService], (parraService, mockBackend) => {
    const expectedResult = 'Hello';
    let result = parraService.sayHello();
    expect(result).toEqual(expectedResult);
  })));

  it('should fetch tasks', (inject([ParraService], (parraService, mockBackend) => {
    let tasks: any[] = parraService.getTasks();
    expect(tasks.length).toEqual(3);
  })));

  it('should fetch tasks by key', (inject([ParraService], (parraService, mockBackend) => {
    let task: KeyValuePair = parraService.getTaskByKey('abc');
    expect(task.key).toEqual('abc');
    expect(task.value).toEqual('120');

    task = parraService.getTaskByKey('def');
    expect(task.key).toEqual('def');
    expect(task.value).toEqual('240');

  })));

  it('should fetch tasks by value', (inject([ParraService], (parraService, mockBackend) => {
    let tasks: KeyValuePair[] = parraService.getTaskByValue('120');
    expect(tasks.length).toEqual(1);
    let task: KeyValuePair = tasks[0];
    expect(task.key).toEqual('abc');
    expect(task.value).toEqual('120');

    tasks = parraService.getTaskByValue('240');
    expect(tasks.length).toEqual(2);
  })));

  it('should fetch kv', (inject([ParraService], (parraService, mockBackend) => {
    let kv: KeyValuePair = parraService.getKV();
    expect(kv.key).toEqual('abc');
    expect(kv.value).toEqual('zzz');
  })));

  it('should fetchplayer', (inject([ParraService], (parraService, mockBackend) => {
    let player: Player = parraService.getPlayer();
    expect(player.firstName).toEqual('joe');
    expect(player.lastName).toEqual('bloggs');
    expect(player.stats.length).toEqual(3);
  })));

  it('should fetchplayers', (inject([ParraService], (parraService, mockBackend) => {
    let players: Player[] = parraService.getPlayers();
    expect(players.length).toEqual(3);
  })));

  it('should fetchplayers by first name', (inject([ParraService], (parraService, mockBackend) => {
    let players: Player[] = parraService.getPlayersByFirstName('tim');
    expect(players.length).toEqual(1);
  })));

  it('should fetchplayers by position', (inject([ParraService], (parraService, mockBackend) => {
    let players: Player[] = parraService.getPlayersByPosition('prop');
    expect(players.length).toEqual(2);
  })));

  it('should fetch player age', (inject([ParraService], (parraService, mockBackend) => {
    let players: Player[] = parraService.getPlayersByFirstName('tim');
    expect(players.length).toEqual(1);
    let player = players[0];
    let age = parraService.getPlayerAge(player);
    expect(age).toEqual('27');
  })));

  it('should fetchplayers by keyvalue', (inject([ParraService], (parraService, mockBackend) => {
    let players: Player[] = []
    let kv: KeyValuePair = { key: 'position', value: 'prop' };
    players = parraService.filterPlayersByKeyValue(kv);
    expect(players.length).toEqual(2);
    kv = { key: 'age', value: '27' };
    players = parraService.filterPlayersByKeyValue({ key: 'age', value: '27' });
    expect(players.length).toEqual(1);
  })));

});
