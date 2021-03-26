import { Component } from '@angular/core';
import {  OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { MenuItem } from "primeng/api";
import { SlideMenu } from "primeng/slidemenu";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
//   styleUrls:[ `
//   :host ::ng-deep .ui-slidemenu {
//     width: 13.5em;
//   }
// `]
})
export class AppComponent {
  // title = 'NgPoc';
  @ViewChild("myMenu") slider: SlideMenu;
  items: MenuItem[];
  public bLabel = "";
  bLabelStack: string[] = [];
  ngOnInit() {
    this.items = [
      {
        label: "File",
        icon: "pi pi-fw pi-file",
        command: (event: any) => {
          this.doSomething(event);
        },
        items: [
          {
            label: "New",
            icon: "pi pi-fw pi-plus",
            command: (event: any) => {
              this.doSomething(event);
            },
            items: [
              {
                label: "Bookmark",
                icon: "pi pi-fw pi-bookmark",
                command: (event: any) => {
                  this.doSomething(event);
                }
              },
              {
                label: "Video",
                icon: "pi pi-fw pi-video"
              }
            ]
          },
          {
            label: "Delete",
            icon: "pi pi-fw pi-trash"
          },
          {
            separator: true
          },
          {
            label: "Export",
            icon: "pi pi-fw pi-external-link"
          }
        ]
      },
      {
        label: "Edit",
        icon: "pi pi-fw pi-pencil",
        command: (event: any) => {
          this.doSomething(event);
        },
        items: [
          {
            label: "Left",
            icon: "pi pi-fw pi-align-left",
            command: (event: any) => {
              this.doSomething(event);
            }
          },
          {
            label: "Right",
            icon: "pi pi-fw pi-align-right"
          },
          {
            label: "Center",
            icon: "pi pi-fw pi-align-center"
          },
          {
            label: "Justify",
            icon: "pi pi-fw pi-align-justify"
          }
        ]
      },
      {
        label: "Users",
        icon: "pi pi-fw pi-user",
        command: (event: any) => {
          this.doSomething(event);
        },
        items: [
          {
            label: "New",
            icon: "pi pi-fw pi-user-plus"
          },
          {
            label: "Delete",
            icon: "pi pi-fw pi-user-minus"
          },
          {
            label: "Search",
            icon: "pi pi-fw pi-users",
            command: (event: any) => {
              this.doSomething(event);
            },
            items: [
              {
                label: "Filter",
                icon: "pi pi-fw pi-filter",
                items: [
                  {
                    label: "Print",
                    icon: "pi pi-fw pi-print"
                  }
                ]
              },
              {
                icon: "pi pi-fw pi-bars",
                label: "List"
              }
            ]
          }
        ]
      },
      {
        label: "Events",
        icon: "pi pi-fw pi-calendar",
        command: (event: any) => {
          this.doSomething(event);
        },
        items: [
          {
            label: "Edit",
            icon: "pi pi-fw pi-pencil",
            items: [
              {
                label: "Save",
                icon: "pi pi-fw pi-calendar-plus"
              },
              {
                label: "Delete",
                icon: "pi pi-fw pi-calendar-minus"
              }
            ]
          },
          {
            label: "Archieve",
            icon: "pi pi-fw pi-calendar-times",
            items: [
              {
                label: "Remove",
                icon: "pi pi-fw pi-calendar-minus"
              }
            ]
          }
        ]
      },
      {
        separator: true
      },
      {
        label: "Quit",
        icon: "pi pi-fw pi-power-off"
      }
    ];
  }

  doSomething(data) {
    this.bLabel = data.item.label;
    this.bLabelStack.push(data.item.label);
    // this.bLabel = this.bLabelStack.pop();
    console.log(this.bLabelStack);
    console.log(this.slider);
    console.log(data.item.label);
  }
  goBack(e) {
    this.bLabelStack.pop();
    return this.bLabel;
  }
}
