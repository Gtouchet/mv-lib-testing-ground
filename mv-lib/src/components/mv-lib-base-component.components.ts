import { computed, signal } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

export abstract class MvLibBaseComponent<T = unknown> implements ControlValueAccessor {

    /**
     * Forms
     */
	private onFormValueChange: (value: T | undefined) => void = () => undefined;
	private onFormTouched: () => void = () => undefined;

	private formDisabled = signal(false);
	protected isFormDisabled = computed(() => this.formDisabled());

	protected abstract setControlValue(value: T | undefined): void;

	protected emitFormValueChange(value: T | undefined): void {
		this.onFormValueChange(value);
	}

	protected emitFormTouched(): void {
		this.onFormTouched();
	}

	writeValue(value: T | null): void {
		this.setControlValue(value ?? undefined);
	}

	registerOnChange(fn: (value: T | undefined) => void): void {
		this.onFormValueChange = fn;
	}

	registerOnTouched(fn: () => void): void {
		this.onFormTouched = fn;
	}

	setDisabledState(isDisabled: boolean): void {
		this.formDisabled.set(isDisabled);
	}
}