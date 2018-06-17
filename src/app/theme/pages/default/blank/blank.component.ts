
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import { DatosService } from '../../../../datos.service';


@Component({
    selector: 'app-blank',
    templateUrl: './blank.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class BlankComponent implements OnInit {

    private employees: any;
    private res1: any;
    private res2: any;
    private res3: any;
    private res4: any;
    private n = 123;
    
    private chart: AmChart; //grafico de barras grande
    private chart2: AmChart; //grafico de lineas
    private chart3: AmChart; //grafico de barras

    
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};

    constructor(private AmCharts: AmChartsService, private datosService: DatosService) { }

    boton() {           
        this.datosService.getDatos(3).subscribe(data => {             
            this.chart2.dataProvider = data.json();
            this.chart2.validateData();            
        });        
    }

    ngOnInit() {
        //this.employees = this.datosService.getDatos();
        //this.respuesta2 = this.datosService.getDatos2();
        this.dropdownList = [
            {"id":1,"itemName":"Pizza"},
            {"id":2,"itemName":"Burger"},
            {"id":3,"itemName":"Momos"},
            {"id":4,"itemName":"French Frise"},
            {"id":5,"itemName":"Spring Roll"},
            {"id":6,"itemName":"Garlic Bread"},
            {"id":7,"itemName":"Icecream"},
            {"id":8,"itemName":"Maggi"},
            {"id":9,"itemName":"Milk"},
            {"id":10,"itemName":"Chilly Paneer"}
          ]

this.selectedItems = [
              {"id":2,"itemName":"Burger"},
              {"id":3,"itemName":"Momos"}

          ];
this.dropdownSettings = { 
                singleSelection: false, 
                text:"Select Food Item",
                selectAllText:'Select All',
                unSelectAllText:'UnSelect All',
                enableSearchFilter: true,
                classes:"myclass custom-class"
              };   
    }

    ngAfterViewInit() {
        var chart = this.AmCharts.makeChart("chartdiv", {
            "theme": "light",
            "type": "serial",
            "dataProvider": this.res3, //el Json con los datos
            "valueAxes": [{
                //"title": "Income in millions, USD" el titulo inferior del grafico
            }],
            "graphs": [{
                "balloonText": "[[category]] -> [[value]]", //el texto del globo al pasar el raton
                "fillAlphas": 1,
                "lineAlpha": 0.2,
                "title": "datos", //????
                "type": "column",
                "valueField": "income" //esto es [[value]], abajo
            }],
            "depth3D": 20,
            "angle": 30,
            "rotate": true,
            "categoryField": "date", //esto es [[category]], izquierda
            "categoryAxis": {
                "gridPosition": "start",
                "fillAlpha": 0.05,
                "position": "left"
            },
            "export": {
                "enabled": true
            }
        });

        this.chart2 = this.AmCharts.makeChart("chartdiv2", {
            "type": "serial",
            "theme": "light",
            "marginRight": 40,
            "marginLeft": 40,
            "autoMarginOffset": 20,
            "mouseWheelZoomEnabled": true,
            "dataDateFormat": "YYYY-MM-DD",
            "valueAxes": [{
                "id": "v1",
                "axisAlpha": 0,
                "position": "left",
                "ignoreAxisWidth": true
            }],
            "balloon": {
                "borderThickness": 1,
                "shadowAlpha": 0
            },
            "graphs": [{
                "id": "g1",
                "balloon": {
                    "drop": true,
                    "adjustBorderColor": false,
                    "color": "#ffffff"
                },
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "bulletColor": "#FFFFFF",
                "bulletSize": 5,
                "hideBulletsCount": 50,
                "lineThickness": 2,
                "title": "red line",
                "useLineColorForBulletBorder": true,
                "valueField": "imp_neto",
                "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
            }],
            "chartScrollbar": {
                "graph": "g1",
                "oppositeAxis": false,
                "offset": 30,
                "scrollbarHeight": 3,
                "backgroundAlpha": 0,
                "selectedBackgroundAlpha": 0.1,
                "selectedBackgroundColor": "#888888",
                "graphFillAlpha": 0,
                "graphLineAlpha": 0.5,
                "selectedGraphFillAlpha": 0,
                "selectedGraphLineAlpha": 1,
                "autoGridCount": true,
                "color": "#AAAAAA"
            },
            "chartCursor": {
                "pan": true,
                "valueLineEnabled": true,
                "valueLineBalloonEnabled": true,
                "cursorAlpha": 1,
                "cursorColor": "#258cbb",
                "limitToGraph": "g1",
                "valueLineAlpha": 0.2,
                "valueZoomable": true
            },
            "valueScrollbar": {
                "oppositeAxis": false,
                "offset": 50,
                "scrollbarHeight": 10
            },
            "categoryField": "fecha_albaran_factura",
            "categoryAxis": {
                "parseDates": true,
                "dashLength": 1,
                "minorGridEnabled": true
            },
            "export": {
                "enabled": true
            },
            "dataProvider": []
        });

        this.chart3 = this.AmCharts.makeChart("chartdiv3", {
            "type": "serial",
            "theme": "light",
            "marginRight": 70,
            "dataProvider": [{
                "country": "USA",
                "visits": 3025,
                "color": "#FF0F00"
            }, {
                "country": "China",
                "visits": 1882,
                "color": "#FF6600"
            }, {
                "country": "Japan",
                "visits": 1809,
                "color": "#FF9E01"
            }, {
                "country": "Germany",
                "visits": 1322,
                "color": "#FCD202"
            }, {
                "country": "UK",
                "visits": 1122,
                "color": "#F8FF01"
            }, {
                "country": "France",
                "visits": 1114,
                "color": "#B0DE09"
            }, {
                "country": "India",
                "visits": 984,
                "color": "#04D215"
            }, {
                "country": "Spain",
                "visits": 711,
                "color": "#0D8ECF"
            }, {
                "country": "Netherlands",
                "visits": 665,
                "color": "#0D52D1"
            }, {
                "country": "Russia",
                "visits": 580,
                "color": "#2A0CD0"
            }, {
                "country": "South Korea",
                "visits": 443,
                "color": "#8A0CCF"
            }, {
                "country": "Canada",
                "visits": 441,
                "color": "#CD0D74"
            }],
            "valueAxes": [{
                "axisAlpha": 0,
                "position": "left",
                "title": "Visitors from country"
            }],
            "startDuration": 1,
            "graphs": [{
                "balloonText": "<b>[[category]]: [[value]]</b>",
                "fillColorsField": "color",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "type": "column",
                "valueField": "visits"
            }],
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "country",
            "categoryAxis": {
                "gridPosition": "start",
                "labelRotation": 45
            },
            "export": {
                "enabled": true
            }

        });

    }
    showGraf1()
    {
        
    }
}