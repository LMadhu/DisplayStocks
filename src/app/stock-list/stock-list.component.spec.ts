import { TestBed, inject } from '@angular/core/testing';

import { StockListComponent } from './stock-list.component';

describe('a stock-list component', () => {
	let component: StockListComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				StockListComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([StockListComponent], (StockListComponent) => {
		component = StockListComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});