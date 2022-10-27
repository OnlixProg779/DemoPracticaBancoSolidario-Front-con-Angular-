import { Injectable, HostListener, Inject } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { WINDOW } from "./windows.service";
// Menu
export interface Menu {
	path?: string;
	title?: string;
	icon?: string;
	type?: string;
	badgeType?: string;
	badgeValue?: string;
	active?: boolean;
	bookmark?: boolean;
	children?: Menu[];
}

@Injectable({
	providedIn: 'root'
})

export class NavService {

	public screenWidth: any
	public collapseSidebar: boolean = false

	constructor(@Inject(WINDOW) private window) {
		this.onResize();
		if (this.screenWidth < 991) {
			this.collapseSidebar = true
		}
	}

	// Windows width
	@HostListener("window:resize", ['$event'])
	onResize(event?) {
		this.screenWidth = window.innerWidth;
	}

	MENUITEMS: Menu[] = [
		{ // Dashboard admin: Aprobar o desaprobar Detail Expense - Boton para crear nueva compra
			path: '/dashboard/default', title: 'Dashboard', icon: 'home', type: 'link', badgeType: 'primary', active: false
		},

		{
			title: 'Clients', icon: 'users', type: 'sub', active: false, children: [
				{ path: '/clients/list-client', title: 'Client List', type: 'link' },
			]
		},
		{
			title: 'Bank', icon: 'dollar-sign', type: 'sub', active: false, children: [
				{ path: '/bank/list-bills', title: 'Bills', type: 'link' },
				{
					title: 'Settings', type: 'sub', children: [
						{ path: '/bank/settings/type-bill', title: 'Type of Bills', type: 'link' },

					]
				},
			]
		},
		
	]
	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);


}