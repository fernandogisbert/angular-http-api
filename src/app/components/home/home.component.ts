import { Component, OnInit } from '@angular/core';
import { UsersService} from '../../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userList: any[] = [];
  constructor(private users: UsersService) { }

  ngOnInit(): void {
    this.users.getAllUsers()
    .subscribe((data: any) => {
      this.userList = data.results;
      console.log(this.userList);
    }, error => {error})
  }

}
