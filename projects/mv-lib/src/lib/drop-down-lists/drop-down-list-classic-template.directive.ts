import { Directive, TemplateRef } from "@angular/core";

export interface MvLibDropDownListTemplateContext<T> {
  $implicit: T;
}

@Directive({
  selector: 'ng-template[mvLibDropDownListTemplate]',
  standalone: true,
})
export class MvLibDropDownListTemplateDirective<T> {
  public constructor(
    public readonly templateRef: TemplateRef<MvLibDropDownListTemplateContext<T>>,
  ) {}
}