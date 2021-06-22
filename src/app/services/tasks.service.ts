import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }
    
  taskGroups: any[] = [
    {
      title: "A faire",
      id: "todo",
      tasks: [
        {
          id: 0,
          title: "Première tache",
          description: "Voici ma première tache"
        },
        {
          id: 1,
          title: "Acheter du pain",
          description: "Aller acheter du pain à la boulangerie"
        },
        {
          id: 2,
          title: "Faire les courses",
          description: "Prendre du lait, des céréales et des bananes"
        }
      ]
    },
    {
      title: "En cours",
      id: "inProgress",
      tasks: [
        {
          id: 0,
          title: "Réparer la voiture",
          description: "Changer le phare avant gauche"
        },
        {
          id: 1,
          title: "Etendre le linge",
          description: "Etendre le linge"
        },
        {
          id: 2,
          title: "Préparer une quiche",
          description: "Voir la recette de la quiche"
        }
      ]
    },
    {
      title: "Terminé",
      id: "done",
      tasks: [
        {
          id: 0,
          title: "Mettre la table",
          description: "Mettre 8 couverts pour les invités"
        },
        {
          id: 1,
          title: "Passer l'aspirateur",
          description: "Nettoyage du rez de chaussée"
        }
      ]
    }
  ];
  
  taskGroupsSubject = new Subject<any[]>();
  emitTaskGroups() {
    this.taskGroupsSubject.next(this.taskGroups);
  }

}
