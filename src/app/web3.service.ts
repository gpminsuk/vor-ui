import { Injectable } from '@angular/core';
import { Magic } from 'magic-sdk';
import Web3 from 'web3';
import { Event, User } from './types';
import VOREvent from '../contracts/VOREvent.sol/VOREvent.json';
import api from './api';

@Injectable({
  providedIn: 'root',
})
export class Web3Service {
  m: Magic;
  web3: Web3;

  constructor() {
    this.m = new Magic('pk_live_052B100BE33F7355', {
      network: {
        rpcUrl: 'https://rpc-mumbai.maticvigil.com',
        chainId: 80001,
      },
    });
    // @ts-ignore
    this.web3 = new Web3(this.m.rpcProvider);
  }

  async addBadge(user: User, event: Event, file: File) {
    const form = new FormData();
    form.append('file', file);
    const cid = await api.post(`/event/file`, form);
    const contract = new this.web3.eth.Contract(
      VOREvent.abi as any,
      event.address
    );
    await contract.methods
      .addBadges(['Event Name'], ['Event description'], [3], [cid])
      .send({ from: user.publicAddress });
  }

  async assignBadge(
    user: User,
    recipient: string,
    event: Event,
    tokenId: number
  ) {
    const contract = new this.web3.eth.Contract(
      VOREvent.abi as any,
      event.address
    );
    await contract.methods
      .award(recipient, tokenId)
      .send({ from: user.publicAddress });
  }

  async accept(event: Event, user: User, tokenId: number) {
    const contract = new this.web3.eth.Contract(
      VOREvent.abi as any,
      event.address
    );
    await contract.methods.accept(tokenId).send({ from: user.publicAddress });
  }

  async reject(event: Event, user: User, tokenId: number) {
    const contract = new this.web3.eth.Contract(
      VOREvent.abi as any,
      event.address
    );
    await contract.methods.reject(tokenId).send({ from: user.publicAddress });
  }
}
