import { Component, OnInit } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects: Project[] = [
    // {title: "title", subtitle: "subtitle", description: "description", link: "link"}, 
    {title: "password manager", subtitle: "java & javafx", description: "part of a team of three that developed a java-based password manager using AES encryption and a PBKDF2 to generate the encryption key.", link: "https://github.com/phillipbudiman/411_Password_Manager"},
    {title: "interpreter", subtitle: "ocaml", description: "an interpreter written in OCaml for a basic assembly-like language for a final class project. capabilities include variable storage, logical and mathematical operators, and method declaration/calling.", link: "https://github.com/phillipbudiman/interpreter_ocaml.git"},
    // {title: "", subtitle: "", description: "", link: ""}
  ];

}
