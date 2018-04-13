import { Component, Input, OnChanges } from '@angular/core';
import { DataTable } from './DataTable';
import * as _ from 'lodash';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'rowsInPage',
    template: `
    <mfPaginator #p [mfTable]="mfTable">
    <div class="dataTables_length" style="display: inline-block; margin-left:8px;">
        <label>
            Exibir
            <select class="form-control input-sm" style="display: inline-block; width: 56px; margin-left: 5px; margin-right: 5px;"
                *ngIf="p.dataLength > minRowsOnPage" (change)="p.setRowsOnPage(rowvalue)" [(ngModel)]="rowvalue">
                <option class="page-item" *ngFor="let rows of rowsOnPageSet" value="{{rows}}">{{rows}}</option>
            </select>
            Registros
        </label>
    </div>
    </mfPaginator>`
})
// tslint:disable-next-line:component-class-suffix
export class DataTableRowsInPage implements OnChanges {
    constructor() { }
    @Input('rowsOnPageSet') rowsOnPageSet = [];
    public rowvalue = 10;
    @Input('mfTable') mfTable: DataTable;

    minRowsOnPage = 0;

    ngOnChanges(changes: any): any {
        if (changes.rowsOnPageSet) {
            this.minRowsOnPage = _.min(this.rowsOnPageSet);
        }
    }
}
