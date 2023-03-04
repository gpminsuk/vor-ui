import { Component } from '@angular/core';
import _ from 'lodash';
import api from '../api';
import { AssignBadgeComponent } from '../assign-badge/assign-badge.component';
import { EventService } from '../event.service';
import { User } from '../types';
import { UserService } from '../user.service';
import { Web3Service } from '../web3.service';

@Component({
  selector: 'app-badge-list',
  templateUrl: './badge-list.component.html',
  styleUrls: ['./badge-list.component.css'],
})
export class BadgeListComponent {
  isLoading = false;
  event = this.eventService.getEvent();
  assignBadgeComponent = AssignBadgeComponent;

  constructor(
    private userService: UserService,
    private eventService: EventService,
    private web3Service: Web3Service
  ) {}

  async addBadge() {
    this.isLoading = true;
    try {
      await this.web3Service.addBadge(this.userService.getUser(), this.event);
      this.event = await this.eventService.fetchEvent(this.event.id);
    } finally {
      this.isLoading = false;
    }
  }

  async saveAssignment() {
    this.isLoading = true;
    try {
      const updates = [];
      for (let group in this.event.badges) {
        let badges = this.event.badges[group];
        for (let badge of badges) {
          if (
            badge.changedRecipient &&
            badge.recipient !== badge.changedRecipient
          ) {
            updates.push({
              recipient: badge.changedRecipient,
              tokenId: badge.tokenId,
            });
          }
        }
      }
      const txUpdates = [];
      for (let update of updates) {
        const awardedUser = await api.post(
          `/event/${this.event.id}/${update.tokenId}/award/`,
          {
            recipientEmail: update.recipient,
          }
        );
        if (awardedUser) {
          txUpdates.push({
            address: awardedUser.publicAddress,
            tokenId: update.tokenId,
          });
        }
      }
      for (let update of txUpdates) {
        await this.web3Service.assignBadge(
          this.userService.getUser(),
          update.address,
          this.event,
          update.tokenId
        );
      }
      return;
    } finally {
      this.isLoading = false;
    }
  }
}
