import { RoutingService } from 'src/app/blue-utils/blue-service/routing.service';
import { ProjectsComponent } from './../../../../blue-frame/blue-projects/projects.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';
import { LanguageService } from 'src/app/blue-utils/blue-service/language.service';

@Component({
  selector: 'app-dialog-entry-admin',
  templateUrl: './dialog-entry-admin.component.html',
  styleUrls: ['./dialog-entry-admin.component.css']
})
export class DialogEntryAdminComponent implements OnInit {

  constructor(
    private routingService: RoutingService,
    private languageService: LanguageService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const dialog = this.dialog.open(ProjectsComponent, {
      width: '95%',
      height: '88%',
      data: {
        icon: 'shield-alt',
        title: this.gbl(LanguageLabel.WINDOW_ADMINISTRATION)
      }
    });
    dialog.afterClosed().subscribe(() => {
      this.routingService.navigateBack();
    });
  }

  gbl(label: string): string {
    return this.languageService.getByLanguage(label);
  }
}
