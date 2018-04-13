import { Component, Input, OnChanges } from '@angular/core';
import { DataTable } from './DataTable';
import * as _ from 'lodash';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'mfBootstrapPaginator',
    templateUrl: './bootstrap-paginator.html'
})
// tslint:disable-next-line:component-class-suffix
export class BootstrapPaginator {
    @Input('mfTable') mfTable: DataTable;
    constructor() { }
}
