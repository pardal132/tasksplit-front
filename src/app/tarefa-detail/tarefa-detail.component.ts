import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TarefaService } from '../tarefa.service';
import { Tarefa } from '../tarefa';

@Component({
  selector: 'app-tarefa-detail',
  templateUrl: './tarefa-detail.component.html',
  styleUrls: ['./tarefa-detail.component.css']
})
export class TarefaDetailComponent implements OnInit {
  @Input() tarefa: Tarefa;
  
  constructor(
    private route: ActivatedRoute,
    private tarefaService: TarefaService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTarefa();
  }

  getTarefa(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.tarefaService.getTarefa(id)
        .subscribe(t =>{
          this.tarefa = t[0];
        });
  }

  goBack(): void{
    this.location.back();
  }
  

}