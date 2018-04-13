import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {DataTable} from './DataTable';
import {DefaultSorter} from './DefaultSorter';
import {Paginator} from './Paginator';
import {BootstrapPaginator} from './BootstrapPaginator';
import { DataTableRowsInPage } from './DataTableRowsInPage';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule
    ],
    declarations: [
        DataTable,
        DefaultSorter,
        Paginator,
        BootstrapPaginator,
        DataTableRowsInPage
    ],
    exports: [
        DataTable,
        DefaultSorter,
        Paginator,
        BootstrapPaginator,
        DataTableRowsInPage
    ]
})
export class DataTableModule {

}
