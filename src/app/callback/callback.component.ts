import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import api from '../api';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css'],
})
export class CallbackComponent {
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(async (params: any) => {
      api.get('/user', {
        headers: { 'magic-token': params.didt ?? params.magic_credential },
      });
      router.navigate(['/']);
    });
  }
}
