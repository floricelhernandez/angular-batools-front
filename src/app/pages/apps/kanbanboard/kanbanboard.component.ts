import { Component, OnInit } from '@angular/core';

import { DndDropEvent } from 'ngx-drag-drop';

import { tasks } from './data';

import { Lista } from './lista.model';
import { Task } from './task.model';

import { ActivatedRoute } from '@angular/router';
import { KanbanService } from './kanban.service';
import {Companies} from '../proyectos/companies.model';


@Component({
  selector: 'app-kanbanboard',
  templateUrl: './kanbanboard.component.html',
  styleUrls: ['./kanbanboard.component.scss']
})

/**
 * Kanbanboard component - handling the kanbanboard with navbar and content
 */
export class KanbanboardComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Task data
  pendingTasks: Task[];
  inprogressTasks: Task[];
  completedTasks: Task[];
  listasKanban: Lista[];
  sprintId: number;

  constructor(private route: ActivatedRoute, private  service: KanbanService) { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Minton', path: '/' }, { label: 'Apps', path: '/' }, { label: 'Kanban Board', path: '/', active: true }];

    /**
     * Fetches Data
     */
    this.sprintId  = this.route.snapshot.queryParams.id;
    this._fetchData(this.sprintId);
  }

  /**
   * On task drop event
   */
  onDrop(event: DndDropEvent, filteredList?: any[], targetStatus?: string) {
    if (filteredList && event.dropEffect === 'move') {
      let index = event.index;

      if (typeof index === 'undefined') {
        index = filteredList.length;
      }

      filteredList.splice(index, 0, event.data);
    }
  }

  /**
   * on dragging task
   * @param item item dragged
   * @param list list from item dragged
   */
  onDragged(item: any, list: any[]) {
    const index = list.indexOf(item);
    list.splice(index, 1);
  }

  /**
   * Fetches the value of kanbanboard data
   */
  private _fetchData(id) {
    // all tasks
    this.pendingTasks = tasks.filter(t => t.status === 'pending');
    this.inprogressTasks = tasks.filter(t => t.status === 'inprogress');
    this.completedTasks = tasks.filter(t => t.status === 'completed');
    this.service.getListasKanban(id)
        .subscribe((data: any) => {
          this.listasKanban = data;
          console.log(this.listasKanban);
        });
  }
}
