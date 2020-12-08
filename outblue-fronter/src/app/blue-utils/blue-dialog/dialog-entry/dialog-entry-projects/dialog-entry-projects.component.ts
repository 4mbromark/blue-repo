import { RoutingService } from 'src/app/blue-utils/blue-service/routing.service';
import { User } from 'src/app/blue-utils/blue-object/User';
import { UserService } from 'src/app/blue-utils/blue-service/user.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ProjectsComponent } from 'src/app/blue-frame/blue-projects/projects.component';
import { LanguageLabel } from 'src/app/blue-utils/blue-language/language-labels';
import { LanguageService } from 'src/app/blue-utils/blue-service/language.service';
import { Config } from 'src/app/blue-utils/blue-enum/word/config';

@Component({
  selector: 'app-dialog-entry-projects',
  templateUrl: './dialog-entry-projects.component.html',
  styleUrls: ['./dialog-entry-projects.component.css']
})
export class DialogEntryProjectsComponent implements OnInit {

  name: string;

  constructor(
    private userService: UserService,
    private routingService: RoutingService,
    private languageService: LanguageService,
    private dialog: MatDialog
  ) {
    this.userService.getUser().subscribe((user: User) => {
      this.name = user.name;
    });
  }

  ngOnInit(): void {
    const dialog = this.dialog.open(ProjectsComponent, {
      width: '95%',
      height: '88%',
      data: {
        icon: 'bolt',
        title: this.gbl(LanguageLabel.WINDOW_PROJECTS).replace(Config.NAME, this.name)
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
