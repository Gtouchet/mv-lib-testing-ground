import { Directive, TemplateRef } from "@angular/core";

export interface MvLibDropdownPlaceholderTemplateContext {

}
@Directive({
  selector: 'ng-template[mvLibDropdownPlaceholderTemplate]',
  standalone: true,
})
export class MvLibDropdownPlaceholderTemplateDirective {
  public constructor(
    public readonly templateRef: TemplateRef<MvLibDropdownPlaceholderTemplateContext>,
  ) {}
}

export interface MvLibDropdownSelectedTemplateContext<T> {
  $implicit: T;
}
@Directive({
  selector: 'ng-template[mvLibDropdownSelectedTemplate]',
  standalone: true,
})
export class MvLibDropdownSelectedTemplateDirective<T> {
  public constructor(
    public readonly templateRef: TemplateRef<MvLibDropdownSelectedTemplateContext<T>>,
  ) {}
}

export interface MvLibDropdownItemTemplateContext<T> {
  $implicit: T;
}
@Directive({
  selector: 'ng-template[mvLibDropdownItemTemplate]',
  standalone: true,
})
export class MvLibDropdownItemTemplateDirective<T> {
  public constructor(
    public readonly templateRef: TemplateRef<MvLibDropdownItemTemplateContext<T>>,
  ) {}
}

export const MvLibDropdownDirectives = [
  MvLibDropdownPlaceholderTemplateDirective,
  MvLibDropdownSelectedTemplateDirective,
  MvLibDropdownItemTemplateDirective,
];
