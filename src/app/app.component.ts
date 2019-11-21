import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titreBlock: string = 'Posts';
  date1= new Date('2017-10-24T11:00');
  unJour = 24*60*60*1000
  date2= new Date(Date.now() - this.unJour);
  date3= new Date();

  loveIts: number = 0

  posts = [
    {
      title: 'Mon premier post',
      content: 'Un premier test de contenu ce paragraphe est pris d\'Openclassroom:\
      Aux débuts du développement web, seul le HTML permet de créer des sites. Les sites web en 1990 ressemblent à des documents texte,\
      car il n’existe pas vraiment d’autres possibilités. Ensuite, en 1998, le CSS arrive pour aider à créer des mises en page plus esthétiques.\
      Finalement, à partir du début des années 2000, le JavaScript commence son règne sur le développement web,\
      permettant des interactions entre l’utilisateur et la page.',
      loveIts: this.loveIts,
      created_at: this.date1
    },
    {
      title: 'Mon deuxieme post',
      content: 'Un deuxieme test de contenu ce paragraphe est pris d\'Openclassroom:\
      Un pipe que l\'on utilise très souvent est DatePipe , qui analyse des objets JS de type Date et qui les affiche d\'une manière plus lisible que leur encodage de base.',
      loveIts: this.loveIts,
      created_at: this.date2
    },
    {
      title: 'Un autre post',
      content: 'Un autre test de contenu ce paragraphe est pris d\'Openclassroom:\
      Le pipe  async  est un cas particulier mais extrêmement utile dans les applications Web,\
      car il permet de gérer des données asynchrones, par exemple des données que l\'application doit récupérer sur un serveur.' ,
      loveIts: this.loveIts,
      created_at: this.date3
    }
  ];
}
