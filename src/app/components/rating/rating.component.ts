import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-rating',
  template: `
    <ng-container *ngFor="let star of ['', '', '']; let i = index">
      <i
        class="fa fa-2x cursor-pointer me-2"
        [ngClass]="{ 'fa-star': i <= value - 1, 'fa-star-o': i > value - 1 }"
        (click)="handleClick(i + 1)"
      ></i>
    </ng-container>
  `,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true }],
})
export class RatingComponent implements ControlValueAccessor {
  value!: number;

  private onChange: any = () => {};
  private onTouch = () => {};

  writeValue(value: number): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  handleClick(value: number) {
    this.value = value;

    this.onChange(value);
    this.onTouch();
  }
}
