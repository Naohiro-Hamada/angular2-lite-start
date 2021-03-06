import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'todo-detail',
  template: `
    <p class="input-group">
      <input type="text" [ngModel]="data" class="form-control">
      <span class="input-group-btn">
        <button class="btn btn-danger" (click)="onClick($event)" aria-label="Remove">X</button>
      </span>
    </p>
  `
})

export class DetailApp {
  @Input('todo-data')
  private data: string;

  @Output('on-delete')
  private onDeleteHogeHoge = new EventEmitter();

  onClick($event): void {
    this.onDeleteHogeHoge.emit($event);
  }
}
