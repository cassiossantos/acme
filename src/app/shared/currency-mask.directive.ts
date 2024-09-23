import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[acmeCurrencyMask]',
})
export class CurrencyMaskDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = this.el.nativeElement;
    const value = input.value.replace(/\D/g, '');
    const formattedValue = this.formatCurrency(value);
    input.value = formattedValue;
  }

  private formatCurrency(value: string): string {
    if (!value) return '';

    const intValue = parseInt(value, 10);
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return formatter.format(intValue / 100);
  }
}
