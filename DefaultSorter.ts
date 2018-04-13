import { Component, Input, OnInit } from '@angular/core';
import { DataTable, SortEvent } from './DataTable';

@Component({
    selector: 'app-datatable-sorter',
    template: `
        <a style="cursor: pointer; width: 90%; position: inherit; text-decoration: none; color: #707070;"
        (click)="sort()" class="text-nowrap">
            <ng-content></ng-content>
            <span *ngIf="isSortedByMeAsc" class="fa fa-sort-asc" aria-hidden="true"></span>
            <span *ngIf="isSortedByMeDesc" class="fa fa-sort-desc" aria-hidden="true"></span>
        </a>`
})
// tslint:disable-next-line:component-class-suffix
export class DefaultSorter implements OnInit {
    // tslint:disable-next-line:no-input-rename
    @Input('by') sortBy: string;

    isSortedByMeAsc = false;
    isSortedByMeDesc = false;

    public constructor(private mfTable: DataTable) {
    }

    public ngOnInit(): void {
        this.mfTable.onSortChange.subscribe((event: SortEvent) => {
            this.isSortedByMeAsc = (event.sortBy === this.sortBy && event.sortOrder === 'asc');
            this.isSortedByMeDesc = (event.sortBy === this.sortBy && event.sortOrder === 'desc');
        });
    }

    sort() {
        if (this.isSortedByMeAsc) {
            this.mfTable.setSort(this.sortBy, 'desc');
        } else {
            this.mfTable.setSort(this.sortBy, 'asc');
        }
    }
}