import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { User } from 'src/app/models/users.model';
import { UsersFacade } from '../state/users.facade';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  users!: User[];
  searchUser: string = '';

  constructor(private facade: UsersFacade) {}

  ngOnInit(): void {
    this.facade.loadUsersData();
    this.facade.getUsers$
      .pipe(filter((data) => Boolean(data.length)))
      .subscribe((res) => {
        this.users = [...res];
      });
  }
}
