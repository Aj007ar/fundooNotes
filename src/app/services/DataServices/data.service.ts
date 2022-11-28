import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject('All notes');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  sendMessage(message: string) {
    this.messageSource.next(message)
  }

}