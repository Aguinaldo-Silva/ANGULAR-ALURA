import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

pensamento = {
  id: "1",
  conteudo: "A vida é bela",
  autoria: "dev",
  modelo:""
}


  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento(){
    alert("Pensamento criado com sucesso")
  }

  cancelarPensamento(){
    alert("Pensamento cancelado com sucesso")
  }

}
