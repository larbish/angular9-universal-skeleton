import { Component, OnInit } from '@angular/core';
import { Session } from 'src/models/session.model';
import { SessionService } from '../components/session/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public session: Session;

  public loading: boolean;

  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {
    // Subcribe to session change
    this.sessionService.session$.subscribe((s) => this.onProfileChange(s));
  }

  private onProfileChange(session: Session): void {
    // If no session or no token, return
    if (!session || !session.token) {
      this.session = null;
      return;
    }

    this.session = session;
  }
}
