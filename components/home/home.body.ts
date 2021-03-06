import {Component} from '@angular/core'
import {DetailApp} from './home.detail'
import {TodoStore} from '../../services/todostore';

@Component({
  selector: 'todo-body',
  template: `
    <todo-detail *ngFor="let item of todolist; let i = index"
    todo-data="{{item}}"
    (on-delete)="onDeleteHoge(i)"></todo-detail>
    `,
  directives: [DetailApp]
})

export class TodoBody {
  private todolist: string[];

  constructor (private todoStore: TodoStore) {
   this.todolist = todoStore.getList();
  }

  onDeleteHoge(index) {
    this.todoStore.delete(index);
  }

}
