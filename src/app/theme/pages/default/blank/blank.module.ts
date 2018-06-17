import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { BlankComponent } from './blank.component';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { DatosService } from '../../../../datos.service';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    {
        'path': '',
        'component': DefaultComponent,
        'children': [
            {
                'path': '',
                'component': BlankComponent,
            },
        ],
    },
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule, AmChartsModule,
        AngularMultiSelectModule,
        FormsModule
    ], exports: [
        RouterModule,
    ], providers: [
        DatosService
    ], declarations: [
        BlankComponent,
    ],
})
export class BlankModule {

}