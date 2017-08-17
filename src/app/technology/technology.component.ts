import { Component, OnInit } from '@angular/core';
import { Technology } from './technology';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  technologies: Technology[] = [
    new Technology(1,"git","A command line that allows you to push codes to store in GitHub and pull codes to your local machine","pretty neat way to communicate between GitHub and your local machine","Intermediate"),
    new Technology(2,"gitHub","A Tool that lets you backup your work (Code) via the cloud through command line to Github.com","when you make changes to your code, then you can easily commit the changes and push new codes to GitHub","Intermediate"),
    new Technology(3,"HTML","Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.","I like to create a site of my own that is useful to users","Intermediate"),
    new Technology(4,"CSS","Cascading Style Sheet is used by web pages to help keep information in the proper display format like font, size, color, spacing, border and location of HTML information on a web page","CSS helps me to style my page and makes it look modern and nice","Intermediate"),
    new Technology(5,"JavaScript","An object-oriented computer programming language is used to create interactive effects within web browsers.","no comment","Beginner"),
    new Technology(6,"jQuery","An open source software and its syntax is designed to make it easier to navigate a document, select DOM elements, create animations, handle events","no comment","Beginner"),
    new Technology(7,"TypeScript","An open-source programming language. It is a strict superset of JavaScript","I like Typescript because it is easier to work with and can build a JS file to run HTML","Beginner"),
    new Technology(8,"Bootstrap","An open-source Javascript framework","A nice way to style your webpage using classes without styling it yourself using CSS, though the option is there for you to choose to work with","Beginner"),
    new Technology(9,"AngularJS 3.3.7, 4","A  JavaScript-based open-source front-end web application framework developing SPA single-page applications.","no comment","Beginner"),
  ];

  constructor() { }

  ngOnInit() {
  }

}
