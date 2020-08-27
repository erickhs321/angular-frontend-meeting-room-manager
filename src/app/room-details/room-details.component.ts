import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { RoomListComponent } from '../room-list';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss'],
})
export class RoomDetailsComponent implements OnInit {
  id: number;
  room: Room;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private RoomService: RoomService
  ) {}

  ngOnInit() {
    this.room = new Room();
    this.id = this.route.snapshot.params['id'];

    this.RoomService.getRoom(this.id).subscribe(
      (data) => {
        console.log(data);
        this.room = data;
      },
      (error) => console.log(error)
    );
  }

  list() {
    this.router.navigate(['rooms']);
  }
}
