import { Component } from '@angular/core';
import { ScrollDetail } from '@ionic/angular';
import { User } from '../types';
import { UserService } from '../user.service';
import _ from 'lodash';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent {
  user?: User;
  isLoading = false;
  scrollTop = 0;

  constructor(private userService: UserService) {}

  async ngOnInit() {
    this.user = this.userService.getUser();
    this.user = await this.userService.fetchUser();
  }

  getBadgesByCategory(category: number) {
    const badges = [];
    for (const event of this.user?.acceptedEvents ?? []) {
      for (const badge of event.acceptedBadges) {
        if (badge.category === category.toString()) {
          badges.push(badge);
          badges.push(badge);
          badges.push(badge);
          badges.push(badge);
          badges.push(badge);
          badges.push(badge);
        }
      }
    }
    return badges;
  }

  getStyleByCategory(category: number, index?: number) {
    let common = {};
    if (_.isNumber(index)) {
      common = {
        transform: `rotate(${
          (360 / 6) * index + this.scrollTop * 0.3
        }deg) translate(120px, 0px) rotate(-${
          (360 / 6) * index + this.scrollTop * 0.3
        }deg) translate(-50%, 0%)`,
      };
    } else {
      common = {
        transform: `translate(0px, 50px) translate(-50%, -50%)`,
      };
    }
    switch (category) {
      case 1:
        return { top: `130px`, left: `5%`, ...common };
      case 2:
        return { top: `360px`, left: `95%`, ...common };
      case 3:
        return { top: `590px`, left: `5%`, ...common };
      case 4:
        return { top: `780px`, left: `95%`, ...common };
    }
    return {};
  }

  onScroll(ev: CustomEvent<ScrollDetail>) {
    this.scrollTop = ev.detail.scrollTop;
  }
}
