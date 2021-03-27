import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  /*table*/
  userList$: Observable<User[]> = this.userService.getAll();

  direction: number = 1;
  columnKey: string = '';

               /*table                       */
  constructor(private userService: UserService) { }


  ngOnInit(): void {
  }

  /* sorter */
  onColumnSelect(key: string): void {
    if (this.columnKey === key) {
      this.direction = this.direction * -1;
    } else {
      this.direction = 1;
    }
    this.columnKey = key;
  }

}
