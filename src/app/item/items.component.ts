import { Component, OnInit } from '@angular/core'

import { Item } from './item'
import { ItemService } from './item.service'
import {bcrypt} from 'nativescript-bcryptjs';
var CryptoJS = require("crypto-js");

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Array<Item>
  seed = "UjXn2rm5u8x/A?D(G+KmaPdSgVkYp3sm6v9";
  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems()
    let key = this.seed.split( "m").join("")
    var bytes  = CryptoJS.AES.decrypt("ishgjshgjfdghjkshlkghjdkgjdkgjfdgb", key);
  }

  hashPassword( password: string): string {
    let salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }
}
